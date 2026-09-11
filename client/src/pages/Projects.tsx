import { ArrowUpRight, GitBranch, Terminal } from 'lucide-react';
import { personal, projects } from '../data/constants';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const copy = t.projects;
  return (
    <div className="page inner-page">
      <section className="page-hero section-pad">
        <div className="container page-hero-grid">
          <SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title}<br /><span>{copy.accent}</span></>} description={copy.description} />
          <Reveal delay={0.1} className="page-hero-aside"><div className="aside-rule" /><p>{copy.aside}</p><a className="text-link" href={personal.github} target="_blank" rel="noreferrer">{copy.browse} <ArrowUpRight size={16} /></a></Reveal>
        </div>
      </section>
      <section className="projects-list-section section-pad section-dark">
        <div className="container">
          <div className="project-list-header"><span>{copy.repositories}</span><span><GitBranch size={14} /> {copy.openSource}</span></div>
          <div className="project-grid projects-page-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
          <Reveal><div className="architecture-strip"><Terminal size={20} /><div><strong>{copy.architecture}</strong><span>{copy.architectureText}</span></div><a href={personal.github} target="_blank" rel="noreferrer" aria-label="Open GitHub"><ArrowUpRight size={18} /></a></div></Reveal>
        </div>
      </section>
    </div>
  );
}
