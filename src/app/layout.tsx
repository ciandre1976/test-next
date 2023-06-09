import Header from "@/comps/Header";
import Providers from "./Providers";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/comps/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test app",
  description: "Test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
