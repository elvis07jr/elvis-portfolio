"use client";
import { useState } from "react";

export default function ProjectCards({ projects = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="cards">
      {projects.map((p, idx) => (
        <details
          key={p.title}
          className="card project"
          open={openIndex === idx}
          onToggle={(e) => {
            const isOpen = e.currentTarget.open;
            setOpenIndex(isOpen ? idx : null);
          }}
        >
          <summary className="card-header">
            <div className="card-title">
              <strong>{p.title}</strong>
              <span className="roles">{p.roles?.join(", ")}</span>
            </div>
            <span className="chev" aria-hidden>▾</span>
          </summary>
          <div className="card-body">
            {p.image && (
              <img className="thumb tall" src={p.image} alt={p.alt || p.title} />
            )}
            {p.summary && <p className="summary">{p.summary}</p>}
            {p.link && (
              <p><a href={p.link} target="_blank" rel="noreferrer">View repository →</a></p>
            )}
          </div>
        </details>
      ))}

      <style jsx>{`
        /* Masonry layout so expanding one card doesn't push the next column */
        .cards { column-count: 2; column-gap: 12px; }
        @media (max-width: 800px) { .cards { column-count: 1; } }

        .project { padding: 0; overflow: hidden; display: inline-block; width: 100%; margin: 0 0 12px; break-inside: avoid; }
        .card-header { list-style: none; display: flex; align-items: center; justify-content: space-between; padding: 16px; cursor: pointer; }
        summary { outline: none; }
        summary::-webkit-details-marker { display: none; }
        .card-title { display: flex; flex-direction: column; gap: 4px; }
        .roles { color: var(--muted); font-size: 14px; }
        .chev { transition: transform .2s ease; }
        details[open] .chev { transform: rotate(180deg); }
        .card-body { padding: 0 16px 16px; display: grid; gap: 10px; }
        .summary { color: var(--muted); }
      `}</style>
    </div>
  );
}


