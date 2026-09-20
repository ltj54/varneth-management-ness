"use client";

import Image from "next/image";
import { useRef } from "react";

type StoryImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function StoryImage({ src, alt, width, height, className = "" }: Readonly<StoryImageProps>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className={`story-image-trigger ${className}`} type="button" onClick={() => dialogRef.current?.showModal()} aria-label={`${alt} – åpne stort`}>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 700px) 92vw, 48rem" />
      </button>
      <dialog className="story-lightbox" ref={dialogRef}>
        <div className="story-lightbox-inner">
          <form method="dialog"><button className="story-lightbox-close" type="submit" aria-label="Lukk bilde">Lukk <span aria-hidden="true">×</span></button></form>
          <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 1100px) 94vw, 1100px" />
        </div>
      </dialog>
    </>
  );
}
