"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ContactForm } from "./contact-form";

const copy = {
  nb: {
    nav: ["Musikken", "Om Henning", "Kontakt"], label: "KI-komposisjon · Musikkproduksjon · Rådgivning",
    title: "Musikk med", italic: "egen signatur.",
    intro: "Varneth Management Ness er foretaket bak KI-musikkproduksjon, utgivelser og rådgivning. Henning Stockmann Ness står bak virksomheten og utvikler egne musikkprosjekter.",
    listen: "Utforsk musikken", contact: "Ta kontakt",
    projects: "Varneth Management Ness", projectTitle: "Prosjekter og utgivelser.", projectIntro: "Foretakets egne musikkprosjekter. Utforsk lyden på Spotify.",
    covers: "Coverbilder", coversTitle: "Utvalgte coverbilder.", coversIntro: "Tre coverbilder hører til Broken Veil. «Home to You» hører til Black Veil Hearts.", coverOpen: "Åpne omslaget i full størrelse",
    ai: "Eget KI-musikkprosjekt", search: "Søk på Spotify",
    human: "Bak uttrykket", humanTitle: "Henning", humanLast: "Stockmann Ness.",
    bio: "Henning er KI-komponist og driver med produksjon og utgivelse av KI-musikk. Gjennom Varneth Management Ness utvikler han egne prosjekter og tilbyr rådgivning innen KI-musikkproduksjon.", training: "Pågående grunnkurs i AI engineering.",
    approach: "Kreativitet møter teknologi", approachText: "Egne musikkprosjekter. Nye verktøy. Et personlig uttrykk.",
    craft: "Arbeidet", craftTitle: "Fra idé til uttrykk.",
    services: [["KI-musikkproduksjon", "Produksjon og utgivelse av KI-musikk gjennom egne prosjekter."], ["KI-komposisjon", "Musikalske ideer og komposisjoner utviklet med KI som kreativt verktøy."], ["Rådgivning", "Ta kontakt om rådgivning innen KI-musikkproduksjon og arbeidet med egne prosjekter."]],
    inspiration: "På Hennings spilleliste", inspirationNote: "Musikalsk inspirasjon · uavhengige artister", inspirationLink: "Spotify-søk",
    end: "Har du et", endItalic: "prosjekt?", endText: "Vil du snakke om KI-musikk, produksjon eller rådgivning? Ta kontakt med Henning.", email: "Skriv til Henning", footer: "KI-komposisjon · Musikkproduksjon · Rådgivning",
  },
  en: {
    nav: ["The music", "About Henning", "Contact"], label: "AI composition · Music production · Consulting",
    title: "Music with", italic: "its own signature.",
    intro: "Varneth Management Ness is the company behind AI music production, releases and consulting. Henning Stockmann Ness leads the company and develops its original music projects.",
    listen: "Explore the music", contact: "Get in touch",
    projects: "Varneth Management Ness", projectTitle: "Projects and releases.", projectIntro: "The company’s original music projects. Explore the sound on Spotify.",
    covers: "Cover artwork", coversTitle: "Selected artwork.", coversIntro: "Three covers belong to Broken Veil. «Home to You» belongs to Black Veil Hearts.", coverOpen: "Open full-size artwork",
    ai: "Original AI music project", search: "Search on Spotify",
    human: "Behind the sound", humanTitle: "Henning", humanLast: "Stockmann Ness.",
    bio: "Henning is an AI composer working in AI music production and releases. Through Varneth Management Ness, he develops his own projects and offers consulting in AI music production.", training: "Currently taking a foundation course in AI engineering.",
    approach: "Creativity meets technology", approachText: "Original music projects. New tools. A personal expression.",
    craft: "The craft", craftTitle: "From idea to expression.",
    services: [["AI music production", "Producing and releasing AI music through original projects."], ["AI composition", "Musical ideas and compositions developed with AI as a creative tool."], ["Consulting", "Get in touch about AI music production consulting and developing your own projects."]],
    inspiration: "On Henning’s playlist", inspirationNote: "Musical inspiration · independent artists", inspirationLink: "Spotify search",
    end: "Have a", endItalic: "project?", endText: "Want to talk about AI music, production or consulting? Get in touch with Henning.", email: "Write to Henning", footer: "AI composition · Music production · Consulting",
  },
};
const search = (name: string) => `https://open.spotify.com/search/${encodeURIComponent(name)}`;
const covers = [
  { file: "home-to-you", title: "Home to You", project: "Black Veil Hearts", spotifyName: "black veil hart by emmely", size: 1254 },
  { file: "scars-dont-lie", title: "Scars Don’t Lie", project: "Broken Veil", spotifyName: "brøken veil", size: 724 },
  { file: "until-you-return", title: "Until You Return", project: "Broken Veil", spotifyName: "brøken veil", size: 1254 },
  { file: "abyssal", title: "Abyssal", project: "Broken Veil", spotifyName: "brøken veil", size: 1254 },
];
const basePath = process.env.NODE_ENV === "production" ? "/varneth-management-ness" : "";

export default function Home() {
  const [language, setLanguage] = useState<"nb" | "en">("nb");
  const [selectedCover, setSelectedCover] = useState<(typeof covers)[number] | null>(null);
  const coverDialog = useRef<HTMLDialogElement>(null);
  const t = copy[language];
  useEffect(() => {
    if (!selectedCover) return;
    const dialog = coverDialog.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [selectedCover]);
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Varneth Management Ness"><strong>VARNETH</strong><small>MANAGEMENT NESS</small></a>
        <nav aria-label={language === "nb" ? "Hovedmeny" : "Main navigation"}>
          <a href="#musikk">{t.nav[0]}</a><a href="#henning">{t.nav[1]}</a><a href="#kontakt">{t.nav[2]} <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="languages">
          <button onClick={() => setLanguage("nb")} aria-pressed={language === "nb"} lang="nb">NO</button><span>/</span><button onClick={() => setLanguage("en")} aria-pressed={language === "en"} lang="en">EN</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="atmosphere" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-copy"><p className="eyebrow">{t.label}</p><h1>{t.title}<em>{t.italic}</em></h1><p className="intro">{t.intro}</p><div className="hero-actions"><a className="button" href="#musikk">{t.listen}<span aria-hidden="true">↘</span></a><a className="text-link" href="#kontakt">{t.contact} ↗</a></div></div>
        <div className="emblem"><div className="halo" aria-hidden="true" /><Image src={`${basePath}/varneth-logo.jpg`} alt="Varneth Management — Music, People, Opportunities, Together. Building a Brighter Tomorrow." width={879} height={809} priority sizes="(max-width: 900px) 90vw, 48vw" /></div>
        <div className="hero-bottom"><span>INDEPENDENT SOUND / NORWAY</span><a href="#musikk" aria-label={t.listen}>↓</a></div>
      </section>

      <section className="music section" id="musikk">
        <div className="section-heading"><div><p className="eyebrow">{t.projects}</p><h2>{t.projectTitle}</h2></div><p>{t.projectIntro}</p></div>
        <div className="project-grid">
          {[{ name: "Broken Veil", spotifyName: "brøken veil", logo: "broken-veil.png", width: 1536, height: 1024 }, { name: "Black Veil Hearts", spotifyName: "black veil hart by emmely", spotifyUrl: "https://open.spotify.com/artist/2qx3eGLGesYxreHPBbtgxX", logo: "black-veil-hearts.png", width: 1254, height: 1254 }].map(({ name, spotifyName, spotifyUrl, logo, width, height }, i) => <a className={`project project-${i}`} href={spotifyUrl ?? search(spotifyName)} target="_blank" rel="noreferrer" key={name}><div className="project-art project-logo"><Image src={`${basePath}/${logo}`} alt={`${name} – ${language === "nb" ? "prosjektlogo" : "project logo"}`} width={width} height={height} sizes="(max-width: 600px) 90vw, 44vw" /></div><div className="project-content"><p className="eyebrow">{t.ai}</p><h3>{name}</h3><span className="project-link">{t.search}<b aria-hidden="true">↗</b></span></div></a>)}
        </div>
      <div className="cover-gallery" id="coverbilder" aria-labelledby="covers-title">
        <div className="section-heading"><div><p className="eyebrow">{t.covers}</p><h2 id="covers-title">{t.coversTitle}</h2></div><p>{t.coversIntro}</p></div>
        <div className="cover-grid">
          {covers.map(cover => <figure className="cover-card" key={cover.file}>
            <button className="cover-trigger" type="button" onClick={() => setSelectedCover(cover)} aria-label={`${t.coverOpen}: ${cover.title}`}>
              <Image src={`${basePath}/covers/${cover.file}.png`} alt={`${cover.project} — ${cover.title}`} width={cover.size} height={cover.size} sizes="(max-width: 600px) 88vw, 43vw" />
              <span className="cover-open">{t.coverOpen} <span aria-hidden="true">↗</span></span>
            </button>
            <figcaption><p className="eyebrow">{cover.project}</p><h3>{cover.title}</h3></figcaption>
          </figure>)}
        </div>
        {selectedCover && <dialog ref={coverDialog} className="cover-modal" aria-labelledby="cover-modal-title" onCancel={() => setSelectedCover(null)} onClose={() => setSelectedCover(null)}>
          <div className="cover-modal-content">
            <button className="cover-close" type="button" onClick={() => setSelectedCover(null)} aria-label={language === "nb" ? "Lukk coverbildet" : "Close cover artwork"}>×</button>
            <Image src={`${basePath}/covers/${selectedCover.file}.png`} alt={`${selectedCover.project} — ${selectedCover.title}`} width={selectedCover.size} height={selectedCover.size} priority sizes="(max-width: 900px) 92vw, 70vw" />
            <div className="cover-modal-caption"><span>{selectedCover.project}</span><h3 id="cover-modal-title">{selectedCover.title}</h3><a className="text-link" href={search(`${selectedCover.spotifyName} ${selectedCover.title}`)} target="_blank" rel="noreferrer">{t.search} ↗</a></div>
          </div>
        </dialog>}
      </div>
      </section>

      <section className="about section" id="henning"><div><p className="eyebrow">{t.human}</p><h2>{t.humanTitle}<br /><em>{t.humanLast}</em></h2><p className="bio">{t.bio}</p><p className="bio-note">{t.training}</p><a className="text-link" href="#kontakt">{t.contact} ↗</a></div></section>


      <aside className="inspiration section"><div><p className="eyebrow">{t.inspiration}</p><small>{t.inspirationNote}</small></div><div className="inspiration-links">{["Gravel N Bones", "Iron West", "Abdysall"].map(name=><a href={search(name)} target="_blank" rel="noreferrer" key={name}>{name}<small>{t.inspirationLink} ↗</small></a>)}</div></aside>

      <section className="contact section" id="kontakt"><p className="eyebrow">Varneth Management Ness</p><h2>{t.end}<br /><em>{t.endItalic}</em></h2><p>{t.endText}</p><ContactForm className="button" label={t.email} language={language} /><a className="email" href="mailto:bhstockmann@gmail.com">bhstockmann@gmail.com</a></section>
      <footer><a className="footer-brand" href="#top">VARNETH</a><span>{t.footer}</span><small>© {new Date().getFullYear()} Varneth Management Ness</small></footer>
    </main>
  );
}
