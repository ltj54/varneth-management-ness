"use client";

import { useId, useRef } from "react";
import type { SubmitEvent } from "react";

const recipient = "bhstockmann@gmail.com";

function getTextField(data: FormData, field: string) {
  const value = data.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm({
  className,
  label = "Ta kontakt",
}: Readonly<{ className: string; label?: string }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  function openForm() {
    dialogRef.current?.showModal();
  }

  function closeForm() {
    dialogRef.current?.close();
  }

  function submitForm(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = getTextField(data, "name");
    const email = getTextField(data, "email");
    const message = getTextField(data, "message");
    const subject = `Forespørsel til Varneth Management Ness fra ${name}`;
    const body = [`Navn: ${name}`, `E-post: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeForm();
  }

  return (
    <>
      <button className={className} type="button" onClick={openForm}>
        <span>{label}</span>
        <span aria-hidden="true">↗</span>
      </button>

      <dialog ref={dialogRef} className="contact-dialog" aria-labelledby={titleId}>
        <form className="contact-form" onSubmit={submitForm}>
          <header>
            <div>
              <p>Kontakt Varneth Management Ness</p>
              <h2 id={titleId}>Fortell om jobben</h2>
              <p className="form-recipient">Mottaker: bhstockmann@gmail.com</p>
            </div>
            <button className="dialog-close" type="button" onClick={closeForm} aria-label="Lukk skjemaet">
              ×
            </button>
          </header>

          <label>
            <span>Navn</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>

          <label>
            <span>E-post</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>

          <label>
            <span>Hva ønsker du hjelp med?</span>
            <textarea name="message" rows={6} required />
          </label>

          <button className="form-submit" type="submit">Åpne i e-postprogrammet</button>
          <p className="form-note">
            Når du fortsetter, åpnes e-postprogrammet ditt med opplysningene ferdig utfylt.
          </p>
        </form>
      </dialog>
    </>
  );
}
