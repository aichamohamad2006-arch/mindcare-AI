import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindCare AI",
  description: "AI-powered mental health support platform developed for Jamot Hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}