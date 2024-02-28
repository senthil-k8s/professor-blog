import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@professor-blog/components/Header";
import "./globals.css";
import Footer from "@professor-blog/components/Footer";
import Newsletter from "@professor-blog/components/Newsletter";

const font = Poppins({
  weight: "500",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professor Dr S Jayarama Reddy M.Sc., Ph.D.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
