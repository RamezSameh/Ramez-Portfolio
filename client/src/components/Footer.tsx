import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal } from '../data/constants';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <p className="eyebrow">{t.footer.question}</p>
          <h2>{t.footer.title} <span>{t.footer.accent}</span></h2>
        </div>
        <Link className="footer-cta" to="/contact">{t.footer.start} <ArrowUpRight size={17} /></Link>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {personal.name}. {t.footer.built}</p>
        <div className="footer-links">
          <a href={personal.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          <a href={`mailto:${personal.email}`}><Mail size={15} /> Email</a>
        </div>
      </div>
    </footer>
  );
}
