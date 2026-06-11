# HANDOFF — Portfolio / Job Search Session

## Session Summary
This was a job market research and strategy session, not a coding session. No source code was changed.

## Files Created/Modified
- `MARKET.md` — Full resume brief (read this first for any resume/job tasks)
- `JOB_MARKET.md` — New file created this session. Two sections:
  1. **Active Listings (top of file)** — 3 verified open jobs + "watch" table
  2. **Market analysis** — Tier 1/2/3 categories with salary/WLB/remote ratings

## Key Research Findings

### ATS Systems by Target Company
| Company | ATS | Notes |
|---|---|---|
| NYT, ProPublica, NPR | Greenhouse | AI Talent Matching (OpenAI-powered, Feb 2026) |
| Supabase | Ashby | Fit-level citations, human-in-loop, less aggressive |
| Politico | UKG/UltiPro | % skill match + questionnaire equally weighted |

### Active Job Listings (June 10, 2026)
1. **NYT — Data Graphics/Multimedia Editor, The Upshot** — $109k–$136k, hybrid NYC, Greenhouse. Near-perfect fit. [Apply](https://job-boards.greenhouse.io/thenewyorktimes/jobs/4669945005)
2. **Politico — Editorial Director, Newsroom Engineering** — est. $150k–$200k, on-site Arlington VA, UKG. **Deadline June 22.** Leadership stretch but strong skill match.
3. **Supabase — Developer Relations Engineer** — Remote, salary undisclosed (~$130–170k market), Ashby. Kirk already has real Supabase projects (quiz system).

### Portfolio Site Gap Identified
Portfolio (`src/portfolio.js`) shows only 5 public journalism pieces. Internal tools work (BotB pipeline, quiz system, City Council Monitor) is entirely absent — critical gap for DevRel/PM/tech roles. `src/resumeList.js` is also sparse with no metrics or technical detail. Contact email is Globe work address — should be personal for job search.

## ATS Optimization Notes for Kirk
- Add dedicated Skills section (comma-separated) — Greenhouse indexes this separately from prose
- Mirror exact terminology from each JD before submitting
- Single-column clean PDF only (tables/columns break all three parsers)
- Align LinkedIn with resume — Greenhouse penalizes mismatches
- For Politico/UKG: treat application screening questions like mini cover letters (weighted equally to resume)
- Awards don't parse — put them in cover letter, not buried in resume bullets

## Next Steps for Next Agent
1. **Portfolio additions (most impactful):** Add internal tools section to `src/portfolio.js` — case studies for BotB pipeline, quiz system, City Council Monitor. No live links needed; written case study format. Reference `MARKET.md` → "Internal Tools & Infrastructure" section for content.
2. **Fix contact email:** `src/Contact.jsx:28` — change `kirkland.an@globe.com` to personal email (`kirkan95@gmail.com`)
3. **Beef up resume entries:** `src/resumeList.js` — current entries are 1-2 sentences with no metrics. Could expand Boston Globe and Houston Chronicle entries with technical specifics.
4. **Consider skills section** in the portfolio site — no tech stack is currently visible to visitors.
5. **JOB_MARKET.md** — refresh Active Listings weekly; Politico deadline is June 22.

## User Context
- Kirk An, Newsroom Developer at Boston Globe
- New kid coming — prioritizes WLB, remote/Wilmington DE, high pay, creative work
- Prefers roles without "AI" in title but open if pay is high enough
- Full profile: `MARKET.md`
