# Brand Sprint — redesign plan (mimosa-ui integration + UI/UX overhaul)

*Written 2026-07-03 after a full code + live inspection (desktop 1440, mobile 375,
light + dark, all 14 sections, output brief). Companion to `CLAUDE.md` (house
rules) and `~/Documents/Code/mimosa-ui` (source of truth for the look).*

The app works, but it reads as a generic form styled twice: a "square,
monochrome" base layer with a "soft panel" override block appended at the end
of `style.css` (line ~1067). The two layers fight, tokens don't match
mimosa-ui's names or scale, mobile is completely broken, and several controls
look and behave below the kit's standard. The plan below is ordered; each phase
is shippable on its own.

---

## Findings (what's actually wrong)

### Doctrine / look
- **Two style registers fighting.** Base CSS says square + hairline borders;
  the appended "Phase 2" block adds `--radius: 14px` soft panels + an inset
  `box-shadow` ring on the quadrant. mimosa-ui's rule: the brand sprint is a
  *soft content register* context — rounding is fine, but via the semantic
  vars (`--radius-card/-media/-control`, `data-surface="soft"` values 6/8/12/16),
  not a bespoke 14/10, and never via inset box-shadow.
- **Accent used as decoration.** The `section-num` badge is an accent-filled
  chip on *every* section header; `.field-label.accent` colours the WHY label.
  House rule: accent = selected/active/focus **only**. These should be monochrome.
- **Rainbow chrome.** Quadrant colour-dot picker (5 rainbow dots), hardcoded
  `#FF38D4`/trio in the output brief (`app.js` ~725, ~801), `--purple` token
  still defined (retired), timeline card labels in accent.
- **Token names diverge from mimosa-ui.** Sprint invents `--surface`,
  `--surface-mid`, `--card`; no `--space-*`, `--type-*`, `--control-*`,
  `--accent-soft`, `--press-scale`, `--inactive-opacity`. Everything is raw px.
- **Scope chips selected state** = accent fill + white text. White on Windows
  Blue fails contrast, and with the per-brand accent (e.g. Coding Green) it's
  unreadable. The kit's pattern is surface fill + accent *ring* (ChoiceCards).

### Contrast
- TOC links: 12px `--text-muted` (#9F9F9F) on white — weak. **Dark mode: #555
  on #0D0D0D — effectively invisible.** Dark mode overall is an afterthought
  (mimosa-ui defines no dark tokens at all — see Decisions).
- 9px type everywhere: pairing hex codes, font-mood examples/foundries,
  TOC step numbers, eyebrows, axis inputs at 10px muted. The DS floor is
  micro = 10px, small = 11px.
- Golden-circle rings stroke `--border` grey on the grey panel — barely visible.
- Quadrant competitor labels: 9px white on a translucent black pill — unreadable
  and off-brand.

### Spacing / layout
- **No responsive CSS at all** (only `@media print`). At 375px the fixed 224px
  TOC leaves a one-word-per-line content column. Unusable on mobile.
- Colors section: `.palette-row` reserves `min-height: 100px` + 28px margin even
  when empty → a big dead band above the tabs.
- Quadrant: `.quadrant-wrap` padding `42px 92px` leaves axis labels floating in
  grey space, detached from the plot; the whole section is one giant panel with
  a lost sidebar inside it.
- Golden circle column fixed 240px, vertically centred against 3 stacked
  textareas — big awkward gap.
- Content column is 680/900px while the DS reading column is ~600px; section
  padding (80/64) is arbitrary px, not the 8px rhythm.

### Interactivity / UX
- **State is not persisted.** Only the theme survives reload; 13 sections of
  workshop answers vanish on refresh. (Biggest single UX win available.)
- Competitor dots claim `cursor: grab` but **can't be dragged**; removal is an
  undiscoverable double-click. mimosa-ui `Quadrant.jsx` already has the pointer
  drag logic to port.
- Font-mood cards and pairing cards are **divs, not buttons** — no keyboard
  access, no focus-visible, no aria-checked. (Scope chips are buttons, fine.)
- No completion feedback: TOC shows position but not which sections have
  answers; "Generate brief" is always-on with no sense of readiness.
- No signature moment: generating the brief — the app's one "publish" event —
  has no glimm sweep, no transition, just an overlay popping in.
- **Security/robustness: user input is injected raw into `innerHTML`**
  (brand name → output doc, values/audiences re-renders via
  `value="${v.name}"`). Typing markup executes it. Needs an escape helper.
- `Enter` in the brand-name input does nothing; Escape doesn't close the
  overlay or the nav dropdown; preset chips serialize JSON into an onclick
  attribute (breaks on quotes).
- Per-brand accent only fires from *pairings*, not custom colours, and isn't
  persisted; `--accent-soft` never updates with it.

### Output brief
- Reads as a plain grey doc, not a mimosa deliverable: hardcoded pink section
  titles, the hardcoded colour-trio on value cards, no wordmark, no OS
  media/filename framing for the palette, generic cards.

---

## Decisions (locked 2026-07-03 — Danilo said proceed; emphasis added below)

1. **Dark mode: KEPT**, with a contrast-fixed dark token set (removing a
     shipped feature wasn't ours to decide; the fix is ~15 token values).
2. **AnchorGrid question:** deferred to Phase 6.
3. **Rainbow competitor dots → DS pattern:** ink squares, label beside the
     dot, draggable; the rainbow picker is removed.
4. **Glimm sweep:** deferred (needs the package wired into a no-build site);
     the overlay gets a proper CSS transition meanwhile.

### Danilo's added emphasis (2026-07-03): premium containment
The three flagged artefacts — the golden circle, the what/how/why section, and
*how information + input fields are contained* — get first-class treatment:
every section's controls live in one soft `--surface-panel` container; fields
are **borderless filled surfaces** in the DS `Input` register (white fill on
the grey panel, grey fill inside white cards; hover = one surface step; focus =
white + quiet 1px ink inset ring — no glow, no hairline soup). Cards inside
panels drop their borders and read as fills stepping against the ground.

---

## Phase 1 — one token layer, one register (foundation)

Rebuild the top of `style.css` on mimosa-ui's tokens and **delete the Phase-2
override block** by folding its good decisions into the base styles. One
coherent layer, no overrides.

- Copy the token values from `mimosa-ui/tokens/{colors,spacing,typography}.css`
  (semantic aliases included: `--surface-panel/-raised/-sunk`, `--space-0..10`,
  `--type-*`, `--control-*`, `--radius-sm/md/lg/pill`, `--accent-soft`,
  `--press-scale`, `--inactive-opacity`, easings/durations — already close).
- Map old names once (`--surface` → `--surface-panel`, `--card` →
  `--surface-raised`, `--surface-mid` → `--surface-sunk`) then migrate usages.
- Soft register, deliberately: panels/cards/tiles read `--radius-lg` (12px),
  controls `--radius-md` (8px), media `--radius-md`, buttons stay `--radius-pill`.
  No shadows anywhere (kill the quadrant inset ring).
- Type floor: nothing under 10px. TOC = 11px small; step numbers = 10px micro;
  pairing codes / font examples = 10–11px. TOC resting colour `--text-secondary`,
  active `--text-primary` + accent bar (as now).
- Spacing on the 8px rhythm: section padding `--space-8`/`--space-7`, content
  column 600–640px, all `margin-top: 32px`-style inline px → tokens.
- Remove `--purple`, the dead `--blue` duplicate, and the Google-Fonts weights
  not used by specimens.

## Phase 2 — port the control looks from mimosa-ui (vanilla)

Port each component's *look and behaviour* from the kit's JSX (they're all
single-file with embedded CSS — read them before styling):

- **Font moods + scope chips → ChoiceCards pattern**
  (`components/choicecards/ChoiceCards.jsx`): real `<button>` tiles,
  `--surface-panel` fill, hover `--surface-sunk`, selected = 2px accent
  *outline* (inset), `:active` press-scale, `role=radio/checkbox` +
  `aria-checked`, focus-visible. Scope chips can stay pill-shaped but adopt the
  ring-not-fill selected state. Trim font-mood meta noise (drop foundries row;
  keep name, one-liner, examples at 10px).
- **Quadrant → port `Quadrant.jsx`**: axis labels *inside* the padded frame
  (top/bottom centred, sides vertical-rl, `--text-secondary`), faint concentric
  guide rings, square 12px points with the label *beside* the dot at 11px ink,
  hover-dims-the-others, **pointer-drag to reposition**, click-to-place kept.
  Remove = small × on hover next to the label + the list (kill dblclick-only).
  Sidebar becomes a compact toolbar row above the plot instead of a lost column.
- **Golden circle → port `GoldenCircle.jsx`'s tonal discs**: replace the
  stroked SVG with flat concentric grey discs (`hsl(0 0% 94/88/82%)`), labels
  stacked down the centre; focusing WHY/HOW/WHAT textareas inks the band
  (`is-active` = one step darker + label to ink). No strokes, no drop-shadows.
- **Sliders → port `Slider.jsx`**: label + tabular value in a top row (kill the
  orphaned "50" bottom-right), 4px square rail `--surface-sunk`, accent fill,
  15px round thumb with press/drag scale, arrows/Home/End already work
  (native input) — keep it, restyle it.
- **Pairing cards**: min 10px codes, selected = accent ring (already) but fix
  hover lift (translateY conflicts with flat register — swap for
  `--surface-sunk` fill shift), make them `<button>`s.
- **Timeline**: milestone label inputs → monochrome micro-labels (accent only
  when filled = the "selected" semantics the nodes already use).

## Phase 3 — layout & responsive (the missing half)

- **Breakpoints.** ~`900px`: TOC collapses to a top progress strip (numbered
  dots + current label) or a pull-up sheet (house rules allow the rounded top
  on a mobile sheet); forms single-column; `.imagery-grid`, `.fonts-grid`,
  `.audience-grid`, `.nextstep-fields` stack; timeline cards become a vertical
  list; quadrant scales to viewport width with labels intact; font moods 2-up
  then 1-up; generate bar stacks.
- **Colors section**: no reserved empty band — palette row only renders when
  colours exist; consider pairings tab first (it drives the per-brand accent,
  the section's best moment).
- **Welcome**: use the display register properly — big low-set title (the
  mimosa marketing hero pattern), brand-name input + start on one line,
  `Enter` submits.
- Section headers: number becomes a monochrome micro-label (`01 / Scope`),
  no accent chip.

## Phase 4 — interactivity, persistence, polish

- **Persist the whole `state` to localStorage** (debounced autosave + restore
  on load; "Start over" = confirm + clear). Include `_selectedPairing` and the
  per-brand accent.
- **Escape HTML** for all user-entered strings before `innerHTML` insertion
  (one `esc()` helper used in every render fn + the output doc).
- **Completion feedback**: tick/fill the TOC step number when its section has
  any answer; generate CTA shows "n of 13 answered".
- **glimm sweep on Generate** (vanilla core from the `glimm` package — the one
  legitimate sweep moment) + Escape closes the overlay; focus moves into it
  and returns on close.
- Per-brand accent: also fire from custom colour adds (reuse `pickAccent`),
  update `--accent-soft` alongside, persist it.
- `prefers-reduced-motion`: disable chipIn/cardIn/sweep animations.
- Preset chips: replace JSON-in-onclick with data-index lookup.

## Phase 5 — the brief as a mimosa deliverable

- Restyle the output doc on the same tokens: monochrome + the brand-being-built's
  accent for section titles (it already routes via `--pink`→`--accent` — remove
  the *hardcoded* pinks and the value-card colour trio instead).
- mimosa wordmark + "made with mimosa" footer; palette swatches framed the DS
  way (thin filename-style bar: name left, hex right); personality rows in the
  DS slider look; print CSS re-checked after restyle.
- Voice pass over all copy (British spelling per house rules: *colours*,
  *behaviour*; sentence-case chips — "Strategy & positioning").

## Phase 6 — optional signature moments (nice-to-have)

- AnchorGrid placement question (see Decisions #2).
- A tiny StatusBar-style footer (Berlin clock) if the OS feel is wanted.
- CardCover-style generative cover on the brief's title page.

---

## Process guardrails

- This repo previously had a dirty-tree accident: **stage specific files,
  never `git add -A`** (PP Mori binaries are gitignored but present locally).
- Verify each phase live (`preview` at 1440 *and* 375) before committing.
- `pickAccent()` in `app.js` and the `--pink` → `--accent` routing are load-bearing
  for the per-brand re-theme — don't rename either without migrating both.
