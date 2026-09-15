import type { Metadata } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/work-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltj54.github.io/varneth-management-ness"),
  title: "Varneth Management Ness | Music, People, Opportunities",
  description: "Varneth Management Ness — KI-musikkproduksjon, utgivelser, rådgivning og prosjektene Broken Veil og Black Veil Hearts.",
  icons: { icon: `${process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? ""}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
