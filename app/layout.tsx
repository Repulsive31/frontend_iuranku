import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IuranKu",
  description: "Housing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-950 bg-opacity-85 px-16">
        <NavBar/>
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer/>
        </body>
    </html>
  );
}
