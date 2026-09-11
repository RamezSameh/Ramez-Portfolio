import { ArrowUpRight, Atom, Braces, Cloud, Container, Database, GitBranch, Radio, Server } from 'lucide-react';
import { personal, skills } from '../data/constants';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = { braces: Braces, server: Server, atom: Atom, database: Database, container: Container, radio: Radio, cloud: Cloud, 'git-branch': GitBranch } as const;

export default function Skills() {
  const { t, isArabic } = useLanguage();
  const copy = t.skills;
  return (
    <div className="page inner-page">
      <section className="page-hero section-pad">
        <div className="container page-hero-grid">
          <SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title}<br /><span>{copy.accent}</span></>} description={copy.description} />
          <Reveal delay={0.1} className="page-hero-aside"><div className="code-card"><div className="code-card-top"><span /><span /><span /><small>stack.config</small></div><pre>{`const approach = {
  backend: "clean",
  frontend: "human",
  delivery: "reliable"
}`}</pre></div></Reveal>
        </div>
      </section>
      <section className="skills-section section-pad section-dark">
        <div className="container">
          <div className="skills-intro"><p className="eyebrow"><span className="eyebrow-line" />{copy.capabilities}</p><p>{copy.intro}</p></div>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon as keyof typeof iconMap];
              return <Reveal key={skill.name} delay={index * 0.05}><article className="skill-card"><div className="skill-card-top"><div className="skill-icon"><Icon size={19} /></div><span>{skill.category}</span></div><h3>{skill.name}</h3><p>{isArabic ? ({ Backend: 'البرمجة الخلفية', Frontend: 'الواجهات', Data: 'البيانات', DevOps: 'التشغيل', Platform: 'المنصة', Cloud: 'السحابة', Workflow: 'سير العمل' } as Record<string, string>)[skill.category] : skill.detail}</p><div className="skill-meter"><span style={{ width: `${skill.level}%` }} /></div><div className="skill-level"><span>{copy.proficiency}</span><strong>{skill.level}%</strong></div></article></Reveal>;
            })}
          </div>
        </div>
      </section>
      <section className="stack-note section-pad"><div className="container stack-note-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{copy.beyond}</p><h2>{copy.tools}<br /><span>{copy.principles}</span></h2></div><div><p className="stack-note-copy">{copy.note}</p><a className="text-link" href={`mailto:${personal.email}`}>{copy.talk} <ArrowUpRight size={16} /></a></div></div></section>
    </div>
  );
}
