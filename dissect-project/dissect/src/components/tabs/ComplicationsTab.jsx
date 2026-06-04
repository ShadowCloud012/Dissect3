// components/tabs/ComplicationsTab.jsx
// Interactive complications list with expandable items and scenarios with action outcomes.

import React, { useState } from 'react';

const COMPLICATIONS = [
  {
    title: 'Marginal mandibular nerve palsy',
    rate: '~5%',
    color: 'var(--red-400)',
    body: '<strong>Presentation:</strong> Lower lip asymmetry on smiling, drooling, difficulty with lip seal. Presents immediately post-operatively when patient wakes.<br><br><strong>Risk factors:</strong> Incision placed too high, excessive retraction, diathermy close to nerve, oedema.<br><br><strong>Management:</strong> If transection suspected — return to theatre for nerve repair (microsurgical). Neurapraxia (most common) — observe and reassure. Resolution usually within 3–6 months. Refer to facial physiotherapy if persistent beyond 3 months.',
  },
  {
    title: 'Post-operative haematoma',
    rate: '2–4%',
    color: 'var(--red-400)',
    body: '<strong>Presentation:</strong> Progressive swelling in the submandibular region within hours of surgery. May cause airway compromise if large. Tense, fluctuant swelling with skin discolouration.<br><br><strong>Management:</strong> Small haematoma — observe closely. Expanding haematoma — return to theatre for evacuation and haemostasis. Always assess airway first.',
  },
  {
    title: 'Surgical site infection',
    rate: '3–8%',
    color: 'var(--amber-400)',
    body: '<strong>Presentation:</strong> Erythema, swelling, warmth, discharge from wound. Fever, raised WBC, CRP. Typically 5–10 days post-operatively.<br><br><strong>Management:</strong> Send wound swab for MC&S. Start empirical antibiotics (co-amoxiclav first-line in OMFS). If abscess forming — incision and drainage. Consider plate removal if plate exposed or infected.',
  },
  {
    title: 'Plate removal',
    rate: '10–15%',
    color: 'var(--amber-400)',
    body: '<strong>Indications for removal:</strong> Plate infection, plate exposure through mucosa or skin, persistent pain over plate, patient preference after fracture union, pre-MRI in some units.<br><br><strong>Timing:</strong> Not before 6 weeks (fracture must be united). Routine removal not required — most plates remain in situ permanently.',
  },
  {
    title: 'IAN paraesthesia',
    rate: '~10%',
    color: 'var(--amber-400)',
    body: '<strong>Presentation:</strong> Altered or absent sensation in the distribution of the inferior alveolar nerve — lower lip and chin on the operative side. May be pre-existing from the fracture itself (document pre-operatively).<br><br><strong>Management:</strong> Review at 3 months with formal sensory mapping. Most neurapraxia resolves within 6 months. Persistent deficit beyond 12 months — refer for specialist assessment.',
  },
  {
    title: 'Malocclusion',
    rate: '2–5%',
    color: 'var(--red-400)',
    body: '<strong>Presentation:</strong> Bite does not feel right after surgery. Teeth do not meet symmetrically. Often noticed by patient immediately on recovery.<br><br><strong>Prevention:</strong> Confirm occlusion with IMF before AND after plating. This is the most preventable complication in mandible ORIF.<br><br><strong>Management:</strong> Early return to theatre (within 24–48h) for plate removal, reduction, and re-plating gives the best outcomes.',
  },
];

// Scenario with action buttons that give different outcomes
const SCENARIO = {
  title: 'Post-op day 1 — Expanding neck swelling',
  description: "A 28-year-old man, 18 hours after ORIF of a right angle mandible fracture via the submandibular approach, is reviewed on the ward. The nurse reports his submandibular region looks larger than on the last observation. On assessment: progressive tense swelling over the operative site, mild skin discolouration, and the patient reports increasing difficulty swallowing.",
  vitals: [
    { label: 'HR 102', type: 'warn' },
    { label: 'BP 118/78', type: 'ok' },
    { label: 'SpO₂ 97%', type: 'ok' },
    { label: 'RR 18', type: 'warn' },
    { label: 'Temp 37.4°C', type: 'ok' },
  ],
  actions: [
    { label: 'Observe and re-check in 1h', outcome: 'wrong', text: 'Incorrect. An expanding haematoma post-operatively requires urgent intervention, not observation. The dysphagia and SpO₂ trend suggest early airway compromise. Delay risks complete obstruction.' },
    { label: 'Return to theatre for evacuation', outcome: 'correct', text: 'Correct. An expanding haematoma with impending airway compromise requires immediate return to theatre. Inform the consultant, alert theatre, and ensure anaesthetic team are aware of potential difficult airway. Give oxygen and monitor continuously until in theatre.' },
    { label: 'Start antibiotics and observe', outcome: 'wrong', text: 'Incorrect. This is not primarily an infective process at 18 hours — the timeline is too short. This is a haematoma. Antibiotics do not treat expanding haematoma and delay the correct management.' },
    { label: 'Aspirate at bedside', outcome: 'wrong', text: 'Incorrect. Bedside aspiration of a post-operative haematoma in the submandibular region is not appropriate — it does not address the source, risks introducing infection, and does not treat the underlying bleeding point. Theatre is required.' },
  ],
};

export default function ComplicationsTab() {
  const [openComps, setOpenComps] = useState(new Set());
  const [selectedAction, setSelectedAction] = useState(null);

  function toggleComp(i) {
    setOpenComps(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <div>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
        {[
          { val: '~5%', lbl: 'MMN palsy rate', bg: 'var(--red-50)', border: 'var(--red-200)', valCol: 'var(--red-600)', lblCol: 'var(--red-800)' },
          { val: '10–15%', lbl: 'Plate removal rate', bg: 'var(--amber-50)', border: 'var(--amber-200)', valCol: 'var(--amber-600)', lblCol: 'var(--amber-800)' },
          { val: '~2%', lbl: 'Return to theatre', bg: 'var(--green-50)', border: 'var(--green-200)', valCol: 'var(--green-600)', lblCol: 'var(--green-800)' },
        ].map((s, i) => (
          <div key={i} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 'var(--radius-md)', padding: 12, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: s.valCol }}>{s.val}</div>
            <div style={{ fontSize: 11, color: s.lblCol }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="comp-split">
        {/* Complication list */}
        <div>
          <div className="comp-list-title">Complications — click to expand</div>
          {COMPLICATIONS.map((c, i) => (
            <div className="comp-item" key={i}>
              <button className="comp-item-head" onClick={() => toggleComp(i)}>
                <div className="comp-dot" style={{ background: c.color }} />
                <div className="comp-item-title">{c.title}</div>
                <div className="comp-item-rate">{c.rate}</div>
                <i className={`ti ti-chevron-${openComps.has(i) ? 'up' : 'down'}`} style={{ fontSize: 14, color: 'var(--gray-400)', marginLeft: 4 }} aria-hidden="true" />
              </button>
              {openComps.has(i) && (
                <div
                  className="comp-item-body"
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Interactive scenario */}
        <div>
          <div className="comp-list-title">Interactive scenario</div>
          <div className="comp-scenario">
            <div className="cs-head">
              <span className="cs-head-title">{SCENARIO.title}</span>
              <span className="tag tag-red">⚠ Urgent</span>
            </div>
            <div className="cs-body">
              <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 8 }}>
                {SCENARIO.description}
              </div>
              <div className="scenario-vitals">
                {SCENARIO.vitals.map((v, i) => (
                  <span key={i} className={`vital vital-${v.type}`}>{v.label}</span>
                ))}
              </div>

              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gray-600)', marginBottom: 6, marginTop: 10 }}>
                What do you do?
              </div>
              <div className="action-row">
                {SCENARIO.actions.map((a, i) => (
                  <button
                    key={i}
                    className={`action-btn ${selectedAction === i ? a.outcome : ''}`}
                    onClick={() => setSelectedAction(i)}
                  >
                    {a.label}
                  </button>
                ))}
              </div>

              {/* Outcome shown after an action is selected */}
              {selectedAction !== null && (
                <div className="outcome-box" style={{ marginTop: 12 }}>
                  <div className={`ob-title`} style={{ color: SCENARIO.actions[selectedAction].outcome === 'correct' ? 'var(--green-800)' : 'var(--red-800)' }}>
                    {SCENARIO.actions[selectedAction].outcome === 'correct' ? '✓ Correct' : '✗ Incorrect'}
                  </div>
                  <div className="ob-text">{SCENARIO.actions[selectedAction].text}</div>
                  {SCENARIO.actions[selectedAction].outcome === 'correct' && (
                    <div>
                      {['Call the consultant immediately', 'Alert theatre — emergency return', 'Keep patient nil by mouth', 'Continuous SpO₂ monitoring', 'Prepare for potential difficult airway'].map((pt, i) => (
                        <div className="learn-item" key={i}>
                          <i className="ti ti-check" style={{ color: 'var(--green-400)' }} aria-hidden="true" />
                          {pt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
