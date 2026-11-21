import { useEffect, useId, useState } from "react";
import { areas, business, services, waLink } from "../data.js";
import { WhatsAppIcon } from "./Hero.jsx";

const empty = {
  name: "",
  phone: "",
  area: "",
  service: "",
  property: "",
  date: "",
  details: "",
};

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Enter a phone number we can call or WhatsApp, e.g. 0803 123 4567.";
  if (!v.service) errors.service = "Choose the type of cleaning you need.";
  if (!v.area) errors.area = "Choose the area of Lagos the job is in.";
  return errors;
}

function buildMessage(v) {
  const service = services.find((s) => s.id === v.service)?.name ?? v.service;
  const lines = [
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Service: ${service}`,
    `Area: ${v.area}`,
    v.property && `Property: ${v.property}`,
    v.date && `Preferred date: ${v.date}`,
    v.details && `Details: ${v.details}`,
  ].filter(Boolean);
  return `Hello Diptouch, I'd like a cleaning quote.\n\n${lines.join("\n")}`;
}

export default function QuoteForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const uid = useId();

  // Pre-select a service when a visitor clicks "Ask for a quote" on a service.
  useEffect(() => {
    const onPick = (e) => setValues((v) => ({ ...v, service: e.detail }));
    window.addEventListener("diptouch:service", onPick);
    return () => window.removeEventListener("diptouch:service", onPick);
  }, []);

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = document.getElementById(`${uid}-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }
    // Backend step (after approval): POST the request to /api/quotes so it is saved,
    // then open WhatsApp. For now the request goes straight to WhatsApp.
    window.open(waLink(buildMessage(values)), "_blank", "noopener");
    setSent(true);
  };

  const field = (name) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange: set(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });

  const err = (name) =>
    errors[name] && (
      <p className="field-error" id={`${uid}-${name}-err`}>
        {errors[name]}
      </p>
    );

  return (
    <section className="section quote" id="quote" aria-labelledby="quote-title">
      <div className="container quote-grid">
        <div className="quote-intro">
          <h2 id="quote-title">Get a free quote</h2>
          <p>
            Tell us about the space. Your request opens in WhatsApp, ready to send to us. Prefer
            to talk? Call us.
          </p>
          <dl className="contact-list">
            <div>
              <dt>Call or WhatsApp</dt>
              <dd>
                <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={business.instagramUrl} target="_blank" rel="noreferrer">
                  @{business.instagram}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="quote-form" onSubmit={onSubmit} noValidate>
          {sent && (
            <div className="form-note" role="status">
              <strong>WhatsApp opened with your request.</strong> Tap Send there and we'll reply
              with your quote. Nothing opened?{" "}
              <a href={waLink(buildMessage(values))} target="_blank" rel="noreferrer">
                Open WhatsApp again
              </a>
              .
            </div>
          )}

          <div className="row">
            <div className="field">
              <label htmlFor={`${uid}-name`}>Your name</label>
              <input type="text" autoComplete="name" {...field("name")} />
              {err("name")}
            </div>
            <div className="field">
              <label htmlFor={`${uid}-phone`}>Phone / WhatsApp</label>
              <input type="tel" autoComplete="tel" inputMode="tel" {...field("phone")} />
              {err("phone")}
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor={`${uid}-service`}>Type of cleaning</label>
              <select {...field("service")}>
                <option value="">Choose one</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              {err("service")}
            </div>
            <div className="field">
              <label htmlFor={`${uid}-area`}>Area in Lagos</label>
              <select {...field("area")}>
                <option value="">Choose one</option>
                {areas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              {err("area")}
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor={`${uid}-property`}>
                Property <span className="optional">optional</span>
              </label>
              <input type="text" placeholder="e.g. 3-bedroom flat, office floor" {...field("property")} />
            </div>
            <div className="field">
              <label htmlFor={`${uid}-date`}>
                Preferred date <span className="optional">optional</span>
              </label>
              <input type="date" {...field("date")} />
            </div>
          </div>

          <div className="field">
            <label htmlFor={`${uid}-details`}>
              Anything we should know <span className="optional">optional</span>
            </label>
            <textarea rows="4" placeholder="Condition of the space, access, parking, deadlines…" {...field("details")} />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            <WhatsAppIcon /> Send request on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
