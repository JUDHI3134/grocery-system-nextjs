import type { Metadata } from "next";
// @ts-ignore: allow side-effect import of global CSS without type declarations
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Provider from "@/Provider";



export const metadata: Metadata = {
  title: "Snapcart | 10 min Delivery",
  description: "Snapcart grocery delivery app using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full min-h-screen bg-linear-to-b from-green-100 to-white"
      >
        <Provider>
        {children}
        </Provider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
