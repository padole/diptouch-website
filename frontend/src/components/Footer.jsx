import { business } from "../data.js";

const socials = [
  { name: "Instagram", url: business.instagramUrl, icon: InstagramIcon },
  { name: "Facebook", url: business.facebookUrl, icon: FacebookIcon },
  { name: "TikTok", url: business.tiktokUrl, icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">
            <img src="media/logo.svg" alt="Diptouch Cleaning Services" width="149" height="67" />
          </span>
          <p>Post-construction, move-in, deep and office cleaning across Lagos.</p>
          <ul className="socials" aria-label="Follow us">
            {socials.map(({ name, url, icon: Icon }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer" aria-label={`Diptouch on ${name}`}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Services</h2>
          <ul>
            <li><a href="#services">Post-construction cleaning</a></li>
            <li><a href="#services">Move-in / move-out cleaning</a></li>
            <li><a href="#services">Deep house cleaning</a></li>
            <li><a href="#services">Office cleaning</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="contact-list">
            <li>
              <PhoneIcon />
              <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <GlobeIcon />
              <a href={business.website}>{business.websiteDisplay}</a>
            </li>
            <li>
              <PinIcon />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="container copyright">
        © {new Date().getFullYear()} {business.name}, Lagos, Nigeria
      </p>
    </footer>
  );
}

const svgProps = {
  className: "icon",
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  "aria-hidden": "true",
  focusable: "false",
};

function PhoneIcon() {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...svgProps} fill="currentColor">
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg {...svgProps} fill="currentColor">
      <path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2-2.8V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8 8 0 0 0 4.6 1.5V6.7a4.6 4.6 0 0 1-4.6-4.7Z" />
    </svg>
  );
}
