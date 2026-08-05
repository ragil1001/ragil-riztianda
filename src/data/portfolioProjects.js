export const portfolioProjects = [
  {
    id: "presensi-qms-mobile",
    title: "PresensiQMS Mobile",
    description:
      "The actual Flutter employee attendance application, compiled from the public presensi_mobile repository and deployed as Flutter Web for portfolio review. The app is part of a broader HRIS ecosystem covering attendance, schedules, leave, overtime, shift exchange, notifications, field operations, and layered GPS-integrity checks. The screenshots below were captured from this real deployed build after runtime validation.",
    image: "/project-screenshots/presensi-mobile/demo-desktop.png",
    tags: [
      "Flutter",
      "Dart",
      "Laravel API",
      "Firebase",
      "Geolocation",
      "Attendance Security",
    ],
    github: "https://github.com/ragil1001/presensi_mobile",
    webapp: "https://ragil-riztianda.vercel.app/demos/presensi-mobile-v2/",
    status: "Live Demo",
    gallery: [
      {
        label: "Deployed Flutter application — desktop browser",
        src: "/project-screenshots/presensi-mobile/demo-desktop.png",
      },
      {
        label: "Deployed Flutter application — mobile viewport",
        src: "/project-screenshots/presensi-mobile/demo-mobile.png",
      },
    ],
  },
  {
    id: "qms-digital-company-platform",
    title: "QMS Digital Company Platform",
    description:
      "A deployed company platform that connects public company information, service discovery, recruitment, content management, and operational integrations. The public screenshots below were captured directly from qmssystem.app; private administration data and credentials are not exposed.",
    image: "/project-screenshots/qms/home-desktop.png",
    tags: ["Next.js", "React", "Laravel", "CMS", "Recruitment", "SEO"],
    github: "https://github.com/ragil1001/profile-backend",
    webapp: "https://qmssystem.app",
    status: "Live",
    gallery: [
      {
        label: "Production homepage — desktop",
        src: "/project-screenshots/qms/home-desktop.png",
      },
      {
        label: "Production services page — desktop",
        src: "/project-screenshots/qms/services-desktop.png",
      },
      {
        label: "Production careers page — desktop",
        src: "/project-screenshots/qms/careers-desktop.png",
      },
      {
        label: "Production homepage — mobile",
        src: "/project-screenshots/qms/home-mobile.png",
      },
    ],
  },
  {
    id: "pakel-digital-village",
    title: "Pakel Digital Village Platform",
    description:
      "A deployed village information platform for public information, local news, galleries, community identity, and UMKM discovery. The screenshots were captured automatically from the real production deployment—not mocked or generated.",
    image: "/project-screenshots/pakel/home-desktop.png",
    tags: ["React", "Firebase", "Vite", "Responsive Web", "Content Platform"],
    github: "https://github.com/ragil1001/pakel_web",
    webapp: "https://pakel-web.vercel.app",
    status: "Live",
    gallery: [
      {
        label: "Production homepage — desktop",
        src: "/project-screenshots/pakel/home-desktop.png",
      },
      {
        label: "Production homepage — mobile",
        src: "/project-screenshots/pakel/home-mobile.png",
      },
    ],
  },
];
