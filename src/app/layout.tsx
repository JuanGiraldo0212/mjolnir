import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/footer";
import { SessionProvider } from "next-auth/react";
import Providers from "./_components/providers";

export const metadata: Metadata = {
  title: "Mjolnir",
  description: "Weight Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <header className="border-b border-black-900 shadow-md p-2 text-center">
            <p className="text-gray-300 text-sm tracking-wide">Mjölnir</p>
          </header>
          <main className="pb-20">{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
