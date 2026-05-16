import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyElite | Premium Private Jets",
  description:
    "A premium private jet landing page hero for accessible luxury aviation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
