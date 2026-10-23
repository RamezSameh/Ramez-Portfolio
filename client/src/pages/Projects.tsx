import { useState } from 'react';
import { ArrowUpRight, GitBranch, Terminal } from 'lucide-react';
import { personal, projects } from '../data/constants';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

// Curated tech groups (each matches at least one project; keeps the filter row short).
const FILTERS = ['All', 'ASP.NET', 'Angular', 'SQL / EF Core', 'JavaScript', 'AI'] as const;
type Filter = (typeof FILTERS)[number];

function matchesFilter(project: (typeof projects)[number], filter: Filter): boolean {
  if (filter === 'All') return true;
  const tech = project.technologies.join(' ');
  if (filter === 'ASP.NET') return tech.includes('ASP.NET');
  if (filter === 'Angular') return tech.includes('Angular');
  if (filter === 'SQL / EF Core') return tech.includes('SQL Server') || tech.includes('EF Core');
  if (filter === 'JavaScript') return tech.includes('JavaScript');
  if (filter === 'AI') return tech.includes('Gemini');
  return false;
}

export default function Projects() {
  const { t } = useLanguage();
  const copy = t.projects;
  const [filter, setFilter] = useState<Filter>('All');
  const visible = projects.filter((project) => matchesFilter(project, filter));
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
          <div className="project-list-header"><span>{String(visible.length).padStart(2, '0')} {copy.repositories}</span><span><GitBranch size={14} /> {copy.openSource}</span></div>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {FILTERS.map((name) => (
              <button key={name} type="button" className={`filter-button ${filter === name ? 'active' : ''}`} aria-pressed={filter === name} onClick={() => setFilter(name)}>
                {name === 'All' ? copy.all : name}
              </button>
            ))}
          </div>
          {visible.length < projects.length && <p className="filter-count">{copy.showing} {visible.length} / {projects.length}</p>}
          {visible.length === 0
            ? <p className="filter-empty">{copy.noResults}</p>
            : <div className="project-grid projects-page-grid">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>}
          <Reveal><div className="architecture-strip"><Terminal size={20} /><div><strong>{copy.architecture}</strong><span>{copy.architectureText}</span></div><a href={personal.github} target="_blank" rel="noreferrer" aria-label="Open GitHub"><ArrowUpRight size={18} /></a></div></Reveal>
        </div>
      </section>
    </div>
  );
}
