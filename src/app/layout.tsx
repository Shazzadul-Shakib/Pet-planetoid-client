// RootLayout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BigScreenNavbar from "@/components/Navbar/BigScreenNavbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import SmallScreenNavbar from "@/components/Navbar/SmallScreenNavbar";

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
        className={`${geistSans.variable} ${geistMono.variable} relative h-[100dvh] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BigScreenNavbar />
          <div className="mx-auto mt-16 max-w-[1200px]">{children}</div>
          <div className="fixed bottom-0 left-0 block w-full bg-background md:hidden">
            <SmallScreenNavbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
