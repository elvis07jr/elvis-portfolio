import { site } from "../../../content/site.config";

export default function Awards() {
  return (
    <ul className="stack-lg" style={{ listStyle: "none" }}>
      {site.awards.map((a, i) => (
        <li key={i}>
          <strong>{a.name}</strong> – {a.year} — {a.project} <span className="muted">({a.role})</span>
        </li>
      ))}
    </ul>
  );
}


