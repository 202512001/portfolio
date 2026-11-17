import { profile } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__inner">
        <h2 className="h2">Let's work together</h2>
        <p className="body">
          I'm open to internships and full-time roles in full-stack and AI-powered product development.
          The quickest way to reach me is email.
        </p>
        <div className="hero__actions contact__actions">
          <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="muted foot">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
      </div>
    </section>
  );
}
