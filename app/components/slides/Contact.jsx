import { site } from "../../../content/site.config";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="stack-lg" style={{ maxWidth: 560 }}>
      <p>
        Phone: <a href={`tel:${site.phone?.replace(/\s+/g, "")}`}>{site.phone}</a><br/>
        Email: <a href={`mailto:${site.email}`}>{site.email}</a><br/>
        You can also find me on {site.socials.map((s, i) => (
          <span key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            {i < site.socials.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
      <ContactForm />
    </div>
  );
}


