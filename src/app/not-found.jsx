import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 - Not Found | ByteWave",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-primary dark:text-white">
        404
      </h1>
      <div className="bg-accent px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Lost in space?</h2>
        <p className="mt-4 text-muted-foreground max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
