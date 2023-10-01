import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amos Dev",
  description: "Welcome to my creative world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col pb-3  `}>
        <div className="">
          <Navbar />
        </div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
