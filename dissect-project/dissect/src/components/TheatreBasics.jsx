// components/TheatreBasics.jsx
// Four sub-sections: Instruments, Scrubbing, Sutures, Etiquette.
// Sub-section state is local to this component.

import React, { useState } from 'react';
import { INSTRUMENTS, INSTRUMENT_CATEGORIES } from '../data/surgicalData';

// ── Instruments sub-screen ──────────────────────────────────
function InstrumentsSection() {
  const [category, setCategory] = useState('all');
  const [selectedId, setSelectedId] = useState(null);

  const filtered = category === 'all'
    ? INSTRUMENTS
    : INSTRUMENTS.filter(i => i.cat === category);

  const selected = INSTRUMENTS.find(i => i.id === selectedId);

  return (
    <div>
      <div className="instr-filter-bar">
        {INSTRUMENT_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${category === cat.id ? 'active' : ''}`}
            onClick={() => setCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="instr-grid-4">
        {filtered.map(instr => (
          <button
            key={instr.id}
            className={`instr-thumb ${selectedId === instr.id ? 'sel' : ''}`}
            onClick={() => setSelectedId(selectedId === instr.id ? null : instr.id)}
          >
            <div className="instr-thumb-icon" style={{ background: instr.bg, color: instr.ic }}>
              <i className={`ti ${instr.icon}`} aria-hidden="true" />
            </div>
            <div className="instr-thumb-name">{instr.name}</div>
            <div className="instr-thumb-cat">{instr.cat}</div>
          </button>
        ))}
      </div>

      {/* Detail card — shown when an instrument is selected */}
      {selected && (
        <div className="instr-detail-card">
          <div className="id-header">
            <div className="id-icon-lg" style={{ background: selected.bg, color: selected.ic }}>
              <i className={`ti ${selected.icon}`} aria-hidden="true" />
            </div>
            <div>
              <div className="id-name">{selected.name}</div>
              <div className="id-short">{selected.short}</div>
              {selected.eponym && <div className="id-eponym">{selected.eponym}</div>}
            </div>
          </div>
          <div className="id-desc">{selected.text}</div>
          <div className="id-2col">
            <div className="id-col">
              <div className="id-col-title">Used in these procedures</div>
              {selected.uses.map((u, i) => (
                <div className="id-use-item" key={i}>
                  <i className="ti ti-point" style={{ fontSize: 12, color: 'var(--gray-300)' }} aria-hidden="true" />
                  {u}
                </div>
              ))}
            </div>
            <div className="id-col">
              <div className="id-col-title">How to ask for it in theatre</div>
              <div className="id-ask">{selected.ask}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Scrubbing sub-screen ────────────────────────────────────
const SCRUB_STEPS = [
  { title: 'Initial rinse', text: 'Turn taps on with elbow or knee control. Wet hands and forearms to 2 inches above the elbow. Keep hands higher than elbows throughout — water flows away from the cleanest part (hands) toward the least clean (elbows).' },
  { title: 'Nail pick', text: 'Use the single-use nail pick under running water to clean under each nail. Discard. The subungual space harbours the highest bacterial load — this step is frequently skipped. Don\'t skip it.' },
  { title: 'First scrub — 3 minutes', text: 'Apply chlorhexidine or povidone-iodine scrub brush. Systematically scrub each finger individually (all 4 sides), web spaces, palm, back of hand, wrist and forearm to 2 inches above the elbow. Time yourself — 3 minutes minimum for the first scrub of the day.' },
  { title: 'Rinse — hands up', text: 'Rinse thoroughly keeping hands higher than elbows at all times. Water runs from fingertips down toward elbows and drips off — never back onto the hands. Rinse each arm separately, one at a time.' },
  { title: 'Second scrub — 2 minutes', text: 'Repeat the scrub focusing on hands and wrists. 2 minutes is sufficient for subsequent scrubs on the same day if you have not left the sterile environment between cases.' },
  { title: 'Final rinse and enter theatre', text: 'Final rinse, hands up. Back through the theatre door using your shoulder or a foot pedal — never use your hands. Keep hands in front of you at shoulder height. Walk directly to the scrub nurse for gowning and gloving.' },
  { title: 'Gowning and gloving', text: 'The scrub nurse holds the gown open — insert both arms simultaneously, keeping hands inside the cuff until gloved (closed technique). For gloving: closed technique keeps hands entirely within the gown sleeves until the gloves are on. Once gloved, keep hands above waist level at all times. If you touch anything non-sterile — say so immediately and reglove.' },
];

function ScrubbingSection() {
  const [completedSteps, setCompletedSteps] = useState(new Set());

  function toggleStep(i) {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <div>
      <div className="info-box info-green" style={{ marginBottom: 20 }}>
        <strong>Before you start:</strong> Nails short and clean. No nail varnish or acrylic nails. No jewellery. Scrubs on. Theatre cap covering all hair. Mask covering nose and mouth before approaching the scrub sink.
      </div>
      <div style={{ fontSize: 12, color: 'var(--gray-400)', marginBottom: 12 }}>
        Click each step to mark it as done during practice:
      </div>
      {SCRUB_STEPS.map((step, i) => (
        <div
          key={i}
          className="scrub-step"
          style={{ cursor: 'pointer', opacity: completedSteps.has(i) ? 0.5 : 1, transition: 'opacity 0.15s' }}
          onClick={() => toggleStep(i)}
        >
          <div
            className="scrub-num"
            style={completedSteps.has(i) ? { background: 'var(--green-400)', color: '#fff', borderColor: 'transparent' } : {}}
          >
            {completedSteps.has(i) ? '✓' : i + 1}
          </div>
          <div>
            <div className="scrub-step-title">{step.title}</div>
            <div className="scrub-step-text">{step.text}</div>
          </div>
        </div>
      ))}
      <div className="info-box info-amber" style={{ marginTop: 16 }}>
        <strong>Alcohol rub method (ABHR):</strong> Some units use alcohol-based surgical hand rub for subsequent cases without a scrub brush. Apply per manufacturer instructions. Hands must be visibly clean before applying ABHR, and completely dry before gloving.
      </div>
    </div>
  );
}

// ── Sutures sub-screen ──────────────────────────────────────
const SUTURES = [
  { name: 'Simple interrupted', text: 'Individual stitches tied separately. Distributes tension evenly. If one suture fails, the rest hold. Gold standard for most wound closure where time allows.', tags: [{ label: 'Skin closure', cls: 'tag-green' }, { label: 'Versatile', cls: 'tag-gray' }] },
  { name: 'Subcuticular (intradermal)', text: 'Runs within the dermis parallel to the skin surface. No visible puncture marks. Best cosmetic result. Used with Monocryl in OMFS neck incisions.', tags: [{ label: 'Cosmetic closure', cls: 'tag-blue' }] },
  { name: 'Vertical mattress', text: 'Deep and superficial bites within the same stitch. Provides wound eversion and eliminates dead space. Used where tissue tension is higher.', tags: [{ label: 'Higher tension', cls: 'tag-amber' }] },
  { name: 'Horizontal mattress', text: 'Parallel to the wound edge. Closes deep tissue layers under tension, or used as a haemostatic stitch. Can leave track marks — remove by 5–7 days.', tags: [{ label: 'Deep layers', cls: 'tag-amber' }] },
  { name: 'Figure of eight', text: 'A crossed deep stitch — very secure and haemostatic. Commonly used to close platysma, fascial layers and dental sockets.', tags: [{ label: 'Platysma / fascia', cls: 'tag-green' }] },
  { name: 'Continuous locking', text: 'A running stitch that locks at each pass. Haemostatic and quick for mucosal closure. Used intraorally in OMFS — closing dental sockets and intraoral incisions.', tags: [{ label: 'Intraoral mucosa', cls: 'tag-green' }] },
  { name: 'Instrument tie', text: 'Tying a knot using needle holders. Required when suture length is short or in a deep confined space. Two throws in one direction, one in the opposite for a reliable square knot.', tags: [{ label: 'Core technique', cls: 'tag-blue' }] },
  { name: 'Corner / tip stitch', text: 'A half-buried horizontal mattress used at flap tips and Y-junctions. Preserves blood supply to the corner by avoiding transfixion of the tip. Critical in reconstructive surgery.', tags: [{ label: 'Reconstruction', cls: 'tag-purple' }] },
];

function SuturesSection() {
  return (
    <div>
      <div className="sutures-grid">
        {SUTURES.map((s, i) => (
          <div className="suture-card" key={i}>
            <div className="suture-name">{s.name}</div>
            <div className="suture-text">{s.text}</div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {s.tags.map((t, j) => (
                <span key={j} className={`tag ${t.cls}`}>{t.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="info-box info-blue" style={{ marginTop: 16 }}>
        <strong>Common suture materials in OMFS:</strong> Intraoral — 3-0 or 4-0 Vicryl. Platysma/deep layers — 3-0 Vicryl. Subcuticular skin — 4-0 Monocryl. Interrupted skin — 4-0 or 5-0 Prolene (must be removed). Always confirm with the surgeon before starting closure.
      </div>
    </div>
  );
}

// ── Etiquette sub-screen ────────────────────────────────────
const ETIQUETTE = [
  { icon: 'ti-door-enter', title: 'Entering theatre', text: 'Knock and wait if a case is in progress. Enter quietly. Introduce yourself to the scrub nurse and circulator — they are experienced professionals and extremely useful allies. Ask where you can stand before going anywhere near the scrub table.' },
  { icon: 'ti-hand-stop', title: 'The sterile field', text: "The scrub nurse's instrument table, the patient's draped area, and anyone who is gowned and gloved are all part of the sterile field. Never reach over it, touch it, or stand closer than 30cm unless you are also scrubbed. If you contaminate anything — say so immediately and loudly." },
  { icon: 'ti-message-circle', title: 'Speaking up', text: 'If you see something wrong — a contamination, a discrepancy in the count — say so regardless of grade. Theatre is a high-stakes environment and the WHO checklist exists precisely because silence causes harm.' },
  { icon: 'ti-user-question', title: 'When to ask questions', text: 'The best time is during setup before the case, or during closure once the critical steps are complete. If the surgeon is deep in a difficult dissection near a nerve, wait. If both hands are occupied and the surgeon is concentrating — that is not the moment.' },
  { icon: 'ti-tools', title: 'Handling instruments', text: "Never return instruments to the scrub nurse's table yourself — hand them back to the scrub nurse directly, handle first. Needles go directly into the yellow kidney dish or sharps pot — not onto the instrument table, not in your pocket." },
  { icon: 'ti-heart', title: 'Respecting the team', text: 'The scrub nurse and ODPs often have more years of theatre experience than any junior doctor. Say thank you at the end of a case — it is noticed and remembered. Theatre teams have long memories for both good and bad behaviour.' },
  { icon: 'ti-clock', title: 'Time and punctuality', text: 'Being late for a theatre list is disrespectful to the whole team. If attending as a student, arrive at least 20 minutes before the list start time. Introduce yourself to the coordinator. If you need to leave during a case, wait for a natural break and ask the surgeon quietly.' },
];

function EtiquetteSection() {
  return (
    <div>
      {ETIQUETTE.map((item, i) => (
        <div className="etiq-item" key={i}>
          <div className="etiq-title">
            <i className={`ti ${item.icon}`} aria-hidden="true" />
            {item.title}
          </div>
          <div className="etiq-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────
const SECTIONS = [
  { id: 'instruments', icon: 'ti-tools',         bg: '#F5F3FF', ic: '#5B21B6', title: 'Instruments',           desc: 'Every instrument you\'ll encounter — what it does, how to ask for it, and which procedures use it.' },
  { id: 'scrubbing',   icon: 'ti-wash',           bg: '#ECFDF5', ic: '#065F46', title: 'How to scrub in',        desc: 'Step-by-step surgical hand scrubbing, gowning and gloving. Interactive checklist mode.' },
  { id: 'sutures',     icon: 'ti-needle-thread',  bg: '#EFF6FF', ic: '#1D4ED8', title: 'Suturing techniques',   desc: 'The fundamental stitches — what each does, when to use it, and key technical points.' },
  { id: 'etiquette',   icon: 'ti-users',          bg: '#FFFBEB', ic: '#92400E', title: 'Theatre etiquette',      desc: 'Where to stand, when to speak, and the unwritten rules nobody explicitly teaches.' },
];

function SectionContent({ id }) {
  switch (id) {
    case 'instruments': return <InstrumentsSection />;
    case 'scrubbing':   return <ScrubbingSection />;
    case 'sutures':     return <SuturesSection />;
    case 'etiquette':   return <EtiquetteSection />;
    default:            return null;
  }
}

export default function TheatreBasics() {
  const [activeSection, setActiveSection] = useState(null);

  if (activeSection) {
    const section = SECTIONS.find(s => s.id === activeSection);
    return (
      <div className="tb-content-page">
        <button className="back-btn" onClick={() => setActiveSection(null)}>
          <i className="ti ti-arrow-left" aria-hidden="true" /> Theatre basics
        </button>
        <div className="section-header">
          <div className="section-icon" style={{ background: section.bg, color: section.ic }}>
            <i className={`ti ${section.icon}`} aria-hidden="true" />
          </div>
          <div>
            <div className="section-title">{section.title}</div>
            <div className="section-sub">{section.desc}</div>
          </div>
        </div>
        <SectionContent id={activeSection} />
      </div>
    );
  }

  return (
    <div className="mod-layout">
      <div className="section-header">
        <div className="section-icon" style={{ background: '#F5F3FF', color: '#5B21B6' }}>
          <i className="ti ti-tools" aria-hidden="true" />
        </div>
        <div>
          <div className="section-title">Theatre basics</div>
          <div className="section-sub">Everything you need before walking into theatre — instruments, scrubbing technique, suturing, and the unwritten rules nobody explicitly teaches.</div>
        </div>
      </div>
      <div className="tb-cards-grid">
        {SECTIONS.map(s => (
          <div className="tb-card" key={s.id} onClick={() => setActiveSection(s.id)}>
            <div className="tb-card-icon" style={{ background: s.bg, color: s.ic }}>
              <i className={`ti ${s.icon}`} aria-hidden="true" />
            </div>
            <div>
              <div className="tb-card-title">{s.title}</div>
              <div className="tb-card-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
