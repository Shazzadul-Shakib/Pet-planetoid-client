import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BigScreenNavbar from "@/components/logo/Navbar/BigScreenNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pet Planetoid",
  description: "A community hub where pet owners can connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1200px] mx-auto`}
      >
        <BigScreenNavbar/>
        {children}
      </body>
    </html>
  );
}
