import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Far Wings Tech Solutions | Web Development, AI Automation & SEO",
  description: "Far Wings Tech Solutions builds modern websites, AI automation systems, SEO solutions, branding and scalable software for modern businesses.",
  openGraph: {
    title: "Far Wings Tech Solutions",
    description: "Modern websites, AI automation systems, and scalable software for growing businesses.",
    url: "https://farwingstechsolutions.vercel.app/",
    siteName: "Far Wings Tech Solutions",
    images: [
      {
        url: "/farwinglogo_transparent.png",
        width: 1200,
        height: 630,
        alt: "Far Wings Tech Solutions Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Far Wings Tech Solutions",
    description: "Modern websites, AI automation systems, and scalable software for growing businesses.",
    images: ["/farwinglogo_transparent.png"],
  },
  other: {
    "msvalidate.01": "B0655CDB5336853B164156AACE636A38",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Far Wings Tech Solutions",
    "image": "https://farwingstechsolutions.vercel.app/farwinglogo_transparent.png",
    "url": "https://farwingstechsolutions.vercel.app/",
    "description": "Far Wings Tech Solutions builds modern websites, AI automation systems, SEO solutions, branding and scalable software for modern businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
