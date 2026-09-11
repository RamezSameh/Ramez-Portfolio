import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navLinks, personal } from '../data/constants';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage, isArabic } = useLanguage();
  const labels = [t.nav.home, t.nav.projects, t.nav.skills, t.nav.contact];

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)} aria-label={`${personal.name} home`}>
          <span className="brand-mark">RS</span>
          <span className="brand-name">Ramez<span>.</span></span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {labels[indexOfNav(link.to)]}
            </NavLink>
          ))}
        </nav>

        <a className="nav-github" href={personal.github} target="_blank" rel="noreferrer">
          {t.nav.github} <ArrowUpRight size={14} />
        </a>
        <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label="Switch language"><span>{isArabic ? 'EN' : 'ع'}</span>{t.languageLabel}</button>

        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <div className="container mobile-nav-inner">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>0{index + 1}</span>{labels[index]}
            </NavLink>
          ))}
          <a className="mobile-nav-github" href={personal.github} target="_blank" rel="noreferrer">
            {t.nav.openGithub} <ArrowUpRight size={16} />
          </a>
          <button className="mobile-language-toggle" type="button" onClick={() => { toggleLanguage(); setOpen(false); }}><span>{isArabic ? 'EN' : 'ع'}</span>{t.languageLabel}</button>
        </div>
      </div>
    </header>
  );
}

function indexOfNav(to: string) {
  return ['/', '/projects', '/skills', '/contact'].indexOf(to);
}
