import type { Metadata } from "next";
import "./globals.css";
import { Wallpoet } from 'next/font/google'
const font = Wallpoet({ subsets: ['latin'], weight: '400' })
import Header from "@/components/Header";
import { MystenProvider } from "@/context/MystenProvider";
export const metadata: Metadata = {
  title: "Sui Zap",
  description: "Zap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <MystenProvider>
        <Header />
        {children}
        </MystenProvider>
      </body>
    </html>
  );
}
