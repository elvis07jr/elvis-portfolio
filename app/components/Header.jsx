"use client";

import { useState } from "react";

import { site } from "../../content/site.config";

export default function Header({ onOpen }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-nav">
          <button
            className="brand brand-button"
            onClick={() => {
              onOpen(null);
              setOpen(false);
            }}
            aria-label="Go to home"
          >
            {site.name}
          </button>
          <button
            aria-label="Toggle navigation"
            className="mobile-toggle"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
          <div className="nav-desktop">
            <button className="nav-link" onClick={() => onOpen("services")}>What I Do</button>
            <button className="nav-link" onClick={() => onOpen("work")}>Work</button>
            <button className="nav-link" onClick={() => onOpen("about")}>About</button>
            <button className="nav-link" onClick={() => onOpen("awards")}>Awards</button>
            <button className="nav-link" onClick={() => onOpen("contact")}>Contact</button>
          </div>
        </nav>
      </div>
      {open && (
        <div className="mobile-menu container">
          <button className="nav-link" onClick={() => { onOpen("services"); close(); }}>What I Do</button>
          <button className="nav-link" onClick={() => { onOpen("work"); close(); }}>Work</button>
          <button className="nav-link" onClick={() => { onOpen("about"); close(); }}>About</button>
          <button className="nav-link" onClick={() => { onOpen("awards"); close(); }}>Awards</button>
          <button className="nav-link" onClick={() => { onOpen("contact"); close(); }}>Contact</button>
        </div>
      )}
    </header>
  );
}


