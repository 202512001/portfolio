import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="wrap">
        <h2 className="h2">Skills</h2>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group} className="skills__group">
              <h3 className="h4">{g.group}</h3>
              <div className="chips">
                {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
