import Image from "next/image";
import { ContactForm } from "./contact-form";

const contactEmail = "bhstockmann@gmail.com";
const phone = "+47 93 66 97 87";

export default function Home() {
  return (
    <main>
      <div className="draft-notice">Arbeidsutkast · innhold og uttrykk utvikles sammen med Henning</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Varneth Management Ness – forsiden">
          <Image src="/varneth-logo.jpg" alt="Varneth Management Ness" width={720} height={810} priority />
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#tjenester">Tjenester</a>
          <a href="#om">Om Varneth</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-main">
          <p className="eyebrow">Varneth Management Ness · Haukedalen</p>
          <h1 id="hero-title">Musikk, mennesker og muligheter.</h1>
          <p className="hero-intro">Varneth Management Ness arbeider med produksjon og utgivelse av musikk- og lydopptak.</p>
          <p className="hero-detail">Et første utkast til en enkel side for å presentere virksomheten, arbeidet og veien videre. Innholdet kan formes helt etter Varneths retning.</p>
          <div className="hero-actions">
            <ContactForm className="contact-link" />
            <a className="services-link" href="#tjenester">Se hva siden kan inneholde <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Varneths uttrykk">
          <p>Artistutvikling</p><p>Produksjon</p><p>Global rekkevidde</p>
          <small>Music · People · Opportunities · Together</small>
        </aside>
      </section>

      <section className="services" id="tjenester" aria-labelledby="services-title">
        <header className="services-heading"><p className="eyebrow">Mulig struktur</p><h2 id="services-title">En tydelig scene for arbeidet.</h2></header>
        <div className="service-feature"><h3>Musikkproduksjon</h3><p>Siden kan samle utgivelser, artister, samarbeid og aktuelle prosjekter på ett sted. Tekst og prioriteringer bestemmes sammen med Varneth.</p></div>
        <div className="service-pair">
          <article><h3>Artistutvikling</h3><p>Presenter hvordan Varneth arbeider med mennesker, uttrykk og karrierer.</p></article>
          <article><h3>Partnerskap</h3><p>Vis frem muligheter for samarbeid, booking, media, merkevarer og internasjonal kontakt.</p></article>
        </div>
      </section>

      <section className="about" id="om" aria-labelledby="about-title">
        <header><p className="eyebrow">Om virksomheten</p><h2 id="about-title">Varneth Management Ness</h2></header>
        <div className="about-copy">
          <p className="about-lead">Building a Brighter Tomorrow.</p>
          <p>Varneth Management Ness er et norsk enkeltpersonforetak registrert i Haukedalen, Sunnfjord, med aktivitet innen produksjon av musikk.</p>
          <blockquote className="brand-quote">Music · People · Opportunities · Together</blockquote>
          <dl className="facts">
            <div><dt>Foretak</dt><dd>Varneth Management Ness</dd></div>
            <div><dt>Organisasjonsnummer</dt><dd>938 358 311</dd></div>
            <div><dt>Sted</dt><dd>Haukedalen, Sunnfjord</dd></div>
            <div><dt>Kontakt</dt><dd>Henning Stockmann Ness</dd></div>
          </dl>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="contact-title">
        <div><p className="eyebrow">Kontakt</p><h2 id="contact-title">La oss snakke om neste steg.</h2></div>
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
