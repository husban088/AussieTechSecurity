import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotePopup from "@/components/QuotePopup";

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
    <html lang="en">
      <head>
        {/* ✅ GOLDMAN FONT (REPLACED SEKUYA) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-goldman min-h-full flex flex-col bg-white text-black">
        <QuotePopup />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
