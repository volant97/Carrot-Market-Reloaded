import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-900">
      <body
        className={`${inter.className} max-w-screen-sm mx-aut text-white h-screen`}
      >
        {/* <body
        className={`${inter.className} max-w-screen-sm mx-auto bg-neutral-900 text-white h-screen`}
      > */}
        {children}
      </body>
    </html>
  );
}
