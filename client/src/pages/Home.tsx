import { ArrowDownRight, ArrowUpRight, Download, Github, Layers3, Mail, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal, principles, projects } from '../data/constants';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t, isArabic } = useLanguage();
  const home = t.home;
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <div className="status-pill"><span className="status-dot" /> {home.availability}</div>
              <h1>{home.heroTitle}<br /></h1>
              <h2><em>{home.heroOutline}</em> <br />{home.heroMiddle}<span>{home.heroAccent}</span></h2>
              <p className="hero-description">{home.tagline}</p>
              <div className="hero-actions">
                <Link className="button button-primary" to="/projects">{home.explore} <ArrowUpRight size={17} /></Link>
                <a className="button button-ghost" href={`mailto:${personal.email}`}>{home.hello} <Mail size={16} /></a>
                <a className="button button-ghost button-cv" href={personal.cv} target="_blank" rel="noreferrer">{home.cv} <Download size={16} /></a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="hero-art-wrap">
            <div className="hero-art" aria-label="Abstract system architecture illustration">
              <img className="rounded-full object-cover" alt="Ramez Sameh" src={personal.profilePic} />

            </div>
          </Reveal>
        </div>
        <div className="container hero-meta"><span>{home.scroll}</span><ArrowDownRight size={16} /><span className="hero-meta-rule" /><span>{home.cairo}</span></div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" />{home.contextEyebrow}</p></Reveal>
          <Reveal delay={0.08}><div><p className="intro-statement">{home.context}</p><div className="intro-subline"><MapPin size={15} /> {home.based}</div></div></Reveal>
        </div>
      </section>

      <section className="work-section section-pad section-dark">
        <div className="container">
          <Reveal><div className="section-topline"><div><p className="eyebrow"><span className="eyebrow-line" />{home.selected}</p><h2>{home.proof} <span>{home.projectsWord}</span></h2></div><Link className="text-link" to="/projects">{home.seeAll} <ArrowUpRight size={16} /></Link></div></Reveal>
          <div className="project-grid featured-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} index={index} />)}</div>
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="container">
          <Reveal><div className="section-topline"><div><p className="eyebrow"><span className="eyebrow-line" />{home.how}</p><h2>{home.goodCode}<br /><span>{home.half}</span></h2></div><p className="section-side-note">{home.sideNote}</p></div></Reveal>
          <div className="principles-grid">{principles.map((principle, index) => <Reveal key={principle.label} delay={index * 0.08}><div className="principle"><span className="principle-number">{principle.label}</span><h3>{isArabic ? ['المعمارية بوعي', 'الأداء ميزة', 'تفاصيل تبني الثقة'][index] : principle.title}</h3><p>{isArabic ? ['اختر أنماطًا تجعل بناء الميزة التالية أسهل، لا مجرد العرض الحالي.', 'واجهات سريعة ووصول مدروس للبيانات وتجربة متجاوبة.', 'حالات واضحة وتفاعلات مرنة في كل طبقة.'][index] : principle.text}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="home-cta section-pad"><div className="container cta-panel"><div><p className="eyebrow"><span className="eyebrow-line" />{home.next}</p><h2>{home.cta}<br /><span>{home.untangle}</span></h2></div><Link className="button button-primary" to="/contact">{home.start} <ArrowUpRight size={17} /></Link></div></section>
    </div>
  );
}
