import { useState, type ReactNode } from "react";
import { banned } from "../data";

export function Label({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="label">
      {index ? <span>{index}</span> : null}
      {children}
    </p>
  );
}

export function BannedWall() {
  const [active, setActive] = useState(0);
  const current = banned[active];

  return (
    <div className="banned">
      <div className="banned-cloud" role="listbox" aria-label="Lines Dobrevo will not send">
        {banned.map((item, index) => (
          <button
            key={item.word}
            type="button"
            role="option"
            aria-selected={index === active}
            className={index === active ? "is-on" : undefined}
            onClick={() => setActive(index)}
          >
            {item.word}
          </button>
        ))}
      </div>
      <figure className="banned-why">
        <figcaption>Struck from the vocabulary</figcaption>
        <blockquote>
          <p className="struck">{current.word}</p>
          <p>{current.why}</p>
        </blockquote>
      </figure>
    </div>
  );
}

export function Redact({ children }: { children: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={open ? "redact open" : "redact"}
      aria-pressed={open}
      onClick={() => setOpen((value) => !value)}
    >
      <span className="sr">{open ? "Hide" : "Reveal"}: </span>
      {children}
    </button>
  );
}

export function CoffeeRing() {
  return (
    <svg className="coffee" viewBox="0 0 200 200" aria-hidden="true">
      <ellipse cx="100" cy="104" rx="74" ry="64" fill="none" stroke="#8a5a32" strokeWidth="16" opacity="0.18" />
      <ellipse cx="108" cy="98" rx="58" ry="48" fill="none" stroke="#8a5a32" strokeWidth="7" opacity="0.14" />
      <ellipse cx="92" cy="118" rx="10" ry="6" fill="#8a5a32" opacity="0.12" />
    </svg>
  );
}
