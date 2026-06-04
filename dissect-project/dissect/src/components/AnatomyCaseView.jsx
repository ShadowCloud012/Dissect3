// components/AnatomyCaseView.jsx
// The main 3-column case layout: sidebar | content + tabs | right panel.
// All tab switching is done with React state.

import React, { useState } from 'react';
import AnatomyTab      from './tabs/AnatomyTab';
import ImagingTab      from './tabs/ImagingTab';
import ComplicationsTab from './tabs/ComplicationsTab';
import RehearsalTab    from './tabs/RehearsalTab';
import HotSeatTab      from './tabs/HotSeatTab';
import ConsentTab      from './tabs/ConsentTab';
import ReadingTab      from './tabs/ReadingTab';

const TABS = [
  { id: 'anatomy',       label: 'Anatomy' },
  { id: 'imaging',       label: 'Imaging' },
  { id: 'complications', label: 'Complications' },
  { id: 'rehearsal',     label: 'Rehearsal' },
  { id: 'hotseat',       label: 'Hot seat' },
  { id: 'consent',       label: 'Consent' },
  { id: 'reading',       label: 'Reading' },
];

const SIDEBAR_ITEMS = [
  { label: 'Submandibular approach', active: true, disabled: false },
  { label: 'Retromandibular approach', active: false, disabled: true },
  { label: 'Parotidectomy', active: false, disabled: true },
  { label: 'Orbital floor repair', active: false, disabled: true },
  { label: 'Le Fort osteotomies', active: false, disabled: true },
];

const RP_LINKS = [
  { icon: 'ti-activity', label: 'Open in Rehearsal' },
  { icon: 'ti-alert-triangle', label: 'Complications library' },
  { icon: 'ti-tools', label: 'Instrument guide' },
  { icon: 'ti-book', label: 'Key reading' },
];

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'anatomy':       return <AnatomyTab />;
    case 'imaging':       return <ImagingTab />;
    case 'complications': return <ComplicationsTab />;
    case 'rehearsal':     return <RehearsalTab />;
    case 'hotseat':       return <HotSeatTab />;
    case 'consent':       return <ConsentTab />;
    case 'reading':       return <ReadingTab />;
    default:              return <AnatomyTab />;
  }
}

export default function AnatomyCaseView({ setScreen }) {
  const [activeTab, setActiveTab] = useState('anatomy');
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [bookmarked, setBookmarked] = useState(true);

  return (
    <div className="case-layout">

      {/* ── Sidebar ── */}
      <div className="case-sidebar">
        <div className="sidebar-search">
          <div className="sidebar-search-inner">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search procedures..."
              value={sidebarSearch}
              onChange={e => setSidebarSearch(e.target.value)}
            />
          </div>
          <div className="group-toggle">
            <button className="gt-btn active">Specialty</button>
            <button className="gt-btn">Region</button>
            <button className="gt-btn">Technique</button>
          </div>
        </div>
        <div className="sidebar-list">
          <div className="sidebar-section-label">OMFS</div>
          {SIDEBAR_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              style={item.disabled ? { opacity: 0.4, pointerEvents: 'none' } : {}}
            >
              <i className="ti ti-bone" aria-hidden="true" />
              {item.label}
            </div>
          ))}
          <div className="sidebar-section-label" style={{ marginTop: 8, opacity: 0.5 }}>
            More coming soon
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="case-content">

        {/* Breadcrumb */}
        <div className="case-breadcrumb">
          <button onClick={() => setScreen('anatomy')}>Anatomy lab</button>
          <i className="ti ti-chevron-right" aria-hidden="true" />
          <button onClick={() => setScreen('anatomy')}>OMFS</button>
          <i className="ti ti-chevron-right" aria-hidden="true" />
          <span style={{ color: 'var(--gray-800)' }}>Submandibular approach</span>
        </div>

        {/* Title row */}
        <div className="case-title-row">
          <h2 className="case-title">Submandibular approach to mandible fracture</h2>
          <button
            onClick={() => setBookmarked(b => !b)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: bookmarked ? 'var(--amber-400)' : 'var(--gray-300)', transition: 'color 0.15s' }}
            title={bookmarked ? 'Remove bookmark' : 'Bookmark this case'}
            aria-label="Bookmark"
          >
            <i className={`ti ${bookmarked ? 'ti-bookmark-filled' : 'ti-bookmark'}`} aria-hidden="true" />
          </button>
        </div>

        {/* Tags */}
        <div className="case-tags-row">
          <span className="tag tag-green">OMFS</span>
          <span className="tag tag-amber">Intermediate</span>
          <span className="tag tag-red">3 danger zones</span>
          <span className="tag tag-blue">ORIF</span>
        </div>

        {/* Tabs */}
        <div className="case-tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`case-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content — rendered by TabContent switcher above */}
        <TabContent activeTab={activeTab} />
      </div>

      {/* ── Right panel ── */}
      <div className="case-right-panel">
        <div className="rp-section-title">Quick links</div>
        <div className="rp-context">
          Submandibular approach · OMFS · Intermediate · Right angle fracture ORIF
        </div>
        {RP_LINKS.map((link, i) => (
          <button key={i} className="rp-link">
            <i className={`ti ${link.icon}`} aria-hidden="true" />
            {link.label}
          </button>
        ))}

        <hr className="divider" />

        <div className="rp-section-title">Danger zones</div>
        {['Marginal mandibular nerve', 'Facial artery (pre-ligation)', 'Hypoglossal nerve'].map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--red-800)', marginBottom: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red-400)', flexShrink: 0 }} />
            {d}
          </div>
        ))}
      </div>

    </div>
  );
}
