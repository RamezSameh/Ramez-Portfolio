# Ramez Sameh - Developer Portfolio

Personal portfolio website for **Ramez Sameh**, a Full Stack .NET Developer specializing in ASP.NET Core and React.

The portfolio presents selected projects, technical skills, development principles, and contact options in a responsive, bilingual experience.

## Live Portfolio

- **Website:** [Add your deployed website URL here](https://ramez-portfolio-five.vercel.app/)
- **GitHub:** [github.com/RamezSameh](https://github.com/RamezSameh)
- **LinkedIn:** [linkedin.com/in/ramez-sameh](https://www.linkedin.com/in/ramez-sameh/)

## Features

- Responsive design for desktop, tablet, and mobile
- English and Arabic language support with RTL layout
- Dark editorial-inspired developer portfolio design
- Project showcase with project detail pages and image galleries
- Skills page with categorized technical capabilities
- Contact page using a mailto workflow
- Downloadable CV link
- GitHub repository links and live star-count lookup
- Accessible navigation and reduced-motion support
- Client-side routing with a production Express server

## Featured Projects

### Sakan Talaba

An end-to-end student housing platform with JWT authentication, SignalR real-time chat, Cloudinary image uploads, and spatial recommendations.

**Technologies:** ASP.NET Core 8, SQL Server, SignalR, JWT, Repository Pattern

### ECommerce.API

An architecture-first e-commerce API with a clear separation between Core, Application, and Infrastructure layers.

**Technologies:** ASP.NET Core, Entity Framework Core, Clean Architecture, AutoMapper

### Bookify

A booking management system with Docker-ready setup and a structured N-Tier service architecture.

**Technologies:** ASP.NET MVC, Docker, Repository Pattern, Unit of Work

## Tech Stack

- **Frontend:** React, TypeScript, React Router, Tailwind CSS, Framer Motion
- **Backend:** ASP.NET Core, ASP.NET MVC, Express
- **Data:** SQL Server, Entity Framework Core
- **Architecture:** Clean Architecture, N-Tier Architecture, Repository Pattern, Unit of Work
- **Platform:** JWT, SignalR, Docker, Azure, AWS
- **Tooling:** Vite, pnpm, Git, GitHub

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm 10 or newer

### Installation

```bash
git clone https://github.com/RamezSameh/ramez-portfolio.git
cd ramez-portfolio
pnpm install
```

### Development

```bash
pnpm dev
```

The development server runs on the local Vite port shown in the terminal, usually `http://localhost:3000`.

### Type-check and build

```bash
pnpm check
pnpm build
```

### Production start

```bash
pnpm start
```

## Project Structure

```text
client/
├── index.html
└── src/
    ├── components/       # Shared layout, navigation, project, and UI components
    ├── contexts/         # Language and theme state
    ├── data/             # Portfolio content and project data
    ├── pages/            # Home, projects, skills, contact, and 404 pages
    ├── App.tsx           # Application routes
    └── index.css         # Global styling and responsive design
server/
└── index.ts              # Express production server
cv/
└── main.pdf              # CV document
```

## Customization

Most portfolio content can be updated from [`client/src/data/constants.ts`](./client/src/data/constants.ts):

- Personal information and social links
- Email address and CV link
- Projects, repositories, technologies, and gallery images
- Skills and proficiency levels
- Profile image path

## License

This project is licensed under the MIT License. See [`package.json`](./package.json) for the project license declaration.

---

Built with React, TypeScript, and ASP.NET Core experience in mind.
