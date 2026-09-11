import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Github, Layers3, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/constants';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const [activeImage, setActiveImage] = useState(0);
  const { t, isArabic } = useLanguage();
  const copy = t.detail;
  const projectName = project && (isArabic ? project.nameAr : project.name);
  const projectEyebrow = project && (isArabic ? project.eyebrowAr : project.eyebrow);
  const projectDescription = project && (isArabic ? project.descriptionAr : project.description);
  const projectLongDescription = project && (isArabic ? project.longDescriptionAr : project.longDescription);

  if (!project) {
    return <div className="page not-found section-pad"><div className="container"><p className="eyebrow"><span className="eyebrow-line" />{copy.notFound}</p><h1>{isArabic ? 'هذا المشروع' : 'This project'}<br /><span>{copy.doesNot}</span></h1><Link className="button button-primary" to="/projects"><ArrowLeft size={16} /> {copy.back}</Link></div></div>;
  }

  const nextImage = () => setActiveImage((current) => (current + 1) % project.gallery.length);
  const previousImage = () => setActiveImage((current) => (current - 1 + project.gallery.length) % project.gallery.length);

  return (
    <div className="page project-detail-page inner-page">
      <section className="project-detail-hero section-pad">
        <div className="container">
          <Link className="back-link" to="/projects"><ArrowLeft size={15} /> {copy.back}</Link>
          <div className="detail-heading-grid">
            <Reveal><p className="eyebrow"><span className="eyebrow-line" />{project.number} / {projectEyebrow}</p><h1>{projectName}<br /><span>{project.tags.join(' · ')}</span></h1></Reveal>
            <Reveal delay={0.08} className="detail-heading-aside"><p>{projectLongDescription}</p><a className="text-link" href={project.github} target="_blank" rel="noreferrer">{copy.open} <ArrowUpRight size={16} /></a></Reveal>
          </div>
        </div>
      </section>

      <section className="detail-gallery-section section-pad section-dark">
        <div className="container">
          <Reveal>
            <div className="detail-gallery">
              <div className="detail-gallery-main"><img src={project.gallery[activeImage]} alt={`${projectName} interface screenshot ${activeImage + 1}`} /><div className="gallery-counter">0{activeImage + 1} <span>/ 0{project.gallery.length}</span></div><button className="gallery-arrow gallery-prev" type="button" aria-label="Previous screenshot" onClick={previousImage}><ChevronLeft size={20} /></button><button className="gallery-arrow gallery-next" type="button" aria-label="Next screenshot" onClick={nextImage}><ChevronRight size={20} /></button></div>
              <div className="gallery-thumbs" role="tablist" aria-label={`${projectName} screenshots`}>{project.gallery.map((image, index) => <button key={image} type="button" role="tab" aria-selected={activeImage === index} aria-label={`Show screenshot ${index + 1}`} className={`gallery-thumb ${activeImage === index ? 'active' : ''}`} onClick={() => setActiveImage(index)}><img src={image} alt="" /></button>)}</div>
            </div>
          </Reveal>

          <div className="detail-info-grid">
            <Reveal><div className="detail-info-block"><p className="eyebrow"><span className="eyebrow-line" />{copy.brief}</p><p>{projectDescription}</p></div></Reveal>
            <Reveal delay={0.08}><div className="detail-info-block"><p className="eyebrow"><span className="eyebrow-line" />{copy.built}</p><div className="detail-tech-list">{project.technologies.map((technology) => <span key={technology}><Layers3 size={13} />{technology}</span>)}</div></div></Reveal>
            <Reveal delay={0.16}><div className="detail-info-block"><p className="eyebrow"><span className="eyebrow-line" />{copy.repository}</p><a className="detail-repo" href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> {project.repo} <ArrowUpRight size={15} /></a><span className="detail-status"><Star size={13} fill="currentColor" /> {copy.openSource}</span></div></Reveal>
          </div>
        </div>
      </section>

      <section className="detail-next section-pad"><div className="container detail-next-inner"><p className="eyebrow"><span className="eyebrow-line" />{copy.keep}</p><Link className="detail-next-link" to="/projects">{copy.all} <ArrowUpRight size={18} /></Link></div></section>
    </div>
  );
}
