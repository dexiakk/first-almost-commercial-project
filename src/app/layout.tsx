import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Upscale images",
  description: "Upscale your images with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1300px]">
          <Navbar />
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
