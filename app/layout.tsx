import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotePopup from "@/components/QuotePopup";
import Preloader from "@/components/Preloader";
import Hydration from "@/components/Hydration";

export const metadata: Metadata = {
  title: "Aussie Tech Security | CCTV Installation Adelaide",
  description:
    "Professional CCTV Installation Services in Adelaide - Home & Business Security Camera Experts",
  icons: {
    icon: "/images/footerlogo.png",
    shortcut: "/images/footerlogo.png",
    apple: "/images/footerlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Minimal inline style - only what's necessary */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body { 
                font-family: "Goldman", system-ui !important;
                margin: 0;
                padding: 0;
                background: white;
              }
              /* Hide content until Preloader is done */
              .hide-until-loaded {
                opacity: 0;
              }
            `,
          }}
        />
      </head>
      <body className="font-goldman min-h-full flex flex-col bg-white text-black">
        <Hydration>
          <Preloader />
          <QuotePopup />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Hydration>
      </body>
    </html>
  );
}
