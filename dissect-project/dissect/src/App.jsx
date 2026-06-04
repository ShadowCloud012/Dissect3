// App.jsx
// The root component. Manages which "screen" is visible using simple state.
// No routing library needed at this stage — just a string in useState.
//
// SCREENS:
//   'landing'       → public marketing page
//   'home'          → dashboard
//   'anatomy'       → anatomy landing (procedure list)
//   'anatomy-case'  → the full case view with tabs
//   'rehearsal'     → rehearsal landing
//   'complications' → complications landing
//   'theatre'       → theatre basics
//   'caselog'       → case log

import React, { useState } from 'react';
import './styles/global.css';

import LandingPage      from './components/LandingPage';
import TopNav           from './components/TopNav';
import HomeDashboard    from './components/HomeDashboard';
import AnatomyCaseView  from './components/AnatomyCaseView';
import TheatreBasics    from './components/TheatreBasics';
import CaseLog          from './components/CaseLog';
import RehearsalTab     from './components/tabs/RehearsalTab';
import ComplicationsTab from './components/tabs/ComplicationsTab';
import HotSeatTab       from './components/tabs/HotSeatTab';

// ── Anatomy landing ─────────────────────────────────────────
function AnatomyLanding({ setScreen }) {
  return (
    <div className="mod-layout">
      <button className="back-btn" onClick={() => setScreen('home')}>
        <i className="ti ti-arrow-left" aria-hidden="true" /> Home
      </button>
      <div className="section-header">
        <div className="section-icon" style={{ background: '#ECFDF5', color: '#065F46' }}>
          <i className="ti ti-bone" aria-hidden="true" />
        </div>
        <div>
          <div className="section-title">Anatomy lab</div>
          <div className="section-sub">Layer-by-layer surgical anatomy. Click a procedure to open the full case view with anatomy, imaging, complications, rehearsal, and hot seat.</div>
        </div>
      </div>
      <div className="case-grid">
        <div className="case-card featured" onClick={() => setScreen('anatomy-case')}>
          <div className="case-card-title">Submandibular approach to mandible fracture</div>
          <div className="case-card-desc">Full anatomy, imaging, complications, rehearsal, hot seat, consent, and reading. 3 danger zones. 7 operative steps.</div>
          <div className="case-tags">
            <span className="tag tag-green">OMFS</span>
            <span className="tag tag-amber">Intermediate</span>
            <span className="tag tag-red">3 danger zones</span>
            <span className="tag tag-blue">ORIF</span>
          </div>
        </div>
        <div className="case-card" style={{ borderStyle: 'dashed', cursor: 'default', opacity: 0.6 }}>
          <div className="case-card-title" style={{ color: 'var(--gray-400)' }}>More procedures coming soon</div>
          <div className="case-card-desc">Parotidectomy, orbital floor repair, tracheostomy, Le Fort I osteotomy and more — in development.</div>
          <div className="case-tags"><span className="tag tag-gray">Coming soon</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Rehearsal landing ───────────────────────────────────────
function RehearsalLanding({ setScreen }) {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <div className="mod-layout">
        <button className="back-btn" onClick={() => setStarted(false)}>
          <i className="ti ti-arrow-left" aria-hidden="true" /> Back to rehearsal list
        </button>
        <div className="section-header" style={{ marginBottom: 20 }}>
          <div className="section-icon" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
            <i className="ti ti-activity" aria-hidden="true" />
          </div>
          <div>
            <div className="section-title">ORIF mandible angle fracture</div>
            <div className="section-sub">7-step rehearsal. Step through each stage — anatomy updates at each step.</div>
          </div>
        </div>
        <RehearsalTab />
      </div>
    );
  }

  return (
    <div className="mod-layout">
      <button className="back-btn" onClick={() => setScreen('home')}>
        <i className="ti ti-arrow-left" aria-hidden="true" /> Home
      </button>
      <div className="section-header">
        <div className="section-icon" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
          <i className="ti ti-activity" aria-hidden="true" />
        </div>
        <div>
          <div className="section-title">Operative rehearsal</div>
          <div className="section-sub">Elite surgeons mentally rehearse before every case. Step through operations — anatomy updates at each stage.</div>
        </div>
      </div>
      <div className="case-grid">
        <div className="case-card featured" onClick={() => setStarted(true)}>
          <div className="case-card-title">ORIF mandible angle fracture</div>
          <div className="case-card-desc">7-step rehearsal. Submandibular approach, MMN identification, facial artery ligation, periosteal elevation, reduction and plating.</div>
          <div className="case-tags">
            <span className="tag tag-green">OMFS</span>
            <span className="tag tag-amber">Intermediate</span>
            <span className="tag tag-red">2 danger steps</span>
          </div>
        </div>
        <div className="case-card" style={{ borderStyle: 'dashed', cursor: 'default', opacity: 0.6 }}>
          <div className="case-card-title" style={{ color: 'var(--gray-400)' }}>More operations coming soon</div>
          <div className="case-card-desc">Parotidectomy, orbital floor repair, tracheostomy, Le Fort I osteotomy and more.</div>
          <div className="case-tags"><span className="tag tag-gray">Coming soon</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Complications landing ───────────────────────────────────
function ComplicationsLanding({ setScreen }) {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <div className="mod-layout">
        <button className="back-btn" onClick={() => setStarted(false)}>
          <i className="ti ti-arrow-left" aria-hidden="true" /> Back to complications library
        </button>
        <div className="section-header" style={{ marginBottom: 20 }}>
          <div className="section-icon" style={{ background: '#FEF2F2', color: '#991B1B' }}>
            <i className="ti ti-alert-triangle" aria-hidden="true" />
          </div>
          <div>
            <div className="section-title">Submandibular approach — Complications</div>
            <div className="section-sub">Interactive complication list and scenario with decision points.</div>
          </div>
        </div>
        <ComplicationsTab />
      </div>
    );
  }

  return (
    <div className="mod-layout">
      <button className="back-btn" onClick={() => setScreen('home')}>
        <i className="ti ti-arrow-left" aria-hidden="true" /> Home
      </button>
      <div className="section-header">
        <div className="section-icon" style={{ background: '#FEF2F2', color: '#991B1B' }}>
          <i className="ti ti-alert-triangle" aria-hidden="true" />
        </div>
        <div>
          <div className="section-title">Complications library</div>
          <div className="section-sub">Browse by procedure. Interactive scenarios with vitals, timeline, and decision points.</div>
        </div>
      </div>
      <div className="case-grid">
        <div className="case-card featured" onClick={() => setStarted(true)}>
          <div className="case-card-title">Submandibular approach — mandible ORIF</div>
          <div className="case-card-desc">MMN palsy, haematoma, infection, plate removal, IAN paraesthesia, malocclusion, scar. 1 interactive scenario.</div>
          <div className="case-tags">
            <span className="tag tag-green">OMFS</span>
            <span className="tag tag-red">7 complications</span>
          </div>
        </div>
        <div className="case-card" style={{ borderStyle: 'dashed', cursor: 'default', opacity: 0.6 }}>
          <div className="case-card-title" style={{ color: 'var(--gray-400)' }}>More procedures coming soon</div>
          <div className="case-card-desc">Parotidectomy, tracheostomy, neck dissection and more.</div>
          <div className="case-tags"><span className="tag tag-gray">Coming soon</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Screen renderer ─────────────────────────────────────────
function ScreenContent({ screen, setScreen, level }) {
  switch (screen) {
    case 'home':          return <HomeDashboard setScreen={setScreen} />;
    case 'anatomy':       return <AnatomyLanding setScreen={setScreen} />;
    case 'anatomy-case':  return <AnatomyCaseView setScreen={setScreen} />;
    case 'rehearsal':     return <RehearsalLanding setScreen={setScreen} />;
    case 'complications': return <ComplicationsLanding setScreen={setScreen} />;
    case 'theatre':       return <TheatreBasics />;
    case 'caselog':       return <CaseLog />;
    default:              return <HomeDashboard setScreen={setScreen} />;
  }
}

// ── Root component ──────────────────────────────────────────
export default function App() {
  // Start on landing page; after clicking "Enter" go to home
  const [screen, setScreen] = useState('landing');
  const [level, setLevel]   = useState('ms'); // training level filter

  // Landing page: no nav bar
  if (screen === 'landing') {
    return <LandingPage onEnter={() => setScreen('home')} />;
  }

  // App screens: show nav bar + content
  return (
    <div>
      <TopNav
        screen={screen}
        setScreen={setScreen}
        level={level}
        setLevel={setLevel}
      />
      <main>
        <ScreenContent screen={screen} setScreen={setScreen} level={level} />
      </main>
    </div>
  );
}
