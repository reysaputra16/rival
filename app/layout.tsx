import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, TikTok_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Provider";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
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
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <div className="w-full flex flex-col items-center bg-gray-900 min-h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
