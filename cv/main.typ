#import "report-theme.typ": report-accent, report-theme

#show: report-theme.with(
  title: "Ramez Sameh — Full Stack .NET Developer",
  author: "Ramez Sameh",
  rhythm: "report",
  running-header: false,
)

#set page(margin: (top: 1.15cm, bottom: 1.1cm, x: 1.35cm))
#set text(font: "Libertinus Serif", size: 9.2pt, fill: rgb("202638"))
#set par(leading: 0.75em, spacing: 0.5em, first-line-indent: 0em)
#show link: set text(fill: rgb("5B50D8"))

#let accent = rgb("6257E8")
#let ink = rgb("111827")
#let muted = rgb("667085")
#let rule = rgb("D9DDE8")
#let label(body) = text(size: 7.2pt, weight: "bold", fill: accent, tracking: 0.08em, body)
#let section-title(body) = {
  v(0.45em)
  text(size: 9pt, weight: "bold", fill: ink, tracking: 0.04em, body)
  v(0.18em)
  line(length: 100%, stroke: 0.65pt + rule)
  v(0.38em)
}

#grid(
  columns: (1fr, auto),
  gutter: 1em,
  [
    #text(size: 27pt, weight: "bold", fill: ink, tracking: -0.04em)[Ramez Sameh]\
    #text(size: 11.5pt, fill: accent, weight: "bold")[Full Stack .NET Developer]
  ],
  align(right)[
    #text(size: 7.8pt, fill: muted)[Cairo, Egypt]\
    #link("mailto:hello@ramez.dev")[#text("hello@ramez.dev")]\
    #link("https://github.com/RamezSameh/")[github.com/RamezSameh]
  ],
)

#line(length: 100%, stroke: 1.1pt + accent)
#v(0.55em)

#text(size: 10pt, fill: ink, weight: "bold")[ASP.NET Core + React]
#h(0.5em)
#text(size: 9.5pt, fill: muted)[Passionate about building scalable web applications with clean code and reliable system performance. I focus on turning complex systems into clear, dependable product experiences.]

#grid(
  columns: (1.05fr, 1fr),
  gutter: 1.35em,
  [
    #section-title[SELECTED PROJECTS]
    #text(size: 10pt, weight: "bold", fill: ink)[Sakan Talaba — Student Housing Platform]\
    #text(size: 8pt, fill: accent)[ASP.NET Core 8 · SQL Server · SignalR · JWT]
    #v(0.2em)
    An end-to-end platform connecting students with suitable housing, featuring JWT authentication, real-time SignalR chat, Cloudinary uploads, and spatial recommendations.\
    #link("https://github.com/RamezSameh/Student-Housing-Platform")[View repository ↗]
    #v(0.55em)
    #text(size: 10pt, weight: "bold", fill: ink)[ECommerce.API]\
    #text(size: 8pt, fill: accent)[ASP.NET Core · EF Core · Clean Architecture · AutoMapper]
    #v(0.2em)
    A maintainable commerce API with strict separation across Core, Application, and Infrastructure layers.\
    #link("https://github.com/RamezSameh/ECommerce.API")[View repository ↗]
    #v(0.55em)
    #text(size: 10pt, weight: "bold", fill: ink)[Bookify — Booking Management System]\
    #text(size: 8pt, fill: accent)[ASP.NET MVC · Docker · Repository · Unit of Work]
    #v(0.2em)
    A Docker-ready booking system structured with N-Tier architecture, Repository, and Unit of Work patterns.\
    #link("https://github.com/RamezSameh/Bookify")[View repository ↗]
  ],
  [
    #section-title[TECHNICAL SKILLS]
    #label[C\# / .NET] #h(1em) #label[94\%]\
    #label[ASP.NET CORE WEB API] #h(1em) #label[92\%]\
    #label[REACT.JS / HOOKS / CONTEXT] #h(1em) #label[86\%]\
    #label[SQL SERVER / EF CORE] #h(1em) #label[88\%]\
    #label[DOCKER / DEPLOYMENT] #h(1em) #label[78\%]\
    #label[SIGNALR / JWT AUTH] #h(1em) #label[84\%]\
    #label[GIT / GITHUB] #h(1em) #label[92\%]

    #section-title[WORKING PRINCIPLES]
    #text(weight: "bold", fill: ink)[Architecture with intent]\
    Choose boundaries that keep the next feature easy to build.\
    #v(0.35em)
    #text(weight: "bold", fill: ink)[Performance as a feature]\
    Fast APIs, purposeful data access, and responsive interfaces.\
    #v(0.35em)
    #text(weight: "bold", fill: ink)[Details that earn trust]\
    Clear states and resilient interactions at every layer.
  ],
)

#v(0.45em)
#rect(fill: rgb("F3F2FF"), width: 100%, inset: 0.65em, radius: 2pt)[
  #text(size: 8pt, weight: "bold", fill: accent)[OPEN TO SELECT OPPORTUNITIES] #h(1em)
  #text(size: 8.5pt, fill: ink)[Available for select full-stack, backend, and product engineering opportunities.]
]

#v(0.4em)
#align(center)[#text(size: 7.5pt, fill: muted)[Ramez Sameh · Full Stack .NET Developer · #link("https://github.com/RamezSameh/")[GitHub]]]
