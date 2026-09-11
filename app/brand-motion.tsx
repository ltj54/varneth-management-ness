"use client";

import { useState } from "react";

const bars = Array.from({ length: 22 }, (_, index) => index);

export function BrandMotion() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className={`brand-motion ${isLive ? "is-live" : ""}`}>
      <div className="motion-grid" aria-hidden="true" />
      <div className="motion-glow motion-glow-one" aria-hidden="true" />
      <div className="motion-glow motion-glow-two" aria-hidden="true" />
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="orbit orbit-three" aria-hidden="true" />
      <div className="record" aria-hidden="true">
        <div className="record-label">VMN</div>
        <div className="record-hole" />
      </div>
      <div className="motion-copy">
        <span className="live-dot" aria-hidden="true" />
        <span>{isLive ? "Live mode · on" : "Music mode · ready"}</span>
      </div>
      <div className="equalizer" aria-label="Animasjon av musikkbølger">
        {bars.map((bar) => <i key={bar} style={{ "--bar": bar, "--height": `${12 + (bar % 7) * 7}px` } as React.CSSProperties} />)}
      </div>
      <button
        className="live-toggle"
        type="button"
        aria-pressed={isLive}
        onClick={() => setIsLive((current) => !current)}
      >
        <span className="toggle-icon" aria-hidden="true">{isLive ? "Ⅱ" : "▶"}</span>
        {isLive ? "Pause pulse" : "Start pulse"}
      </button>
    </div>
  );
}
