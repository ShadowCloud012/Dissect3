// components/tabs/AnatomyTab.jsx
// Layer toggle anatomy view with legend.
// Layers are tracked in React state — toggling one updates the UI instantly.

import React, { useState } from 'react';

const ALL_LAYERS = ['Skin', 'Fascia', 'Nerves', 'Vessels', 'Bone'];

const ANATOMY_LEGEND = [
  { color: '#EF4444', name: 'Facial artery', desc: 'Crosses inferior border of mandible. Ligate before dissection proceeds. Palpable at inferior border in most patients.' },
  { color: '#10B981', name: 'Marginal mandibular nerve (CN VII)', desc: 'Runs deep to platysma, approximately 1–2cm below inferior border. Injury causes lower lip weakness and asymmetry on smiling.' },
  { color: '#3B82F6', name: 'Submandibular gland', desc: "Retract superiorly throughout approach. Avoid capsular breach — Wharton's duct at risk." },
  { color: '#F59E0B', name: 'Incision line', desc: '2 finger-breadths below inferior mandible border in a skin crease. MMN runs above this level.' },
  { color: '#8B5CF6', name: 'Hypoglossal nerve (CN XII)', desc: 'At risk in deep dissection at the floor of mouth. Injury causes ipsilateral tongue deviation.' },
];

export default function AnatomyTab() {
  // Each layer is on by default; danger zones off by default
  const [activeLayers, setActiveLayers] = useState(new Set(ALL_LAYERS));
  const [dangerOn, setDangerOn] = useState(false);

  function toggleLayer(layer) {
    setActiveLayers(prev => {
      const next = new Set(prev);
      next.has(layer) ? next.delete(layer) : next.add(layer);
      return next;
    });
  }

  return (
    <div>
      {/* Layer-toggleable anatomy panel */}
      <div style={{ border: 'var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 14 }}>
        <div className="layer-bar">
          <span className="layer-label">Layers:</span>
          {ALL_LAYERS.map(layer => (
            <button
              key={layer}
              className={`layer-btn ${activeLayers.has(layer) ? 'on' : ''}`}
              onClick={() => toggleLayer(layer)}
            >
              {layer}
            </button>
          ))}
          <button
            className={`layer-btn danger ${dangerOn ? 'on' : ''}`}
            style={{ marginLeft: 8 }}
            onClick={() => setDangerOn(d => !d)}
          >
            ⚠ Danger zones
          </button>
        </div>

        <div className="anatomy-split">
          <div className="anatomy-img-pane">
            <div className="img-placeholder" style={{ minHeight: 200, minWidth: 200 }}>
              <i className="ti ti-photo" aria-hidden="true" />
              <strong>ANATOMY IMAGE</strong>
              <span>
                Submandibular region — anterior view
                {dangerOn && <><br /><span style={{ color: 'var(--red-600)', fontWeight: 600 }}>⚠ Danger zones highlighted</span></>}
                {!activeLayers.has('Nerves') && <><br /><span style={{ color: 'var(--gray-400)' }}>Nerves hidden</span></>}
              </span>
            </div>
          </div>
          <div className="anatomy-legend-pane">
            <div className="legend-title">Surgical anatomy</div>
            {ANATOMY_LEGEND.map((item, i) => (
              <div className="legend-item" key={i}>
                <div className="legend-dot" style={{ background: item.color }} />
                <div className="legend-text">
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Structures at risk */}
      <div className="info-box info-red">
        <strong style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <i className="ti ti-alert-triangle" aria-hidden="true" /> Structures at risk
        </strong>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <div>• <strong>Marginal mandibular nerve (CN VII)</strong> — incision placed too high above the 2FB safe zone</div>
          <div>• <strong>Facial artery</strong> — at the inferior border of the mandible, before ligation</div>
          <div>• <strong>Hypoglossal nerve (CN XII)</strong> — during deep dissection at the floor of mouth</div>
          <div>• <strong>Lingual nerve</strong> — if dissection strays medially in deeper planes</div>
        </div>
      </div>
    </div>
  );
}
