import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/constants';
import { useLanguage } from '../contexts/LanguageContext';

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  index?: number;
};

export function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  const [stars, setStars] = useState<number | null>(null);
  const navigate = useNavigate();
  const { isArabic } = useLanguage();
  const name = isArabic ? project.nameAr : project.name;
  const description = isArabic ? project.descriptionAr : project.description;
  const eyebrow = isArabic ? project.eyebrowAr : project.eyebrow;

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/repos/${project.repo}`, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => { if (data && typeof data.stargazers_count === 'number') setStars(data.stargazers_count); })
      .catch(() => undefined);
    return () => controller.abort();
  }, [project.repo]);

  return (
    <motion.article
      className={`project-card ${featured ? 'featured' : ''} accent-${project.accent}`}
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/projects/${project.id}`)}
      onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') navigate(`/projects/${project.id}`); }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="project-card-top">
        <div className="project-index">{project.number} <span>/ {String(projects.length).padStart(2, '0')}</span></div>
        <div className="project-card-actions">
          <span className="star-count"><Star size={13} fill="currentColor" /> {stars ?? project.stars}</span>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${name} on GitHub`} onClick={(event) => event.stopPropagation()}><Github size={17} /></a>
        </div>
      </div>
      <div className="project-visual" aria-hidden="true">
        <img className="project-image" src={project.image} alt="" loading="lazy" />
        <div className="project-image-shade" />
        <span className="visual-label">{project.tags[0]}</span>
        <span className="visual-code">{project.visualCode}</span>
      </div>
      <div className="project-card-body">
        <p className="project-eyebrow">{eyebrow}</p>
        <h3>{name}</h3>
        <p className="project-description">{description}</p>
        <div className="tag-list">
          {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
        </div>
        <span className="project-link">{isArabic ? 'عرض تفاصيل المشروع' : 'View case study'} <ArrowUpRight size={15} /></span>
      </div>
    </motion.article>
  );
}
