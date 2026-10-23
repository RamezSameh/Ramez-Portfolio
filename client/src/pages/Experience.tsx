import { education, experience } from '../data/constants';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

type TimelineEntry = {
  period: string; periodAr: string; role: string; roleAr: string;
  org: string; orgAr: string; description: string; descriptionAr: string; tags: string[];
};

function Timeline({ title, entries }: { title: string; entries: TimelineEntry[] }) {
  const { isArabic } = useLanguage();
  return (
    <div className="timeline-block">
      <Reveal><p className="eyebrow"><span className="eyebrow-line" />{title}</p></Reveal>
      <div className="timeline">
        {entries.map((entry) => (
          <Reveal key={entry.role}>
            <article className="timeline-item">
              <span className="timeline-period">{isArabic ? entry.periodAr : entry.period}</span>
              <div>
                <h3>{isArabic ? entry.roleAr : entry.role}</h3>
                <p className="timeline-org">{isArabic ? entry.orgAr : entry.org}</p>
                <p className="timeline-description">{isArabic ? entry.descriptionAr : entry.description}</p>
                {entry.tags.length > 0 && <div className="tag-list">{entry.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}</div>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, isArabic } = useLanguage();
  const copy = t.experience;
  return (
    <div className="page inner-page">
      <section className="page-hero section-pad">
        <div className="container page-hero-grid">
          <SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title}<br /><span>{copy.accent}</span></>} description={copy.description} />
          <Reveal delay={0.1} className="page-hero-aside"><div className="aside-rule" /><p>{isArabic ? 'التركيز الحالي: أدوار Full Stack .NET.' : 'Current focus: Full Stack .NET roles.'}</p></Reveal>
        </div>
      </section>
      <section className="experience-section section-pad section-dark">
        <div className="container">
          <Timeline title={copy.work} entries={experience} />
          <Timeline title={copy.education} entries={education} />
        </div>
      </section>
    </div>
  );
}
