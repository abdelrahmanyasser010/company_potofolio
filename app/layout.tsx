import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ibm",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="ar" dir="rtl" className={`${ibmPlex.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-codely-ink text-white font-sans antialiased">
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
