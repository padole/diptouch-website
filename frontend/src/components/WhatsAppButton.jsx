import { waLink } from "../data.js";
import { WhatsAppIcon } from "./Hero.jsx";

// Floating WhatsApp shortcut, shown on small screens only (see styles.css).
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={waLink("Hello Diptouch, I'd like a quote for a cleaning job.")}
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon /> Chat on WhatsApp
    </a>
  );
}
