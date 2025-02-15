import "./global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`${poppins.variable} container mx-auto p-10`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
