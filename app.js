/* ============================================================
   MIMOSA BRAND SPRINT GENERATOR — APP LOGIC
   ============================================================ */

// ─── COLOR PAIRINGS DATA ──────────────────────────────────────────────────────
const COLOR_PAIRINGS = [
  // BOLD
  { name: 'Electric Dreams',   tag: 'Bold',    colors: [{ hex: '#FF38D4', name: 'Electric Rose' }, { hex: '#20C5F9', name: 'Windows Blue' }, { hex: '#000000', name: 'Black' }] },
  { name: 'Neon Tokyo',        tag: 'Bold',    colors: [{ hex: '#FF0080', name: 'Hot Pink' }, { hex: '#00FF80', name: 'Matrix Green' }, { hex: '#0080FF', name: 'Neon Blue' }] },
  { name: 'Citrus Pop',        tag: 'Bold',    colors: [{ hex: '#FF8E1D', name: 'Orange Juice' }, { hex: '#44F33E', name: 'Lime' }, { hex: '#111111', name: 'Off Black' }] },
  { name: 'Retro Pop',         tag: 'Bold',    colors: [{ hex: '#FF4040', name: 'Tomato' }, { hex: '#FFD700', name: 'Gold' }, { hex: '#40BFFF', name: 'Sky' }] },
  // VIBRANT
  { name: 'Coral Reef',        tag: 'Vibrant', colors: [{ hex: '#FF6B6B', name: 'Coral' }, { hex: '#FFE66D', name: 'Lemon' }, { hex: '#4ECDC4', name: 'Teal' }] },
  { name: 'Carnival',          tag: 'Vibrant', colors: [{ hex: '#E63946', name: 'Red' }, { hex: '#F4A261', name: 'Sandy' }, { hex: '#2A9D8F', name: 'Green Teal' }, { hex: '#264653', name: 'Dark Teal' }] },
  { name: 'Golden Hour',       tag: 'Vibrant', colors: [{ hex: '#FFB347', name: 'Amber' }, { hex: '#FF6F3C', name: 'Sunset' }, { hex: '#1A1A2E', name: 'Night' }] },
  // SOFT
  { name: 'Candy',             tag: 'Soft',    colors: [{ hex: '#FFB3DE', name: 'Pink Fizz' }, { hex: '#B3D9FF', name: 'Baby Blue' }, { hex: '#B3FFB3', name: 'Mint' }, { hex: '#FFE5B3', name: 'Butter' }] },
  { name: 'Cherry Blossom',    tag: 'Soft',    colors: [{ hex: '#FFB7C5', name: 'Blossom' }, { hex: '#FF85A1', name: 'Rose' }, { hex: '#FFF0F5', name: 'Lavender Blush' }] },
  { name: 'Lavender Fields',   tag: 'Soft',    colors: [{ hex: '#8B7BB5', name: 'Lavender' }, { hex: '#C4B8E0', name: 'Wisteria' }, { hex: '#F0ECF8', name: 'Ghost' }] },
  { name: 'Bubblegum',         tag: 'Soft',    colors: [{ hex: '#FF9ED8', name: 'Bubblegum' }, { hex: '#9ED8FF', name: 'Sky Soda' }, { hex: '#FFFF9E', name: 'Lemon Drop' }] },
  // EARTHY
  { name: 'Terracotta',        tag: 'Earthy',  colors: [{ hex: '#C4612A', name: 'Terracotta' }, { hex: '#E8A882', name: 'Sand' }, { hex: '#F5E6D3', name: 'Cream' }] },
  { name: 'Forest Floor',      tag: 'Earthy',  colors: [{ hex: '#2D4A2D', name: 'Forest' }, { hex: '#5C8A5C', name: 'Moss' }, { hex: '#C8E6C8', name: 'Sage' }] },
  { name: 'Sage & Stone',      tag: 'Earthy',  colors: [{ hex: '#6B7C5C', name: 'Sage' }, { hex: '#A8B99A', name: 'Herb' }, { hex: '#E8EAE3', name: 'Stone' }] },
  // MINIMAL
  { name: 'Monochrome',        tag: 'Minimal', colors: [{ hex: '#000000', name: 'Black' }, { hex: '#555555', name: 'Charcoal' }, { hex: '#AAAAAA', name: 'Silver' }, { hex: '#FFFFFF', name: 'White' }] },
  { name: 'Nordic',            tag: 'Minimal', colors: [{ hex: '#ECEFF4', name: 'Snow' }, { hex: '#D8DEE9', name: 'Frost' }, { hex: '#4C566A', name: 'Arctic' }] },
  { name: 'Paper & Ink',       tag: 'Minimal', colors: [{ hex: '#F5F0E8', name: 'Paper' }, { hex: '#2C1810', name: 'Ink' }, { hex: '#8B7355', name: 'Kraft' }] },
  // DARK
  { name: 'Midnight',          tag: 'Dark',    colors: [{ hex: '#0D0D2B', name: 'Midnight' }, { hex: '#1A1A6E', name: 'Navy Deep' }, { hex: '#6B6BFF', name: 'Electric Violet' }] },
  { name: 'Dark Luxury',       tag: 'Dark',    colors: [{ hex: '#1C1C1C', name: 'Obsidian' }, { hex: '#B8960C', name: 'Gold' }, { hex: '#F5F5F0', name: 'Ivory' }] },
  { name: 'Deep Sea',          tag: 'Dark',    colors: [{ hex: '#003049', name: 'Abyss' }, { hex: '#0A7FB3', name: 'Ocean' }, { hex: '#4FC3F7', name: 'Tide' }] },
  // RETRO
  { name: 'Rose Gold',         tag: 'Retro',   colors: [{ hex: '#F4A2A2', name: 'Rose' }, { hex: '#D4956A', name: 'Copper' }, { hex: '#FAF0E6', name: 'Linen' }] },
  { name: 'Groovy',            tag: 'Retro',   colors: [{ hex: '#F4743B', name: 'Papaya' }, { hex: '#F9C74F', name: 'Mustard' }, { hex: '#43AA8B', name: 'Avocado' }, { hex: '#277DA1', name: 'Denim' }] },
];

const TOTAL_STEPS = 13; // 0 = welcome, 12 = next steps

const PERSONALITY_SLIDERS = [
  { key: 'formalCasual',         left: 'Formal',      right: 'Casual'      },
  { key: 'traditionalModern',    left: 'Traditional', right: 'Modern'      },
  { key: 'seriousPlayful',       left: 'Serious',     right: 'Playful'     },
  { key: 'exclusiveAccessible',  left: 'Exclusive',   right: 'Accessible'  },
  { key: 'quietBold',            left: 'Quiet',       right: 'Bold'        },
];

const MILESTONE_LABELS = ['Now', '1 Year', '5 Years', '10 Years', '20 Years'];

// ─── STATE ────────────────────────────────────────────────────────────────────

const state = {
  current: 0,
  brandName: '',
  brief: '',
  inspiration: [],
  inspirationNotes: '',
  milestones: MILESTONE_LABELS.map(label => ({ label, description: '' })),
  competitors: [],
  pendingColor: '#FF38D4',
  axisLabels: { top: 'Premium', bottom: 'Affordable', left: 'Traditional', right: 'Modern' },
  colors: [],
  why: '', how: '', what: '',
  personality: {
    formalCasual: 50, traditionalModern: 50, seriousPlayful: 50,
    exclusiveAccessible: 50, quietBold: 50,
  },
  emotions: '', textures: '', shapes: '', imageryNotes: '',
  values: [
    { name: '', description: '' },
    { name: '', description: '' },
    { name: '', description: '' },
  ],
  audiences: [
    { name: '', role: '', description: '', needs: '' },
    { name: '', role: '', description: '', needs: '' },
  ],
  fontPrimary: '', fontSecondary: '', fontNotes: '',
  nextSteps: [
    { action: '', owner: '', deadline: '' },
    { action: '', owner: '', deadline: '' },
    { action: '', owner: '', deadline: '' },
  ],
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

const App = {

  init() {
    // Restore theme preference
    const saved = localStorage.getItem('sprint-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);

    this.buildTimeline();
    this.buildSliders();
    this.buildValues();
    this.buildAudiences();
    this.buildNextSteps();
    this.buildPairings();
    this.updateUI();
  },

  // ─── MENU ──────────────────────────────────────────────────────────────────

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

  startOver() {
    this.closeMenu();
    state.current = 0;
    this.updateUI();
    // Smooth scroll to top just in case
    document.querySelector('.steps-wrapper')?.scrollTo(0, 0);
  },

  // ─── THEME ─────────────────────────────────────────────────────────────────

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('sprint-theme', next);
  },

  // ─── COLOR TABS ────────────────────────────────────────────────────────────

  switchColorTab(tab) {
    document.getElementById('panel-custom').classList.toggle('hidden', tab !== 'custom');
    document.getElementById('panel-pairings').classList.toggle('hidden', tab !== 'pairings');
    document.getElementById('tab-custom').classList.toggle('active', tab === 'custom');
    document.getElementById('tab-pairings').classList.toggle('active', tab === 'pairings');
  },

  // ─── PAIRINGS ──────────────────────────────────────────────────────────────

  _activeFilter: 'All',
  _selectedPairing: null,

  buildPairings() {
    // Build filter buttons
    const tags = ['All', ...new Set(COLOR_PAIRINGS.map(p => p.tag))];
    document.getElementById('pairings-filter').innerHTML = tags.map(t => `
      <button class="filter-btn${t === 'All' ? ' active' : ''}"
        onclick="App.filterPairings('${t}')">${t}</button>
    `).join('');
    this.renderPairingCards('All');
  },

  filterPairings(tag) {
    this._activeFilter = tag;
    document.querySelectorAll('.filter-btn').forEach(b =>
      b.classList.toggle('active', b.textContent === tag)
    );
    this.renderPairingCards(tag);
  },

  renderPairingCards(tag) {
    const filtered = tag === 'All'
      ? COLOR_PAIRINGS
      : COLOR_PAIRINGS.filter(p => p.tag === tag);

    document.getElementById('pairings-grid').innerHTML = filtered.map((p, i) => {
      const globalIdx = COLOR_PAIRINGS.indexOf(p);
      const isSelected = this._selectedPairing === globalIdx;
      const chips = p.colors.map(c =>
        `<div class="pairing-chip" style="background:${c.hex}"></div>`
      ).join('');
      return `
        <div class="pairing-card${isSelected ? ' selected' : ''}"
             onclick="App.selectPairing(${globalIdx})">
          <div class="pairing-chips">${chips}</div>
          <div class="pairing-meta">
            <span class="pairing-name">${p.name}</span>
            <span class="pairing-tag">${p.tag}</span>
          </div>
        </div>
      `;
    }).join('');
  },

  selectPairing(idx) {
    this._selectedPairing = idx;
    const pairing = COLOR_PAIRINGS[idx];
    state.colors = pairing.colors.map(c => ({ ...c }));
    this.renderPalette();
    this.renderPairingCards(this._activeFilter);
  },

  next() {
    if (state.current < TOTAL_STEPS - 1) {
      state.current++;
      this.updateUI();
    } else {
      this.showOutput();
    }
  },

  prev() {
    if (state.current > 0) {
      state.current--;
      this.updateUI();
    }
  },

  updateUI() {
    const s = state.current;
    const total = TOTAL_STEPS - 1; // steps 0..12

    // Slide the track
    document.getElementById('stepsTrack').style.transform =
      `translateX(-${s * 100}vw)`;

    // Progress
    document.getElementById('progressFill').style.width =
      `${(s / total) * 100}%`;

    // Nav counter
    const counter = document.getElementById('navCounter');
    counter.textContent = s === 0 ? '' : `Step ${s} of ${total}`;

    // Back button
    const backBtn = document.getElementById('btn-back');
    backBtn.classList.toggle('visible', s > 0);

    // Next button label
    const nextBtn = document.getElementById('btn-next');
    if (s === total) {
      nextBtn.textContent = 'Generate Brand Brief →';
      nextBtn.style.background = 'var(--green)';
    } else if (s === 0) {
      nextBtn.textContent = 'Start Workshop →';
      nextBtn.style.background = '';
    } else {
      nextBtn.textContent = 'Next →';
      nextBtn.style.background = '';
    }
  },

  save(key, value) {
    state[key] = value;
  },

  // ─── CHIPS ───────────────────────────────────────────────────────────────

  addChip(list, e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addChipBtn(list);
    }
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
    const container = document.getElementById(`chips-${list}`);
    container.innerHTML = state[list].map((chip, i) => `
      <span class="chip">
        ${chip}
        <button class="chip-remove" onclick="App.removeChip('${list}', ${i})">×</button>
      </span>
    `).join('');
  },

  // ─── TIMELINE ────────────────────────────────────────────────────────────

  buildTimeline() {
    const nodesEl = document.getElementById('timeline-nodes');
    const cardsEl = document.getElementById('timeline-cards');

    nodesEl.innerHTML = state.milestones.map((_, i) => `
      <div class="timeline-node" id="tnode-${i}"></div>
    `).join('');

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

  saveMilestone(i, key, val) {
    state.milestones[i][key] = val;
  },

  checkNode(i) {
    const m = state.milestones[i];
    const filled = m.description.trim().length > 0;
    document.getElementById(`tnode-${i}`)?.classList.toggle('filled', filled);
  },

  // ─── COMPETITIVE QUADRANT ───────────────────────────────────────────────

  updateAxisLabel(side, val) {
    state.axisLabels[side] = val;
  },

  setCompColor(color, el) {
    state.pendingColor = color;
    document.querySelectorAll('.cdot').forEach(d => d.classList.remove('active'));
    el.classList.add('active');
  },

  placeCompetitor(e) {
    const name = document.getElementById('competitor-name').value.trim();
    if (!name) {
      document.getElementById('competitor-name').focus();
      return;
    }
    const q = document.getElementById('quadrant');
    const rect = q.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const comp = { name, x, y, color: state.pendingColor };
    state.competitors.push(comp);
    document.getElementById('competitor-name').value = '';
    this.renderCompetitors();
  },

  renderCompetitors() {
    const layer = document.getElementById('competitors-layer');
    const list  = document.getElementById('comp-list');

    layer.innerHTML = state.competitors.map((c, i) => `
      <div class="comp-dot" style="left:${c.x}%;top:${c.y}%;background:${c.color};"
           title="${c.name}" ondblclick="App.removeCompetitor(${i})">
        <span class="comp-label">${c.name}</span>
      </div>
    `).join('');

    list.innerHTML = state.competitors.map((c, i) => `
      <div class="comp-list-item">
        <div class="dot-sm" style="background:${c.color}"></div>
        <span>${c.name}</span>
        <span style="margin-left:auto;cursor:pointer;color:#555;" onclick="App.removeCompetitor(${i})">×</span>
      </div>
    `).join('');
  },

  removeCompetitor(i) {
    state.competitors.splice(i, 1);
    this.renderCompetitors();
  },

  // ─── COLOR PALETTE ────────────────────────────────────────────────────────

  addColor() {
    if (state.colors.length >= 6) return;
    const hex  = document.getElementById('color-picker').value;
    const name = document.getElementById('color-name').value.trim() || hex;
    state.colors.push({ hex, name });
    document.getElementById('color-name').value = '';
    this.renderPalette();
  },

  removeColor(i) {
    state.colors.splice(i, 1);
    this.renderPalette();
  },

  renderPalette() {
    const el = document.getElementById('palette-swatches');
    el.innerHTML = state.colors.map((c, i) => `
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

  // ─── PERSONALITY SLIDERS ────────────────────────────────────────────────

  buildSliders() {
    const container = document.getElementById('personality-sliders');
    container.innerHTML = PERSONALITY_SLIDERS.map((s, i) => `
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
            oninput="App.updateSlider(${i}, '${s.key}', this.value)"
            onmousedown="App.sliderActive(${i})"
            ontouchstart="App.sliderActive(${i})"
            onmouseup="App.sliderIdle(${i})"
            ontouchend="App.sliderIdle(${i})">
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

  sliderActive(i) {
    document.getElementById(`slider-${i}`)?.classList.add('active');
  },
  sliderIdle(i) {
    document.getElementById(`slider-${i}`)?.classList.remove('active');
  },

  // ─── VALUES ────────────────────────────────────────────────────────────────

  buildValues() {
    const el = document.getElementById('values-list');
    el.innerHTML = state.values.map((v, i) => `
      <div class="value-item">
        <div class="value-num">0${i + 1}</div>
        <div class="value-inputs">
          <input type="text" class="text-input" placeholder="Value name (e.g. Simplicity)"
            value="${v.name}"
            oninput="App.saveValue(${i}, 'name', this.value)">
          <textarea class="textarea-field sm"
            placeholder="What does this value mean for your brand?"
            oninput="App.saveValue(${i}, 'description', this.value)"
          >${v.description}</textarea>
        </div>
      </div>
    `).join('');
  },

  saveValue(i, key, val) {
    state.values[i][key] = val;
  },

  // ─── AUDIENCES ───────────────────────────────────────────────────────────

  buildAudiences() {
    const el = document.getElementById('audiences-list');
    el.innerHTML = state.audiences.map((a, i) => `
      <div class="audience-card" id="aud-${i}">
        <div class="audience-header">
          <span class="audience-label">Audience ${i + 1}</span>
          ${i > 1 ? `<button class="audience-remove" onclick="App.removeAudience(${i})">×</button>` : ''}
        </div>
        <div class="audience-grid">
          <div class="form-group">
            <label class="field-label">Who are they?</label>
            <input type="text" class="text-input" placeholder="e.g. Creative directors"
              value="${a.name}"
              oninput="App.saveAudience(${i}, 'name', this.value)">
          </div>
          <div class="form-group">
            <label class="field-label">Role / Context</label>
            <input type="text" class="text-input" placeholder="e.g. In-house at a Fortune 500"
              value="${a.role}"
              oninput="App.saveAudience(${i}, 'role', this.value)">
          </div>
          <div class="form-group" style="grid-column:span 2">
            <label class="field-label">What do they need?</label>
            <textarea class="textarea-field sm" placeholder="Their main goals, pain points, and what they're looking for from your brand..."
              oninput="App.saveAudience(${i}, 'needs', this.value)"
            >${a.needs}</textarea>
          </div>
        </div>
      </div>
    `).join('');
  },

  addAudience() {
    state.audiences.push({ name: '', role: '', description: '', needs: '' });
    this.buildAudiences();
  },

  removeAudience(i) {
    state.audiences.splice(i, 1);
    this.buildAudiences();
  },

  saveAudience(i, key, val) {
    state.audiences[i][key] = val;
  },

  // ─── NEXT STEPS ──────────────────────────────────────────────────────────

  buildNextSteps() {
    const el = document.getElementById('nextsteps-list');
    el.innerHTML = state.nextSteps.map((s, i) => `
      <div class="nextstep-item" id="ns-${i}">
        <span class="nextstep-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="nextstep-fields">
          <input type="text" class="text-input nextstep-action" placeholder="Action item"
            value="${s.action}"
            oninput="App.saveNextStep(${i}, 'action', this.value)">
          <input type="text" class="text-input nextstep-owner" placeholder="Owner"
            value="${s.owner}"
            oninput="App.saveNextStep(${i}, 'owner', this.value)">
          <input type="text" class="text-input nextstep-date" placeholder="Deadline"
            value="${s.deadline}"
            oninput="App.saveNextStep(${i}, 'deadline', this.value)">
        </div>
        ${i > 2 ? `<button class="nextstep-remove" onclick="App.removeNextStep(${i})">×</button>` : ''}
      </div>
    `).join('');
  },

  addNextStep() {
    state.nextSteps.push({ action: '', owner: '', deadline: '' });
    this.buildNextSteps();
  },

  removeNextStep(i) {
    state.nextSteps.splice(i, 1);
    this.buildNextSteps();
  },

  saveNextStep(i, key, val) {
    state.nextSteps[i][key] = val;
  },

  // ─── OUTPUT GENERATION ───────────────────────────────────────────────────

  showOutput() {
    const doc = document.getElementById('outputDoc');
    const brand = state.brandName || 'Your Brand';
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Personality bars
    const personalityHTML = PERSONALITY_SLIDERS.map(s => {
      const v = state.personality[s.key];
      return `
        <div class="out-slider-row">
          <span class="out-slider-label-l">${s.left}</span>
          <div class="out-slider-bar">
            <div class="out-slider-fill" style="width:${v}%"></div>
            <div class="out-slider-dot" style="left:${v}%"></div>
          </div>
          <span class="out-slider-label-r">${s.right}</span>
        </div>
      `;
    }).join('');

    // Color palette
    const paletteHTML = state.colors.length
      ? state.colors.map(c => `
        <div class="out-swatch">
          <div class="out-swatch-color" style="background:${c.hex};width:80px;height:60px"></div>
          <div class="out-swatch-info">
            <span class="out-swatch-name">${c.name}</span>
            <span class="out-swatch-hex">${c.hex.toUpperCase()}</span>
          </div>
        </div>
      `).join('')
      : '<p style="color:#999;font-size:14px">No colors defined.</p>';

    // Values
    const valuesHTML = state.values.filter(v => v.name).map((v, i) => {
      const colors = ['#FF38D4', '#FF8E1D', '#44F33E'];
      return `
        <div class="out-value-card" style="border-top:3px solid ${colors[i] || '#ddd'}">
          <div class="out-value-num">0${i + 1}</div>
          <div class="out-value-name">${v.name}</div>
          ${v.description ? `<p class="out-value-desc">${v.description}</p>` : ''}
        </div>
      `;
    }).join('') || '<p style="color:#999;font-size:14px">No values defined.</p>';

    // Audiences
    const audiencesHTML = state.audiences.filter(a => a.name).map(a => `
      <div class="out-card">
        <div class="out-card-title">${a.role || 'Audience'}</div>
        <div class="out-card-text"><strong>${a.name}</strong>${a.needs ? '<br>' + a.needs : ''}</div>
      </div>
    `).join('') || '<p style="color:#999;font-size:14px">No audiences defined.</p>';

    // Next steps
    const nextStepsHTML = state.nextSteps.filter(s => s.action).map((s, i) => `
      <div class="out-step-item">
        <span class="out-step-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="out-step-action">${s.action}</span>
        <span class="out-step-owner">${s.owner || '—'}</span>
        <span class="out-step-date">${s.deadline || '—'}</span>
      </div>
    `).join('') || '<p style="color:#999;font-size:14px">No next steps defined.</p>';

    // Inspiration chips
    const inspirationHTML = state.inspiration.length
      ? `<div class="out-tags">${state.inspiration.map(i => `<span class="out-tag">${i}</span>`).join('')}</div>`
      : '';

    // Milestones
    const milestonesHTML = state.milestones.filter(m => m.description).map(m => `
      <div class="out-card">
        <div class="out-card-title">${m.label}</div>
        <div class="out-card-text">${m.description}</div>
      </div>
    `).join('') || '<p style="color:#999;font-size:14px">No milestones defined.</p>';

    doc.innerHTML = `
      <!-- HEADER -->
      <div class="out-header">
        <div>
          <div class="out-brand-name">${brand}</div>
        </div>
        <div class="out-meta">
          <span>Brand Sprint Brief</span>
          <span style="margin-top:6px">${date}</span>
          <span style="margin-top:4px;color:#FF38D4">Mimosa Agency</span>
        </div>
      </div>

      <!-- BRIEF -->
      ${state.brief ? `
      <div class="out-section">
        <span class="out-section-title">Project Brief</span>
        <p class="out-text">${state.brief.replace(/\n/g, '<br>')}</p>
      </div>` : ''}

      <!-- INSPIRATION -->
      ${state.inspiration.length || state.inspirationNotes ? `
      <div class="out-section">
        <span class="out-section-title">Inspiration</span>
        ${inspirationHTML}
        ${state.inspirationNotes ? `<p class="out-text" style="margin-top:16px">${state.inspirationNotes}</p>` : ''}
      </div>` : ''}

      <!-- 20 YEAR PLAN -->
      <div class="out-section">
        <span class="out-section-title">20 Year Plan</span>
        <div class="out-grid-2">${milestonesHTML}</div>
      </div>

      <!-- COLORS -->
      <div class="out-section">
        <span class="out-section-title">Brand Colors</span>
        <div class="out-palette">${paletteHTML}</div>
      </div>

      <!-- WHAT / HOW / WHY -->
      ${(state.what || state.how || state.why) ? `
      <div class="out-section">
        <span class="out-section-title">What, How &amp; Why</span>
        <div class="out-grid-2">
          ${state.why ? `<div class="out-card"><div class="out-card-title" style="color:#FF38D4">Why</div><div class="out-card-text">${state.why}</div></div>` : ''}
          ${state.how ? `<div class="out-card"><div class="out-card-title">How</div><div class="out-card-text">${state.how}</div></div>` : ''}
          ${state.what ? `<div class="out-card" style="grid-column:span 2"><div class="out-card-title">What</div><div class="out-card-text">${state.what}</div></div>` : ''}
        </div>
      </div>` : ''}

      <!-- BRAND PERSONALITY -->
      <div class="out-section">
        <span class="out-section-title">Brand Personality</span>
        <div class="out-personality">${personalityHTML}</div>
      </div>

      <!-- IMAGERY -->
      ${(state.emotions || state.textures || state.shapes) ? `
      <div class="out-section">
        <span class="out-section-title">Imagery &amp; Mood</span>
        <div class="out-grid-2">
          ${state.emotions ? `<div class="out-card"><div class="out-card-title">Emotions</div><div class="out-card-text">${state.emotions}</div></div>` : ''}
          ${state.textures ? `<div class="out-card"><div class="out-card-title">Textures</div><div class="out-card-text">${state.textures}</div></div>` : ''}
          ${state.shapes ? `<div class="out-card"><div class="out-card-title">Shapes</div><div class="out-card-text">${state.shapes}</div></div>` : ''}
          ${state.imageryNotes ? `<div class="out-card"><div class="out-card-title">References</div><div class="out-card-text">${state.imageryNotes}</div></div>` : ''}
        </div>
      </div>` : ''}

      <!-- VALUES -->
      <div class="out-section">
        <span class="out-section-title">Top 3 Values</span>
        <div class="out-values">${valuesHTML}</div>
      </div>

      <!-- AUDIENCES -->
      <div class="out-section">
        <span class="out-section-title">Audiences</span>
        <div class="out-grid-2">${audiencesHTML}</div>
      </div>

      <!-- TYPOGRAPHY -->
      ${(state.fontPrimary || state.fontSecondary) ? `
      <div class="out-section">
        <span class="out-section-title">Typography</span>
        <div class="out-grid-2">
          ${state.fontPrimary ? `<div class="out-card"><div class="out-card-title">Primary</div><div class="out-card-text">${state.fontPrimary}</div></div>` : ''}
          ${state.fontSecondary ? `<div class="out-card"><div class="out-card-title">Secondary</div><div class="out-card-text">${state.fontSecondary}</div></div>` : ''}
          ${state.fontNotes ? `<div class="out-card" style="grid-column:span 2"><div class="out-card-title">Style Notes</div><div class="out-card-text">${state.fontNotes}</div></div>` : ''}
        </div>
      </div>` : ''}

      <!-- NEXT STEPS -->
      <div class="out-section">
        <span class="out-section-title">Next Steps</span>
        <div class="out-nextsteps">${nextStepsHTML}</div>
      </div>

      <!-- FOOTER -->
      <div class="out-footer">
        <span class="out-footer-brand">Prepared by Mimosa Agency</span>
        <span class="out-footer-date">${date}</span>
      </div>
    `;

    document.getElementById('outputOverlay').classList.remove('hidden');
    document.getElementById('outputOverlay').scrollTop = 0;
  },

  closeOutput() {
    document.getElementById('outputOverlay').classList.add('hidden');
  },

};

// ─── BOOT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => App.init());

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!document.getElementById('navBrandBtn')?.contains(e.target)) {
    App.closeMenu();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const overlay = document.getElementById('outputOverlay');
  if (!overlay.classList.contains('hidden')) return;
  if (e.key === 'ArrowRight' && e.altKey) App.next();
  if (e.key === 'ArrowLeft'  && e.altKey) App.prev();
});
