// RootLayout.tsx
import type { Metadata } from "next";
import "./globals.css";
import BigScreenNavbar from "@/components/Navbar/BigScreenNavbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import SmallScreenNavbar from "@/components/Navbar/SmallScreenNavbar";

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
      <body className={`relative antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
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
