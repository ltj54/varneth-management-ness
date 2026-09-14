"use client";

import { useId, useRef } from "react";
import type { SubmitEvent } from "react";

const recipient = "bhstockmann@gmail.com";
const copy = {
  nb: {
    title: "Hva vil du ta kontakt om?", name: "Navn", email: "E-post", message: "Melding",
    close: "Lukk skjemaet", send: "Åpne e-postprogrammet", note: "E-postprogrammet ditt åpnes med mottaker, emne og melding ferdig utfylt.", recipient: "Mottaker",
  },
  en: {
    title: "What would you like to discuss?", name: "Name", email: "Email", message: "Message",
    close: "Close form", send: "Open email app", note: "Your email app opens with the recipient, subject and message already filled in.", recipient: "Recipient",
  },
};

function getTextField(data: FormData, field: string) {
  const value = data.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm({ className, label = "Ta kontakt", language = "nb" }: Readonly<{
  className: string; label?: string; language?: "nb" | "en";
}>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const t = copy[language];

  function submitForm(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = getTextField(data, "name");
    const email = getTextField(data, "email");
    const message = getTextField(data, "message");
    const subject = `${language === "nb" ? "Forespørsel til Varneth Management Ness fra" : "Enquiry to Varneth Management Ness from"} ${name}`;
    const body = [`${t.name}: ${name}`, `${t.email}: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    dialogRef.current?.close();
  }

  return <>
    <button className={className} type="button" onClick={() => dialogRef.current?.showModal()}>
      <span>{label}</span><span aria-hidden="true">↗</span>
    </button>
    <dialog ref={dialogRef} className="contact-dialog" aria-labelledby={titleId}>
      <form className="contact-form" onSubmit={submitForm}>
        <header>
          <div>
            <p>Varneth Management Ness</p>
            <h2 id={titleId}>{t.title}</h2>
            <p className="form-recipient">{t.recipient}: {recipient}</p>
          </div>
          <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label={t.close}>×</button>
        </header>
        <label><span>{t.name}</span><input name="name" type="text" autoComplete="name" maxLength={150} required /></label>
        <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label><span>{t.message}</span><textarea name="message" rows={5} maxLength={10000} required /></label>
        <button className="form-submit" type="submit">{t.send}</button>
        <p className="form-note">{t.note}</p>
      </form>
    </dialog>
  </>;
}
