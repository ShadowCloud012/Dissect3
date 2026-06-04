// components/TopNav.jsx
// The sticky navigation bar that appears on all app screens (not landing/auth).
// Receives the current screen and a setter from App.jsx via props.

import React from 'react';

const TABS = [
  { id: 'home',        icon: 'ti-home',           label: 'Home' },
  { id: 'anatomy',     icon: 'ti-bone',            label: 'Anatomy lab' },
  { id: 'rehearsal',   icon: 'ti-activity',        label: 'Rehearsal' },
  { id: 'complications', icon: 'ti-alert-triangle', label: 'Complications' },
  { id: 'theatre',     icon: 'ti-tools',           label: 'Theatre basics' },
  { id: 'caselog',     icon: 'ti-clipboard-list',  label: 'Case log' },
];

export default function TopNav({ screen, setScreen, level, setLevel }) {
  return (
    <nav className="topnav">
      {/* Logo — clicking it goes home */}
      <button className="nav-logo" onClick={() => setScreen('home')}>
        Dis<span>sect</span>
      </button>

      {/* Tab bar */}
      <div className="nav-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${screen === tab.id || screen.startsWith(tab.id) ? 'active' : ''}`}
            onClick={() => setScreen(tab.id)}
          >
            <i className={`ti ${tab.icon}`} aria-hidden="true" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Level selector — affects hot seat questions */}
      <div className="nav-right">
        <select
          className="level-select"
          value={level}
          onChange={e => setLevel(e.target.value)}
          title="Your training level — filters question difficulty"
        >
          <option value="ms">Med student</option>
          <option value="fy">FY1/2</option>
          <option value="cst">CST</option>
          <option value="reg">Registrar</option>
        </select>
      </div>
    </nav>
  );
}
