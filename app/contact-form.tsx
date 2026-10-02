"use client";

import { useId, useRef, useState } from "react";
import type { SubmitEvent } from "react";

const recipient = "bhstockmann@gmail.com";
const copy = {
  nb: {
    title: "Hva vil du ta kontakt om?", name: "Navn", email: "E-post", message: "Melding",
    close: "Lukk skjemaet", send: "Åpne e-postprogrammet", copy: "Kopier til egen e-posttjeneste", note: "Åpne standard e-postprogram, eller kopier innholdet og lim det inn i den e-posttjenesten du bruker.", recipient: "Mottaker", subject: "Emne", copied: "Kopiert. Åpne e-posttjenesten din og lim inn innholdet.", copyError: "Kunne ikke kopiere automatisk. Kopier mottaker og melding manuelt.",
  },
  en: {
    title: "What would you like to discuss?", name: "Name", email: "Email", message: "Message",
    close: "Close form", send: "Open email app", copy: "Copy for your email service", note: "Open your default email app, or copy the content and paste it into the email service you use.", recipient: "Recipient", subject: "Subject", copied: "Copied. Open your email service and paste the content.", copyError: "Could not copy automatically. Copy the recipient and message manually.",
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
  const [copyStatus, setCopyStatus] = useState("");
  const t = copy[language];

  function getEmailContent(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = getTextField(data, "name");
    const email = getTextField(data, "email");
    const message = getTextField(data, "message");
    const subject = `${language === "nb" ? "Forespørsel til Varneth Management Ness fra" : "Enquiry to Varneth Management Ness from"} ${name}`;
    const body = [`${t.name}: ${name}`, `${t.email}: ${email}`, "", message].join("\n");
    return { subject, body };
  }

  function submitForm(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const { subject, body } = getEmailContent(event.currentTarget);

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    dialogRef.current?.close();
  }

  async function copyForWebmail(form: HTMLFormElement) {
    if (!form.reportValidity()) return;
    const { subject, body } = getEmailContent(form);
    const content = [`${t.recipient}: ${recipient}`, `${t.subject}: ${subject}`, "", body].join("\n");
    try {
      await navigator.clipboard.writeText(content);
      setCopyStatus(t.copied);
    } catch {
      setCopyStatus(t.copyError);
    }
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
        <div className="form-actions">
          <button className="form-submit" type="submit">{t.send}</button>
          <button className="form-copy" type="button" onClick={(event) => { const form = event.currentTarget.form; if (form) void copyForWebmail(form); }}>{t.copy}</button>
        </div>
        <p className="form-note" aria-live="polite">{copyStatus || t.note}</p>
      </form>
    </dialog>
  </>;
}
