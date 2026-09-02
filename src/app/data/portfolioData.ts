// Hero 3D Carousel Featured Art Images
import carouselImg_1 from "../images/IMG_20260824_201728.jpg"; // Rhythm of the Wind
import carouselImg_2 from "../images/IMG_2023_08_29.jpg";     // Countryside Sunrise
import carouselImg_3 from "../images/IMG_20210602_141744.jpg"; // Festive Panda (2021)
import carouselImg_4 from "../images/20171210_132043.jpg";     // Leaves Change
import carouselImg_5 from "../images/IMG_20260830_202107.jpg"; // Etheral Waves
import carouselImg_6 from "../images/IMG_2415.JPG";            // Self Portrait (2021)
import carouselImg_7 from "../images/IMG_20260824_201311.jpg"; // Cornucopia
import carouselImg_8 from "../images/IMG_20200724_112956.jpg"; // From My Heart Manga Cover (2021)

export const NAV_LINKS = [
  "About",
  "Experience",
  "Projects",
  "Artworks",
  "Contact",
];

export const CAROUSEL_IMAGES = [
  carouselImg_1,
  carouselImg_2,
  carouselImg_3,
  carouselImg_4,
  carouselImg_5,
  carouselImg_6,
  carouselImg_7,
  carouselImg_8,
];

export const BRAILLE_CAT_1 = 
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⡀⣠⣾⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀
⠀⣶⣿⣦⣜⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⡿⢿⡏⣴⣺⣦⣙⣿⣷⣄⠀⠀⠀
⠀⣯⡇⣻⣿⣿⣿⣿⣷⣾⣿⣬⣥⣭⣽⣿⣿⣧⣼⡇⣯⣇⣹⣿⣿⣿⣿⣧⠀⠀
⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷⠀`;

export const BRAILLE_CAT_2 = 
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣷⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣦⣀⡀⠀⢀⣴⣇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀
⠀⠀⣾⣿⣿⣿⣿⣿⣶⣿⣯⣭⣬⣉⣽⣿⣿⣄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⢸⣿⣿⣿⣿⠟⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⣿⣿⣿⣿⡿⠛⠉⠉⠉⠉⠁
⠘⠛⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

export const JOBS = [
  {
    role: "Software Developer Intern",
    co: "DRW",
    period: "JAN-AUG 2026",
    from: { mo: "JAN", yr: "2026" },
    to: { mo: "AUG", yr: "2026" },
    loc: "Montreal, QC",
    wins: [
      "Built streaming ETL pipelines across 500+ sites feeding weather telemetry to ML models with 95% accuracy",
      "Developed interactive route-planning tools, removing mock links to reclaim 30% of database storage",
      "Engineered a KML/KMZ parser automating imports of 2000+ sites and 300+ links for competitive intelligence",
      "Designed a centralized permit tracking system with automated alerts to prevent accidental expirations"
    ],
  },
  {
    role: "Software Developer Intern",
    co: "DRW",
    period: "MAY-AUG 2025",
    from: { mo: "MAY", yr: "2025" },
    to: { mo: "AUG", yr: "2025" },
    loc: "Montreal, QC",
    wins: [
      "Implemented data aggregators in Grafana's State Timeline plugin to safely migrate 60% of NX dashboards",
      "Prototyped a LangChain AI agent to parse natural-language prompts into validated-Telegraf configs",
      "Developed a real-time geospatial Grafana dashboard mapping global network topology and latency metrics"  
    ],
  },
  {
    role: "Backend Developer Intern",
    co: "Intact",
    period: "SEP-DEC 2024",
    from: { mo: "SEP", yr: "2024" },
    to: { mo: "DEC", yr: "2024" },
    loc: "Montreal, QC",
    wins: [
      "Strengthened the security of internal services by fixing 98% of critical CVEs and updating Maven dependencies",
      "Utilized Java and SpringBoot to efficiently map customer facing data to internal data"
    ],
  },
  {
    role: "Frontend Developer Intern",
    co: "TAP",
    period: "MAY-AUG 2024",
    from: { mo: "JAN", yr: "2024" },
    to: { mo: "APR", yr: "2024" },
    loc: "Toronto, ON",
    wins: [
      "Redesigned the company’s website using Next.js, leading to 30% increase in user engagement",
      "Created over 15 dynamic and interactive ad units with HTML, CSS, and JavaScript",
      "Integrated GPT-4 API workflows to generate natural language summaries for campaign performance metrics"
    ],
  },
  {
    role: "Quality Analyst Intern",
    co: "i4i",
    period: "MAY-SEP 2023",
    from: { mo: "MAY", yr: "2023" },
    to: { mo: "SEP", yr: "2023" },
    loc: "Toronto, ON",
    wins: [
      "Created XML configuration files and enhanced the UI of an internal tool using Python",
      "Conducted over 200 extensive manual software test cases to identify and report potential issues in Zoho",
    ],
  },
];

export const PROJS = [
  {
    id: "01",
    name: "NOTEMPO",
    desc: "AI-powered ensemble arrangement engine using Gemini and music21. Transforms raw audio into playable, customizable sheet music for small ensembles.",
    stack: ["Python", "FastAPI", "Next.js", "Gemini AI", "music21"],
    github: "https://github.com/m88deng/notempo"
  },
  {
    id: "02",
    name: "GRTNOW",
    desc: "Full-stack transit schedule platform interfacing with local SQL Server. Executes dynamic query templates via .NET to stream structured transit data to the UI.",
    stack: [".NET", "C#", "SQL Server", "SSMS", "REST API"],
    github: "https://github.com/m88deng/project348"
  },
  {
    id: "03",
    name: "EEIL CITATIONS",
    desc: "Automated bibliographic formatting tool tailored to EEIL academic citation standards. Dynamically parses source metadata and renders exportable references.",
    stack: ["React", "JavaScript", "Styled Components"],
    github: ""
  },
  {
    id: "04",
    name: "EMOLOCK",
    desc: "Emotion-authenticated hardware lock using real-time facial expression classification and microcontrollers. Unlocks an electromagnetic solenoid via a sequential 4-emotion passkey.",
    stack: ["Python", "Arduino", "OpenCV", "Embedded Systems", "Serial Communication"],
    github: "https://github.com/m88deng/hashbrowns-emolock"
  },
];
