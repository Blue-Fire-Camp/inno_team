import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | ByteWave",
  description:
    "The page you are looking for has been lost in the digital tide.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Visual Element */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-primary opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-background ring-1 ring-border">
              <HelpCircle className="h-12 w-12 text-accent animate-pulse" />
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-8xl font-black tracking-tighter sm:text-9xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-white dark:to-accent/80">
              404
            </span>
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Lost in the Digital Tide
          </h2>
          <p className="mx-auto max-w-md text-lg leading-8 text-muted-foreground">
            The page you're searching for has drifted away or never existed in
            this wavelength. Let's get you back to familiar waters.
          </p>
        </div>

        {/* Navigation Actions */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-muted dark:text-white sm:w-auto"
          >
            Report an Issue
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </div>

        {/* Support Links */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary dark:text-white">
              Services
            </p>
            <Link
              href="/services"
              className="mt-2 block text-xs text-muted-foreground hover:text-accent"
            >
              Web Development
            </Link>
            <Link
              href="/services"
              className="mt-1 block text-xs text-muted-foreground hover:text-accent"
            >
              Mobile Apps
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-primary dark:text-white">
              Portfolio
            </p>
            <Link
              href="/projects"
              className="mt-2 block text-xs text-muted-foreground hover:text-accent"
            >
              Case Studies
            </Link>
            <Link
              href="/projects"
              className="mt-1 block text-xs text-muted-foreground hover:text-accent"
            >
              Our Work
            </Link>
          </div>
          <div className="hidden text-center sm:block">
            <p className="text-sm font-semibold text-primary dark:text-white">
              Company
            </p>
            <Link
              href="/about"
              className="mt-2 block text-xs text-muted-foreground hover:text-accent"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="mt-1 block text-xs text-muted-foreground hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
