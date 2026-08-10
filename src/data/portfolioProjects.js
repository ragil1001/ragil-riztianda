import CinemaHub from "../assets/work_logo/cinemahub.png";
import ReUseMart from "../assets/work_logo/reusemart.png";

export const portfolioProjects = [
  {
    index: "01",
    id: "outsourcing-hris",
    title: "Outsourcing HRIS & Attendance",
    context: "Internship · PT Qiprah Multi Service",
    period: "Aug 2025 - Feb 2026",
    role: "Developer · End-to-end implementation",
    summary:
      "A connected workforce system for employee administration and attendance, spanning a Flutter employee app, web administration, Laravel APIs, and PostgreSQL-backed operational data.",
    challenge:
      "Attendance depended on more than a check-in button. The workflow had to connect employee identity, schedules, location-sensitive evidence, leave, overtime, history, notifications, administrative review, and reporting across multiple clients.",
    contributions: [
      "Built employee mobile flows in Flutter and administration workflows in Next.js/React against shared Laravel APIs.",
      "Implemented attendance evidence using geolocation and camera capture, together with schedule, leave, overtime, history, and notification flows.",
      "Worked across PostgreSQL, Firebase services, Redis, reporting, secure storage, device checks, mock-location detection, and anti-tampering safeguards.",
      "Handled frontend, backend, mobile, database, integration, debugging, and deployment-related work during the internship.",
    ],
    result:
      "Delivered one operational flow across employee mobile and administrator web clients instead of treating each application layer as a separate product.",
    stack: ["Flutter", "Next.js", "React", "Laravel", "PostgreSQL", "Firebase", "Redis"],
    image: "/project-screenshots/presensi-mobile/demo-mobile.png",
    imageAlt: "Employee attendance mobile application",
    visual: "hris",
    gallery: [
      {
        label: "Employee mobile application",
        src: "/project-screenshots/presensi-mobile/demo-mobile.png",
      },
      {
        label: "Web review build of the employee application",
        src: "/project-screenshots/presensi-mobile/demo-desktop.png",
      },
    ],
  },
  {
    index: "02",
    id: "reusemart",
    title: "ReUseMart",
    context: "Academic full-stack project",
    period: "2025",
    role: "Full-stack team contributor",
    summary:
      "A multi-role secondhand marketplace with Laravel services, a React web client, and a Flutter mobile application for buyer and operational workflows.",
    challenge:
      "The same commerce domain had to support buyers, consignors, hunters, couriers, and operational users while keeping account, product, and transaction behavior consistent across clients.",
    contributions: [
      "Worked across web, backend, mobile, and data flows rather than limiting the contribution to one application surface.",
      "Implemented role-aware experiences for buyers, consignors, hunters, couriers, and operational users.",
      "Integrated React and Flutter clients with Laravel services for account, product, and transaction workflows.",
    ],
    result:
      "Implemented shared marketplace workflows across multiple user roles and clients while keeping business behavior coordinated through backend services.",
    stack: ["React", "Laravel", "Flutter", "REST APIs", "Firebase"],
    image: ReUseMart,
    imageAlt: "ReUseMart project identity",
    visual: "identity-light",
    gallery: [],
  },
  {
    index: "03",
    id: "pakel-digital-village",
    title: "PAKEL Digital Village",
    context: "KKN community service project",
    period: "2025",
    role: "End-to-end web contributor",
    summary:
      "A public village information platform for news, UMKM, activities, galleries, maps, and community content, paired with an administration interface for content management.",
    challenge:
      "The public experience had to remain easy to browse while the administration side stayed practical enough for people managing community information without a developer in the loop.",
    contributions: [
      "Built public-facing pages and administration workflows for village and community content.",
      "Developed responsive experiences for UMKM, news, galleries, activities, and map-based information.",
      "Integrated React/Vite interfaces with Firebase-backed content and administration flows.",
    ],
    result:
      "Created a maintainable public-information workflow that connected community content, responsive presentation, and day-to-day administration.",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Google Maps"],
    image: "/project-screenshots/pakel/home-desktop.png",
    imageAlt: "PAKEL Digital Village public website",
    visual: "pakel",
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
    index: "04",
    id: "cinemahub",
    title: "CinemaHub",
    context: "Academic mobile & backend project",
    period: "2024",
    role: "End-to-end team contributor",
    summary:
      "A Flutter cinema application and Laravel backend covering movie discovery, showtimes, seat selection, booking, payment choice, tickets, history, bookmarks, reviews, and profile activity.",
    challenge:
      "The booking journey was stateful from end to end: movie data, schedules, seat availability, order details, payment choice, ticket generation, and user history all depended on one another.",
    contributions: [
      "Developed across the Flutter mobile application and Laravel backend.",
      "Implemented discovery, search, movie details, showtimes, seat selection, order summary, payment selection, e-ticket/QR, ticket history, and profile flows.",
      "Integrated authentication, bookmarks, reviews, booking, tickets, and profile-related API data across the mobile experience.",
    ],
    result:
      "Built a connected mobile booking flow from movie discovery through seat selection and ticket history, with backend behavior supporting each stage of the journey.",
    stack: ["Flutter", "Dart", "Laravel", "REST APIs", "Riverpod"],
    image: CinemaHub,
    imageAlt: "CinemaHub mobile application identity",
    visual: "identity-dark",
    gallery: [],
  },
];

export const otherBuilds = [
  {
    title: "Atma Hospital",
    context: "Academic full-stack",
    description:
      "A hospital-oriented application project covering patient-facing and administrative workflows across web and backend layers.",
    stack: "Web application / Backend / Database",
  },
  {
    title: "Atma Jaya Game Center",
    context: "Interactive React",
    description:
      "Two small browser games: a number-guessing game with lives and hints, plus an Indonesian five-letter Wordle-style game with keyboard feedback and reset states.",
    stack: "React / JavaScript / Interactive UI",
  },
  {
    title: "Atma Kitchen",
    context: "Responsive web",
    description:
      "A bakery interface and inventory-oriented dashboard built around responsive application states and reusable React components.",
    stack: "React / Vite / Responsive UI",
  },
  {
    title: "Savings & Loan Cooperative",
    context: "Java desktop",
    description:
      "A Java and JDBC cooperative application covering members, savings, loans, and transaction workflows.",
    stack: "Java / JDBC / MySQL / OOP",
  },
  {
    title: "Invoice & PDF Generator",
    context: "Cross-platform Flutter",
    description:
      "A Flutter utility for structured invoice input and generated PDF output across supported platforms.",
    stack: "Flutter / Dart / PDF Generation",
  },
  {
    title: "AtmaHub",
    context: "Full-stack experiment",
    description:
      "An authenticated content and comment platform combining a Laravel backend with a React/Vite frontend.",
    stack: "Laravel / React / Vite / Authentication",
  },
];
