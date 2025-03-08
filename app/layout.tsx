import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ScrollToTop from "@/app/components/scroll-to-top";
import "./globals.scss";
import "./card.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sujit Jayaraj",
  description: "Developer Portfolio of Sujit Jayaraj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ToastContainer />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
