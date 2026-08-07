import CinemaHub from "../assets/work_logo/cinemahub.png";
import ReUseMart from "../assets/work_logo/reusemart.png";

export const portfolioProjects = [
  {
    id: "outsourcing-hris",
    title: "Outsourcing HRIS & Attendance Platform",
    eyebrow: "Internship · PT Qiprah Multi Service",
    period: "Aug 2025 - Feb 2026",
    role: "Developer · End-to-end",
    summary:
      "A workforce operations system for managing outsourced employees and attendance across a mobile employee application, web administration dashboard, backend services, and shared operational data.",
    challenge:
      "Attendance and employee administration are operational workflows, not isolated forms. The system needed to connect schedules, attendance evidence, leave, overtime, history, notifications, and administrative review while adding safeguards around location-sensitive attendance.",
    contributions: [
      "Built the Flutter employee application and Next.js/React administration experience around shared Laravel APIs.",
      "Implemented attendance flows using geolocation and camera-based evidence, together with schedules, leave, overtime, shift-related workflows, history, and notifications.",
      "Worked with PostgreSQL, Firebase services, Redis, reporting, secure storage, device checks, mock-location detection, and anti-tampering mechanisms.",
      "Handled frontend, backend, mobile, database, integration, debugging, and deployment-related work during the internship.",
    ],
    result:
      "The project gave me practical experience designing software around real operational dependencies across web, mobile, backend, and data layers rather than treating each client as a separate application.",
    stack: ["Flutter", "Next.js", "React", "Laravel", "PostgreSQL", "Firebase", "Redis", "REST APIs"],
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
    title: "ReUseMart",
    eyebrow: "Academic Project · Full-stack Web & Mobile",
    period: "2025",
    role: "Full-stack contribution across the project",
    summary:
      "A multi-role secondhand marketplace built as a web-and-mobile system, connecting buyers and consignors with the operational roles needed to manage listings, transactions, pickup or delivery workflows, and account-specific activity.",
    challenge:
      "The project required one business domain to behave differently for multiple user roles while keeping data and transaction flows consistent between the Laravel backend, React web interface, and Flutter mobile application.",
    contributions: [
      "Worked across the web, backend, mobile, and data layers rather than limiting the contribution to a single client application.",
      "Implemented role-aware application flows for marketplace users and operational users, including buyer, consignor, hunter, and courier experiences.",
      "Integrated the Flutter and React clients with Laravel services and the project database for product, account, and transaction workflows.",
    ],
    result:
      "ReUseMart strengthened my understanding of multi-role application architecture, shared business rules, API integration, and maintaining consistent workflows across web and mobile clients.",
    stack: ["React", "Laravel", "Flutter", "MySQL", "REST APIs", "Firebase"],
    image: ReUseMart,
    imageAlt: "ReUseMart project identity",
    gallery: [],
  },
  {
    id: "pakel-digital-village",
    title: "PAKEL Digital Village Platform",
    eyebrow: "KKN Community Service Project",
    period: "2025",
    role: "End-to-end web platform contribution",
    summary:
      "A digital village platform created during KKN to present village information, local news, galleries, community identity, maps, activities, and UMKM content through a public website supported by an administration interface.",
    challenge:
      "The platform had to make community information easy to publish and easy to discover without turning the public website into an administration-heavy interface.",
    contributions: [
      "Built the public-facing experience and administration workflows used to manage village and community content.",
      "Developed responsive pages for local information, UMKM discovery, news, galleries, activities, and map-based content.",
      "Integrated React/Vite interfaces with Firebase-backed content and administration flows.",
    ],
    result:
      "The project connected software development with a real community context and reinforced the importance of content structure, maintainability, and usability for non-technical users.",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Google Maps"],
    image: "/project-screenshots/pakel/home-desktop.png",
    imageAlt: "PAKEL Digital Village public website",
    webapp: "https://pakel-web.vercel.app",
    gallery: [
      {
        label: "Public website - desktop",
        src: "/project-screenshots/pakel/home-desktop.png",
      },
      {
        label: "Public website - mobile",
        src: "/project-screenshots/pakel/home-mobile.png",
      },
    ],
  },
  {
    id: "cinemahub",
    title: "CinemaHub",
    eyebrow: "Academic Project · Mobile & Backend",
    period: "2024",
    role: "End-to-end project contribution",
    summary:
      "A cinema mobile application and Laravel backend covering the customer journey from movie discovery through booking, seat selection, payment selection, e-ticket access, and account activity.",
    challenge:
      "The main complexity was keeping a long booking journey coherent across movie data, schedules, seat availability, booking state, payment choice, tickets, and user history while maintaining a mobile-first experience.",
    contributions: [
      "Developed across the Flutter mobile application and Laravel backend instead of treating the mobile interface as a standalone prototype.",
      "Implemented movie discovery, search, movie details, showtimes, interactive seat selection, order summary, payment selection, ticket confirmation, QR ticket, ticket history, profile, and supporting cinema menu flows.",
      "Integrated mobile state and API-backed data across authentication, bookmarks, reviews, booking, tickets, and profile-related features.",
    ],
    result:
      "CinemaHub gave me experience building and debugging a feature-rich mobile journey with many dependent states and backend integrations, from discovery to post-purchase ticket access.",
    stack: ["Flutter", "Dart", "Laravel", "MySQL", "REST APIs", "Riverpod"],
    image: CinemaHub,
    imageAlt: "CinemaHub mobile application identity",
    gallery: [],
  },
];

export const otherBuilds = [
  {
    title: "Atma Jaya Game Center",
    context: "Academic React project",
    description:
      "Two interactive browser games: a number-guessing game with lives and hints, and a five-letter Indonesian Wordle-style game with six attempts and keyboard feedback.",
    stack: ["React", "JavaScript", "Interactive UI"],
  },
  {
    title: "Atma Kitchen",
    context: "Academic web project",
    description:
      "Responsive bakery interface and inventory-oriented dashboard used to practice component composition, responsive layouts, and application UI states.",
    stack: ["React", "Vite", "Responsive UI"],
  },
  {
    title: "Savings & Loan Cooperative",
    context: "Academic Java project",
    description:
      "Desktop cooperative application built with Java and JDBC to apply object-oriented programming to member, savings, loan, and transaction workflows.",
    stack: ["Java", "JDBC", "MySQL", "OOP"],
  },
  {
    title: "Cross-Platform Invoice / PDF Generator",
    context: "Flutter experiment",
    description:
      "A Flutter application for structured invoice input and PDF output, exploring document generation and cross-platform application behavior.",
    stack: ["Flutter", "Dart", "PDF Generation"],
  },
];
