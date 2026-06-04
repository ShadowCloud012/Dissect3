// components/tabs/ReadingTab.jsx
import React from 'react';

const READING = [
  { title: "Champy et al. (1978) — Mandibular osteosynthesis by miniature screwed plates via a buccal approach", text: "The landmark paper establishing the biomechanical basis for miniplate fixation of mandible fractures. Describes the lines of ideal osteosynthesis along zones of tension and compression. Still the theoretical foundation of modern OMFS fixation.", tags: [{ label: 'Foundational', cls: 'tag-green' }, { label: 'Biomechanics', cls: 'tag-gray' }] },
  { title: "Ellis & Miles — Fractures of the mandible: a technical consideration", text: "Comprehensive review of mandible fracture classification, management decision-making, and operative technique. Covers favourable vs unfavourable fracture geometry, IMF principles, and plate selection.", tags: [{ label: 'Review', cls: 'tag-blue' }, { label: 'Operative technique', cls: 'tag-gray' }] },
  { title: "BAOMS guidelines — Management of mandibular fractures", text: "British Association of Oral and Maxillofacial Surgeons clinical guidelines covering triage, indications for operative vs conservative management, antibiotic prophylaxis, and follow-up protocols.", tags: [{ label: 'Guidelines', cls: 'tag-amber' }, { label: 'BAOMS', cls: 'tag-gray' }] },
  { title: "Nkenke et al. — Morbidity of harvesting of bone grafts from the iliac crest for preprosthetic augmentation procedures", text: "Relevant for understanding donor site morbidity in cases requiring bone grafting for comminuted or infected fractures.", tags: [{ label: 'Reconstruction', cls: 'tag-purple' }] },
];

export default function ReadingTab() {
  return (
    <div>
      <div className="info-box info-gray" style={{ marginBottom: 16 }}>
        Key reading for this procedure. Prioritise the foundational papers for viva preparation — examiners frequently ask about Champy's lines at CST and registrar level.
      </div>
      {READING.map((item, i) => (
        <div className="reading-item" key={i}>
          <div className="reading-title">{item.title}</div>
          <div className="reading-text">{item.text}</div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {item.tags.map((t, j) => (
              <span key={j} className={`tag ${t.cls}`}>{t.label}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
