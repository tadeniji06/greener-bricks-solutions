import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greener Bricks Solution | Sustainable Construction Materials",
  description: "Greener Bricks Solution transforms plastic pollution into eco-friendly construction materials that support sustainable cities and a cleaner planet with zero emissions.",
  keywords: ["plastic waste recycling Nigeria", "net zero and zero emission", "waste management Africa", "eco-friendly bricks", "plastic bricks for construction"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${openSans.variable} ${montserrat.variable} font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
