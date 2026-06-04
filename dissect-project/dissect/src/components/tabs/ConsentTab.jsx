// components/tabs/ConsentTab.jsx
import React from 'react';

const CONSENT_ITEMS = [
  { icon: 'ti-alert-triangle', bg: '#FEF2F2', ic: '#991B1B', title: 'Marginal mandibular nerve palsy (~5%)', text: 'The nerve that controls the lower lip muscles runs close to the incision. If stretched or damaged, the patient may notice asymmetry when smiling. Most cases are temporary (neurapraxia) and resolve within 3–6 months. Permanent palsy is rare but possible.' },
  { icon: 'ti-droplet', bg: '#FEF2F2', ic: '#991B1B', title: 'Haematoma (2–4%)', text: 'Collection of blood under the wound. May require a return to theatre for drainage if large or expanding. Patients are advised to report any rapidly increasing swelling.' },
  { icon: 'ti-bacteriophage', bg: '#FFFBEB', ic: '#92400E', title: 'Infection (3–8%)', text: 'Despite prophylactic antibiotics, wound infection can occur. Usually managed with antibiotics. Rarely requires surgical drainage or plate removal.' },
  { icon: 'ti-grid-dots', bg: '#FFFBEB', ic: '#92400E', title: 'Plate removal (10–15%)', text: 'The titanium plates are usually left permanently, but may need to be removed if they become infected, exposed, or cause pain. This is a second procedure under general anaesthetic.' },
  { icon: 'ti-brain', bg: '#FFFBEB', ic: '#92400E', title: 'IAN numbness (~10%)', text: 'The inferior alveolar nerve runs inside the mandible. Fracture or surgical manipulation can cause altered or absent sensation in the lower lip and chin. Often pre-existing from the fracture itself. Most cases improve with time.' },
  { icon: 'ti-tooth', bg: '#FEF2F2', ic: '#991B1B', title: 'Malocclusion (2–5%)', text: "If the fracture is not perfectly reduced, the patient's bite may not feel right after surgery. May require revision surgery. The risk is minimised by checking occlusion during the operation." },
  { icon: 'ti-cut', bg: '#F5F3FF', ic: '#5B21B6', title: 'Scar', text: 'A permanent scar below the jaw in the submandibular region. Placed in a skin crease where possible to minimise visibility. Most scars mature to a fine pale line within 12–18 months.' },
];

export default function ConsentTab() {
  return (
    <div>
      <div className="info-box info-blue" style={{ marginBottom: 16 }}>
        <strong>Consent discussion framework</strong><br />
        Cover indication, procedure, alternatives (conservative, closed reduction), general anaesthetic risks, and all specific risks below. Document that the patient was given the opportunity to ask questions and had time to consider.
      </div>
      {CONSENT_ITEMS.map((item, i) => (
        <div className="consent-item" key={i}>
          <div className="consent-icon" style={{ background: item.bg, color: item.ic }}>
            <i className={`ti ${item.icon}`} aria-hidden="true" />
          </div>
          <div>
            <div className="consent-title">{item.title}</div>
            <div className="consent-text">{item.text}</div>
          </div>
        </div>
      ))}
      <div className="info-box info-amber" style={{ marginTop: 12 }}>
        <strong>Montgomery ruling (2015):</strong> Consent must cover all risks a reasonable patient would consider significant, not just those the clinician deems important. Document the conversation, not just the signed form.
      </div>
    </div>
  );
}
