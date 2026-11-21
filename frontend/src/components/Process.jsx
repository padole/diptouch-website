import { steps } from "../data.js";

const clients = [
  "Landlords & estate agents",
  "Shortlet & Airbnb hosts",
  "Developers & contractors",
  "Offices, shops & churches",
  "Families moving home",
];

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head">
          <h2 id="process-title">How booking works</h2>
          <p>Most quotes are sorted on WhatsApp, without anyone needing to visit.</p>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="clients">
          <h3>Who we work with</h3>
          <ul>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
