"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import { site } from "../../content/site.config";

export default function Shell({ children, services, work, about, awards, contact }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = active ? "hidden" : "auto";
    }
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <Header onOpen={setActive} />
      <main className="container">{children}</main>
      {/* Overlay pages */}
      <div className={`slides-root ${active ? "is-open" : ""}`} aria-live="polite">
        <Slide id="services" title="What I do" active={active} onClose={() => setActive(null)}>
          {services}
        </Slide>
        <Slide id="work" title="Selected works" active={active} onClose={() => setActive(null)}>
          {work}
        </Slide>
        <Slide id="about" title="About" active={active} onClose={() => setActive(null)}>
          {about}
        </Slide>
        <Slide id="awards" title="Awards & Recognitions" active={active} onClose={() => setActive(null)}>
          {awards}
        </Slide>
        <Slide id="contact" title="Start a conversation" active={active} onClose={() => setActive(null)}>
          {contact}
        </Slide>
      </div>
      <footer className="footer">© {new Date().getFullYear()} {site.name}</footer>
    </>
  );
}

function Slide({ id, title, active, onClose, children }) {
  const open = active === id;
  return (
    <div className={`slide-wrap ${open ? "open" : ""}`} hidden={!open}>
      <div className="slide-backdrop" onClick={onClose} />
      <section className={`slide-panel ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-labelledby={`${id}-title`}>
        <header className="slide-header">
          <h2 id={`${id}-title`} className="h2">{title}</h2>
          <button className="slide-close" aria-label="Close" onClick={onClose}>×</button>
        </header>
        <div className="slide-content">{children}</div>
      </section>
    </div>
  );
}



