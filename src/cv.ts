// The public cut of the CV (website PRD, decision 2), taken from the CV doc of 20 October 2026.
// Left out on purpose while you're in Iran: the location and relocation line, the Blue Card
// status line and the anabin recognition, city names, and every bracketed blank.
// Add a fact here only once it's in the claim ledger.

export type Role = {
  org: string;
  title: string;
  dates: string;
  bullets: string[];
};

export const summary =
  "Senior backend engineer with 10 years in PHP/Laravel and Python. Led a small team building a network-management platform for national fixed-line voice networks at 1M+ transactions a day. I build and run products end to end, including payment settlement that holds up under retries and races and coaching software with paying users, and I bring the same reliability to AI features: grounded answers, cost tracking and safe failure.";

export const experience: Role[] = [
  {
    org: "Independent Software Engineer",
    title: "Part-time",
    dates: "January 2025 – present",
    bullets: [
      "Built and run coaching software for paying coaches: a Telegram program builder used by 2 paying coaches since 2025 (templates, supersets, branded PDF programs with exercise videos) and a coach's member website with online payments, intake and a guided workout player. Laravel, Python, MariaDB, Docker.",
      "Designed payment settlement in which the bank callback, a retry page, a 5-minute reconciler and an admin check all settle through one row-locked path; discount uses are reserved for 30 minutes under lock and released on refund.",
      "Built a background video pipeline (FFmpeg, four resolutions and thumbnails) and a workout player that logs every set against a snapshot of the plan, so later edits never change a session in progress.",
      "Maintain two client websites under support agreements.",
    ],
  },
  {
    org: "Ava Communication Industries",
    title: "Software Lead, then System Engineer",
    dates: "April 2022 – December 2024",
    bullets: [
      "Architected a network-management platform (fault, configuration, performance, accounting and security management) for national fixed-line voice networks (softswitches, PBXs), handling 1M+ transactions a day.",
      "Led a small team of engineers from design to operation; ran code reviews and trained junior developers and interns.",
      "Migrated the legacy backend from PHP 5 to PHP 7.4.",
      "Built alerting for network faults and APIs for third-party integrations.",
    ],
  },
  {
    org: "Uoozet",
    title: "Software Developer",
    dates: "September 2019 – February 2022",
    bullets: [
      "Built and deployed a video learning platform: uploads, user channels, transcoding and streaming.",
      "Kept playback fast under heavy video load and improved search visibility.",
    ],
  },
  {
    org: "Honar Omran",
    title: "Full-Stack Developer (Laravel)",
    dates: "June 2016 – July 2019",
    bullets: [
      "Built and maintained client websites, including an e-commerce site for a construction-tools distributor.",
      "Built two in-house products from scratch with two developers and a designer: a job marketplace and an immigration-services website.",
    ],
  },
];

export const skills: Array<[string, string]> = [
  ["Backend", "PHP 8 and Laravel; Python and FastAPI"],
  ["Data", "Postgres, MariaDB/MySQL, SQL Server, Redis, TimescaleDB, pgvector"],
  ["Operations", "Docker, nginx, Linux, queues and background workers, GitHub Actions"],
  ["AI", "Retrieval (RAG), evaluation sets, guardrails, local models (Ollama)"],
];

export const education = [
  "MSc Information Technology Engineering (E-Commerce), Jahan Nama Rayanee Institute of Higher Education",
  "BSc Applied Chemistry, K.N. Toosi University of Technology",
];

export const languages = "Persian (native) · English (B2, working proficiency)";
