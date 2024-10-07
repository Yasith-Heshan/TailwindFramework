import type { Metadata } from "next";
import "./globals.css";
import NavBarProvider from "./components/complexComponents/NavBar/NavBarProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBarProvider />
        {children}
      </body>
    </html>
  );
}
