import { work, jobPhotos, business } from "../data.js";

export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Real jobs, filmed on site</h2>
          <p>
            No stock photos. These are homes our team cleaned across Lagos, filmed and photographed on the job.
          </p>
        </div>

        <ul className="reels">
          {work.map((w) => (
            <li key={w.video} className="reel">
              <video
                src={w.video}
                poster={w.poster}
                controls
                muted
                playsInline
                preload="none"
                aria-label={w.title}
              />
              <p>{w.title}</p>
            </li>
          ))}
        </ul>

        <ul className="job-photos">
          {jobPhotos.map((p) => (
            <li key={p.src}>
              <figure>
                <img src={p.src} alt={p.alt} loading="lazy" width="900" height="1200" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="work-more">
          See more on Instagram:{" "}
          <a href={business.instagramUrl} target="_blank" rel="noreferrer">
            @{business.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
