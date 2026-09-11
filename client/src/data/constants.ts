export const personal = {
  name: 'Ramez Sameh',
  role: 'Full Stack .NET Developer',
  specialization: 'ASP.NET Core + React',
  tagline: 'I build scalable web products with a sharp eye for architecture, performance, and the details users feel.',
  shortBio: 'Passionate about building scalable web applications with clean code and reliable system performance.',
  location: 'Cairo, Egypt',
  availability: 'Open to select opportunities',
  github: 'https://github.com/RamezSameh/',
  email: 'samehramez24@gmail.com',
  cv: 'https://drive.google.com/file/d/15HHBvvafJ1P4arIGcKNGw_h2jeG88ii-/view?usp=drive_link',
  profilePic: 'Pics/myPicture.png',
  LinkedIn: 'https://www.linkedin.com/in/ramez-sameh/',
  Whatsapp: 'https://wa.me/201555317628',

};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

export const projects = [
  {
    id: 'sakan-talaba',
    number: '01',
    name: 'Sakan Talaba',
    nameAr: 'سكن طلبة', eyebrowAr: 'منصة سكن الطلاب', descriptionAr: 'منصة متكاملة تربط الطلاب بالسكن المناسب، من الاستكشاف والتوصيات الجغرافية إلى المحادثات اللحظية.', longDescriptionAr: 'تجربة سكن متكاملة مع مصادقة JWT ومحادثات SignalR ورفع الصور عبر Cloudinary وتوصيات تعتمد على البيانات المكانية.',
    eyebrow: 'Student Housing Platform',
    description: 'An end-to-end platform connecting students with the right housing — from discovery and spatial recommendations to real-time conversations.',
    longDescription: 'A production-minded housing experience with JWT authentication, SignalR chat, Cloudinary image uploads, and spatial data recommendations that make finding a place feel local and personal.',
    technologies: ['ASP.NET Core 8', 'SQL Server', 'SignalR', 'JWT', 'Repository Pattern'],
    tags: ['Full Stack', 'Real-time', 'Spatial Data'],
    github: 'https://github.com/RamezSameh/Student-Housing-Platform',
    repo: 'RamezSameh/Student-Housing-Platform',
    image: '/manus-storage/sakan-talaba_e7665fa0.png',
    gallery: ['/manus-storage/sakan-talaba_e7665fa0.png', '/manus-storage/sakan-talaba-detail_88fa9927.png'],
    stars: 0,
    accent: 'indigo',
  },
  {
    id: 'ecommerce-api',
    number: '02',
    name: 'ECommerce.API',
    nameAr: 'ECommerce.API', eyebrowAr: 'بنية التجارة الإلكترونية', descriptionAr: 'واجهة API نظيفة وقابلة للصيانة لتطبيقات التجارة الإلكترونية مع فصل واضح بين Core وApplication وInfrastructure.', longDescriptionAr: 'واجهة تجارة إلكترونية تضع المعمارية أولًا، وتحافظ على منطق الأعمال مستقلًا وقابلًا للاختبار وجاهزًا للتوسع.',
    eyebrow: 'Commerce Infrastructure',
    description: 'A clean, maintainable API foundation for e-commerce applications with a strict separation between Core, Application, and Infrastructure.',
    longDescription: 'An architecture-first commerce API designed to keep business logic independent, testable, and ready for the next feature without creating a dependency maze.',
    technologies: ['ASP.NET Core', 'Entity Framework Core', 'Clean Architecture', 'AutoMapper'],
    tags: ['API Design', 'Clean Architecture'],
    github: 'https://github.com/RamezSameh/ECommerce.API',
    repo: 'RamezSameh/ECommerce.API',
    image: '/manus-storage/ecommerce-api_a3596844.png',
    gallery: ['/manus-storage/ecommerce-api_a3596844.png', '/manus-storage/ecommerce-api-detail_d1721446.png'],
    stars: 0,
    accent: 'violet',
  },
  {
    id: 'bookify',
    number: '03',
    name: 'Bookify',
    nameAr: 'Bookify', eyebrowAr: 'نظام إدارة الحجوزات', descriptionAr: 'نظام موثوق لإدارة الحجوزات مع إعداد جاهز لـ Docker وتنظيم N-Tier وأنماط Repository وUnit of Work.', longDescriptionAr: 'نظام حجوزات عملي يجمع بين ASP.NET MVC وطبقة خدمات منظمة وسير تشغيل سهل داخل الحاويات.',
    eyebrow: 'Booking Management System',
    description: 'A dependable booking management system with Docker-ready setup, N-Tier organization, Repository, and Unit of Work patterns.',
    longDescription: 'A practical booking system that balances familiar ASP.NET MVC conventions with a structured service layer and an easy-to-run containerized workflow.',
    technologies: ['ASP.NET MVC', 'Docker', 'Repository', 'Unit of Work'],
    tags: ['N-Tier', 'DevOps Ready'],
    github: 'https://github.com/RamezSameh/Bookify',
    repo: 'RamezSameh/Bookify',
    image: '/manus-storage/bookify_efe34d3e.png',
    gallery: ['/manus-storage/bookify_efe34d3e.png', '/manus-storage/bookify-detail_09096eb1.png'],
    stars: 0,
    accent: 'cyan',
  },
];

export const skills = [
  { name: 'C# / .NET', detail: 'Core language & ecosystem', level: 94, category: 'Backend', icon: 'braces' },
  { name: 'ASP.NET Core Web API', detail: 'Scalable API design', level: 92, category: 'Backend', icon: 'server' },
  { name: 'React / TypeScript', detail: 'Interfaces & product flows', level: 86, category: 'Frontend', icon: 'atom' },
  { name: 'Angular', detail: 'Component-based development', level: 75, category: 'Frontend', icon: 'atom' },
  { name: 'SQL Server / EF Core', detail: 'Data modeling & persistence', level: 88, category: 'Data', icon: 'database' },
  { name: 'Entity Framework Core', detail: 'Data access & ORM', level: 88, category: 'Data', icon: 'database' },
  { name: 'Docker', detail: 'Portable environments', level: 78, category: 'DevOps', icon: 'container' },
  { name: 'Clean Architecture', detail: 'System design & organization', level: 85, category: 'Delivery', icon: 'braces' },
  { name: 'SignalR / JWT', detail: 'Real-time & security', level: 84, category: 'Platform', icon: 'radio' },
  { name: 'Azure / AWS', detail: 'Deployment foundations', level: 70, category: 'Cloud', icon: 'cloud' },
  { name: 'Git / GitHub', detail: 'Versioned collaboration', level: 92, category: 'Workflow', icon: 'git-branch' },

];

export const principles = [
  { label: '01', title: 'Architecture with intent', text: 'Choose patterns that keep the next feature easy to build, not just the current one easy to demo.' },
  { label: '02', title: 'Performance as a feature', text: 'Fast APIs, purposeful data access, and responsive interfaces are part of the product experience.' },
  { label: '03', title: 'Details that earn trust', text: 'Clear states, careful spacing, and resilient interactions turn a technically solid build into a product.' },
];
