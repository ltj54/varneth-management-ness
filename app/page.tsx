import Image from "next/image";
import { ContactForm } from "./contact-form";
import { BrandMotion } from "./brand-motion";

const contactEmail = "bhstockmann@gmail.com";
const phone = "+47 93 66 97 87";
const spotifySearch = (name: string) => `https://open.spotify.com/search/${encodeURIComponent(name)}`;

export default function Home() {
  return (
    <main>
      <div className="topline"><span>Varneth Management Ness</span><span>Music · People · Opportunities · Together</span><span>Haukedalen / Norway</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Varneth Management Ness – forsiden">
          <Image src="/varneth-logo.jpg" alt="Varneth Management Ness" width={720} height={810} priority />
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#tjenester"><span>01</span> Tjenester</a>
          <a href="#om"><span>02</span> Om Varneth</a>
          <a href="#musikk"><span>03</span> Musikk</a>
          <a className="nav-cta" href="#kontakt">Start a conversation <b>↗</b></a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-main">
          <p className="eyebrow"><span className="eyebrow-line" /> Independent music management</p>
          <h1 id="hero-title"><span>Make noise.</span><em>Make meaning.</em></h1>
          <p className="hero-intro">Vi utvikler KI-artister, lyd og muligheter med blikket rettet mot en større scene.</p>
          <p className="language-note">We develop AI artists, sound and opportunities for a bigger stage.</p>
          <div className="hero-actions">
            <ContactForm className="contact-link" />
            <a className="services-link" href="#tjenester">Explore the sound <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <BrandMotion />
      </section>

      <div className="marquee" aria-label="Varneths arbeidsområder"><div><span>Artist development</span><b>✳</b><span>Touring</span><b>✳</b><span>Production</span><b>✳</b><span>Brand partnerships</span><b>✳</b><span>Global reach</span><b>✳</b></div></div>

      <section className="services" id="tjenester" aria-labelledby="services-title">
        <header className="services-heading"><p className="eyebrow"><span className="eyebrow-line" /> What we do</p><h2 id="services-title">Turn a spark into a signal.</h2><p className="section-intro">Fra første idé til ferdig uttrykk — vi bygger rom for mennesker og musikk som fortjener å bli hørt.</p></header>
        <div className="service-feature"><div><span className="service-number">01</span><h3>Music<br /><em>production</em></h3></div><p>KI-musikkproduksjon, rådgivning og utgivelse av musikk- og lydopptak med retning, nerve og en tydelig identitet.<br /><span className="language-note">AI music production, consulting and releases with direction, energy and a clear identity.</span></p></div>
        <div className="service-pair">
          <article><span className="service-number">02</span><h3>Artist<br /><em>development</em></h3><p>Et skarpere uttrykk, en modigere retning og et lag som heier hele veien.</p><a href="#kontakt">Build the next chapter ↗</a></article>
          <article><span className="service-number">03</span><h3>Brand<br /><em>partnerships</em></h3><p>Smartere samarbeid mellom artister, merkevarer, media og mennesker.</p><a href="#kontakt">Open the door ↗</a></article>
        </div>
      </section>

      <section className="about" id="om" aria-labelledby="about-title">
        <header><p className="eyebrow"><span className="eyebrow-line" /> The point of view</p><h2 id="about-title">Good things happen when the right people meet.</h2></header>
        <div className="about-copy">
          <p className="about-lead">Building a Brighter Tomorrow<span className="accent-dot">.</span></p>
          <p>Varneth Management Ness er et norsk enkeltpersonforetak i Haukedalen, Sunnfjord, med aktivitet innen KI-musikkproduksjon, utgivelser, rådgivning og egen publishing/forfattervirksomhet innen musikkindustrien.</p>
          <p className="language-note">Varneth Management Ness is a Norwegian sole proprietorship working with AI music production, releases, consulting and independent publishing.</p>
          <blockquote className="brand-quote">Music · People · Opportunities · Together</blockquote>
          <dl className="facts">
            <div><dt>Foretak</dt><dd>Varneth Management Ness</dd></div>
            <div><dt>Organisasjonsnummer</dt><dd>938 358 311</dd></div>
            <div><dt>Sted</dt><dd>Haukedalen, Sunnfjord</dd></div>
            <div><dt>Kontakt</dt><dd>Henning Stockmann Ness</dd></div>
          </dl>
        </div>
      </section>

      <section className="music" id="musikk" aria-labelledby="music-title">
        <div><p className="eyebrow"><span className="eyebrow-line" /> Listen / Lytt</p><h2 id="music-title">The projects.</h2><p className="language-note">Prosjektene og artistene som inspirerer.</p></div>
        <div className="music-links">
          <a href={spotifySearch("Brøken Veil")} target="_blank" rel="noreferrer"><span>Brøken Veil</span><small>Spotify-søk ↗</small></a>
          <a href={spotifySearch("Black Veil Hart")} target="_blank" rel="noreferrer"><span>Black Veil Hart</span><small>Spotify-søk ↗</small></a>
          <a href="https://open.spotify.com/artist/1qJQE5EXwZ8tg7sUJRsnEd" target="_blank" rel="noreferrer"><span>Gravel N Bones</span><small>Spotify ↗</small></a>
          <a href="https://open.spotify.com/artist/2fBpFxSAXyWl9JuzSfvFcm" target="_blank" rel="noreferrer"><span>Iron West</span><small>Spotify ↗</small></a>
          <a href={spotifySearch("Abdysall")} target="_blank" rel="noreferrer"><span>Abdysall</span><small>Spotify-søk ↗</small></a>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="contact-title">
        <div><p className="eyebrow"><span className="eyebrow-line" /> Your turn</p><h2 id="contact-title">Have a sound worth sharing?</h2></div>
        <div className="contact-copy">
          <p>Har du et prosjekt, en artist eller en idé du vil utvikle? Ta kontakt, så finner vi ut hva siden bør inneholde.</p>
          <ContactForm className="contact-form-trigger" label="Send en forespørsel" />
          <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a className="contact-phone" href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
        </div>
      </section>
      <footer><strong>Varneth Management Ness</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a><span>Org.nr. 938 358 311</span></footer>
    </main>
  );
}
