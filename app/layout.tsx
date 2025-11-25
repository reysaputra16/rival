import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, TikTok_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Provider";

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
          <div className="bg-gray-900 min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
