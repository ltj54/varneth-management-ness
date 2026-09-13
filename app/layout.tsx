import type { Metadata } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/work-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltj54.github.io/varneth-management-ness"),
  title: "Varneth Management Ness | Music, People, Opportunities",
  description: "Henning Stockmann Ness — KI-komponist og produsent av KI-musikk. Utforsk Broken Veil, Black Veil Hearts og rådgivning innen KI-musikkproduksjon.",
  icons: { icon: `${process.env.NODE_ENV === "production" ? "/varneth-management-ness" : ""}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
