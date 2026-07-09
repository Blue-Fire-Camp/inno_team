import { Inter } from "next/font/google";

import "./globals.css";

import Script from "next/script";

import { ThemeProvider } from "../components/theme-provider";

import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import CookieConsent from "../components/CookieConsent";

import AnalyticsScript from "../components/AnalyticsScript";

import { GA_MEASUREMENT_ID } from "../../libs/config";



const inter = Inter({ subsets: ["latin"] });



const baseUrl = "https://supervalues.org";



export const metadata = {

  metadataBase: new URL(baseUrl),

  title: {

    default: "SuperValue LLC | IT Consulting & Talent Sourcing",

    template: "%s | SuperValue LLC"

  },

  description: "Supervalue LLC helps businesses with IT consulting, vetted talent sourcing, and software delivery. US-based, remote-ready, engineering-led.",

  keywords: [

    "Supervalue LLC",

    "IT consulting",

    "IT staffing",

    "talent sourcing",

    "software development",

    "dedicated teams",

    "staff augmentation",

    "California",

    "web development",

    "product engineering",

  ],

  authors: [{ name: "SuperValue LLC" }],

  creator: "SuperValue LLC",

  publisher: "SuperValue LLC",

  alternates: {

    canonical: "/",

  },

  openGraph: {

    type: "website",

    locale: "en_US",

    url: baseUrl,

    siteName: "SuperValue LLC",

    title: "SuperValue LLC | IT Consulting & Talent Sourcing",

    description: "Strategic IT consulting and talent sourcing for teams that need results—not hype.",

    images: [

      {

        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "SuperValue LLC — IT Consulting & Talent Sourcing",

      },

    ],

  },

  twitter: {

    card: "summary_large_image",

    title: "SuperValue LLC | IT Consulting & Talent Sourcing",

    description: "IT consulting, talent sourcing, and software delivery from a US-based engineering team.",

    images: ["/og-image.jpg"],

    creator: "@SuperValueLLC",

    site: "@SuperValueLLC",

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

            <CookieConsent />

          </div>

        </ThemeProvider>

        <AnalyticsScript />

      </body>

    </html>

  );

}
