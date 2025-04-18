import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import CartContextProvider from "@/components/cart-context/cart-context-provider";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product List with Cart",
  description: "FrontendMentor challenge for product list with cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.variable} mx-auto w-screen max-w-6xl antialiased`}
      >
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
