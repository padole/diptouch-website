import { services } from "../data.js";

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <h2 id="services-title">What we clean</h2>
          <p>
            Every job starts with a look at the space, so you pay for the work it actually needs.
          </p>
        </div>

        <ul className="service-list">
          {services.map((s) => (
            <li key={s.id} className="service">
              <h3>{s.name}</h3>
              <p className="service-text">{s.text}</p>
              <p className="service-for">
                <span>Best for</span> {s.for}
              </p>
              <a
                className="service-link"
                href="#quote"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("diptouch:service", { detail: s.id }))
                }
              >
                Ask for a quote
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
