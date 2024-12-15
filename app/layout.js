import Script from "next/script";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "@/app/components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
    title: "Portfolio of Sujit Jayaraj - Software Developer",
    description: "Portfolio of Sujit Jayaraj. I am a professional and enthusiastic programmer with core skills in Java, JavaScript and Python. I love learning new technologies to build applications that improve the lives of people. I am a team player and I am always eager to learn from my peers and share my knowledge with them. Open to new opportunities and challenges that suits my skills and interests."
};

export default function RootLayout({ children }) {
    return (
        <html lang={"en"}>
            <head>
                <Script id={"google-tag-manager-head"}
                        strategy={"afterInteractive"}
                        dangerouslySetInnerHTML={{
                            __html: `<!-- Google Tag Manager -->
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','${process.env.GTM_TOKEN}');
                                <!-- End Google Tag Manager -->`
                        }}
                />
            </head>
            <body className={inter.className}>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=<%= process.env.GTM_TOKEN>"
                                  height="0" width="0" style={{ display: 'none', visibility: 'hidden'}}></iframe>
                </noscript>
                <ToastContainer />
                <main className={"min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white"}>
                    <Navbar />
                    {children}
                    <ScrollToTop />
                </main>
                <Footer />
            </body>
        </html>
    );
}