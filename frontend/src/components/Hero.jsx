import BeforeAfter from "./BeforeAfter.jsx";
import { business, waLink } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>From building site to move&#8209;in ready.</h1>
          <p className="lede">
            Post-construction, move-in and deep cleaning across Lagos. Send us photos of the
            space on WhatsApp and we'll send you a quote.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#quote">
              Get a free quote
            </a>
            <a
              className="btn btn-ghost"
              href={waLink("Hello Diptouch, I'd like a quote for a cleaning job.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> WhatsApp {business.phoneDisplay}
            </a>
          </div>
          <ul className="hero-points">
            <li>Free quotes on WhatsApp</li>
            <li>Homes, offices, shortlets and new builds</li>
            <li>Lagos Island and Mainland</li>
          </ul>
        </div>

        <figure className="hero-figure">
          <BeforeAfter
            before="media/hero-before.jpg"
            after="media/hero-after.jpg"
            beforeAlt="A new apartment floor covered in cement, broken blocks and debris"
            afterAlt="The same apartment after cleaning, with shining black marble floor tiles"
          />
          <figcaption>
            Drag to compare. A post-construction job by our team, before and after.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function WhatsAppIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z"
      />
    </svg>
  );
}
