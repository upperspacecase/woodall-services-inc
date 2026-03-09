import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
  description: `${siteConfig.businessName} — ${siteConfig.tagline}. Call ${siteConfig.phone} for a free quote. Licensed, insured, and locally owned.`,
  keywords: [
    "electrician",
    "electrical contractor",
    "licensed electrician",
    ...siteConfig.serviceArea.suburbs.map(
      (s) => `electrician ${s.toLowerCase()}`
    ),
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
