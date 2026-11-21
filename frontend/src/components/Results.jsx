import { results } from "../data.js";

export default function Results() {
  return (
    <section className="section results" id="results" aria-labelledby="results-title">
      <div className="container">
        <div className="section-head">
          <h2 id="results-title">Before and after</h2>
          <p>Photos from our own jobs, taken on the day: the space as we found it, and as we left it.</p>
        </div>

        <ul className="result-list">
          {results.map((r) => (
            <li key={r.title} className="result">
              <div className="result-pair">
                <figure>
                  <img src={r.before} alt={r.beforeAlt} loading="lazy" width="900" height="1200" />
                  <figcaption className="result-tag">Before</figcaption>
                </figure>
                <figure>
                  <img src={r.after} alt={r.afterAlt} loading="lazy" width="900" height="1200" />
                  <figcaption className="result-tag result-tag-after">After</figcaption>
                </figure>
              </div>
              <h3>{r.title}</h3>
              <p className="result-service">{r.service}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
