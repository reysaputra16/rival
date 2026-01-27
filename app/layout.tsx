import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rival",
  description: "Next Gen Platform for Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <div className="w-full h-full min-h-screen flex flex-col items-center dark:bg-black bg-zinc-200">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
