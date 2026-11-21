import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#work", label: "Our work" },
  { href: "#process", label: "How it works" },
  { href: "#quote", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Diptouch Cleaning Services, home">
          <img src="media/logo.svg" alt="Diptouch Cleaning Services" width="149" height="67" />
        </a>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#quote" className="btn btn-primary btn-small" onClick={() => setOpen(false)}>
            Get a free quote
          </a>
        </nav>
      </div>
    </header>
  );
}
