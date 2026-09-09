export const portfolioProjects = [
  {
    index: "01",
    id: "outsourcing-hris",
    title: "Outsourcing HRIS & Attendance",
    context: "Internship · PT Qiprah Multi Service",
    period: "Aug 2025 - Feb 2026",
    role: "Software Developer · End-to-end implementation",
    evidence: ["Internship delivery", "Web + mobile + backend", "Operational workflows"],
    summary:
      "A connected HRIS for outsourced workforce operations, combining employee attendance on mobile with web administration, backend services, and a shared operational database.",
    challenge:
      "Attendance was only one part of the workflow. The system had to connect employee identity, schedules, geolocation and camera evidence, leave, overtime, history, notifications, administrative review, cleaning-service operations, security-patrol workflows, and reporting.",
    contributions: [
      "Built employee mobile flows in Flutter and administration workflows in Next.js/React against shared Laravel APIs.",
      "Implemented attendance evidence using geolocation and camera capture, together with schedules, leave, overtime, history, notifications, and administrative review flows.",
      "Worked across PostgreSQL, Firebase, Redis, reporting, secure storage, device checks, mock-location detection, debugging, integration, and deployment-related work.",
      "Connected frontend, mobile, backend, and database concerns instead of treating each client as an isolated application.",
    ],
    result:
      "Centralized employee administration, attendance, scheduling, requests, and operational monitoring into one connected mobile-and-web workflow, giving administrators a clearer single place to review daily workforce activity.",
    stack: ["Flutter", "Next.js", "React", "Laravel", "PostgreSQL", "Firebase", "Redis"],
    visual: "hris",
    image: "/project-screenshots/hris/dashboard-web.png",
    imageAlt: "HRIS administration dashboard",
    gallery: [
      {
        label: "HR administration dashboard",
        src: "/project-screenshots/hris/dashboard-web.png",
        kind: "desktop",
      },
      {
        label: "Employee attendance mobile application",
        src: "/project-screenshots/presensi-mobile/demo-mobile.png",
        kind: "mobile",
      },
    ],
  },
  {
    index: "02",
    id: "pakel-digital-village",
    title: "PAKEL Digital Village",
    context: "KKN community service project",
    period: "2025",
    role: "End-to-end web contributor",
    evidence: ["Live public site", "Community information", "Admin-managed content"],
    summary:
      "A deployed village information platform for public profiles, UMKM, activities, galleries, maps, news, and community content, paired with an administration workflow for day-to-day updates.",
    challenge:
      "The public site needed to stay simple for visitors while the content-management side had to remain practical for people updating village information without editing source code.",
    contributions: [
      "Built public-facing pages and administration workflows for village and community content.",
      "Developed responsive experiences for UMKM, news, galleries, activities, and map-based information.",
      "Integrated the React/Vite interface with Firebase-backed content and administration flows.",
    ],
    result:
      "Published a maintainable public-information workflow where village content can be updated through an administration interface and presented consistently across desktop and mobile visitors.",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Google Maps"],
    visual: "pakel",
    image: "/project-screenshots/pakel/home-cover.jpg",
    imageAlt: "Padukuhan Pakel public website hero",
    webapp: "https://pakel-web.vercel.app",
    gallery: [
      {
        label: "Loaded public homepage on desktop",
        src: "/project-screenshots/pakel/home-full.png",
        kind: "desktop",
      },
      {
        label: "Public website on mobile",
        src: "/project-screenshots/pakel/home-mobile.png",
        kind: "mobile",
      },
    ],
  },
  {
    index: "03",
    id: "reusemart",
    title: "ReUseMart",
    context: "Academic full-stack project",
    period: "2025",
    role: "Full-stack team contributor",
    evidence: ["Multi-role workflow", "Web + mobile", "Shared backend services"],
    summary:
      "A secondhand marketplace spanning a React web client, Flutter mobile application, Laravel services, and multi-role workflows for buyers and operational users.",
    challenge:
      "The same commerce domain had to support buyers, consignors, hunters, couriers, and operational users while keeping product, account, and transaction behavior consistent across web and mobile clients.",
    contributions: [
      "Worked across web, backend, mobile, and data flows rather than limiting the contribution to one application surface.",
      "Implemented role-aware experiences for buyers, consignors, hunters, couriers, and operational users.",
      "Integrated React and Flutter clients with Laravel services for account, catalogue, product, and transaction workflows.",
    ],
    result:
      "Connected multiple user roles to a shared backend workflow so web and mobile clients could reuse the same business behavior instead of duplicating transaction rules independently.",
    stack: ["React", "Laravel", "Flutter", "REST APIs", "MySQL", "Firebase"],
    visual: "web-mobile",
    image: "/project-screenshots/reusemart/catalogue-cover.jpg",
    imageAlt: "ReUseMart product catalogue",
    gallery: [
      {
        label: "Product catalogue on web",
        src: "/project-screenshots/reusemart/catalogue-full.png",
        kind: "desktop",
      },
      {
        label: "Product detail and discussion flow",
        src: "/project-screenshots/reusemart/product-detail.png",
        kind: "desktop",
      },
      {
        label: "Buyer-facing mobile home",
        src: "/project-screenshots/reusemart/mobile-home.png",
        kind: "mobile",
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
    evidence: ["Stateful booking flow", "Mobile + backend", "REST integration"],
    summary:
      "A Flutter cinema application backed by Laravel, covering movie discovery, showtimes, seat selection, booking, payment choice, tickets, history, bookmarks, reviews, and profile activity.",
    challenge:
      "The booking journey was stateful from end to end: movie data, schedules, seat availability, order details, payment choice, ticket generation, and user history all depended on one another.",
    contributions: [
      "Developed across the Flutter mobile application and Laravel backend.",
      "Implemented discovery, search, movie details, showtimes, seat selection, order summary, payment selection, ticket history, and profile flows.",
      "Integrated authentication, bookmarks, reviews, booking, tickets, and profile-related API data throughout the mobile experience.",
    ],
    result:
      "Delivered a continuous booking flow from movie discovery through seat selection and payment preparation, with backend state supporting each step of the user journey.",
    stack: ["Flutter", "Dart", "Laravel", "REST APIs", "MySQL", "Riverpod"],
    visual: "mobile-trio",
    image: "/project-screenshots/cinemahub/home.png",
    imageAlt: "CinemaHub mobile application",
    galleryLayout: "mobile-grid",
    gallery: [
      {
        label: "Movie discovery home",
        src: "/project-screenshots/cinemahub/home.png",
        kind: "mobile",
      },
      {
        label: "Movie detail and showtime selection",
        src: "/project-screenshots/cinemahub/movie-detail.png",
        kind: "mobile",
      },
      {
        label: "Seat selection",
        src: "/project-screenshots/cinemahub/seat-selection.png",
        kind: "mobile",
      },
      {
        label: "Payment preparation",
        src: "/project-screenshots/cinemahub/payment.png",
        kind: "mobile",
      },
      {
        label: "Upcoming titles",
        src: "/project-screenshots/cinemahub/upcoming.png",
        kind: "mobile",
      },
    ],
  },
];

export const otherBuilds = [
  {
    title: "Atma Hospital",
    context: "Academic full-stack",
    description:
      "A hospital-oriented web application covering appointments, medical check-up registration, queue information, services, and news within a structured healthcare interface.",
    stack: "Laravel / MySQL / Web application",
    image: "/project-screenshots/other/atma-hospital.jpg",
    imageAlt: "Atma Hospital web interface",
  },
  {
    title: "Atma Jaya Game Center",
    context: "Interactive React",
    description:
      "A React learning build combining content cards, state-management exercises, a number-guessing game, and an Indonesian Wordle-style game with interactive feedback.",
    stack: "React / JavaScript / State / Interactive UI",
    image: "/project-screenshots/other/game-center.jpg",
    imageAlt: "Atma Jaya Game Center web interface",
  },
  {
    title: "Atma Kitchen",
    context: "Responsive web",
    description:
      "A responsive food-and-hospitality interface used to practise component layout, content presentation, reusable sections, and responsive web behaviour.",
    stack: "React / Bootstrap / Responsive UI",
    image: "/project-screenshots/other/atma-kitchen.jpg",
    imageAlt: "Atma Kitchen bakery web interface",
  },
  {
    title: "Savings & Loan Cooperative",
    context: "Java desktop",
    description:
      "A Java and JDBC cooperative application covering members, savings, loans, installments, transaction workflows, and financial summaries.",
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
