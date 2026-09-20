import Link from "next/link";
import { storyBlocks, storyCredits, storyHeaderImage, storySubtitle, storyTitle } from "./story";
import { StoryImage } from "./story-image";

const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";
const imagePath = (number: string) => `${basePath}/broken-veil-story/image-${number.padStart(2, "0")}.png`;
const isHeading = (value: string) => /^(Kapittel \d+|Epilog|Bonuskapittel)/.test(value);
const keyedStoryBlocks = storyBlocks.reduce<{ block: (typeof storyBlocks)[number]; key: string }[]>((items, block) => {
  const keyBase = `${block.type}-${block.value}`;
  const occurrence = items.filter(item => item.key.startsWith(`${keyBase}-`)).length;
  items.push({ block, key: `${keyBase}-${occurrence}` });
  return items;
}, []);

function renderStoryBlock({ block, key }: (typeof keyedStoryBlocks)[number]) {
  if (block.type === "image") {
    return <figure className="story-inline-image" key={key}><StoryImage src={imagePath(block.value)} alt="Illustrasjon fra Broken Veil-fortellingen" width={1024} height={1024} /></figure>;
  }
  if (isHeading(block.value)) {
    return <section className="story-chapter" key={key}><p className="eyebrow">Broken Veil</p><h2>{block.value}</h2></section>;
  }
  return <p key={key}>{block.value}</p>;
}

export default function BrokenVeilStory() {
  return (
    <main className="story-page">
      <header className="story-page-header">
        <Link className="story-back-link" href={`${basePath}/#musikk`}>← Tilbake til Varneth</Link>
        <p className="eyebrow">Broken Veil · storytelling med musikk</p>
        <h1>{storyTitle}</h1>
        <p className="story-subtitle">{storySubtitle}</p>
        <figure className="story-header-image"><StoryImage src={imagePath(storyHeaderImage)} alt="Illustrasjon fra Broken Veil-fortellingen" width={1024} height={1024} /></figure>
        <p className="story-credits">{storyCredits}</p>
        <p className="story-volume-nav"><Link className="project-story-link" href={`${basePath}/broken-veil/book-3`}>Les bok 3 – Cruiset ↗</Link></p>
      </header>

      <article className="story-copy">
        {keyedStoryBlocks.map(renderStoryBlock)}
      </article>

      <footer className="story-page-footer">
        <Link className="story-back-link" href={`${basePath}/#musikk`}>← Tilbake til Varneth Management Ness</Link>
      </footer>
    </main>
  );
}
