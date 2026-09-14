import type { Metadata } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/work-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltj54.github.io/varneth-management-ness"),
  title: "Varneth Management Ness | Music, People, Opportunities",
  description: "Varneth Management Ness — KI-musikkproduksjon, utgivelser, rådgivning og prosjektene Brøken Veil og Black Veil Hart.",
  icons: { icon: `${process.env.NODE_ENV === "production" ? "/varneth-management-ness" : ""}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
