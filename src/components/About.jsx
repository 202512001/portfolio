import { about, education } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap two-col">
        <div>
          <h2 className="h2">About me</h2>
          {about.map((p, i) => (
            <p key={i} className="body">{p}</p>
          ))}
        </div>
        <div className="panel panel--lav">
          <h3 className="h3">Education</h3>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.school}>
                <div className="edu__top">
                  <strong>{e.school}</strong>
                  <span className="edu__score">{e.score}</span>
                </div>
                <div className="muted">
                  {e.detail} · {e.place} · {e.years}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
