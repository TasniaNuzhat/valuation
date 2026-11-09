import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Valuation & Term Sheet Bootcamp", description: "Understand startup valuation, equity dilution and term sheet provisions." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
