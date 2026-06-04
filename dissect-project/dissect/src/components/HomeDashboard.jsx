// components/HomeDashboard.jsx
// The main dashboard shown after login.

import React from 'react';

const MODULES = [
  { id: 'anatomy',       icon: 'ti-bone',            bg: '#ECFDF5', ic: '#065F46', title: 'Anatomy lab',         desc: 'Layer-by-layer surgical anatomy with danger zones and structures at risk.', tag: '1 case', tagClass: 'tag-green' },
  { id: 'rehearsal',     icon: 'ti-activity',        bg: '#EFF6FF', ic: '#1D4ED8', title: 'Operative rehearsal', desc: 'Step through operations with anatomy updating at each stage.', tag: '1 operation', tagClass: 'tag-blue' },
  { id: 'complications', icon: 'ti-alert-triangle',  bg: '#FEF2F2', ic: '#991B1B', title: 'Complications',       desc: 'Interactive scenarios with vitals, timelines, and decision points.', tag: '7 complications', tagClass: 'tag-red' },
  { id: 'theatre',       icon: 'ti-tools',           bg: '#F5F3FF', ic: '#5B21B6', title: 'Theatre basics',      desc: 'Instruments, scrubbing, sutures, etiquette. Everything before you walk in.', tag: '4 topics', tagClass: 'tag-purple' },
  { id: 'caselog',       icon: 'ti-clipboard-list',  bg: '#FFFBEB', ic: '#92400E', title: 'Case log',            desc: 'Track your procedures, roles and supervisors.', tag: '4 logged', tagClass: 'tag-amber' },
];

const STATS = [
  { val: '1', lbl: 'Case reviewed' },
  { val: '3', lbl: 'Steps rehearsed' },
  { val: '5', lbl: 'Questions answered' },
  { val: '4', lbl: 'Cases logged' },
];

export default function HomeDashboard({ setScreen }) {
  return (
    <div className="home-layout">
      <div className="home-greeting">Good morning.</div>
      <div className="home-sub">Pick up where you left off, or start something new.</div>

      {/* Stats row */}
      <div className="stat-row" style={{ marginBottom: 32 }}>
        {STATS.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Continue banner */}
      <div
        className="card card-hover"
        style={{ padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}
        onClick={() => setScreen('anatomy-case')}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, background: '#ECFDF5', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
          <i className="ti ti-arrow-right" aria-hidden="true" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--gray-900)', marginBottom: 2 }}>Continue: Submandibular approach</div>
          <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>You left off on the Complications tab · OMFS · Intermediate</div>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <span className="tag tag-green">OMFS</span>
          <span className="tag tag-amber">Intermediate</span>
        </div>
      </div>

      {/* Module cards */}
      <div className="home-grid">
        {MODULES.map(m => (
          <div className="home-card" key={m.id} onClick={() => setScreen(m.id)}>
            <div className="home-card-icon" style={{ background: m.bg, color: m.ic }}>
              <i className={`ti ${m.icon}`} aria-hidden="true" />
            </div>
            <div className="home-card-title">{m.title}</div>
            <div className="home-card-desc">{m.desc}</div>
            <div className="home-card-meta">
              <span className={`tag ${m.tagClass}`}>{m.tag}</span>
              <i className="ti ti-arrow-right" style={{ fontSize: 14, color: 'var(--gray-300)' }} aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
