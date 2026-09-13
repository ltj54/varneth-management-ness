"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const copy = {
  nb: {
    nav: ["Musikken", "Mennesket", "Kontakt"], label: "KI-komposisjon · Musikkproduksjon · Rådgivning",
    title: "Musikk med", italic: "egen signatur.",
    intro: "Varneth Management Ness samler Henning Stockmann Ness’ arbeid som KI-komponist og produsent av KI-musikk.",
    listen: "Utforsk musikken", contact: "Ta kontakt", pause: "Pause bevegelse", resume: "Start bevegelse",
    projects: "Musikkprosjekter", projectTitle: "To navn. Egen nerve.", projectIntro: "Hennings egne musikkprosjekter. Utforsk lyden på Spotify.",
    ai: "Eget KI-musikkprosjekt", search: "Søk på Spotify",
    human: "Bak uttrykket", humanTitle: "Henning", humanLast: "Stockmann Ness.",
    bio: "Henning er KI-komponist og driver med produksjon og utgivelse av KI-musikk. Gjennom Varneth Management Ness utvikler han egne prosjekter og tilbyr rådgivning innen KI-musikkproduksjon.",
    approach: "Kreativitet møter teknologi", approachText: "Egne musikkprosjekter. Nye verktøy. Et personlig uttrykk.",
    craft: "Arbeidet", craftTitle: "Fra idé til uttrykk.",
    services: [["KI-musikkproduksjon", "Produksjon og utgivelse av KI-musikk gjennom egne prosjekter."], ["KI-komposisjon", "Musikalske ideer og komposisjoner utviklet med KI som kreativt verktøy."], ["Rådgivning", "Ta kontakt om rådgivning innen KI-musikkproduksjon og arbeidet med egne prosjekter."]],
    inspiration: "På Hennings spilleliste", inspirationNote: "Musikalsk inspirasjon · uavhengige artister", inspirationLink: "Spotify-søk",
    end: "Har du et", endItalic: "prosjekt?", endText: "Vil du snakke om KI-musikk, produksjon eller rådgivning? Ta kontakt med Henning.", email: "Send en e-post", footer: "KI-komposisjon · Musikkproduksjon · Rådgivning",
  },
  en: {
    nav: ["The music", "The person", "Contact"], label: "AI composition · Music production · Consulting",
    title: "Dark tones.", italic: "A voice of its own.",
    intro: "Varneth Management Ness brings together Henning Stockmann Ness’ work as an AI composer and AI music producer.",
    listen: "Explore the music", contact: "Get in touch", pause: "Pause motion", resume: "Start motion",
    projects: "Music projects", projectTitle: "Two names. Their own pulse.", projectIntro: "Henning’s own music projects. Explore the sound on Spotify.",
    ai: "Original AI music project", search: "Search on Spotify",
    human: "Behind the sound", humanTitle: "Henning", humanLast: "Stockmann Ness.",
    bio: "Henning is an AI composer working in AI music production and releases. Through Varneth Management Ness, he develops his own projects and offers consulting in AI music production.",
    approach: "Creativity meets technology", approachText: "Original music projects. New tools. A personal expression.",
    craft: "The craft", craftTitle: "From idea to expression.",
    services: [["AI music production", "Producing and releasing AI music through original projects."], ["AI composition", "Musical ideas and compositions developed with AI as a creative tool."], ["Consulting", "Get in touch about AI music production consulting and developing your own projects."]],
    inspiration: "On Henning’s playlist", inspirationNote: "Musical inspiration · independent artists", inspirationLink: "Spotify search",
    end: "Have a", endItalic: "project?", endText: "Want to talk about AI music, production or consulting? Get in touch with Henning.", email: "Send an email", footer: "AI composition · Music production · Consulting",
  },
};
const search = (name: string) => `https://open.spotify.com/search/${encodeURIComponent(name)}`;
const basePath = process.env.NODE_ENV === "production" ? "/varneth-management-ness" : "";

export default function Home() {
  const [language, setLanguage] = useState<"nb" | "en">("nb");
  const [paused, setPaused] = useState(false);
  const t = copy[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return (
    <main className={paused ? "motion-paused" : ""}>
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
        <div className="hero-bottom"><span>INDEPENDENT SOUND / NORWAY</span><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "▷" : "Ⅱ"} {paused ? t.resume : t.pause}</button><a href="#musikk" aria-label={t.listen}>↓</a></div>
      </section>

      <section className="music section" id="musikk">
        <div className="section-heading"><div><p className="eyebrow">{t.projects}</p><h2>{t.projectTitle}</h2></div><p>{t.projectIntro}</p></div>
        <div className="project-grid">
          {[{ name: "Broken Veil", logo: "broken-veil.png", width: 1536, height: 1024 }, { name: "Black Veil Hearts", logo: "black-veil-hearts.png", width: 1254, height: 1254 }].map(({ name, logo, width, height }, i) => <a className={`project project-${i}`} href={search(name)} target="_blank" rel="noreferrer" key={name}><div className="project-art project-logo"><Image src={`${basePath}/${logo}`} alt={`${name} – ${language === "nb" ? "prosjektlogo" : "project logo"}`} width={width} height={height} sizes="(max-width: 600px) 90vw, 44vw" /></div><div className="project-content"><p className="eyebrow">{t.ai}</p><h3>{name}</h3><span className="project-link">{t.search}<b aria-hidden="true">↗</b></span></div></a>)}
        </div>
      </section>

      <section className="about section" id="henning"><div><p className="eyebrow">{t.human}</p><h2>{t.humanTitle}<br /><em>{t.humanLast}</em></h2><p className="bio">{t.bio}</p><a className="text-link" href="#kontakt">{t.contact} ↗</a></div><div className="approach"><p className="eyebrow">{t.approach}</p><span className="approach-mark" aria-hidden="true">AI</span><h3>{t.approachText}</h3></div></section>

      <section className="craft section" id="arbeid"><p className="eyebrow">{t.craft}</p><h2>{t.craftTitle}</h2><div className="service-grid">{t.services.map(([name, description])=><article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div></section>

      <aside className="inspiration section"><div><p className="eyebrow">{t.inspiration}</p><small>{t.inspirationNote}</small></div><div className="inspiration-links">{["Gravel N Bones", "Iron West", "Abdysall"].map(name=><a href={search(name)} target="_blank" rel="noreferrer" key={name}>{name}<small>{t.inspirationLink} ↗</small></a>)}</div></aside>

      <section className="contact section" id="kontakt"><p className="eyebrow">Varneth Management Ness</p><h2>{t.end}<br /><em>{t.endItalic}</em></h2><p>{t.endText}</p><a className="button" href="mailto:bhstockmann@gmail.com">{t.email}<span aria-hidden="true">↗</span></a><a className="email" href="mailto:bhstockmann@gmail.com">bhstockmann@gmail.com</a></section>
      <footer><a className="footer-brand" href="#top">VARNETH</a><span>{t.footer}</span><small>© {new Date().getFullYear()} Varneth Management Ness</small></footer>
    </main>
  );
}
