import Link from "next/link";
import { StoryImage } from "../story-image";
import { book3Blocks, book3Credits, book3Eyebrow, book3HeaderImage, book3Title } from "./story";

const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";
const imagePath = (number: string) => `${basePath}/broken-veil-book-3/image-${number.padStart(2, "0")}.png`;
const keyedBook3Blocks = book3Blocks.reduce<{ block: (typeof book3Blocks)[number]; key: string }[]>((items, block) => {
  const keyBase = `${block.type}-${block.value}`;
  const occurrence = items.filter(item => item.key.startsWith(`${keyBase}-`)).length;
  items.push({ block, key: `${keyBase}-${occurrence}` });
  return items;
}, []);

function renderBook3Block({ block, key }: (typeof keyedBook3Blocks)[number]) {
  if (block.type === "image") {
    return <figure className="story-inline-image" key={key}><StoryImage src={imagePath(block.value)} alt="Illustrasjon fra Broken Veil – Cruiset" width={1024} height={1024} /></figure>;
  }
  if (block.type === "heading") {
    return <section className="story-chapter" key={key}><p className="eyebrow">Broken Veil</p><h2>{block.value}</h2></section>;
  }
  return <p key={key}>{block.value}</p>;
}

export default function BrokenVeilBook3() {
  return (
    <main className="story-page">
      <header className="story-page-header">
        <Link className="story-back-link" href={`${basePath}/broken-veil`}>← Tilbake til Broken Veil</Link>
        <p className="eyebrow">{book3Eyebrow} · Broken Veil</p>
        <h1>{book3Title}</h1>
        <p className="story-subtitle">En fortelling om familie, musikk og nye begynnelser</p>
        <figure className="story-header-image"><StoryImage src={imagePath(book3HeaderImage)} alt="Illustrasjon fra Broken Veil – Cruiset" width={1024} height={1024} /></figure>
        <p className="story-credits">{book3Credits}</p>
      </header>

      <article className="story-copy">
        {keyedBook3Blocks.map(renderBook3Block)}
      </article>

      <footer className="story-page-footer">
        <Link className="story-back-link" href={`${basePath}/broken-veil`}>← Tilbake til Broken Veil</Link>
      </footer>
    </main>
  );
}
