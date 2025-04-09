import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import MainHeader from "@/components/mainHeader/main-header";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
