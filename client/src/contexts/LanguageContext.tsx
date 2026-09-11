import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const translations = {
  en: {
    languageLabel: 'العربية',
    nav: { home: 'Home', projects: 'Projects', skills: 'Skills', contact: 'Contact', github: 'GitHub', openGithub: 'Open GitHub' },
    home: {
      availability: 'Open to select opportunities', kicker: 'Full Stack .NET Developer', specialization: 'ASP.NET Core + React',
      heroTitle: 'Ramez Sameh', heroOutline: 'Full Stack .NET', heroMiddle: 'ASP.NET Core ', heroAccent: '+ React',
      tagline: 'I build scalable web products with a sharp eye for architecture, performance, and the details users feel.',
      explore: 'Explore my work', hello: 'Say hello', cv: 'View / Download CV', scroll: 'SCROLL TO EXPLORE', cairo: 'CAIRO / EGYPT',
      portraitCaption: 'Full Stack Developer', contextEyebrow: 'About Me', context: "Junior Full Stack .NET Developer with hands-on experience in building web applications using ASP.NET Core, Web API and React. Skilled in SQL Server, Entity Framework, applying OOP and clean code principles. Passionate about learning and building scalable applications.", based: 'Based in Cairo, building for anywhere.',
      selected: 'Selected work', proof: 'Proof in the', projectsWord: 'projects.', seeAll: 'See all projects', how: 'How I work', goodCode: 'Good code is only', half: 'half the story.', sideNote: 'A technical foundation should make the human experience feel effortless.', next: 'Next chapter', cta: 'Have a hard problem?', untangle: "Let's untangle it.", start: 'Start a conversation',
    },
    footer: { question: 'Have a product in mind?', title: "Let's make it", accent: 'work beautifully.', start: 'Start a conversation', built: 'Built with intention.' },
    projects: { eyebrow: 'Selected work / 2024—25', title: 'Systems that are', accent: 'built to move.', description: 'A selection of backend-heavy products and interfaces where architecture, reliability, and a clear user path meet.', aside: 'Every project starts with a question: what should feel simpler when this is finished?', browse: 'Browse GitHub', repositories: '03 repositories', openSource: 'Open source / in progress', architecture: 'Architecture is a product decision.', architectureText: 'Explore the repositories to see the thinking behind each layer.' },
    skills: { eyebrow: 'The toolkit / always evolving', title: 'The right tool', accent: 'for the right layer.', description: 'A focused stack for building complete web products — from a resilient API to the last interaction on screen.', capabilities: 'Core capabilities', intro: 'Not a list of buzzwords — a working set of tools I use to make ideas dependable.', proficiency: 'proficiency', beyond: 'Beyond the stack', tools: 'Tools change.', principles: 'Principles stay.', note: 'I care about the decisions behind the framework: clear boundaries, understandable data, and interfaces that respect people’s attention.', talk: 'Discuss a project' },
    contact: { eyebrow: "Contact / let's talk", title: 'Bring the', accent: 'interesting problems.', description: "Have an idea that needs a thoughtful technical partner? Tell me where you want to go, and I'll get back to you.", email: 'Email', based: 'Location', elsewhere: 'Elsewhere', firstStep: 'A simple first step', tell: 'Tell me the', rough: 'rough version.', note: 'No polished brief required. A few lines about the problem, the ambition, or the constraint is more than enough.', reply: 'Usually replies within 1–2 working days', name: 'Your name', namePlaceholder: 'e.g. Sara Ahmed', emailLabel: 'Your email', emailPlaceholder: 'you@company.com', message: 'What are we solving?', messagePlaceholder: 'A product, a bottleneck, a new idea...', send: 'Send the message', opening: 'Opening your email app', footnote: 'This form opens your default email client — no data is stored on this site.' },
    detail: { back: 'Back to projects', open: 'Open repository', brief: 'The brief', built: 'Built with', repository: 'Repository', openSource: 'Open source', keep: 'Keep exploring', all: 'View all projects', notFound: 'Project not found', doesNot: "doesn't exist." },
  },
  ar: {
    languageLabel: 'English',
    nav: { home: 'الرئيسية', projects: 'المشاريع', skills: 'المهارات', contact: 'تواصل', github: 'جيت هب', openGithub: 'فتح GitHub' },
    home: {
      availability: 'متاح لفرص مختارة', kicker: 'مطور Full Stack .NET', specialization: 'ASP.NET Core + React',
      heroTitle: 'رامز سميح', heroOutline: 'مطور Full Stack .NET ', heroMiddle: 'ASP.NET Core ', heroAccent: '+ React',
      tagline: 'أبني منتجات ويب قابلة للتوسع مع اهتمام عميق بالمعمارية والأداء والتفاصيل التي يشعر بها المستخدم.',
      explore: 'استكشف أعمالي', hello: 'تواصل معي', cv: 'عرض / تحميل السيرة', scroll: 'مرر للاستكشاف', cairo: 'القاهرة / مصر',
      portraitCaption: 'مطور Full Stack', contextEyebrow: 'نبذة سريعة', context: 'مطور برمجيات (Full Stack) بتقنية .NET في بداية مساري المهني، لدي خبرة عملية في بناء تطبيقات الويب باستخدام ASP.NET Core وWeb API وAngular. اتمتع بمهارات في SQL Server وEntity Framework، واتقن تطبيق مبادئ البرمجة كائنية التوجه (OOP) ومبادئ الكود النظيف (Clean Code). لدي شغف كبير بالتعلم وبناء تطبيقات قابلة للتوسع.', based: 'من القاهرة، وأبني منتجات للعالم.',
      selected: 'أعمال مختارة', proof: 'دليل عملي على', projectsWord: 'المشاريع.', seeAll: 'عرض كل المشاريع', how: 'منهجية العمل', goodCode: 'الكود الجيد ليس', half: 'كل الحكاية.', sideNote: 'الأساس التقني القوي يجب أن يجعل تجربة الإنسان أكثر سهولة.', next: 'الخطوة التالية', cta: 'لديك مشكلة صعبة؟', untangle: 'دعنا نفككها معًا.', start: 'ابدأ محادثة',
    },
    footer: { question: 'لديك منتج في ذهنك؟', title: 'لنجعله', accent: 'يعمل بشكل رائع.', start: 'ابدأ محادثة', built: 'صُنع بعناية.' },
    projects: { eyebrow: 'أعمال مختارة / 2024—25', title: 'أنظمة', accent: 'مصممة للتطور.', description: 'مجموعة من المنتجات والواجهات التي تلتقي فيها المعمارية والاعتمادية ومسار المستخدم الواضح.', aside: 'كل مشروع يبدأ بسؤال: ما الشيء الذي يجب أن يصبح أبسط بعد الانتهاء؟', browse: 'تصفح GitHub', repositories: '03 مستودعات', openSource: 'مفتوح المصدر / قيد التطوير', architecture: 'المعمارية قرار من قرارات المنتج.', architectureText: 'استكشف المستودعات لترى طريقة التفكير خلف كل طبقة.' },
    skills: { eyebrow: 'الأدوات / في تطور مستمر', title: 'الأداة المناسبة', accent: 'للطبقة المناسبة.', description: 'مجموعة مركزة لبناء منتجات ويب متكاملة، من API قوي إلى آخر تفاعل على الشاشة.', capabilities: 'القدرات الأساسية', intro: 'ليست قائمة مصطلحات، بل أدوات أستخدمها فعليًا لتحويل الأفكار إلى منتجات موثوقة.', proficiency: 'المستوى', beyond: 'ما وراء الأدوات', tools: 'الأدوات تتغير.', principles: 'المبادئ تبقى.', note: 'أهتم بالقرارات خلف الإطار البرمجي: حدود واضحة، بيانات مفهومة، وواجهات تحترم انتباه الناس.', talk: 'ناقش مشروعًا' },
    contact: { eyebrow: 'تواصل / لنتحدث', title: 'أحضر', accent: 'المشكلات المثيرة.', description: 'هل لديك فكرة تحتاج إلى شريك تقني يفكر معك؟ أخبرني إلى أين تريد الوصول وسأعود إليك.', email: 'البريد الإلكتروني', based: 'الموقع', elsewhere: 'في أماكن أخرى', firstStep: 'خطوة أولى بسيطة', tell: 'أخبرني بالنسخة', rough: 'الأولية من فكرتك.', note: 'لا تحتاج إلى brief متكامل. بضعة أسطر عن المشكلة أو الطموح أو القيد تكفي تمامًا.', reply: 'عادةً ما أرد خلال يوم أو يومي عمل', name: 'اسمك', namePlaceholder: 'مثال: سارة أحمد', emailLabel: 'بريدك الإلكتروني', emailPlaceholder: 'you@company.com', message: 'ما المشكلة التي نحلها؟', messagePlaceholder: 'منتج، عنق زجاجة، فكرة جديدة...', send: 'إرسال الرسالة', opening: 'فتح تطبيق البريد', footnote: 'هذا النموذج يفتح تطبيق البريد الافتراضي ولا يخزن أي بيانات.' },
    detail: { back: 'العودة للمشاريع', open: 'فتح المستودع', brief: 'عن المشروع', built: 'التقنيات', repository: 'المستودع', openSource: 'مفتوح المصدر', keep: 'استكشف المزيد', all: 'عرض كل المشاريع', notFound: 'المشروع غير موجود', doesNot: 'غير موجود.' },
  },
} as const;

type Language = keyof typeof translations;
type Copy = typeof translations.en | typeof translations.ar;
type LanguageContextValue = { language: Language; isArabic: boolean; toggleLanguage: () => void; t: Copy };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('ramez-language') as Language) || 'en');
  const isArabic = language === 'ar';
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem('ramez-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [language, isArabic]);

  const value = useMemo(() => ({ language, isArabic, toggleLanguage: () => setLanguage((current) => current === 'en' ? 'ar' : 'en'), t }), [language, isArabic, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
