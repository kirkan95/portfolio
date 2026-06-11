export const portfolioMap = new Map([
  [
    "botb-pipeline",
    {
      name: "BotB Automation Pipeline",
      outlet: "Boston Globe",
      url: null,
      imgSrc: "/generator.jpg",
      text: "The annual Best of the Best issue required editors to manually copy and format hundreds of item entries into the CMS — a multi-day process. I built a Python pipeline that reads directly from Google Sheets and Docs via service account auth, renders Jinja2-templated HTML blocks, writes structured JSON, and rsyncs to the dev server. A React/TypeScript/Vite frontend (VPN-gated) lets editors browse and copy finished blocks without touching a deploy. The production time decreased by more than 80%.",
      contribution:
        "End-to-end pipeline design, Google Sheets/Docs API integration, Jinja2 templating, rsync deployment, React admin frontend",
      type: "hidden",
    },
  ],
  [
    "quiz-system",
    {
      name: "News Quiz System",
      outlet: "Boston Globe",
      url: null,
      imgSrc: "/quiz.jpg",
      text: "The newsroom needed a way for editors to ship quizzes without a developer deploy. I built a two-repo system: a React/TypeScript/Vite admin tool backed by Supabase lets editors create and sunset quizzes with no code. A single permanent embed URL loads the active quiz via query parameter. Supabase Edge Functions handle RLS-protected answer submission, and the full data lifecycle — create, active, sunset, archived to frozen JSON in Supabase Storage — runs without developer intervention.",
      contribution:
        "System architecture, Supabase schema, Edge Functions, admin generator UI, public embed",
      type: "hidden",
    },
  ],
  [
    "recipes",
    {
      name: "Globe Recipe Database",
      outlet: "Boston Globe",
      url: "https://apps.bostonglobe.com/2026/01/lifestyle/food-dining/recipe-database/",
      imgSrc: "/recipes.jpg",
      text: "The Globe had an unexecuted hack-day proposal for a recipe database — I discovered it, revived it as a personal project, and delivered it solo. It became the company's first reader-facing generative AI product. Built on a RAG architecture with OpenAI, with full prompt engineering and injection hardening. I ran stakeholder interviews with food editors and writers, owned the backend database design, and launched it to a consistent niche readership.",
      contribution:
        "Full product: RAG architecture, OpenAI integration, prompt engineering, injection hardening, database design",
      type: "public",
    },
  ],
  [
    "botb",
    {
      name: "Boston's Best of the Best",
      outlet: "Boston Globe",
      url: "https://apps.bostonglobe.com/magazine/2026/06/best-of-the-best-restaurants-things-to-do/",
      imgSrc: "/botb.jpg",
      text: "I created a landing page for our magazine's take on the finest Boston has to offer, which included a filterable grid of categories and an interactive map. Since publication, it has consistently been in the top 3 stories that convert readers to subscribers.",
      contribution: "Whole page, design, interactive map, grid layout",
      type: "public",
    },
  ],
  [
    "stuart",
    {
      name: "Charles Stuart Shooting",
      outlet: "Boston Globe",
      url: "https://apps.bostonglobe.com/metro/investigations/2023/12/charles-stuart/",
      imgSrc: "/stuart.jpg",
      text: "The Globe newsroom collaborated with HBO Max to bring this multimedia package to life. We provided the web presentation and eight interactive story pages. This project won multiple first-place, national awards (ONA: Best Feature, Murrow: Best News Documentary, Dart Award, IRE: Longform Journalism).",
      contribution:
        "All story pages, podcast page, first chapter scrolly experience",
      type: "public",
    },
  ],
  [
    "ikedike",
    {
      name: "Ike Dike Interactive",
      outlet: "Houston Chronicle",
      url: "https://www.houstonchronicle.com/projects/2022/ike-dike-plan-galveston/",
      imgSrc: "/ikedike.jpg",
      text: "We were tasked with creating a visualizer of a $31B proposed infrastructure project. When the Army Corps of Engineers sent us JPGs of their 3D rendering, I requested the model itself, and created a 3D fly-through experience. This project won an award for best online package (TX Managing Editors).",
      contribution:
        "3D model videography, scrollytelling, page design, topper design",
      type: "public",
    },
  ],
]);
