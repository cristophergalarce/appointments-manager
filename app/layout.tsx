import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recibe agendamientos - Proyecto @cri.string",
  description: "Crea eventos para que la gente que invites reserve en tu agenda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen max-w-screen-xl mx-auto`}>{children}</body>
    </html>
  );
}
