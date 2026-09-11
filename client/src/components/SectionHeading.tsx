import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === 'center' ? 'centered' : ''}`}>
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
