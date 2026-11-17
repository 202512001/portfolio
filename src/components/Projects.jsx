import { useState } from "react";
import { projects } from "../data.js";

function Project({ p }) {
  const [open, setOpen] = useState(!!p.featured);
  const shown = open ? p.points : p.points.slice(0, 1);

  return (
    <article className={`project project--${p.tone}` + (p.featured ? " project--featured" : "")}>
      <div className="project__arch" aria-hidden="true">
        <span>{p.title.slice(0, 1)}</span>
      </div>
      <div className="project__body">
        <p className="project__highlight">{p.highlight}</p>
        <h3 className="h3 project__title">{p.title}</h3>
        <p className="muted">{p.subtitle}</p>

        <ul className="bullets">
          {shown.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>

        {p.points.length > 1 && !p.featured && (
          <button className="linkbtn" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? "Show less" : `Show ${p.points.length - 1} more`}
          </button>
        )}

        <div className="chips">
          {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>

        {p.links.length > 0 && (
          <div className="project__links">
            {p.links.map((l) => (
              <a key={l.label} className="btn btn--small" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <h2 className="h2">Projects</h2>
        <div className="projects">
          {projects.map((p) => <Project key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
