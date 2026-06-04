// components/LandingPage.jsx
// The public-facing marketing page shown before login.

import React from 'react';

const MODULES = [
  { icon: 'ti-bone', bg: '#ECFDF5', ic: '#065F46', title: 'Anatomy lab', desc: 'Layer-by-layer surgical anatomy with danger zones, structures at risk, and direct correlation to operative steps.' },
  { icon: 'ti-activity', bg: '#EFF6FF', ic: '#1D4ED8', title: 'Operative rehearsal', desc: 'Mental rehearsal with step-by-step intraoperative anatomy updates. Mirrors how elite surgeons prepare.' },
  { icon: 'ti-alert-triangle', bg: '#FEF2F2', ic: '#991B1B', title: 'Complications library', desc: 'Interactive complication scenarios with vitals, timeline, and decision points. Learn to recognise and manage.' },
  { icon: 'ti-tools', bg: '#F5F3FF', ic: '#5B21B6', title: 'Theatre basics', desc: 'Instruments, scrubbing technique, sutures, and the unwritten rules nobody explicitly teaches.' },
  { icon: 'ti-clipboard-list', bg: '#FFFBEB', ic: '#92400E', title: 'Case log', desc: 'Track procedures, roles, and supervisors. Linked to the anatomy cases you have reviewed.' },
  { icon: 'ti-brain', bg: '#F5F3FF', ic: '#7C3AED', title: 'Hot seat', desc: 'Graded viva questions from med student to registrar level. Reveal answers one at a time.' },
];

const TESTIMONIALS = [
  { quote: 'I had my OMFS theatre attachment the week after using this and felt like I actually understood what was happening. The anatomy layer toggles are brilliant.', author: 'Final year medical student', role: 'Sheffield' },
  { quote: 'The hot seat section at CST level is genuinely challenging. Much more useful than reading a textbook the night before.', author: 'Core surgical trainee', role: 'London deanery' },
  { quote: "The complications scenarios are the best bit — seeing the timeline and having to pick the right action makes it stick. I remembered the MMN palsy management perfectly.", author: 'FY2 doctor', role: 'East Midlands' },
];

export default function LandingPage({ onEnter }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Nav */}
      <nav className="land-nav">
        <button className="land-nav-logo">Dis<span>sect</span></button>
        <div className="land-nav-links">
          <button className="btn btn-ghost btn-sm" onClick={onEnter}>Sign in</button>
          <button className="btn btn-primary btn-sm" onClick={onEnter}>Get started free</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="land-hero">
        <div>
          <div className="land-eyebrow">Surgical education reimagined</div>
          <h1 className="land-h1">Learn surgery the way <em>surgeons</em> think.</h1>
          <p className="land-lead">
            Layer-by-layer anatomy, operative rehearsal, interactive complication scenarios,
            and graded viva questions — all built for trainees who are serious about theatre.
          </p>
          <div className="land-btns">
            <button className="btn btn-primary btn-lg" onClick={onEnter}>
              <i className="ti ti-arrow-right" /> Start learning free
            </button>
            <button className="btn btn-ghost" onClick={onEnter}>Preview the anatomy lab →</button>
          </div>
          <p className="land-note">No card required. Free access to the submandibular approach.</p>
        </div>
        <div className="land-preview-card">
          <div className="lpc-label">Inside the anatomy lab</div>
          {[
            { icon: 'ti-bone', bg: '#ECFDF5', ic: '#065F46', title: 'Submandibular approach', sub: 'OMFS · 3 danger zones' },
            { icon: 'ti-bolt', bg: '#FEF2F2', ic: '#991B1B', title: 'Facial artery ligation', sub: 'Step 5 of 7 · Danger step' },
            { icon: 'ti-brain', bg: '#EFF6FF', ic: '#1D4ED8', title: 'MMN — marginal mandibular n.', sub: 'Hot seat · CST level' },
          ].map((item, i) => (
            <div className="lpc-item" key={i}>
              <div className="lpc-item-icon" style={{ background: item.bg, color: item.ic }}>
                <i className={`ti ${item.icon}`} aria-hidden="true" />
              </div>
              <div className="lpc-item-text">
                <div className="lpc-item-title">{item.title}</div>
                <div className="lpc-item-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="land-modules-section">
        <div className="land-modules-inner">
          <div className="land-section-title">Everything in one place</div>
          <div className="land-section-sub">Six modules built for how surgical trainees actually learn.</div>
          <div className="land-mod-grid">
            {MODULES.map((m, i) => (
              <div className="land-mod-card" key={i} onClick={onEnter}>
                <div className="lmc-icon" style={{ background: m.bg, color: m.ic }}>
                  <i className={`ti ${m.icon}`} aria-hidden="true" />
                </div>
                <div className="lmc-title">{m.title}</div>
                <div className="lmc-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px' }}>
        <div className="land-section-title">What trainees say</div>
        <div className="land-test-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="land-test-card" key={i}>
              <p className="ltc-quote">"{t.quote}"</p>
              <div className="ltc-author">{t.author}</div>
              <div className="ltc-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="land-cta-section">
        <div className="land-cta-inner">
          <div>
            <div className="land-cta-title">Ready to walk into theatre prepared?</div>
            <div className="land-cta-sub">Free access to the full submandibular approach case.</div>
          </div>
          <div className="land-cta-btns">
            <button className="btn btn-white" onClick={onEnter}>Get started free</button>
            <button className="btn btn-white-outline" onClick={onEnter}>Sign in</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="land-footer">
        <div className="land-footer-logo">Dis<span>sect</span></div>
        <div className="land-footer-text">© 2025 Dissect. Built for surgical trainees.</div>
      </footer>
    </div>
  );
}
