/* ============================================================
   BRAND SPRINT — APP LOGIC
   ============================================================ */

// ─── DATA ─────────────────────────────────────────────────────────────────────

const COLOR_PAIRINGS = [
  { name: 'Electric Dreams',   tag: 'Bold',    colors: [{ hex: '#FF38D4', name: 'Electric Rose' }, { hex: '#20C5F9', name: 'Windows Blue' }, { hex: '#000000', name: 'Black' }] },
  { name: 'Neon Tokyo',        tag: 'Bold',    colors: [{ hex: '#FF0080', name: 'Hot Pink' }, { hex: '#00FF80', name: 'Matrix Green' }, { hex: '#0080FF', name: 'Neon Blue' }] },
  { name: 'Citrus Pop',        tag: 'Bold',    colors: [{ hex: '#FF8E1D', name: 'Orange Juice' }, { hex: '#44F33E', name: 'Lime' }, { hex: '#111111', name: 'Off Black' }] },
  { name: 'Retro Pop',         tag: 'Bold',    colors: [{ hex: '#FF4040', name: 'Tomato' }, { hex: '#FFD700', name: 'Gold' }, { hex: '#40BFFF', name: 'Sky' }] },
  { name: 'Coral Reef',        tag: 'Vibrant', colors: [{ hex: '#FF6B6B', name: 'Coral' }, { hex: '#FFE66D', name: 'Lemon' }, { hex: '#4ECDC4', name: 'Teal' }] },
  { name: 'Carnival',          tag: 'Vibrant', colors: [{ hex: '#E63946', name: 'Red' }, { hex: '#F4A261', name: 'Sandy' }, { hex: '#2A9D8F', name: 'Green Teal' }, { hex: '#264653', name: 'Dark Teal' }] },
  { name: 'Golden Hour',       tag: 'Vibrant', colors: [{ hex: '#FFB347', name: 'Amber' }, { hex: '#FF6F3C', name: 'Sunset' }, { hex: '#1A1A2E', name: 'Night' }] },
  { name: 'Candy',             tag: 'Soft',    colors: [{ hex: '#FFB3DE', name: 'Pink Fizz' }, { hex: '#B3D9FF', name: 'Baby Blue' }, { hex: '#B3FFB3', name: 'Mint' }, { hex: '#FFE5B3', name: 'Butter' }] },
  { name: 'Cherry Blossom',    tag: 'Soft',    colors: [{ hex: '#FFB7C5', name: 'Blossom' }, { hex: '#FF85A1', name: 'Rose' }, { hex: '#FFF0F5', name: 'Lavender Blush' }] },
  { name: 'Lavender Fields',   tag: 'Soft',    colors: [{ hex: '#8B7BB5', name: 'Lavender' }, { hex: '#C4B8E0', name: 'Wisteria' }, { hex: '#F0ECF8', name: 'Ghost' }] },
  { name: 'Bubblegum',         tag: 'Soft',    colors: [{ hex: '#FF9ED8', name: 'Bubblegum' }, { hex: '#9ED8FF', name: 'Sky Soda' }, { hex: '#FFFF9E', name: 'Lemon Drop' }] },
  { name: 'Terracotta',        tag: 'Earthy',  colors: [{ hex: '#C4612A', name: 'Terracotta' }, { hex: '#E8A882', name: 'Sand' }, { hex: '#F5E6D3', name: 'Cream' }] },
  { name: 'Forest Floor',      tag: 'Earthy',  colors: [{ hex: '#2D4A2D', name: 'Forest' }, { hex: '#5C8A5C', name: 'Moss' }, { hex: '#C8E6C8', name: 'Sage' }] },
  { name: 'Sage & Stone',      tag: 'Earthy',  colors: [{ hex: '#6B7C5C', name: 'Sage' }, { hex: '#A8B99A', name: 'Herb' }, { hex: '#E8EAE3', name: 'Stone' }] },
  { name: 'Monochrome',        tag: 'Minimal', colors: [{ hex: '#000000', name: 'Black' }, { hex: '#555555', name: 'Charcoal' }, { hex: '#AAAAAA', name: 'Silver' }, { hex: '#FFFFFF', name: 'White' }] },
  { name: 'Nordic',            tag: 'Minimal', colors: [{ hex: '#ECEFF4', name: 'Snow' }, { hex: '#D8DEE9', name: 'Frost' }, { hex: '#4C566A', name: 'Arctic' }] },
  { name: 'Paper & Ink',       tag: 'Minimal', colors: [{ hex: '#F5F0E8', name: 'Paper' }, { hex: '#2C1810', name: 'Ink' }, { hex: '#8B7355', name: 'Kraft' }] },
  { name: 'Midnight',          tag: 'Dark',    colors: [{ hex: '#0D0D2B', name: 'Midnight' }, { hex: '#1A1A6E', name: 'Navy Deep' }, { hex: '#6B6BFF', name: 'Electric Violet' }] },
  { name: 'Dark Luxury',       tag: 'Dark',    colors: [{ hex: '#1C1C1C', name: 'Obsidian' }, { hex: '#B8960C', name: 'Gold' }, { hex: '#F5F5F0', name: 'Ivory' }] },
  { name: 'Deep Sea',          tag: 'Dark',    colors: [{ hex: '#003049', name: 'Abyss' }, { hex: '#0A7FB3', name: 'Ocean' }, { hex: '#4FC3F7', name: 'Tide' }] },
  { name: 'Rose Gold',         tag: 'Retro',   colors: [{ hex: '#F4A2A2', name: 'Rose' }, { hex: '#D4956A', name: 'Copper' }, { hex: '#FAF0E6', name: 'Linen' }] },
  { name: 'Groovy',            tag: 'Retro',   colors: [{ hex: '#F4743B', name: 'Papaya' }, { hex: '#F9C74F', name: 'Mustard' }, { hex: '#43AA8B', name: 'Avocado' }, { hex: '#277DA1', name: 'Denim' }] },
];

const TOTAL_SECTIONS = 14; // 0 = welcome, 13 = next steps

const STEP_LABELS = [
  'Welcome', 'Scope', 'Brief', 'Purpose', 'Values',
  'Vision', 'Audiences', 'Market', 'Personality',
  'Inspiration', 'Colors', 'Type', 'Imagery', 'Next steps',
];

const SCOPE_NEEDS = [
  'Strategy & Positioning', 'Brand Identity', 'Brand Refresh', 'Website',
  'Tone of Voice', 'Presentation Templates', 'Marketing Materials', 'Social Media',
];

const SCOPE_ASSETS = [
  'Logo', 'Colors', 'Fonts', 'Brand Guidelines', 'Website copy', 'Photography', 'Illustrations',
];

const AUDIENCE_PRESETS = [
  { category: 'Generation', items: [
    { name: 'Gen Alpha', role: 'Ages 1–13', needs: '' },
    { name: 'Gen Z',     role: 'Ages 14–29', needs: '' },
    { name: 'Millennials', role: 'Ages 30–45', needs: '' },
    { name: 'Gen X',     role: 'Ages 46–61', needs: '' },
  ]},
  { category: 'Psychographic', items: [
    { name: 'Seekers & Self-developers', role: 'Mindfulness, therapy, spirituality, coaching, wellness', needs: '' },
    { name: 'Creators & Aesthetes',      role: 'Art, design, fashion, photography, culture', needs: '' },
    { name: 'Achievers & Builders',      role: 'Business, productivity, tech, career growth', needs: '' },
    { name: 'Belongers & Community',     role: 'Social spaces, identity groups, collectives', needs: '' },
    { name: 'Escapists & Comfort seekers', role: 'Entertainment, lifestyle, relaxation', needs: '' },
  ]},
  { category: 'Platform behaviour', items: [
    { name: 'TikTok-first',       role: 'Discovery-driven, short-form video native', needs: '' },
    { name: 'Instagram-first',    role: 'Visual identity, aspirational content', needs: '' },
    { name: 'LinkedIn-first',     role: 'Professional network, B2B mindset', needs: '' },
    { name: 'Passive scrollers',  role: 'Consume more than they create', needs: '' },
    { name: 'Active creators',    role: 'Post, comment, build identity online', needs: '' },
    { name: 'Community engagers', role: 'Discord, WhatsApp groups, niche spaces', needs: '' },
  ]},
  { category: 'Life stage', items: [
    { name: 'Students',                   role: 'Early independence, identity formation', needs: '' },
    { name: 'Early career',               role: 'Building identity and income', needs: '' },
    { name: 'Established professionals',  role: 'Settled career, looking to grow', needs: '' },
    { name: 'Entrepreneurs & Freelancers', role: 'Independent, growth-oriented', needs: '' },
    { name: 'Caregivers',                 role: 'Family-focused adults, dual priorities', needs: '' },
  ]},
  { category: 'Values axis', items: [
    { name: 'Individualist',    role: 'Personal freedom, self-expression first', needs: '' },
    { name: 'Collectivist',     role: 'Community, shared identity, belonging', needs: '' },
    { name: 'Tradition-driven', role: 'Values roots, heritage, proven methods', needs: '' },
    { name: 'Experimenters',    role: 'Curious, early adopters, change-seekers', needs: '' },
    { name: 'Luxury-driven',    role: 'Quality, status, premium experience', needs: '' },
    { name: 'Minimal & ethical', role: 'Sustainability, simplicity, conscious consumption', needs: '' },
  ]},
];

const FONT_MOODS = [
  { mood: 'Neutral',     desc: 'Clean. Invisible. Gets out of the way.',    sample: 'The brand', font: 'DM Sans',          weight: '400', examples: ['Inter', 'DM Sans', 'Helvetica Neue'],          foundries: ['Google Fonts', 'Klim Type'] },
  { mood: 'Humanistic',  desc: 'Warm. Readable. Feels made by hand.',       sample: 'The brand', font: 'EB Garamond',       weight: '400', examples: ['EB Garamond', 'Freight Text', 'Lora'],         foundries: ['Google Fonts', 'Adobe Fonts'] },
  { mood: 'Tech',        desc: 'Precise. Engineered. Confident.',           sample: 'The brand', font: 'Space Grotesk',     weight: '700', examples: ['Space Grotesk', 'Neue Montreal', 'Monument'],  foundries: ['Google Fonts', 'Pangram Pangram'] },
  { mood: 'Experimental',desc: 'Rule-breaking. Editorial. Unexpected.',     sample: 'The brand', font: 'Syne',              weight: '800', examples: ['Syne', 'Migra', 'Editorial New'],              foundries: ['Google Fonts', 'Velvetyne'] },
  { mood: 'Expressive',  desc: 'Loud. Personality-forward. Unapologetic.',  sample: 'The brand', font: 'Playfair Display',  weight: '700', examples: ['Playfair Display', 'Canela', 'Cooper BT'],    foundries: ['Google Fonts', 'Commercial Type'] },
];

const PERSONALITY_SLIDERS = [
  { key: 'formalCasual',        left: 'Formal',      right: 'Casual'      },
  { key: 'traditionalModern',   left: 'Traditional', right: 'Modern'      },
  { key: 'seriousPlayful',      left: 'Serious',     right: 'Playful'     },
  { key: 'exclusiveAccessible', left: 'Exclusive',   right: 'Accessible'  },
  { key: 'quietBold',           left: 'Quiet',       right: 'Bold'        },
];

const MILESTONE_LABELS = ['Now', '1 Year', '5 Years', '10 Years', '20 Years'];

// ─── STATE ────────────────────────────────────────────────────────────────────

const state = {
  brandName: '',
  scope: [], hasAssets: [], mainChannel: '',
  brief: '',
  inspiration: [], inspirationNotes: '',
  milestones: MILESTONE_LABELS.map(label => ({ label, description: '' })),
  competitors: [], pendingColor: '#FF38D4',
  axisLabels: { top: 'Premium', bottom: 'Affordable', left: 'Traditional', right: 'Modern' },
  colors: [],
  why: '', how: '', what: '',
  personality: { formalCasual: 50, traditionalModern: 50, seriousPlayful: 50, exclusiveAccessible: 50, quietBold: 50 },
  emotions: '', textures: '', shapes: '', imageryNotes: '',
  values: [{ name: '', description: '' }, { name: '', description: '' }, { name: '', description: '' }],
  audiences: [{ name: '', role: '', description: '', needs: '' }, { name: '', role: '', description: '', needs: '' }],
  fontMood: null, fontPrimary: '', fontSecondary: '', fontNotes: '',
  nextSteps: [{ action: '', owner: '', deadline: '' }, { action: '', owner: '', deadline: '' }, { action: '', owner: '', deadline: '' }],
};

// ─── APP ──────────────────────────────────────────────────────────────────────

const App = {

  _scrollObserver: null,

  init() {
    const saved = localStorage.getItem('sprint-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);

    this.buildTocNav();
    this.buildTimeline();
    this.buildSliders();
    this.buildValues();
    this.buildAudiences();
    this.buildNextSteps();
    this.buildPairings();
    this.buildFontMoods();
    this.buildAudiencePresets();
    this.buildScopeChips();
    this.initScrollSpy();
    this.initScrollProgress();
  },

  // ─── TOC ──────────────────────────────────────────────────────────────────

  buildTocNav() {
    const nav = document.getElementById('tocNav');
    if (!nav) return;
    // Skip welcome (index 0) in the TOC
    nav.innerHTML = STEP_LABELS.slice(1).map((label, i) => {
      const step = i + 1;
      const num = String(step).padStart(2, '0');
      return `<button class="toc-link" id="toc-${step}" onclick="App.scrollToSection('section-${step}')">
        <span class="toc-step-num">${num}</span>
        ${label}
      </button>`;
    }).join('');
  },

  setActiveTocItem(step) {
    document.querySelectorAll('.toc-link').forEach(el => el.classList.remove('active'));
    const active = document.getElementById(`toc-${step}`);
    if (active) {
      active.classList.add('active');
      active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  },

  // ─── SCROLL SPY ───────────────────────────────────────────────────────────

  initScrollSpy() {
    if (this._scrollObserver) this._scrollObserver.disconnect();

    this._scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id; // "section-1"
          const step = parseInt(id.split('-')[1]);
          if (step > 0) this.setActiveTocItem(step);
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    document.querySelectorAll('.sprint-section[id]').forEach(el => {
      this._scrollObserver.observe(el);
    });
  },

  // ─── SCROLL PROGRESS ──────────────────────────────────────────────────────

  initScrollProgress() {
    const fill = document.getElementById('progressFill');
    if (!fill) return;
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      fill.style.width = `${pct}%`;
    }, { passive: true });
  },

  // ─── NAVIGATION ───────────────────────────────────────────────────────────

  scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 56;
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  },

  scrollToFirst() {
    this.scrollToSection('section-1');
  },

  startOver() {
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ─── THEME ────────────────────────────────────────────────────────────────

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('sprint-theme', next);
  },

  // ─── MENU ─────────────────────────────────────────────────────────────────

  toggleMenu() {
    const dropdown = document.getElementById('navDropdown');
    const chevron  = document.getElementById('navChevron');
    const isOpen   = !dropdown.classList.contains('hidden');
    dropdown.classList.toggle('hidden', isOpen);
    chevron.classList.toggle('open', !isOpen);
  },

  closeMenu() {
    document.getElementById('navDropdown')?.classList.add('hidden');
    document.getElementById('navChevron')?.classList.remove('open');
  },

  // ─── SAVE ─────────────────────────────────────────────────────────────────

  save(key, value) {
    state[key] = value;
  },

  // ─── SCOPE CHIPS ──────────────────────────────────────────────────────────

  buildScopeChips() {
    const needsEl  = document.getElementById('scope-needs-chips');
    const assetsEl = document.getElementById('scope-assets-chips');
    if (needsEl) {
      needsEl.innerHTML = SCOPE_NEEDS.map(item => `
        <button class="scope-chip${state.scope.includes(item) ? ' selected' : ''}"
          onclick="App.toggleScope('scope', '${item.replace(/'/g, "\\'")}')">${item}</button>
      `).join('');
    }
    if (assetsEl) {
      assetsEl.innerHTML = SCOPE_ASSETS.map(item => `
        <button class="scope-chip${state.hasAssets.includes(item) ? ' selected' : ''}"
          onclick="App.toggleScope('hasAssets', '${item.replace(/'/g, "\\'")}')">${item}</button>
      `).join('');
    }
  },

  toggleScope(stateKey, item) {
    const arr = state[stateKey];
    const idx = arr.indexOf(item);
    if (idx === -1) arr.push(item);
    else arr.splice(idx, 1);
    this.buildScopeChips();
  },

  // ─── CHIPS ────────────────────────────────────────────────────────────────

  addChip(list, e) {
    if (e.key === 'Enter') { e.preventDefault(); this.addChipBtn(list); }
  },

  addChipBtn(list) {
    const input = document.getElementById(`${list}-input`);
    const val = input.value.trim();
    if (!val) return;
    state[list].push(val);
    input.value = '';
    this.renderChips(list);
  },

  removeChip(list, i) {
    state[list].splice(i, 1);
    this.renderChips(list);
  },

  renderChips(list) {
    document.getElementById(`chips-${list}`).innerHTML = state[list].map((chip, i) => `
      <span class="chip">${chip}
        <button class="chip-remove" onclick="App.removeChip('${list}', ${i})">×</button>
      </span>
    `).join('');
  },

  // ─── TIMELINE ─────────────────────────────────────────────────────────────

  buildTimeline() {
    const nodesEl = document.getElementById('timeline-nodes');
    const cardsEl = document.getElementById('timeline-cards');
    nodesEl.innerHTML = state.milestones.map((_, i) =>
      `<div class="timeline-node" id="tnode-${i}"></div>`
    ).join('');
    cardsEl.innerHTML = state.milestones.map((m, i) => `
      <div class="timeline-card">
        <input type="text" placeholder="${m.label}" value="${m.label}"
          oninput="App.saveMilestone(${i}, 'label', this.value); App.checkNode(${i})">
        <textarea placeholder="What milestone do you reach?"
          oninput="App.saveMilestone(${i}, 'description', this.value); App.checkNode(${i})"
        >${m.description}</textarea>
      </div>
    `).join('');
  },

  saveMilestone(i, key, val) { state.milestones[i][key] = val; },

  checkNode(i) {
    const filled = state.milestones[i].description.trim().length > 0;
    document.getElementById(`tnode-${i}`)?.classList.toggle('filled', filled);
  },

  // ─── COMPETITIVE QUADRANT ─────────────────────────────────────────────────

  updateAxisLabel(side, val) { state.axisLabels[side] = val; },

  setCompColor(color, el) {
    state.pendingColor = color;
    document.querySelectorAll('.cdot').forEach(d => d.classList.remove('active'));
    el.classList.add('active');
  },

  placeCompetitor(e) {
    const name = document.getElementById('competitor-name').value.trim();
    if (!name) { document.getElementById('competitor-name').focus(); return; }
    const q = document.getElementById('quadrant');
    const rect = q.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    state.competitors.push({ name, x, y, color: state.pendingColor });
    document.getElementById('competitor-name').value = '';
    this.renderCompetitors();
  },

  renderCompetitors() {
    document.getElementById('competitors-layer').innerHTML = state.competitors.map((c, i) => `
      <div class="comp-dot" style="left:${c.x}%;top:${c.y}%;background:${c.color};"
           title="${c.name}" ondblclick="App.removeCompetitor(${i})">
        <span class="comp-label">${c.name}</span>
      </div>
    `).join('');
    document.getElementById('comp-list').innerHTML = state.competitors.map((c, i) => `
      <div class="comp-list-item">
        <div class="dot-sm" style="background:${c.color}"></div>
        <span>${c.name}</span>
        <span style="margin-left:auto;cursor:pointer;" onclick="App.removeCompetitor(${i})">×</span>
      </div>
    `).join('');
  },

  removeCompetitor(i) {
    state.competitors.splice(i, 1);
    this.renderCompetitors();
  },

  // ─── COLOR PALETTE ────────────────────────────────────────────────────────

  switchColorTab(tab) {
    document.getElementById('panel-custom').classList.toggle('hidden', tab !== 'custom');
    document.getElementById('panel-pairings').classList.toggle('hidden', tab !== 'pairings');
    document.getElementById('tab-custom').classList.toggle('active', tab === 'custom');
    document.getElementById('tab-pairings').classList.toggle('active', tab === 'pairings');
  },

  addColor() {
    if (state.colors.length >= 6) return;
    const hex  = document.getElementById('color-picker').value;
    const name = document.getElementById('color-name').value.trim() || hex;
    state.colors.push({ hex, name });
    document.getElementById('color-name').value = '';
    this.renderPalette();
  },

  removeColor(i) { state.colors.splice(i, 1); this.renderPalette(); },

  renderPalette() {
    document.getElementById('palette-swatches').innerHTML = state.colors.map((c, i) => `
      <div class="palette-swatch">
        <div class="swatch-color" style="background:${c.hex}"></div>
        <div class="swatch-info">
          <span class="swatch-name">${c.name}</span>
          <span class="swatch-hex">${c.hex.toUpperCase()}</span>
        </div>
        <button class="swatch-remove" onclick="App.removeColor(${i})">×</button>
      </div>
    `).join('');
  },

  // ─── PAIRINGS ─────────────────────────────────────────────────────────────

  _activeFilter: 'All',
  _selectedPairing: null,
  _pairingDragged: false,

  buildPairings() {
    const tags = ['All', ...new Set(COLOR_PAIRINGS.map(p => p.tag))];
    document.getElementById('pairings-filter').innerHTML = tags.map(t => `
      <button class="filter-btn${t === 'All' ? ' active' : ''}"
        onclick="App.filterPairings('${t}')">${t}</button>
    `).join('');
    this.renderPairingCards('All');

    const track = document.getElementById('pairings-track');
    if (!track) return;
    let isDown = false, startX = 0, scrollLeft = 0;
    this._pairingDragged = false;

    track.addEventListener('mousedown', e => {
      isDown = true; this._pairingDragged = false;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.classList.add('dragging');
    });
    track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('dragging'); });
    track.addEventListener('mouseup',    () => { isDown = false; track.classList.remove('dragging'); });
    track.addEventListener('mousemove',  e => {
      if (!isDown) return;
      e.preventDefault();
      const walk = (e.pageX - track.offsetLeft - startX) * 1.4;
      if (Math.abs(walk) > 4) this._pairingDragged = true;
      track.scrollLeft = scrollLeft - walk;
    });
  },

  filterPairings(tag) {
    this._activeFilter = tag;
    document.querySelectorAll('.filter-btn').forEach(b =>
      b.classList.toggle('active', b.textContent === tag)
    );
    this.renderPairingCards(tag);
  },

  renderPairingCards(tag) {
    const filtered = tag === 'All' ? COLOR_PAIRINGS : COLOR_PAIRINGS.filter(p => p.tag === tag);
    document.getElementById('pairings-track').innerHTML = filtered.map(p => {
      const globalIdx = COLOR_PAIRINGS.indexOf(p);
      const isSelected = this._selectedPairing === globalIdx;
      return `
        <div class="pairing-card${isSelected ? ' selected' : ''}"
             onclick="if(!App._pairingDragged) App.selectPairing(${globalIdx})">
          <div class="pairing-chips">${p.colors.map(c => `<div class="pairing-chip" style="background:${c.hex}"></div>`).join('')}</div>
          <div class="pairing-meta">
            <span class="pairing-name">${p.name}</span>
            <div class="pairing-codes">${p.colors.map(c => `<span class="pairing-code">${c.hex.toUpperCase()} · ${c.name}</span>`).join('')}</div>
          </div>
        </div>
      `;
    }).join('');
  },

  selectPairing(idx) {
    this._selectedPairing = idx;
    state.colors = COLOR_PAIRINGS[idx].colors.map(c => ({ ...c }));
    this.renderPalette();
    this.renderPairingCards(this._activeFilter);
  },

  // ─── PERSONALITY SLIDERS ──────────────────────────────────────────────────

  buildSliders() {
    document.getElementById('personality-sliders').innerHTML = PERSONALITY_SLIDERS.map((s, i) => `
      <div class="slider-row">
        <div class="slider-ends">
          <span class="slider-end-left">${s.left}</span>
          <span class="slider-end-right">${s.right}</span>
        </div>
        <div class="slider-track-wrap">
          <div class="slider-bg"></div>
          <div class="slider-fill-bar" id="sfill-${i}" style="width:50%"></div>
          <input type="range" class="slider-range" min="0" max="100" value="50"
            id="slider-${i}"
            oninput="App.updateSlider(${i}, '${s.key}', this.value)">
        </div>
        <div class="slider-val" id="sval-${i}">50</div>
      </div>
    `).join('');
  },

  updateSlider(i, key, val) {
    const v = parseInt(val);
    state.personality[key] = v;
    document.getElementById(`sfill-${i}`).style.width = `${v}%`;
    document.getElementById(`sval-${i}`).textContent = v;
  },

  // ─── VALUES ───────────────────────────────────────────────────────────────

  buildValues() {
    document.getElementById('values-list').innerHTML = state.values.map((v, i) => `
      <div class="value-item">
        <div class="value-num">0${i + 1}</div>
        <div class="value-inputs">
          <input type="text" class="text-input" placeholder="e.g. Honesty, Craft, Access"
            value="${v.name}" oninput="App.saveValue(${i}, 'name', this.value)">
          <textarea class="textarea-field sm"
            placeholder="What does this look like in practice? How would you know if you were living it?"
            oninput="App.saveValue(${i}, 'description', this.value)"
          >${v.description}</textarea>
        </div>
      </div>
    `).join('');
  },

  saveValue(i, key, val) { state.values[i][key] = val; },

  // ─── AUDIENCES ────────────────────────────────────────────────────────────

  buildAudiences() {
    document.getElementById('audiences-list').innerHTML = state.audiences.map((a, i) => `
      <div class="audience-card" id="aud-${i}">
        <div class="audience-header">
          <span class="audience-label">Audience ${i + 1}</span>
          ${i > 1 ? `<button class="audience-remove" onclick="App.removeAudience(${i})">×</button>` : ''}
        </div>
        <div class="audience-grid">
          <div class="form-group">
            <label class="field-label">Who are they?</label>
            <input type="text" class="text-input" placeholder="e.g. First-generation founders"
              value="${a.name}" oninput="App.saveAudience(${i}, 'name', this.value)">
          </div>
          <div class="form-group">
            <label class="field-label">Context</label>
            <input type="text" class="text-input" placeholder="e.g. Building in a mature, crowded category"
              value="${a.role}" oninput="App.saveAudience(${i}, 'role', this.value)">
          </div>
          <div class="form-group" style="grid-column:span 2">
            <label class="field-label">What do they need that nobody's giving them yet?</label>
            <textarea class="textarea-field sm" placeholder="The thing they're not finding anywhere else. The gap your brand fills."
              oninput="App.saveAudience(${i}, 'needs', this.value)"
            >${a.needs}</textarea>
          </div>
        </div>
      </div>
    `).join('');
  },

  addAudience() { state.audiences.push({ name: '', role: '', description: '', needs: '' }); this.buildAudiences(); },
  removeAudience(i) { state.audiences.splice(i, 1); this.buildAudiences(); },
  saveAudience(i, key, val) { state.audiences[i][key] = val; },

  // ─── NEXT STEPS ───────────────────────────────────────────────────────────

  buildNextSteps() {
    document.getElementById('nextsteps-list').innerHTML = state.nextSteps.map((s, i) => `
      <div class="nextstep-item" id="ns-${i}">
        <span class="nextstep-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="nextstep-fields">
          <input type="text" class="text-input nextstep-action" placeholder="What needs to happen"
            value="${s.action}" oninput="App.saveNextStep(${i}, 'action', this.value)">
          <input type="text" class="text-input nextstep-owner" placeholder="Who owns it"
            value="${s.owner}" oninput="App.saveNextStep(${i}, 'owner', this.value)">
          <input type="text" class="text-input nextstep-date" placeholder="By when"
            value="${s.deadline}" oninput="App.saveNextStep(${i}, 'deadline', this.value)">
        </div>
        ${i > 2 ? `<button class="nextstep-remove" onclick="App.removeNextStep(${i})">×</button>` : ''}
      </div>
    `).join('');
  },

  addNextStep() { state.nextSteps.push({ action: '', owner: '', deadline: '' }); this.buildNextSteps(); },
  removeNextStep(i) { state.nextSteps.splice(i, 1); this.buildNextSteps(); },
  saveNextStep(i, key, val) { state.nextSteps[i][key] = val; },

  // ─── AUDIENCE PRESETS ─────────────────────────────────────────────────────

  buildAudiencePresets() {
    const el = document.getElementById('preset-drawer-inner');
    if (!el) return;
    el.innerHTML = AUDIENCE_PRESETS.map(group => `
      <div class="preset-group">
        <span class="preset-group-label">${group.category}</span>
        <div class="preset-chips">
          ${group.items.map(item => `
            <button class="preset-chip" onclick="App.addPreset(${JSON.stringify(item).replace(/"/g, '&quot;')})">
              ${item.name}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  },

  togglePresets() {
    const drawer = document.getElementById('preset-drawer');
    const label  = document.getElementById('preset-btn-label');
    const isOpen = !drawer.classList.contains('hidden');
    drawer.classList.toggle('hidden', isOpen);
    label.textContent = isOpen ? 'Browse audience presets ↓' : 'Close presets ↑';
  },

  addPreset(preset) {
    state.audiences.push({ ...preset });
    this.buildAudiences();
    document.getElementById('audiences-list').lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  // ─── FONT MOODS ───────────────────────────────────────────────────────────

  buildFontMoods() {
    const el = document.getElementById('font-moods');
    if (!el) return;
    el.innerHTML = FONT_MOODS.map(m => `
      <div class="font-mood-card${state.fontMood === m.mood ? ' selected' : ''}"
           onclick="App.selectFontMood('${m.mood}')">
        <div class="font-mood-sample" style="font-family:'${m.font}',serif;font-weight:${m.weight}">
          ${m.sample}
        </div>
        <div class="font-mood-meta">
          <span class="font-mood-name">${m.mood}</span>
          <span class="font-mood-desc">${m.desc}</span>
          <div class="font-mood-examples">${m.examples.map(e => `<span class="font-mood-ex">${e}</span>`).join('')}</div>
          <div class="font-mood-foundries">${m.foundries.map(f => `<span class="font-mood-foundry">${f}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');
  },

  selectFontMood(mood) {
    state.fontMood = state.fontMood === mood ? null : mood;
    this.buildFontMoods();
  },

  // ─── GOLDEN CIRCLE ────────────────────────────────────────────────────────

  highlightCircle(which) {
    const svg = document.getElementById('goldSvg');
    if (!svg) return;
    svg.classList.remove('focus-why', 'focus-how', 'focus-what');
    if (which) svg.classList.add(`focus-${which}`);
  },

  // ─── OUTPUT ───────────────────────────────────────────────────────────────

  scrollToOutputSection(id) {
    const el = document.getElementById(id);
    const overlay = document.getElementById('outputOverlay');
    if (el && overlay) overlay.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  },

  showOutput() {
    const doc   = document.getElementById('outputDoc');
    const brand = state.brandName || 'Your Brand';
    const date  = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const personalityHTML = PERSONALITY_SLIDERS.map(s => {
      const v = state.personality[s.key];
      return `<div class="out-slider-row">
        <span class="out-slider-label-l">${s.left}</span>
        <div class="out-slider-bar">
          <div class="out-slider-fill" style="width:${v}%"></div>
          <div class="out-slider-dot" style="left:${v}%"></div>
        </div>
        <span class="out-slider-label-r">${s.right}</span>
      </div>`;
    }).join('');

    const paletteHTML = state.colors.length
      ? state.colors.map(c => `
        <div class="out-swatch">
          <div class="out-swatch-color" style="background:${c.hex};width:76px;height:56px"></div>
          <div class="out-swatch-info">
            <span class="out-swatch-name">${c.name}</span>
            <span class="out-swatch-hex">${c.hex.toUpperCase()}</span>
          </div>
        </div>`).join('')
      : '<p style="color:#999;font-size:13px">No colors defined.</p>';

    const valuesHTML = state.values.filter(v => v.name).map((v, i) => {
      const colors = ['#FF38D4', '#FF8E1D', '#44F33E'];
      return `<div class="out-value-card" style="border-top:2px solid ${colors[i] || '#ddd'}">
        <div class="out-value-num">0${i + 1}</div>
        <div class="out-value-name">${v.name}</div>
        ${v.description ? `<p class="out-value-desc">${v.description}</p>` : ''}
      </div>`;
    }).join('') || '<p style="color:#999;font-size:13px">No values defined.</p>';

    const audiencesHTML = state.audiences.filter(a => a.name).map(a => `
      <div class="out-card">
        <div class="out-card-title">${a.role || 'Audience'}</div>
        <div class="out-card-text"><strong>${a.name}</strong>${a.needs ? '<br>' + a.needs : ''}</div>
      </div>`).join('') || '<p style="color:#999;font-size:13px">No audiences defined.</p>';

    const nextStepsHTML = state.nextSteps.filter(s => s.action).map((s, i) => `
      <div class="out-step-item">
        <span class="out-step-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="out-step-action">${s.action}</span>
        <span class="out-step-owner">${s.owner || '—'}</span>
        <span class="out-step-date">${s.deadline || '—'}</span>
      </div>`).join('') || '<p style="color:#999;font-size:13px">No next steps defined.</p>';

    const inspirationHTML = state.inspiration.length
      ? `<div class="out-tags">${state.inspiration.map(i => `<span class="out-tag">${i}</span>`).join('')}</div>` : '';

    const milestonesHTML = state.milestones.filter(m => m.description).map(m => `
      <div class="out-card">
        <div class="out-card-title">${m.label}</div>
        <div class="out-card-text">${m.description}</div>
      </div>`).join('') || '<p style="color:#999;font-size:13px">No milestones defined.</p>';

    const hasScopeData = state.scope.length || state.hasAssets.length || state.mainChannel;
    const scopeHTML = hasScopeData ? `
      <div class="out-grid-2">
        ${state.scope.length ? `<div class="out-card"><div class="out-card-title">Project needs</div><div class="out-card-text">${state.scope.join(' · ')}</div></div>` : ''}
        ${state.hasAssets.length ? `<div class="out-card"><div class="out-card-title">Already have</div><div class="out-card-text">${state.hasAssets.join(' · ')}</div></div>` : ''}
        ${state.mainChannel ? `<div class="out-card" style="grid-column:span 2"><div class="out-card-title">Main channel</div><div class="out-card-text">${state.mainChannel}</div></div>` : ''}
      </div>` : '';

    const sidebarItems = [
      { id: 'out-scope',       label: 'Scope',          show: !!hasScopeData },
      { id: 'out-brief',       label: 'Brief',          show: !!state.brief },
      { id: 'out-why',         label: 'Purpose',        show: !!(state.what || state.how || state.why) },
      { id: 'out-values',      label: 'Values',         show: state.values.some(v => v.name) },
      { id: 'out-plan',        label: '20 year vision', show: state.milestones.some(m => m.description) },
      { id: 'out-audiences',   label: 'Audiences',      show: state.audiences.some(a => a.name) },
      { id: 'out-personality', label: 'Personality',    show: true },
      { id: 'out-inspiration', label: 'Inspiration',    show: !!(state.inspiration.length || state.inspirationNotes) },
      { id: 'out-colors',      label: 'Colors',         show: !!state.colors.length },
      { id: 'out-typography',  label: 'Typography',     show: !!(state.fontMood || state.fontPrimary || state.fontSecondary || state.fontNotes) },
      { id: 'out-imagery',     label: 'Imagery',        show: !!(state.emotions || state.textures || state.shapes || state.imageryNotes) },
      { id: 'out-nextsteps',   label: 'Next steps',     show: state.nextSteps.some(s => s.action) },
    ].filter(s => s.show);

    document.getElementById('outputSidebar').innerHTML = `
      <span class="sidebar-label">Brand Brief</span>
      ${sidebarItems.map(s => `
        <button class="sidebar-link" onclick="App.scrollToOutputSection('${s.id}')">${s.label}</button>
      `).join('')}
    `;

    doc.innerHTML = `
      <div class="out-header" id="out-header">
        <div><div class="out-brand-name">${brand}</div></div>
        <div class="out-meta">
          <span>Brand Sprint Brief</span>
          <span style="margin-top:5px">${date}</span>
        </div>
      </div>

      ${hasScopeData ? `<div class="out-section" id="out-scope"><span class="out-section-title">Scope &amp; starting point</span>${scopeHTML}</div>` : ''}
      ${state.brief ? `<div class="out-section" id="out-brief"><span class="out-section-title">Project brief</span><p class="out-text">${state.brief.replace(/\n/g, '<br>')}</p></div>` : ''}
      ${(state.what || state.how || state.why) ? `
        <div class="out-section" id="out-why">
          <span class="out-section-title">What, how &amp; why</span>
          <div class="out-grid-2">
            ${state.why  ? `<div class="out-card"><div class="out-card-title" style="color:#FF38D4">Why</div><div class="out-card-text">${state.why}</div></div>` : ''}
            ${state.how  ? `<div class="out-card"><div class="out-card-title">How</div><div class="out-card-text">${state.how}</div></div>` : ''}
            ${state.what ? `<div class="out-card" style="grid-column:span 2"><div class="out-card-title">What</div><div class="out-card-text">${state.what}</div></div>` : ''}
          </div>
        </div>` : ''}
      ${state.values.some(v => v.name) ? `<div class="out-section" id="out-values"><span class="out-section-title">Top 3 values</span><div class="out-values">${valuesHTML}</div></div>` : ''}
      ${state.milestones.some(m => m.description) ? `<div class="out-section" id="out-plan"><span class="out-section-title">20 year vision</span><div class="out-grid-2">${milestonesHTML}</div></div>` : ''}
      ${state.audiences.some(a => a.name) ? `<div class="out-section" id="out-audiences"><span class="out-section-title">Audiences</span><div class="out-grid-2">${audiencesHTML}</div></div>` : ''}
      <div class="out-section" id="out-personality"><span class="out-section-title">Brand personality</span><div class="out-personality">${personalityHTML}</div></div>
      ${(state.inspiration.length || state.inspirationNotes) ? `
        <div class="out-section" id="out-inspiration">
          <span class="out-section-title">Inspiration</span>
          ${inspirationHTML}
          ${state.inspirationNotes ? `<p class="out-text" style="margin-top:14px">${state.inspirationNotes}</p>` : ''}
        </div>` : ''}
      ${state.colors.length ? `<div class="out-section" id="out-colors"><span class="out-section-title">Brand colors</span><div class="out-palette">${paletteHTML}</div></div>` : ''}
      ${(state.fontMood || state.fontPrimary || state.fontSecondary || state.fontNotes) ? `
        <div class="out-section" id="out-typography">
          <span class="out-section-title">Typography</span>
          <div class="out-grid-2">
            ${state.fontMood ? (() => { const m = FONT_MOODS.find(f => f.mood === state.fontMood); return m ? `<div class="out-card" style="grid-column:span 2"><div class="out-card-title">Type mood — ${m.mood}</div><div class="out-card-text">${m.desc}<br><em style="color:#999">Examples: ${m.examples.join(', ')}</em></div></div>` : ''; })() : ''}
            ${state.fontPrimary   ? `<div class="out-card"><div class="out-card-title">Primary</div><div class="out-card-text">${state.fontPrimary}</div></div>` : ''}
            ${state.fontSecondary ? `<div class="out-card"><div class="out-card-title">Secondary</div><div class="out-card-text">${state.fontSecondary}</div></div>` : ''}
            ${state.fontNotes     ? `<div class="out-card" style="grid-column:span 2"><div class="out-card-title">Style notes</div><div class="out-card-text">${state.fontNotes}</div></div>` : ''}
          </div>
        </div>` : ''}
      ${(state.emotions || state.textures || state.shapes || state.imageryNotes) ? `
        <div class="out-section" id="out-imagery">
          <span class="out-section-title">Imagery &amp; mood</span>
          <div class="out-grid-2">
            ${state.emotions     ? `<div class="out-card"><div class="out-card-title">Emotions</div><div class="out-card-text">${state.emotions}</div></div>` : ''}
            ${state.textures     ? `<div class="out-card"><div class="out-card-title">Textures</div><div class="out-card-text">${state.textures}</div></div>` : ''}
            ${state.shapes       ? `<div class="out-card"><div class="out-card-title">Shapes</div><div class="out-card-text">${state.shapes}</div></div>` : ''}
            ${state.imageryNotes ? `<div class="out-card"><div class="out-card-title">References</div><div class="out-card-text">${state.imageryNotes}</div></div>` : ''}
          </div>
        </div>` : ''}
      ${state.nextSteps.some(s => s.action) ? `<div class="out-section" id="out-nextsteps"><span class="out-section-title">Next steps</span><div class="out-nextsteps">${nextStepsHTML}</div></div>` : ''}

      <div class="out-footer">
        <span class="out-footer-brand">mimosaagency.com</span>
        <span class="out-footer-date">${date}</span>
      </div>
    `;

    const overlay = document.getElementById('outputOverlay');
    overlay.classList.remove('hidden');
    overlay.scrollTop = 0;
  },

  closeOutput() {
    document.getElementById('outputOverlay').classList.add('hidden');
  },
};

// ─── BOOT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => App.init());

document.addEventListener('click', e => {
  if (!document.getElementById('navBrandBtn')?.contains(e.target)) App.closeMenu();
});

// Comp dot label CSS (injected once)
const _compStyle = document.createElement('style');
_compStyle.textContent = `.comp-dot .comp-label { position:absolute; bottom:-18px; left:50%; transform:translateX(-50%); font-size:9px; white-space:nowrap; font-family:var(--font); pointer-events:none; background:rgba(0,0,0,0.55); color:#fff; padding:1px 6px; border-radius:var(--radius-pill); letter-spacing:0.03em; }`;
document.head.appendChild(_compStyle);
