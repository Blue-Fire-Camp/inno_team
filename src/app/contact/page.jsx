/**
 * Contact page (Project inquiries)
 * - Renders an interactive inquiry form (client component)
 * - The form posts to `/api/inquiry` where server-side validation & email sending occurs
 */
import InquiryForm from '../../components/forms/InquiryForm';

export const metadata = {
  title: "Contact",
  description: "Get in touch with Supervalue LLC for IT consulting, talent sourcing, or software delivery inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-24">
      <h1 className="text-4xl font-bold text-center">Get In Touch</h1>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Tell us about your consulting, staffing, or project needs. We typically respond within one business day.
      </p>
      <div className="mt-8 max-w-3xl mx-auto">
        <InquiryForm />
      </div>
    </div>
  );
}
