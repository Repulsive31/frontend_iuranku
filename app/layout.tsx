import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutIuranKu from "@/components/AboutIuranKu";
import HowIuranKu from "@/components/HowIuranKu";
import FaQIuranKU from "@/components/FaQIuranKU";
import RegisterPage from "./RegisterPage";
import Main from "./Main";


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
            {/* {children} */}
            <div className="bg-slate-300">
              <Main/>
              <RegisterPage/>
              <AboutIuranKu/>
              <HowIuranKu/>
              <FaQIuranKU/> 
            </div>
          </main>
        <Footer/>
      </body>
    </html>
  );
}