import type { Metadata } from "next";
import "./globals.css";
import geistSans from "@/fonts/geistSans";
import geistMono from "@/fonts/geistMono";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Rajath M R",
  description: "Pationate About Technology",
  icons : [ {  url: "/images/self_icon.svg",  type: 'image/webp'} ]  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        { children }

      </body>
    </html>
    </>
  );
}
