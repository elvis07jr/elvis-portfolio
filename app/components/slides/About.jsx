import { site } from "../../../content/site.config";

export default function About() {
  return (
    <div className="stack-lg" style={{ maxWidth: 820 }}>
      <p className="muted">{site.about.summary}</p>
      <p className="muted">{site.about.philosophy}</p>
      <p className="muted">{site.about.collaboration}</p>

      <h3 className="h2" style={{ marginTop: 12 }}>Experience</h3>
      <ul className="stack-lg" style={{ listStyle: "none" }}>
        {site.about.experience?.map((e, i) => (
          <li key={i}><strong>{e.period}</strong> — {e.role}, {e.org}</li>
        ))}
      </ul>

      <h3 className="h2" style={{ marginTop: 12 }}>Education</h3>
      <ul className="stack-lg" style={{ listStyle: "none" }}>
        {site.about.education?.map((ed, i) => (
          <li key={i}><strong>{ed.period}</strong> — {ed.name}, {ed.org}</li>
        ))}
      </ul>

      <h3 className="h2" style={{ marginTop: 12 }}>Skills</h3>
      <div className="grid grid-3">
        <div className="card"><strong>Core</strong><br/>{site.about.skills.core.join(", ")}</div>
        <div className="card"><strong>Programming</strong><br/>{site.about.skills.programming.join(", ")}</div>
        <div className="card"><strong>Databases</strong><br/>{site.about.skills.databases.join(", ")}</div>
        <div className="card"><strong>ML</strong><br/>{site.about.skills.ml.join(", ")}</div>
        <div className="card"><strong>NLP</strong><br/>{site.about.skills.nlp.join(", ")}</div>
        <div className="card"><strong>Visualization</strong><br/>{site.about.skills.viz.join(", ")}</div>
        <div className="card"><strong>Tools</strong><br/>{site.about.skills.tools.join(", ")}</div>
      </div>
    </div>
  );
}


