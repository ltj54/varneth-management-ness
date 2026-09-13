"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const copy = {
  nb: {
    nav: ["Musikken", "Mennesket", "Kontakt"], label: "Gitar · KI-låtskriving · Produksjon",
    title: "Musikk med", italic: "egen signatur.",
    intro: "Varneth Management Ness samler Henning Stockmann Ness’ arbeid som gitarist, KI-låtskriver og musikkprodusent.",
    listen: "Utforsk musikken", contact: "Ta kontakt", pause: "Pause bevegelse", resume: "Start bevegelse",
    projects: "Musikkprosjekter", projectTitle: "To navn. Egen nerve.", projectIntro: "Hennings egne KI-musikkprosjekter. Utforsk lyden på Spotify.",
    ai: "KI-musikkprosjekt", search: "Finn på Spotify", track: "Lytt / One more stage", load: "Åpne Spotify-spilleren", privacy: "Spilleren lastes fra Spotify når du åpner den.",
    human: "Bak uttrykket", humanTitle: "Henning", humanLast: "Stockmann Ness.",
    bio: "Musikkprodusent, KI-låtskriver og gitarist. Gjennom Varneth Management Ness arbeider Henning med egne musikkprosjekter, produksjon og utgivelse — og rådgivning innen KI-musikkproduksjon.",
    video: "Henning på gitar", watch: "Se Fighters på YouTube", videoNote: "Fighters · Henning Ness · SUHR & FURCH",
    craft: "Arbeidet", craftTitle: "Fra idé til uttrykk.",
    services: [["Musikkproduksjon", "Produksjon og utgivelse av KI-musikk gjennom egne prosjekter."], ["KI-låtskriving", "Musikalske ideer og nye uttrykk med KI som kreativt verktøy."], ["Rådgivning", "Veiledning innen KI-musikkproduksjon. Ta kontakt om det du ønsker å utforske."]],
    inspiration: "På Hennings spilleliste", inspirationNote: "Musikalsk inspirasjon · uavhengige artister", inspirationLink: "Spotify-søk",
    end: "Har du et", endItalic: "prosjekt?", endText: "Har du en idé eller et spørsmål om KI-musikkproduksjon? Ta kontakt med Henning.", email: "Send en e-post", footer: "Musikkproduksjon · KI-låtskriving · Gitar",
  },
  en: {
    nav: ["The music", "The person", "Contact"], label: "Guitar · AI songwriting · Production",
    title: "Dark tones.", italic: "A voice of its own.",
    intro: "Music, technology and human expression. Welcome to the world of Varneth Management Ness.",
    listen: "Explore the music", contact: "Get in touch", pause: "Pause motion", resume: "Start motion",
    projects: "Music projects", projectTitle: "Two names. Their own pulse.", projectIntro: "Henning’s own AI music projects. Explore the sound on Spotify.",
    ai: "AI music project", search: "Find on Spotify", track: "Listen / One more stage", load: "Open Spotify player", privacy: "The player loads from Spotify when you open it.",
    human: "Behind the sound", humanTitle: "Henning", humanLast: "Stockmann Ness.",
    bio: "Music producer, AI songwriter and guitarist. Through Varneth Management Ness, Henning works on his own music projects, production and releases — alongside consulting in AI music production.",
    video: "Henning on guitar", watch: "Watch Fighters on YouTube", videoNote: "Fighters · Henning Ness · SUHR & FURCH",
    craft: "The craft", craftTitle: "From idea to expression.",
    services: [["Music production", "Producing and releasing AI music through original projects."], ["AI songwriting", "Musical ideas and new expressions with AI as a creative tool."], ["Consulting", "Guidance in AI music production. Get in touch about what you would like to explore."]],
    inspiration: "On Henning’s playlist", inspirationNote: "Musical inspiration · independent artists", inspirationLink: "Spotify search",
    end: "Let’s talk", endItalic: "music.", endText: "An idea, a project or a question about AI music production? Send Henning a message.", email: "Send an email", footer: "Music production · AI songwriting · Guitar",
  },
};
const search = (name: string) => `https://open.spotify.com/search/${encodeURIComponent(name)}`;
const basePath = process.env.NODE_ENV === "production" ? "/varneth-management-ness" : "";

export default function Home() {
  const [language, setLanguage] = useState<"nb" | "en">("nb");
  const [paused, setPaused] = useState(false);
  const [player, setPlayer] = useState(false);
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
          {["Brøken Veil", "Black Veil Hart"].map((name, i) => <a className={`project project-${i}`} href={search(name)} target="_blank" rel="noreferrer" key={name}><div className="project-art" aria-hidden="true"><div className="veil" /><span>{i === 0 ? "BV" : "BVH"}</span><i /></div><div className="project-content"><p className="eyebrow">{t.ai}</p><h3>{name}</h3><span className="project-link">{t.search}<b aria-hidden="true">↗</b></span></div></a>)}
        </div>
        <div className="listening"><div><p className="eyebrow">{t.track}</p><p>One more stage</p></div><div className="player-area">{player ? <iframe title="One more stage — Spotify" src="https://open.spotify.com/embed/track/5rBLqdQRcqTW66VkG8r9mT?theme=0" width="100%" height="152" allow="encrypted-media; fullscreen; picture-in-picture" loading="lazy" /> : <><button className="button outline" onClick={() => setPlayer(true)}><span aria-hidden="true">▷</span>{t.load}</button><small>{t.privacy}</small></>}</div></div>
      </section>

      <section className="about section" id="henning"><div><p className="eyebrow">{t.human}</p><h2>{t.humanTitle}<br /><em>{t.humanLast}</em></h2><p className="bio">{t.bio}</p><a className="text-link" href="#kontakt">{t.contact} ↗</a></div><a className="film" href="https://www.youtube.com/watch?v=jNgZZCfBJ-k" target="_blank" rel="noreferrer"><div className="strings" aria-hidden="true">{Array.from({length:6},(_,i)=><i key={i} />)}</div><span className="eyebrow">{t.video}</span><span className="play" aria-hidden="true">▷</span><div className="film-caption"><h3>Fighters</h3><span>{t.watch} ↗</span><small>{t.videoNote}</small></div></a></section>

      <section className="craft section" id="arbeid"><p className="eyebrow">{t.craft}</p><h2>{t.craftTitle}</h2><div className="service-grid">{t.services.map(([name, description])=><article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div></section>

      <aside className="inspiration section"><div><p className="eyebrow">{t.inspiration}</p><small>{t.inspirationNote}</small></div><div className="inspiration-links">{["Gravel N Bones", "Iron West", "Abdysall"].map(name=><a href={search(name)} target="_blank" rel="noreferrer" key={name}>{name}<small>{t.inspirationLink} ↗</small></a>)}</div></aside>

      <section className="contact section" id="kontakt"><p className="eyebrow">Varneth Management Ness</p><h2>{t.end}<br /><em>{t.endItalic}</em></h2><p>{t.endText}</p><a className="button" href="mailto:bhstockmann@gmail.com">{t.email}<span aria-hidden="true">↗</span></a><a className="email" href="mailto:bhstockmann@gmail.com">bhstockmann@gmail.com</a></section>
      <footer><a className="footer-brand" href="#top">VARNETH</a><span>{t.footer}</span><small>© {new Date().getFullYear()} Varneth Management Ness</small></footer>
    </main>
  );
}
