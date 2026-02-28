import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Regular.otf",
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "QuickHire - Job Board",
  description: "A platform for job seekers and employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
