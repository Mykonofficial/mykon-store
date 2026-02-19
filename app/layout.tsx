import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/components/cart-context";

export const metadata: Metadata = {
  title: "MYKON — GROWN. NOT MADE.",
  description: "Futuristic biotech streetwear engineered for evolution."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
