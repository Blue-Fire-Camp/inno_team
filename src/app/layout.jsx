import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { GA_MEASUREMENT_ID } from "../../libs/config";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://bytewave.samkiel.dev"; // Replace with actual production domain

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ByteWave | Student-Led Software Engineering",
    template: "%s | ByteWave"
  },
  description: "ByteWave is a student-led collective focused on building solid, usable digital products through engineering judgment and collaborative problem-solving.",
  keywords: [
    "ByteWave",
    "software development",
    "student-led startup",
    "web development",
    "product engineering",
    "digital solutions",
    "mobile application development",
    "engineering mindset"
  ],
  authors: [{ name: "ByteWave Team" }],
  creator: "ByteWave Team",
  publisher: "ByteWave", "samkiel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "ByteWave",
    title: "ByteWave | Student-Led Software Engineering",
    description: "Turning rough ideas into usable digital products through craftsmanship and collaboration.",
    images: [
      {
        url: "/og-image.jpg", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "ByteWave - Engineering Judgment in an Automated World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteWave | Student-Led Software Engineering",
    description: "Building usable digital products through engineering judgment and collaboration.",
    images: ["/og-image.jpg"], // Replace with actual Twitter image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}</Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
