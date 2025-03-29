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
        <head>
            {/* -- Google Tag Manager -- */}
            <script>
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GTM_ID}');`}
            </script>
            {/*} End Google Tag Manager */}
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
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
