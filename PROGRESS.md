# Portfolio Progress

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript / React 19
- **Node**: v20 required — run with `PATH="/Users/egbp/.nvm/versions/node/v20.20.2/bin:$PATH" npm run dev -- -p 3000`

## Current State (classic design — `/`)
- Light theme: white → zinc-100 gradient background
- Tab navigation: About Me / Experience / Education
- Animations: fade-in on tab switch, staggered slide-up on content, skill tag hover lift
- Max width: `max-w-6xl` with `px-10` padding

### Known issues
- Bottom of About Me skills section appears misaligned — needs fixing

## Pages
- `/` — current/classic design
- `/experiment` — dark theme experiment (not moving forward with this)

## Content status
- **About Me**: updated from `Gilbert_Batista_CV.pdf`, summary + grouped skills, correct phone +1 (849) 621-8895
- **Experience**: all jobs from CV including Wird AI, ChicksGroup, Naxmek, Lemontech, Digital Human, Media Revolution
  - Wird AI + ChicksGroup: using initials placeholder (no logos yet)
- **Education**: INTEC only

## TODO
- [ ] Fix bottom misalignment on About Me
- [ ] Get logos for Wird AI and ChicksGroup
- [ ] Decide on final design direction
- [ ] Deploy / host
