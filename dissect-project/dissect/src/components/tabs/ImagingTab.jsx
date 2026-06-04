// components/tabs/ImagingTab.jsx
// Tabbed imaging viewer — OPG, CT axial, coronal, 3D, post-op.

import React, { useState } from 'react';

const IMAGING_TYPES = [
  { id: 'opg',    label: 'OPG',                title: 'Orthopantomogram (OPG)',       icon: 'ti-scan', desc: 'The OPG is the first-line investigation for mandible fractures. It provides a panoramic view of the entire mandible and dentition in a single image. When reading an OPG for a mandible fracture, assess: (1) location and number of fracture lines, (2) degree of displacement, (3) involvement of tooth roots in the fracture line, (4) condylar position and integrity, (5) presence of a contralateral fracture — the mandible is a ring and frequently fractures in two places.', placeholder: 'OPG — Right angle fracture, mandible' },
  { id: 'axial',  label: 'Axial CT',            title: 'Axial CT — mandible body',    icon: 'ti-scan', desc: 'Fine-cut CT (1mm slices) is essential pre-operatively. The axial slice shows the inferior alveolar nerve (IAN) canal position relative to the fracture — critical for planning screw placement to avoid nerve injury. Also demonstrates buccal and lingual cortex integrity, and the degree of comminution.', placeholder: 'Axial CT — Mandible body, fine cut' },
  { id: 'coronal', label: 'Coronal CT',         title: 'Coronal CT — fracture displacement', icon: 'ti-scan', desc: 'The coronal plane is the best view for assessing vertical displacement and angulation of the fracture. Confirms favourability — whether muscle pull is displacing or stabilising the fragments.', placeholder: 'Coronal CT — Fracture displacement' },
  { id: '3d',     label: '3D reconstruction',   title: '3D CT reconstruction',        icon: 'ti-cube', desc: '3D reconstruction is used for surgical planning — visualise the reduction vector, select plate length and configuration, and identify any additional fractures. Most units generate these automatically from the CT dataset. Useful for patient explanation during consent.', placeholder: '3D CT reconstruction' },
  { id: 'postop', label: 'Post-op OPG',         title: 'Post-operative OPG',          icon: 'ti-scan', desc: 'Post-op OPG confirms fracture reduction quality and plate position. Check: fracture lines are apposed, plate is well-seated on bone, screws are not within the IAN canal, and dental occlusion is restored. A repeat OPG at 6 weeks confirms bony union and determines whether plate removal may be needed.', placeholder: 'Post-operative OPG — Plate in situ' },
];

export default function ImagingTab() {
  const [activeType, setActiveType] = useState('opg');
  const current = IMAGING_TYPES.find(t => t.id === activeType);

  return (
    <div>
      {/* Type selector tabs */}
      <div className="img-type-tabs">
        {IMAGING_TYPES.map(t => (
          <button
            key={t.id}
            className={`filter-btn ${activeType === t.id ? 'active' : ''}`}
            onClick={() => setActiveType(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Image card — updates based on selection */}
      {current && (
        <div className="img-card">
          <div className="img-placeholder" style={{ minHeight: 240, borderRadius: 0, border: 'none', borderBottom: '2px dashed var(--gray-200)' }}>
            <i className={`ti ${current.icon}`} aria-hidden="true" />
            <strong>{current.placeholder}</strong>
            <span>Replace with your image. Annotate key structures before adding.</span>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <div className="img-card-title">{current.title}</div>
            <div className="img-card-note" style={{ marginTop: 6 }}>{current.desc}</div>
          </div>
        </div>
      )}

      <div className="info-box info-blue" style={{ marginTop: 4 }}>
        <strong style={{ display: 'block', marginBottom: 4 }}>
          <i className="ti ti-info-circle" aria-hidden="true" /> CT → operative correlation
        </strong>
        Use the axial CT to identify IAN canal depth before drilling — the most common cause of post-operative numbness from screw placement. Coronal views guide reduction planning. 3D reconstruction is shown to the patient during consent to aid understanding.
      </div>
    </div>
  );
}
