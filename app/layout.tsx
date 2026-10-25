import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <head>
      </head>
      <body
          className={inter.className}
      >
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
                height="0" width="0"
                style={{ display: "none", visibility: "hidden"}}></iframe>
      </noscript>
      <ToastContainer />
      {children}
      </body>
      </html>
  );
}