import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Android StackOverflow",
    default: "Android StackOverflow Questions",
  },
  description:
    "Web app to view latest and most voted Android questions on StackOverflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-200`}>
        {children}
      </body>
    </html>
  );
}
