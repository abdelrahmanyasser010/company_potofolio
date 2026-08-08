import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Codely — Software Studio", template: "%s | Codely" },
  description: "Codely builds web platforms, mobile apps, dashboards, APIs, POS, ERP and custom business software across Egypt, Saudi Arabia, Oman and Jordan.",
  keywords: ["Codely", "software studio", "web development", "Flutter", "Laravel", "dashboards", "POS", "ERP", "business software"],
  openGraph: {
    title: "Codely — We Build. You Grow.",
    description: "Software teams for products, operations and business systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geist.variable} min-h-screen bg-codely-ink text-white`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
