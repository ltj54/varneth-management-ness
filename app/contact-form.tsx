"use client";

import { useId, useRef, useState } from "react";
import type { SubmitEvent } from "react";

// Configure only an endpoint whose recipient has been verified in Formspree.
const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
const recipient = "bhstockmann@gmail.com";
const copy = {
  nb: {
    title: "Hva vil du ta kontakt om?", name: "Navn", email: "E-post", message: "Melding",
    close: "Lukk skjemaet", send: "Send melding", sending: "Sender …",
    success: "Takk! Meldingen er sendt til Henning.",
    error: "Meldingen kunne ikke sendes. Prøv igjen, eller send en e-post direkte.",
    note: "Navn, e-postadresse og melding behandles via Formspree for at Henning skal kunne svare deg.",
    fallback: "Du kan kontakte Henning direkte på e-post.",
    open: "Åpne e-postprogrammet", recipient: "Mottaker",
    fallbackNote: "Lenken åpner e-postprogrammet ditt. Du kan også kopiere adressen nedenfor.",
  },
  en: {
    title: "What would you like to discuss?", name: "Name", email: "Email", message: "Message",
    close: "Close form", send: "Send message", sending: "Sending …",
    success: "Thank you! Your message has been sent to Henning.",
    error: "Your message could not be sent. Please try again or email Henning directly.",
    note: "Your name, email address and message are processed through Formspree so Henning can reply.",
    fallback: "You can contact Henning directly by email.",
    open: "Open email app", recipient: "Recipient",
    fallbackNote: "The link opens your email app. You can also copy the address below.",
  },
};

export function ContactForm({ className, label = "Ta kontakt", language = "nb" }: Readonly<{
  className: string; label?: string; language?: "nb" | "en";
}>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const pending = useRef(false);
  const t = copy[language];

  async function submitForm(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured || pending.current) return;
    const form = event.currentTarget;
    pending.current = true;
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }

  return <>
    <button className={className} type="button" onClick={() => {
      if (!pending.current) setStatus("idle");
      dialogRef.current?.showModal();
    }}><span>{label}</span><span aria-hidden="true">↗</span></button>
    <dialog ref={dialogRef} className="contact-dialog" aria-labelledby={titleId}>
      <form className="contact-form" onSubmit={submitForm} aria-busy={status === "sending"}>
        <header>
          <div><p>Varneth Management Ness</p><h2 id={titleId}>{t.title}</h2>
            <p className="form-recipient">{t.recipient}: {recipient}</p>
          </div>
          <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label={t.close}>×</button>
        </header>
        {configured ? <>
          <fieldset disabled={status === "sending" || status === "success"}>
            <label><span>{t.name}</span><input name="name" autoComplete="name" maxLength={150} required /></label>
            <label><span>{t.email}</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
            <label><span>{t.message}</span><textarea name="message" rows={5} maxLength={10000} required /></label>
            <button className="form-submit" type="submit">{status === "sending" ? t.sending : t.send}</button>
          </fieldset>
          <p className="form-note">{t.note}</p>
          <p role="status" aria-live="polite">{status === "success" ? t.success : ""}</p>
          {status === "error" && <p role="alert">{t.error} <a href={`mailto:${recipient}`}>{recipient}</a></p>}
        </> : <>
          <p>{t.fallback}</p>
          <a className="button" href={`mailto:${recipient}`}>{t.open} ↗</a>
          <p className="form-note">{t.fallbackNote}</p>
        </>}
      </form>
    </dialog>
  </>;
}
