import { involvement } from "../data.js";

export default function Involvement() {
  return (
    <section className="section" id="involvement">
      <div className="wrap">
        <div className="panel panel--blush involvement">
          <h2 className="h2">Beyond code</h2>
          <h3 className="h3">{involvement.title}</h3>
          <p className="muted">{involvement.period}</p>
          <ul className="bullets">
            {involvement.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
