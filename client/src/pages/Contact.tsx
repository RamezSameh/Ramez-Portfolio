import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Github, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/constants';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  const copy = t.contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}

Reply to: ${data.get('email')}`);
    setSent(true);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="page inner-page contact-page">
      <section className="page-hero section-pad">
        <div className="container contact-hero-grid">
          <SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title}<br /><span>{copy.accent}</span></>} description={copy.description} />
          <Reveal delay={0.1} className="contact-details"><div className="detail-item"><Mail size={18} /><div><span>{copy.email}</span><a href={`mailto:${personal.email}`}>{personal.email}</a></div></div><div className="detail-item"><MapPin size={18} /><div><span>{copy.based}</span><strong>{personal.location}</strong></div></div><div className="detail-item"><Github size={18} /><div><span>{copy.elsewhere}</span><a href={personal.github} target="_blank" rel="noreferrer">github.com/RamezSameh</a></div></div></Reveal>
        </div>
      </section>
      <section className="contact-form-section section-pad section-dark">
        <div className="container contact-form-grid">
          <Reveal><div className="form-aside"><p className="eyebrow"><span className="eyebrow-line" />{copy.firstStep}</p><h2>{copy.tell}<br /><span>{copy.rough}</span></h2><p>{copy.note}</p><div className="form-aside-note">{copy.reply} <span>↗</span></div></div></Reveal>
          <Reveal delay={0.1}><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">{copy.name}<input id="name" name="name" placeholder={copy.namePlaceholder} required /></label><label htmlFor="email">{copy.emailLabel}<input id="email" name="email" type="email" placeholder={copy.emailPlaceholder} required /></label><label htmlFor="message">{copy.message}<textarea id="message" name="message" rows={6} placeholder={copy.messagePlaceholder} required /></label><button className="button button-primary form-submit" type="submit">{sent ? <>{copy.opening} <Check size={16} /></> : <>{copy.send} <ArrowUpRight size={17} /></>}</button><p className="form-footnote">{copy.footnote}</p></form></Reveal>
        </div>
      </section>
    </div>
  );
}
