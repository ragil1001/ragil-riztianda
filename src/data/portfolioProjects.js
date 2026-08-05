export const portfolioProjects = [
  {
    id: "presensi-qms-mobile",
    title: "PresensiQMS Mobile",
    description:
      "Flutter employee attendance application from the presensi_mobile repository. The application covers authentication, schedules, leave, overtime, shift exchange, notifications, field operations, geolocation and layered device-integrity checks. Its Flutter Web review build was tested in Chromium: the page returned HTTP 200, attached Flutter render nodes and produced no runtime or resource errors.",
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
    status: "Verified rendered demo",
    gallery: [
      {
        label: "Verified Flutter Web render — desktop browser",
        src: "/project-screenshots/presensi-mobile/demo-desktop.png",
      },
      {
        label: "Verified Flutter Web render — mobile viewport",
        src: "/project-screenshots/presensi-mobile/demo-mobile.png",
      },
    ],
  },
  {
    id: "qms-digital-company-platform",
    title: "QMS Digital Company Platform",
    description:
      "Company platform connecting public company information, service discovery, recruitment, content management and operational integrations. The screenshots document a previously reachable deployment. The current qmssystem.app domain returned Cloudflare HTTP 522 during the external audit, so it is explicitly not presented as active.",
    image: "/project-screenshots/qms/home-desktop.png",
    tags: ["Next.js", "React", "Laravel", "CMS", "Recruitment", "SEO"],
    github: "https://github.com/ragil1001/profile-backend",
    status: "Domain unavailable — HTTP 522",
    gallery: [
      {
        label: "Historical deployment capture — homepage",
        src: "/project-screenshots/qms/home-desktop.png",
      },
      {
        label: "Historical deployment capture — services",
        src: "/project-screenshots/qms/services-desktop.png",
      },
      {
        label: "Historical deployment capture — careers",
        src: "/project-screenshots/qms/careers-desktop.png",
      },
      {
        label: "Historical deployment capture — mobile",
        src: "/project-screenshots/qms/home-mobile.png",
      },
    ],
  },
  {
    id: "pakel-digital-village",
    title: "Pakel Digital Village Platform",
    description:
      "Village information platform for public information, local news, galleries, community identity and UMKM discovery. Its public homepage was tested in Chromium after replacing unserved video assets: it returned HTTP 200, rendered the Pakel content and produced no runtime or failed-resource errors.",
    image: "/project-screenshots/pakel/home-desktop.png",
    tags: ["React", "Firebase", "Vite", "Responsive Web", "Content Platform"],
    github: "https://github.com/ragil1001/pakel_web",
    webapp: "https://pakel-web.vercel.app",
    status: "Verified rendered deployment",
    gallery: [
      {
        label: "Deployment capture — desktop",
        src: "/project-screenshots/pakel/home-desktop.png",
      },
      {
        label: "Deployment capture — mobile",
        src: "/project-screenshots/pakel/home-mobile.png",
      },
    ],
  },
];
