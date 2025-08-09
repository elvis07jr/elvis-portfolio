"use client";
import { site } from "../../../content/site.config";

export default function Services() {
  return (
    <div className="stack-lg">
      <div className="grid grid-3 grid-tight">
        {site.services.map((s) => (
          <article key={s.label} className="card service-card">
            <h3 className="service-title">{s.label}</h3>
            {s.description && <p className="service-desc">{s.description}</p>}
          </article>
        ))}
      </div>
      <style jsx>{`
        .service-card {
          background:
            linear-gradient(135deg,
              color-mix(in oklab, var(--accent) 10%, transparent),
              color-mix(in oklab, var(--accent-3) 10%, transparent)
            );
          position: relative;
          overflow: hidden;
        }
        .service-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(600px 200px at 90% -10%, rgba(255,255,255,.18), transparent 60%);
          pointer-events: none;
        }
        .service-title { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
        .service-desc { color: var(--muted); font-size: 14px; line-height: 1.5; }
      `}</style>
    </div>
  );
}


