import CinemaHub from "../assets/work_logo/cinemahub.png";
import ReUseMart from "../assets/work_logo/reusemart.png";

export const portfolioProjects = [
  {
    id: "outsourcing-hris",
    title: "Workforce HRIS & Attendance",
    context: "Internship at PT Qiprah Multi Service",
    period: "Aug 2025 - Feb 2026",
    role: "End-to-end developer",
    summary:
      "A workforce operations platform connecting employee attendance, schedules, leave, overtime, history, notifications, and administrative review across mobile and web.",
    challenge:
      "Attendance was only one part of the workflow. The product had to connect operational data across mobile employees, administrators, backend services, reporting, and location-sensitive verification.",
    contributions: [
      "Built the Flutter employee application and Next.js/React administration flows around shared Laravel APIs.",
      "Implemented geolocation and camera-based attendance evidence together with schedules, leave, overtime, history, and notifications.",
      "Worked with PostgreSQL, Firebase, Redis, reporting, secure storage, device checks, mock-location detection, and anti-tampering safeguards.",
      "Handled frontend, backend, mobile, database, integration, debugging, and deployment-related work during the internship.",
    ],
    result:
      "This project taught me to design around operational dependencies across clients and services instead of treating web, mobile, and backend as separate products.",
    stack: ["Flutter", "Next.js", "React", "Laravel", "PostgreSQL", "Firebase", "Redis"],
    image: "/project-screenshots/presensi-mobile/demo-mobile.png",
    imageAlt: "Employee attendance mobile application",
    gallery: [
      {
        label: "Employee mobile application",
        src: "/project-screenshots/presensi-mobile/demo-mobile.png",
      },
      {
        label: "Flutter web review build",
        src: "/project-screenshots/presensi-mobile/demo-desktop.png",
      },
    ],
  },
  {
    id: "reusemart",
    title: "ReUseMart Marketplace",
    context: "Academic full-stack project",
    period: "2025",
    role: "Full-stack contributor",
    summary:
      "A multi-role secondhand marketplace spanning a Laravel backend, React web interface, and Flutter mobile application.",
    challenge:
      "One commerce domain had to support buyers, consignors, hunters, couriers, and operational workflows while keeping data and transaction behavior consistent across clients.",
    contributions: [
      "Worked across web, backend, mobile, and data layers instead of limiting the contribution to one client.",
      "Implemented role-aware marketplace flows for buyers, consignors, hunters, couriers, and operational users.",
      "Integrated React and Flutter clients with Laravel services for account, product, and transaction workflows.",
    ],
    result:
      "The project strengthened my understanding of shared business rules, role-aware application architecture, and cross-client API integration.",
    stack: ["React", "Laravel", "Flutter", "MySQL", "REST APIs", "Firebase"],
    image: ReUseMart,
    imageAlt: "ReUseMart project identity",
    gallery: [],
  },
  {
    id: "pakel-digital-village",
    title: "PAKEL Digital Village",
    context: "KKN community service project",
    period: "2025",
    role: "End-to-end web contributor",
    summary:
      "A public information platform for village news, UMKM, galleries, activities, maps, and community content with an administration interface behind it.",
    challenge:
      "The public site needed to stay easy to browse while the content-management side remained practical for non-technical administrators.",
    contributions: [
      "Built public-facing pages and administration workflows for village and community content.",
      "Developed responsive experiences for UMKM, news, galleries, activities, and map-based information.",
      "Integrated React/Vite interfaces with Firebase-backed content and administration flows.",
    ],
    result:
      "PAKEL reinforced the importance of content structure, maintainability, and usability when software is used outside a classroom context.",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Google Maps"],
    image: "/project-screenshots/pakel/home-desktop.png",
    imageAlt: "PAKEL Digital Village public website",
    webapp: "https://pakel-web.vercel.app",
    gallery: [
      {
        label: "Public website on desktop",
        src: "/project-screenshots/pakel/home-desktop.png",
      },
      {
        label: "Public website on mobile",
        src: "/project-screenshots/pakel/home-mobile.png",
      },
    ],
  },
  {
    id: "cinemahub",
    title: "CinemaHub Mobile Booking",
    context: "Academic mobile and backend project",
    period: "2024",
    role: "End-to-end project contributor",
    summary:
      "A cinema application covering movie discovery, showtimes, seat selection, booking, payment choice, tickets, bookmarks, reviews, and profile activity.",
    challenge:
      "The booking journey depended on many connected states across movie data, schedules, seats, orders, payment choices, tickets, and user history.",
    contributions: [
      "Developed across the Flutter mobile application and Laravel backend.",
      "Implemented discovery, search, movie details, showtimes, seat selection, order summary, payment selection, tickets, history, and profile flows.",
      "Integrated authentication, bookmarks, reviews, booking, tickets, and profile-related API data across the mobile experience.",
    ],
    result:
      "CinemaHub gave me experience debugging a long, stateful mobile journey whose screens and backend behavior depended on one another.",
    stack: ["Flutter", "Dart", "Laravel", "MySQL", "REST APIs", "Riverpod"],
    image: CinemaHub,
    imageAlt: "CinemaHub mobile application identity",
    gallery: [],
  },
];

export const otherBuilds = [
  {
    title: "Atma Jaya Game Center",
    context: "React",
    description:
      "A number-guessing game and an Indonesian five-letter word game with lives, hints, keyboard feedback, and reset states.",
    stack: "React / JavaScript / Interactive UI",
  },
  {
    title: "Atma Kitchen",
    context: "Web UI",
    description:
      "A responsive bakery interface and inventory-oriented dashboard built to practice component composition and responsive application states.",
    stack: "React / Vite / Responsive UI",
  },
  {
    title: "Savings & Loan Cooperative",
    context: "Desktop",
    description:
      "A Java and JDBC cooperative application covering members, savings, loans, and transaction workflows.",
    stack: "Java / JDBC / MySQL / OOP",
  },
  {
    title: "Invoice & PDF Generator",
    context: "Flutter",
    description:
      "A cross-platform Flutter experiment for structured invoice input and generated PDF output.",
    stack: "Flutter / Dart / PDF Generation",
  },
];
