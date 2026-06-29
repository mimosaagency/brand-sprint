> **This is a mimosa project. Build it mimosey.**
>
> **Design system:** use `@mimosa/ui` (github.com/mimosaagency/mimosa-ui, branch
> `fidelity-pass`) as the source of truth — its tokens, components, and templates.
> Don't reinvent primitives that already exist there; port them. Read its
> `CLAUDE.md` + `readme.md`. This app is **vanilla** (no React), so port the LOOK
> against the same token names rather than importing the React components.
>
> **STRICT house rules — monochrome-first (2026 token overhaul; these override
> generic UI instincts):**
> 1. **Monochrome ground, ONE accent.** Ink (`#242424`) + three greys + white
>    carry the whole UI. **Windows Blue `#2CC5F9`** is the single accent, used
>    only for **selected / active / focus** (rings, ticks, the chosen tile/dot).
>    **No yellow** (Sunny Day is retired). The other brand colours (pink/orange/
>    green) appear only as deliberate **content** pills/media — never chrome.
> 2. **Shadows OFF.** No drop shadows; depth comes from a fill stepping against
>    the ground. (A `0 0 0 1px` selection *ring* in the accent is fine — that's a
>    ring, not elevation.)
> 3. **Soft outlines OFF.** Lean on spacing, not hairlines. Keep a `--border`
>    edge only where an input or media frame genuinely needs one. Focus-visible
>    rings stay (accessibility).
> 4. **Zero border-radius except pills/buttons** (`--radius-pill`). Panels, cards,
>    inputs, tiles, media → square. (Sole exception: a mobile pull-up sheet's top.)
> 5. **PP Mori Regular (400)** is the UI default; Semibold (600) only for the
>    wordmark + marketing display. **No monospace.** **Body 13px**, mid-grey,
>    tight density. Selection is a **monochrome ink wash**, not the accent.
> 6. **Lowercase "mimosa"** always; headlines + labels are **sentence case**.
>
> **Controls (from `@mimosa/ui`, port the look):** the new **`ChoiceCards`**
> (selectable tiles — single or multi, each with an optional `Aa`/swatch preview,
> accent ring on the chosen) is the pattern for **type/style pickers AND
> multiple-choice questions**. **`AnchorGrid`** (N×N dot placement picker) is for
> position questions. Free text → `Input`; scales → `Slider`. Idea: a **per-brand
> accent** — set the brand-being-built's colour as `--accent` so the whole sprint
> UI recolours to that brand.
>
> **Motion = glimm, natively.** Use the real `glimm` package for sweeps/gradients.
> Reserve sweeps for meaningful moments (publish, submit, top-level route change).
> `--dur-base` 180ms, `--dur-instant` 80ms; `--ease-spring` for "toy"/surprise
> moments only.
>
> **Voice ("v3 Sensory"):** warm, confident, plainly human, quietly playful.
> Address the reader as *you*; the studio is *we*. Short, two-beat sentences;
> em-dashes; "feel"-led headlines. The champagne/"fizz" metaphor is the signature
> seasoning — **one per page, not per line**. Anti-jargon. British-leaning spelling
> (flavour, colour). No emoji except a rare heartfelt 💛.
>
> **Aesthetic spine:** the playful "mimosa OS" desktop metaphor — square flat
> panels labelled like files, dot-matrix icons, a radio + live Berlin-clock status
> bar, big low-set display type, one hot accent on a calm monochrome ground.
