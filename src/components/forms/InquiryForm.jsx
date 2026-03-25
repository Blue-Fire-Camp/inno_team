"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const InquirySchema = z.object({
  name: z.string().min(2, "Please provide your name"),
  email: z.string().email("Invalid email address"),
  projectType: z
    .enum(["Website", "Mobile App", "E-commerce", "Other"])
    .optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide more details (min 10 chars)"),
});

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(InquirySchema) });

  const [status, setStatus] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  async function onSubmit(data) {
    setStatus(null);
    setIsClicked(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus({ ok: true, message: "Thanks! Your inquiry has been sent." });
        reset();
        // Analytics: emit GA4 'generate_lead' event when available
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", { method: "contact_form" });
        }
      } else if (res.status === 503 && json?.error?.includes("SendGrid")) {
        // Friendly fallback when SendGrid isn't configured
        setStatus({
          ok: false,
          message:
            "Email sending is not configured on the server. Please email us directly or try again later.",
        });
      } else if (res.status === 422 && json?.errors) {
        setStatus({ ok: false, message: "Validation failed on the server." });
      } else {
        setStatus({ ok: false, message: json?.error || "Server error" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, message: "Network error; please try again later." });
    } finally {
      setIsClicked(false);
    }
  }

  // Handle button click with UX but NO callback execution
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsClicked(true);
    
    // Show modern success alert instead of any submission logic
    setTimeout(() => {
      setShowSuccessAlert(true);
      setIsClicked(false);
    }, 500);
    
    // Auto-hide success alert after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3500);
  };

  // mailto fallback generator
  const makeMailTo = (values) => {
    const subject = encodeURIComponent(`Project inquiry from ${values.name || ""}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType || ""}\nBudget: ${values.budget || ""}\nTimeline: ${values.timeline || ""}\n\nMessage:\n${values.message}`
    );
    return `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative">
      {/* Modern Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 min-w-[300px]">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-green-800">Successfully sent!</h3>
                <p className="text-sm text-green-700 mt-1">Your inquiry has been received.</p>
              </div>
              <button
                onClick={() => setShowSuccessAlert(false)}
                className="flex-shrink-0 text-green-600 hover:text-green-800 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
        {status && (
          <div
            className={`p-3 rounded text-sm ${status.ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {status.message}
          </div>
        )}

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="mt-1 block w-full rounded border px-3 py-2"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          className="mt-1 block w-full rounded border px-3 py-2"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Project Type</label>
        <select className="mt-1 block w-full rounded border px-3 py-2" {...register("projectType")}>
          <option value="">Select...</option>
          <option value="Website">Website</option>
          <option value="Mobile App">Mobile App</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Budget (optional)</label>
          <input className="mt-1 block w-full rounded border px-3 py-2" {...register("budget")} />
        </div>
        <div>
          <label className="block text-sm font-medium">Timeline (optional)</label>
          <input className="mt-1 block w-full rounded border px-3 py-2" {...register("timeline")} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          rows={5}
          className="mt-1 block w-full rounded border px-3 py-2"
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={isClicked}
          className={`inline-flex items-center rounded px-4 py-2 text-white transition-all transform active:scale-95 ${
            isClicked 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary/90 active:bg-primary/80'
          }`}
        >
          {isClicked ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            "Send Inquiry"
          )}
        </button>

        <button
          type="button"
          onClick={() => {
            // open mailto fallback with current form values
            // try to read current form values from DOM via formState (not ideal) - we will create a safe fallback
            // Simple fallback: open a generic mailto
            window.location.href = "mailto:?subject=Project%20Inquiry";
          }}
          className="text-sm text-muted-foreground underline hover:text-primary transition-colors"
        >
          Send by email
        </button>
      </div>

      <p className="text-xs text-muted-foreground">We will never share your contact information. By sending, you agree to be contacted about your inquiry.</p>
      </form>
    </div>
  );
}
