// components/tabs/RehearsalTab.jsx
// Interactive step-by-step surgical rehearsal.
// Uses React state instead of global variables — much cleaner.

import React, { useState } from 'react';
import { REHEARSAL_STEPS } from '../../data/surgicalData';

export default function RehearsalTab() {
  // currentStep tracks which step is active (0-indexed)
  const [currentStep, setCurrentStep] = useState(0);

  const step = REHEARSAL_STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === REHEARSAL_STEPS.length - 1;

  return (
    <div className="rhr-layout">
      {/* Left column: image + nav + detail */}
      <div>
        {/* Image stage */}
        <div className="rhr-svg-stage">
          <div className="rhr-svg-bar">
            <span className="rhr-svg-label">Operative view</span>
            <span className={`step-badge tag ${step.type === 'danger' ? 'tag-red' : 'tag-green'}`}>
              Step {currentStep + 1} of {REHEARSAL_STEPS.length}
            </span>
          </div>
          <div className="img-placeholder" style={{ minHeight: 160, width: '100%', borderRadius: 0, border: 'none' }}>
            <i className="ti ti-photo" aria-hidden="true" />
            <strong>OPERATIVE IMAGE — Step {currentStep + 1}</strong>
            <span>{step.label}<br />Replace with your intraoperative photograph or diagram</span>
          </div>
        </div>

        {/* Legend */}
        <div className="rhr-legend">
          {step.legend.map((l, i) => (
            <div className="rhr-leg-item" key={i}>
              <div className="rhr-leg-dot" style={{ background: l.c }} />
              {l.l}
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <div className="rhr-nav">
          <button
            className="btn btn-ghost"
            disabled={isFirst}
            onClick={() => setCurrentStep(s => s - 1)}
          >
            ← Previous
          </button>
          <button
            className={`btn ${isLast ? 'btn-outline' : 'btn-primary'}`}
            disabled={isLast}
            onClick={() => setCurrentStep(s => s + 1)}
          >
            {isLast ? 'Complete ✓' : 'Next step →'}
          </button>
        </div>

        {/* Detail card */}
        <div className="detail-card">
          <div className="dc-title">{step.label}</div>
          <div className="dc-text">{step.detail}</div>

          {step.instruments && step.instruments.length > 0 && (
            <div className="instr-chips">
              {step.instruments.map(instr => (
                <span className="instr-chip" key={instr}>{instr}</span>
              ))}
            </div>
          )}

          {step.warn && (
            <div className="info-box info-amber" style={{ marginTop: 8, fontSize: 12 }}>
              <strong>Caution:</strong> {step.warn}
            </div>
          )}

          {step.danger && (
            <div className="info-box info-red" style={{ marginTop: 8, fontSize: 12 }}>
              <strong>If this goes wrong:</strong> {step.danger}
            </div>
          )}
        </div>
      </div>

      {/* Right column: step list */}
      <div className="rhr-step-list">
        {REHEARSAL_STEPS.map((s, i) => {
          const done   = i < currentStep;
          const active = i === currentStep;
          const isDanger = s.type === 'danger';

          // Determine background/colour for the step number circle
          let numBg  = 'transparent';
          let numCol = 'var(--gray-400)';
          let numBorder = '1px solid var(--gray-200)';
          if (active) { numBg = 'var(--green-800)'; numCol = '#fff'; numBorder = 'transparent'; }
          else if (done) { numBg = 'var(--green-400)'; numCol = '#fff'; numBorder = 'transparent'; }
          else if (isDanger && !done) { numBg = 'var(--amber-400)'; numCol = '#fff'; numBorder = 'transparent'; }

          return (
            <button
              key={i}
              className={`rhr-step ${active ? 'rhr-active' : isDanger && !done ? 'rhr-warn' : ''}`}
              onClick={() => setCurrentStep(i)}
            >
              <div
                className="rhr-step-num"
                style={{ background: numBg, color: numCol, border: numBorder }}
              >
                {done ? '✓' : i + 1}
              </div>
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
