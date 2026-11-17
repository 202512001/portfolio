import { experience } from "../data.js";

export default function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="wrap">
        <h2 className="h2">Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__head">
                <h3 className="h3">{job.role}</h3>
                <span className="muted">{job.period}</span>
              </div>
              <p className="muted">{job.company} · {job.place}</p>
              <ul className="bullets">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="chips">
                {job.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
