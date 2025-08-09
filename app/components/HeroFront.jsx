"use client";
import { site } from "../../content/site.config";

export default function HeroFront() {
  return (
    <section className="front" aria-label="Hero">
      {/* background layers removed per request */}

      <div className="front-hero">
        <div className="subtitle">DATA SCIENCE / MACHINE LEARNING</div>
        <h1 className="title">{site.title}</h1>
        <p className="description">
          Transforming data into insights and building intelligent solutions that drive innovation and growth.
        </p>

        <div className="traits-container">
          <div className="trait-card">
            <div className="trait-icon">🧠</div>
            <h3 className="trait-title">Curious mind</h3>
            <p className="trait-description">Always exploring new technologies and methodologies to solve complex problems</p>
          </div>
          <div className="trait-card">
            <div className="trait-icon">🛠️</div>
            <h3 className="trait-title">Pragmatic builder</h3>
            <p className="trait-description">Focused on creating practical solutions that deliver real-world value</p>
          </div>
          <div className="trait-card">
            <div className="trait-icon">🤝</div>
            <h3 className="trait-title">Creative partner</h3>
            <p className="trait-description">Collaborating to transform ideas into innovative data-driven products</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .front {
          position: relative;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 20px 40px;
          overflow: hidden;
          border-radius: 0;
        }
        /* removed panel/circle backgrounds */

        .front-hero { text-align: center; max-width: 960px; margin: 0 auto; }
        .subtitle { font-size: 16px; font-weight: 700; letter-spacing: 3px; color: rgba(255,255,255,0.7); margin-bottom: 16px; text-transform: uppercase; }
        .title { font-size: clamp(38px, 6vw, 64px); font-weight: 800; line-height: 1.08; margin-bottom: 20px; background: linear-gradient(90deg, #ffffff, #e0e0e0); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -0.5px; }
        .description { font-size: 18px; color: rgba(255,255,255,0.85); margin: 0 auto 40px; max-width: 720px; }

        .traits-container { display: flex; justify-content: center; align-items: stretch; gap: 24px; margin-top: 20px; flex-wrap: wrap; max-width: 1040px; margin-left: auto; margin-right: auto; }
        .trait-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 24px; width: 280px; height: 220px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; transition: all .3s ease; border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden; }
        .trait-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(138,43,226,.1), rgba(0,191,255,.1)); opacity: 0; transition: opacity .3s ease; }
        .trait-card:hover { transform: translateY(-10px); box-shadow: 0 10px 30px rgba(0,0,0,.3); }
        .trait-card:hover::before { opacity: 1; }
        .trait-icon { font-size: 34px; margin-bottom: 14px; }
        .trait-title { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .trait-description { font-size: 15px; color: rgba(255,255,255,0.85); line-height: 1.45; }

        @media (max-width: 768px) {
          .subtitle { font-size: 14px; letter-spacing: 2px; }
          .title { font-size: clamp(32px, 8vw, 46px); }
          .description { font-size: 16px; }
          .trait-card { width: 90%; max-width: 320px; height: auto; }
        }
      `}</style>
    </section>
  );
}


