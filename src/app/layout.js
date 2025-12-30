import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <NavBar />
        {children}
        <Footer/>
        </body>
        </html>
    );
}
