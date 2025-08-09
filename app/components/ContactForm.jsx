"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        setState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="stack-lg" aria-label="Contact form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          required
          value={state.name}
          onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--border)" }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--border)" }}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--border)" }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid var(--border)",
          background: "var(--accent)",
          color: "var(--accent-contrast)",
          fontWeight: 600,
        }}
      >
        {status === "loading" ? "Sending…" : "Send"}
      </button>
      {status === "success" && <div role="status">Thanks! I’ll get back to you soon.</div>}
      {status === "error" && <div role="alert">Something went wrong. Please try again.</div>}
    </form>
  );
}


