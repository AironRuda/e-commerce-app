import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ModalProvider from "./components/modals/provider";
import ReactQueryProvider from "./context/ReactQueryProvider";
import { FavProductsProvider } from "./context/FavProductsProvider";
import { CartProductsProvider } from "./context/CartProductsProvider";
export const metadata: Metadata = {
  title: "E-commerce App",
  description: "E-commerce App built with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi antialiased">
        <ReactQueryProvider>
          <CartProductsProvider>
            <FavProductsProvider>
              <ModalProvider>
                <Navbar />
                <main className="flex flex-col items-center justify-center pb-20 pt-0 md:pt-24 md:pb-0">
                  {children}
                </main>
              </ModalProvider>
            </FavProductsProvider>
          </CartProductsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
