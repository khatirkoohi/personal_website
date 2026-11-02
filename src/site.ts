// One place for every fact the site states about you. Keep it in step with the CV and
// the claim ledger: if a fact changes, change it here and nowhere else.

export const site = {
  name: "Mojtaba Khatirkoohi",
  title: "Senior Backend Engineer",
  // The one sentence (career and clients §2).
  sentence:
    "I built and ran a system handling 1M transactions a day, and I bring the same reliability work to AI features: failures, cost, speed and security.",
  stack: "PHP/Laravel · Python (FastAPI) · Postgres · Redis · Docker",
  email: "m.khatirkoohi@gmail.com",
  // Fill these in when the profiles are ready; empty values are hidden on the site.
  github: "", // e.g. "https://github.com/your-username"
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  // Location stays empty while you're in Iran (website PRD, gates). Set it in arrival week.
  location: "",
  // Path of the CV PDF under /public, or "" until the public cut is exported.
  cvPdf: "",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Work" },
  { href: "/writing/", label: "Writing" },
  { href: "/cv/", label: "CV" },
  { href: "/contact/", label: "Contact" },
];
