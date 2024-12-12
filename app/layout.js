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
            <body className={inter.className}>
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