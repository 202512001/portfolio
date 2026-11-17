// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Shruti Makwana",
  role: "Full-stack developer",
  tagline: "I build web apps and AI tools that real people use.",
  intro:
    "Final-year M.Sc. IT student at Dhirubhai Ambani University. I like owning a feature end to end: the database, the API, and the screen someone taps on their phone.",
  email: "202512001@dau.ac.in",
  github: "https://github.com/202512001",
  linkedin: "https://www.linkedin.com/in/shruti-makwana-318307293/",
  resume: "resume.pdf",
  location: "Gandhinagar, Gujarat",
};

export const about = [
  "I'm studying Information Technology at Dhirubhai Ambani University in Gandhinagar. Most of what I know, I learned by shipping something and fixing it when it broke.",
  "My favourite projects sit where product thinking meets engineering: a PWA that forms visit groups automatically, a tracker that explains your portfolio in plain language, an interview coach that adapts to your resume.",
  "Outside of code, I'm part of the Muse Design Club, which keeps my eye on spacing, colour and the small details that make an interface feel kind.",
];

export const education = [
  { school: "Dhirubhai Ambani University", detail: "M.Sc. Information Technology", score: "CPI 7.21", place: "Gandhinagar, Gujarat", years: "2025 – Present" },
  { school: "KS School of Business Management and IT", detail: "Undergraduate", score: "75.2%", place: "Ahmedabad, Gujarat", years: "2022 – 2025" },
  { school: "NK School of Commerce (GHSEB)", detail: "Higher Secondary", score: "88.42%", place: "Gandhinagar, Gujarat", years: "2021 – 2022" },
  { school: "Shree Swaminarayan High School (GSEB)", detail: "Secondary", score: "82.33%", place: "Gandhinagar, Gujarat", years: "2019 – 2020" },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Maktak Technology",
    place: "Ahmedabad, Gujarat",
    period: "May 2026 – July 2026",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    points: [
      "Engineered a full-stack client engagement platform for a software services company, managing multiple client engagements.",
      "Built a protected admin dashboard for end-to-end client request management.",
    ],
  },
];

export const projects = [
  {
    title: "CommunityVisit",
    subtitle: "Real-time community visit management PWA",
    highlight: "In production, used by real users",
    tone: "blush",
    featured: true,
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Live app", href: "https://finship-app.vercel.app" },
      { label: "GitHub", href: "https://github.com/202512001" },
    ],
    points: [
      "Real-time bidirectional notifications on Supabase Realtime channels, filtered by gender and area so alerts reach only eligible members.",
      "Automated group formation: a member sends an availability alert, a 4-minute countdown runs, accepted members are clustered, and a group forms with visit recommendations ranked by frequency and recency.",
      "Role-based access with gender-segregated admin panels, bcrypt-hashed PINs via PostgreSQL functions, Row Level Security on every table, and rate-limited auth endpoints.",
      "Deployed on Vercel with environment-based secrets, CSP, HSTS and X-Frame-Options headers, and source maps disabled in production.",
    ],
  },
  {
    title: "Portfolio Tracker Platform",
    subtitle: "Investment tracking with AI-assisted insights",
    highlight: "Stocks, gold and mutual funds in one place",
    tone: "lavender",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "LLM APIs"],
    links: [],
    points: [
      "Designed REST APIs and MongoDB data models with automated gain/loss analytics.",
      "Integrated third-party LLM APIs to turn raw portfolio data into plain-language, client-ready insights.",
    ],
  },
  {
    title: "PrepNova",
    subtitle: "RAG-based adaptive AI interview platform",
    highlight: "Retrieval with LangGraph and ChromaDB",
    tone: "sage",
    stack: ["Python", "FastAPI", "LangGraph", "ChromaDB", "Groq", "React.js", "Node.js"],
    links: [],
    points: [
      "Processes resumes, job descriptions and target roles to personalise each interview.",
      "RAG workflow retrieves relevant context for question generation and answer evaluation.",
      "Generates adaptive questions and returns structured feedback as performance reports.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  { group: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Flask", "REST APIs"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"] },
  { group: "AI / ML", items: ["RAG", "AI Agents", "LangGraph", "Semantic Search", "Vector Embeddings", "ChromaDB", "LLM API Integration"] },
  { group: "Tools", items: ["Git", "VS Code", "Linux Shell", "Figma", "Jira"] },
  { group: "Core subjects", items: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP", "Machine Learning"] },
];

export const involvement = {
  title: "Member, Muse Design Club",
  period: "September 2025 – Present",
  points: [
    "Took part in creative design workshops and improved my skills in Inkscape and Canva.",
    "Contributed to collaborative design projects and event creatives.",
    "Represented the club at Mood Indigo 2025, IIT Bombay: national-level workshops, competitions and networking.",
  ],
};
