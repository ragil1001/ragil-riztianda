const publicRepo = (name) => `https://github.com/ragil1001/${name}`;

export const repositoryCatalog = [
  // Workforce, HRIS, attendance and field operations
  {
    name: "presensi_mobile",
    group: "HRIS & Attendance",
    visibility: "Public",
    status: "Flagship source",
    summary:
      "Flutter employee attendance client with authentication, schedules, leave, overtime, shift exchange, notifications, field workflows, geolocation and device-integrity controls.",
    url: publicRepo("presensi_mobile"),
  },
  {
    name: "hris-be",
    group: "HRIS & Attendance",
    visibility: "Private",
    status: "Private system source",
    summary:
      "Modular HRIS backend covering authentication, employees, schedules, attendance, submissions, projects, master data and cleaning-service operations.",
  },
  {
    name: "presensi_fe",
    group: "HRIS & Attendance",
    visibility: "Private",
    status: "Private web client",
    summary: "Web frontend from the attendance and HRIS ecosystem.",
  },
  {
    name: "abs-backend",
    group: "HRIS & Attendance",
    visibility: "Public",
    status: "Backend source",
    summary: "Laravel/PHP backend from an earlier attendance-system generation.",
    url: publicRepo("abs-backend"),
  },
  {
    name: "abs-web",
    group: "HRIS & Attendance",
    visibility: "Public",
    status: "Web application source",
    summary: "Administrative web client from an earlier attendance-system generation.",
    url: publicRepo("abs-web"),
  },
  {
    name: "abs_mobile",
    group: "HRIS & Attendance",
    visibility: "Public",
    status: "Mobile application source",
    summary: "Flutter mobile client from an earlier attendance-system generation.",
    url: publicRepo("abs_mobile"),
  },
  {
    name: "absensi_qms",
    group: "HRIS & Attendance",
    visibility: "Private",
    status: "Private application source",
    summary: "Earlier QMS attendance application repository.",
  },
  {
    name: "backend_qms",
    group: "HRIS & Attendance",
    visibility: "Private",
    status: "Private backend source",
    summary: "Earlier backend iteration for QMS operational applications.",
  },
  {
    name: "frontend_qms",
    group: "HRIS & Attendance",
    visibility: "Private",
    status: "Private frontend source",
    summary: "Earlier frontend iteration for QMS operational applications.",
  },
  {
    name: "cs_mobile",
    group: "Cleaning Service Operations",
    visibility: "Private",
    status: "Private mobile source",
    summary: "Flutter application for cleaning-service field operations.",
  },
  {
    name: "cs-fe",
    group: "Cleaning Service Operations",
    visibility: "Private",
    status: "Private web client",
    summary: "Web frontend for cleaning-service operational workflows.",
  },
  {
    name: "cs-backend",
    group: "Cleaning Service Operations",
    visibility: "Public",
    status: "Backend iteration",
    summary: "Backend iteration for cleaning-service operational workflows.",
    url: publicRepo("cs-backend"),
  },
  {
    name: "cs-be",
    group: "Cleaning Service Operations",
    visibility: "Public",
    status: "Backend iteration",
    summary: "Another backend iteration retained as part of the system history.",
    url: publicRepo("cs-be"),
  },
  {
    name: "cs_app_be",
    group: "Cleaning Service Operations",
    visibility: "Public",
    status: "Empty / archive candidate",
    summary: "Empty repository; retained in the catalog but not presented as completed work.",
    url: publicRepo("cs_app_be"),
  },

  // Company platform
  {
    name: "profile-web",
    group: "QMS Company Platform",
    visibility: "Private",
    status: "Private flagship frontend",
    summary:
      "Next.js company platform with public content, CMS, recruitment, analytics, media management, SEO and operational integrations.",
  },
  {
    name: "profile-backend",
    group: "QMS Company Platform",
    visibility: "Public",
    status: "Flagship backend source",
    summary:
      "Laravel backend for company content, services, news, galleries, recruitment, analytics, uploads, authentication and public APIs.",
    url: publicRepo("profile-backend"),
  },
  {
    name: "qms-company-profile",
    group: "QMS Company Platform",
    visibility: "Private",
    status: "Earlier private iteration",
    summary: "Earlier company-profile implementation retained as project history.",
  },

  // Workforce platform foundation
  {
    name: "workforce-os",
    group: "Workforce Platform",
    visibility: "Private",
    status: "Foundation in progress",
    summary:
      "Multi-tenant workforce-platform foundation with monorepo structure, contracts, authorization, database, observability, security, design-system and product documentation. Not represented as a finished production product.",
  },

  // Village platform
  {
    name: "pakel_web",
    group: "Pakel Digital Village",
    visibility: "Public",
    status: "Public web source",
    summary:
      "Village information website covering public information, news, galleries, community identity and local UMKM discovery.",
    url: publicRepo("pakel_web"),
  },
  {
    name: "pakel_admin",
    group: "Pakel Digital Village",
    visibility: "Public",
    status: "Public admin source",
    summary: "Administrative application for managing Pakel platform content.",
    url: publicRepo("pakel_admin"),
  },

  // Sustainable commerce
  {
    name: "p3l_mobile",
    group: "ReUseMart",
    visibility: "Public",
    status: "Public mobile source",
    summary:
      "Flutter client for the ReUseMart sustainable-commerce project, including Firebase messaging, charts, pagination and network-aware application flows.",
    url: publicRepo("p3l_mobile"),
  },
  {
    name: "p3l_backend",
    group: "ReUseMart",
    visibility: "Private",
    status: "Private backend source",
    summary: "Backend service for the ReUseMart application ecosystem.",
  },

  // Cinema project
  {
    name: "backendBioskop",
    group: "CinemaHub",
    visibility: "Private",
    status: "Private backend source",
    summary: "Backend repository for the cinema application project.",
  },
  {
    name: "3_Bioskop_Backend",
    group: "CinemaHub",
    visibility: "Private",
    status: "Earlier backend iteration",
    summary: "Earlier cinema-backend iteration retained as development history.",
  },

  // Portfolio and developer profile
  {
    name: "ragil-riztianda",
    group: "Portfolio & Profile",
    visibility: "Public",
    status: "Canonical portfolio source",
    summary: "Current portfolio repository and deployment configuration.",
    url: publicRepo("ragil-riztianda"),
  },
  {
    name: "portofolio",
    group: "Portfolio & Profile",
    visibility: "Public",
    status: "Duplicate / archive candidate",
    summary: "Older duplicate portfolio repository; not treated as a separate product.",
    url: publicRepo("portofolio"),
  },
  {
    name: "ragil1001",
    group: "Portfolio & Profile",
    visibility: "Public",
    status: "GitHub profile repository",
    summary: "Repository that powers the GitHub profile README.",
    url: publicRepo("ragil1001"),
  },

  // Community project
  {
    name: "KKN",
    group: "Community Project",
    visibility: "Public",
    status: "Project source",
    summary: "Repository associated with a community-service/KKN project.",
    url: publicRepo("KKN"),
  },

  // Academic web and API work
  {
    name: "API_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "API-development coursework repository.",
  },
  {
    name: "PW3_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },
  {
    name: "PW4_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },
  {
    name: "PW5_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },
  {
    name: "PW6_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },
  {
    name: "PW7_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },
  {
    name: "PW8_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },
  {
    name: "PW10_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Web-programming coursework repository.",
  },

  // Academic Flutter, Dart and data structure work
  {
    name: "GD11_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Guided mobile-development coursework repository.",
  },
  {
    name: "GD12_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Guided mobile-development coursework repository.",
  },
  {
    name: "GDLibrary_D_1672",
    group: "Academic Work",
    visibility: "Public",
    status: "Coursework",
    summary: "Guided library/application coursework repository.",
    url: publicRepo("GDLibrary_D_1672"),
  },
  {
    name: "GD_API_1672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Guided API-integration coursework repository.",
  },
  {
    name: "guided1_dart_1672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Foundational Dart coursework repository.",
  },
  {
    name: "flutter_application_2",
    group: "Academic Work",
    visibility: "Private",
    status: "Learning project",
    summary: "Flutter learning and experimentation repository.",
  },
  {
    name: "WidgetdanLayout1_1672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Flutter widgets and layout coursework repository.",
  },
  {
    name: "tes_widget",
    group: "Academic Work",
    visibility: "Private",
    status: "Learning experiment",
    summary: "Flutter widget experimentation repository.",
  },
  {
    name: "iPA_testing",
    group: "Academic Work",
    visibility: "Private",
    status: "Build/testing experiment",
    summary: "Flutter/iOS packaging and application testing repository.",
  },
  {
    name: "UGD-Pointer",
    group: "Academic Work",
    visibility: "Public",
    status: "Coursework",
    summary: "Pointer and foundational programming coursework repository.",
    url: publicRepo("UGD-Pointer"),
  },
  {
    name: "UGD4_Bonus2_E_11672",
    group: "Academic Work",
    visibility: "Private",
    status: "Coursework",
    summary: "Additional guided coursework repository.",
  },

  // Utilities and experiments
  {
    name: "laravel-docker",
    group: "Utilities & Experiments",
    visibility: "Public",
    status: "Small utility",
    summary: "Minimal Laravel/Docker setup experiment.",
    url: publicRepo("laravel-docker"),
  },
  {
    name: "blackboxai-1745900423800",
    group: "Utilities & Experiments",
    visibility: "Public",
    status: "Prototype / archive candidate",
    summary: "Generated prototype repository; not represented as a flagship project.",
    url: publicRepo("blackboxai-1745900423800"),
  },
  {
    name: "blackboxai-1747014696559",
    group: "Utilities & Experiments",
    visibility: "Public",
    status: "Empty / archive candidate",
    summary: "Empty generated repository; retained only for complete inventory.",
    url: publicRepo("blackboxai-1747014696559"),
  },
  {
    name: "tes",
    group: "Utilities & Experiments",
    visibility: "Public",
    status: "Empty / archive candidate",
    summary: "Empty test repository; not presented as completed work.",
    url: publicRepo("tes"),
  },
  {
    name: "tess",
    group: "Utilities & Experiments",
    visibility: "Private",
    status: "Empty / archive candidate",
    summary: "Empty private test repository.",
  },
  {
    name: "tesss",
    group: "Utilities & Experiments",
    visibility: "Private",
    status: "Empty / archive candidate",
    summary: "Empty private test repository.",
  },
  {
    name: "tes_ios",
    group: "Utilities & Experiments",
    visibility: "Private",
    status: "Empty / archive candidate",
    summary: "Minimal iOS test repository.",
  },
];

export const repositoryGroups = [
  "All",
  ...Array.from(new Set(repositoryCatalog.map((repository) => repository.group))),
];
