import { profile } from "../data.js";

const badges = [
  { label: "Next.js", cls: "b1" },
  { label: "RAG + LangGraph", cls: "b2" },
  { label: "Supabase", cls: "b3" },
  { label: "React", cls: "b4" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="hero__hello">Hi, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn" href="#projects">See my projects</a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>
        </div>

        <div className="arches" aria-hidden="true">
          <span className="arch arch--lav" />
          <span className="arch arch--blush" />
          <span className="arch arch--line" />
          <span className="arches__mono">SM</span>
          {badges.map((b) => (
            <span key={b.label} className={"chip chip--float " + b.cls}>{b.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
