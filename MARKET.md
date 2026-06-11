# Kirkland An — Market Profile

Comprehensive brief for resume, cover letter, and portfolio agents. Synthesized from direct interview.

---

## Identity

**Kirkland An** — Newsroom Developer, Boston Globe  
Journalist who tells stories through code. Career arc: print journalism → data reporting → full-stack interactive development. Rare combination of editorial instinct and engineering depth.

---

## Education

- **BA, Political Science** — Wheaton College, Wheaton, IL (2017)
- **Certificate, Journalism** — Wheaton College

---

## Career Arc

| Role                                             | Organization             |
| ------------------------------------------------ | ------------------------ |
| Intern (design)                                  | Chicago Tribune          |
| Intern (reporter/editor, opinion)                | USA Today                |
| Fellow (reporting, video editing, fact-checking) | USA Today                |
| Associate Editor for Media and Design            | Providence Magazine      |
| Editorial Production Specialist                  | University of Pittsburgh |
| Data Visualization Reporter                      | Houston Chronicle        |
| Data Visualization Developer                     | Houston Chronicle        |
| Newsroom Developer _(current)_                   | Boston Globe             |

**Boston Globe team context:** 4 newsroom developers, 2 data reporters, 2 digital designers, 1 data editor, 1 senior StoryLab editor, plus DevOps. Embedded model — joins reporter/editor teams for custom interactive work, and independently builds newsroom infrastructure tools.

---

## Technical Skills

### Languages

- JavaScript, TypeScript, Python, HTML/CSS, SQL

### Frameworks & Libraries

- React, Gatsby, Vite, D3.js, Mapbox GL JS, pandas, geopandas

### Data & Backend

- Supabase (PostgreSQL, Row-Level Security, Edge Functions, Storage, RPCs)
- Google Sheets API, Google Docs API, Google Drive API
- OpenAI GPT-4o
- RAG (Retrieval-Augmented Generation) architecture
- Jinja2 templating

### Infrastructure & DevOps

- Jenkins CI/CD (Jenkinsfiles, parameterized builds)
- rsync, SSH, gcloud / Google service account auth
- Pipenv, Node/nvm

### AI & Agentic

- Claude Code (agentic coding, system design, multi-agent workflows)
- Prompt engineering, prompt injection security
- OpenAI API integration

### Media & Specialized Tools

- ffmpeg (audio/video capture, HLS stream recording)
- Otter API (audio transcription)
- Slack Bolt / Slack Block Kit (WebSocket bots)
- Sidechain embeds (Boston Globe CMS embed system)
- Adobe Illustrator, print layout design
- Podcast audio engineering

### Signature Techniques

- **Custom scrollytelling** — proprietary implementation; text overlays scroll against a pinned full-viewport interactive (video, image, or live dataviz)
- **News games** — quizzes, Dunkin' game, food hall game, whack-a-mole, chord detective
- **Interactive maps** — Mapbox GL JS, filterable grids, 3D fly-throughs
- **Data pipelines** — end-to-end: scrape/ingest → transform → publish → embed

---

## Flagship Projects

### Charles Stuart Investigation _(Boston Globe × HBO Max)_

Multimedia package produced jointly with HBO Max. Eight interactive story pages, scrollytelling chapter, podcast page. National award sweep:

- **ONA: Best Feature**
- **Murrow Award: Best News Documentary**
- **Dart Award**
- **IRE Award: Longform Journalism**

### Boston's Best of the Best _(Boston Globe Magazine, annual)_

Filterable interactive grid + Mapbox map. Consistently **top 3 subscriber conversion driver** on bostonglobe.com. Also built the full BotB automation pipeline (see Tools below).

### Recipe Database _(Boston Globe)_

**Company's first reader-facing generative AI product.** Self-initiated: Kirk discovered an unexecuted hack-day proposal, revived it as a personal project, and delivered it solo. RAG architecture on OpenAI, company-owned database backend, full prompt engineering and prompt injection security. Stakeholder interviews with food editors and writers. Consistent niche readership.

### Grocery Price Tracker _(Boston Globe)_

Cross-company data pipeline with a third-party data vendor. Constantly refreshed frontend with new data on a live cadence.

### Ike Dike Interactive _(Houston Chronicle)_

3D fly-through visualization of a $31B Army Corps of Engineers infrastructure project. Requested and obtained the 3D model directly from the Army Corps. **TX Managing Editors: Best Online Package.**

### Astroworld No Escape Plan _(Houston Chronicle)_

Award-winning deep-dive into the deadly concert. Custom animation, scrollytelling, crowd visualization. **Scripps Award.**

### Vanity Plate Quiz _(Boston Globe)_

High-engagement quiz on MA RMV rejected plates. Consistently strong engagement driver — quizzes are Kirk's repeatable pattern for viral lift.

---

## Internal Tools & Infrastructure

### BotB Automation Pipeline

Python pipeline eliminating manual CMS work for reporters/editors. Pulls from Google Sheets + Google Docs (service account), generates Jinja2-templated HTML blocks, writes JSON, rsyncs to dev server. Includes React/TypeScript/Vite internal tool frontend (VPN-gated) for editors to browse and copy HTML blocks.

### News Quiz System (two-repo)

**Generator** (admin tool): React/TypeScript/Vite, Supabase-backed, lets non-technical editors create and sunset quizzes without a deploy. **Embed** (public): single permanent URL, loads quiz via `?quiz=` param. Supabase Edge Functions for RLS-protected answer submission. Full data lifecycle: create → active → sunset → frozen JSON in Supabase Storage. Built with agentic coding (Claude Code / grill-me workflow) with verbose logging to stay within Supabase free tier.

### City Council AI Monitor _(WIP)_

Jenkins-automated pipeline: weekly Slack menu of Cambridge city council meetings with GPT-4o-mini agenda summaries. Reporter clicks "Cover this meeting" → Jenkins Job 2 fires → ffmpeg records HLS stream → Otter transcribes audio → GPT-4o generates structured briefing → posts to Slack. Slack Bolt WebSocket bot handles interactions.

---

## Awards

| Award                                    | Project                      |
| ---------------------------------------- | ---------------------------- |
| ONA: Best Feature                        | Charles Stuart Investigation |
| Murrow Award: Best News Documentary      | Charles Stuart Investigation |
| Dart Award                               | Charles Stuart Investigation |
| IRE Award: Longform Journalism           | Charles Stuart Investigation |
| TX Managing Editors: Best Online Package | Ike Dike Interactive         |
| Scripps Award                            | Astroworld No Escape Plan    |

---

## Mentorship & Leadership

- **AAJA Voices Program** — Served as a Voices editor, mentoring a formal cohort of student journalists. One mentee went on to become a New York Times Fellow.
- **AAJA Mentor Match** — One-on-one mentorship of a graduate journalist through the program.
- **Stakeholder translation** — On every project, interfaces directly with non-technical reporters and editors: scoping requirements, explaining technical constraints in editorial terms, and delivering against journalism goals.

---

## Differentiators

1. **Journalism + engineering** — understands both the story and the system. Rare in either field.
2. **Self-initiating** — recipe database and BotB automation both started as unprompted personal projects that became production products.
3. **Agentic AI practitioner** — not just an API consumer; designs multi-step agentic systems (city council monitor, quiz generator, BotB pipeline) and uses Claude Code for complex system design.
4. **First-mover on AI in newsrooms** — built the Globe's first reader-facing generative AI product before it was a mandate.
5. **Award-winning track record** — 6 major journalism awards across two newsrooms, including national and cross-platform recognition.
6. **Multiplies non-technical colleagues** — tools he builds (quiz generator, BotB automation) let editors and reporters do work that previously required a developer.
