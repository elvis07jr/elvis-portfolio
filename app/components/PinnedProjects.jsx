export default async function PinnedProjects() {
  const username = "elvis07jr";
  try {
    const res = await fetch(
      `https://gh-pinned-repos.egoist.dev/?username=${username}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to load pinned repos");
    const repos = await res.json();

    return (
      <div className="grid grid-2">
        {repos.map((r) => (
          <article key={r.link} className="card">
            <img
              className="thumb"
              src={`https://opengraph.githubassets.com/1/${username}/${r.repo}`}
              alt={`${r.repo} repository preview`}
              style={{ marginBottom: 12 }}
            />
            <strong>{r.repo}</strong>
            <div className="muted">{r.description || ""}</div>
          </article>
        ))}
      </div>
    );
  } catch {
    return null;
  }
}


