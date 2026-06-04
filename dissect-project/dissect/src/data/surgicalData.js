// ============================================================
// data/surgicalData.js
//
// All educational content lives here, completely separate from
// the UI. To add a new procedure, just add a new entry.
// To add a new hot seat question, add to HOT_SEAT_QUESTIONS.
// ============================================================

export const REHEARSAL_STEPS = [
  {
    label: 'Positioning & setup',
    type: 'normal',
    detail: 'Patient supine on a head ring. Neck extended and rotated approximately 30° away from the operative side. Throat pack placed and confirmed with the anaesthetic team. IMF screws inserted pre-operatively to allow occlusal reference during reduction. Drape face, isolate operative field.',
    instruments: ['Head ring', 'Throat pack', 'IMF screws', 'Diathermy'],
    warn: null,
    danger: null,
    legend: [
      { c: '#F5C4B3', l: 'Soft tissue' },
      { c: '#B5D4F4', l: 'Gland' },
      { c: '#D3D1C7', l: 'Bone surface' },
    ],
  },
  {
    label: 'Incision marking',
    type: 'normal',
    detail: 'Mark incision 2 finger-breadths (approximately 1.5–2cm) below the inferior border of the mandible, ideally within a natural skin crease. Incision length approximately 3–4cm. Infiltrate with local anaesthetic + adrenaline (1:200,000) for vasoconstriction and post-operative analgesia.',
    instruments: ['Marking pen', 'Ruler', 'Local anaesthetic'],
    warn: 'Stay below the inferior border — the marginal mandibular nerve runs above this plane. Too high an incision risks nerve injury before you have even reached the fracture.',
    danger: null,
    legend: [
      { c: '#EF9F27', l: 'Incision line' },
      { c: '#888780', l: 'Inferior border' },
    ],
  },
  {
    label: 'Skin & platysma',
    type: 'normal',
    detail: 'Incise skin and subcutaneous fat with a size 15 blade. Identify platysma and divide it as a separate distinct layer using Metzenbaum scissors, cutting perpendicular to the fibre direction. Achieving clean separate tissue planes here makes the deep dissection significantly cleaner and safer.',
    instruments: ['Scalpel (15 blade)', 'Metzenbaum scissors', 'Skin hooks', 'Bipolar diathermy'],
    warn: null,
    danger: null,
    legend: [
      { c: '#F5C4B3', l: 'Skin' },
      { c: '#F0997B', l: 'Platysma' },
      { c: '#B5D4F4', l: 'Deep fascia' },
    ],
  },
  {
    label: 'Deep to platysma ⚠',
    type: 'danger',
    detail: 'The marginal mandibular nerve runs in the plane immediately deep to platysma, superficial to the investing layer of the deep cervical fascia. Identify it before any further dissection. Use blunt dissection and a nerve stimulator if available. Dissect in the plane superficial to the deep cervical fascia.',
    instruments: ['Langenbeck retractors', 'Nerve stimulator', 'Bipolar diathermy'],
    warn: null,
    danger: 'If the nerve is divided: note immediately, mark both ends with a fine suture (e.g. 6-0 Prolene), attempt microsurgical repair if available. Inform patient post-operatively. Results in ipsilateral lower lip drooping on smiling — cosmetically and functionally significant.',
    legend: [
      { c: '#E24B4A', l: 'MMN — danger zone' },
      { c: '#B5D4F4', l: 'Deep fascia' },
      { c: '#D3D1C7', l: 'Gland' },
    ],
  },
  {
    label: 'Facial artery ligation ⚠',
    type: 'danger',
    detail: 'Palpate and identify the facial artery as it crosses the inferior border of the mandible. Apply two artery clips. Tie with 2-0 Vicryl proximally and distally before division. Confirm secure haemostasis before proceeding. The vessel will retract if not secured.',
    instruments: ['Artery clips', '2-0 Vicryl ties', 'Scissors', 'Langenbeck'],
    warn: null,
    danger: 'Inadvertent division without ligation causes rapid haemorrhage into the submandibular space. Pack firmly with a swab, apply direct pressure, and call for senior help immediately. Expanding haematoma in this space can compromise the airway rapidly.',
    legend: [
      { c: '#E24B4A', l: 'Facial artery' },
      { c: '#EF9F27', l: 'Inferior border' },
      { c: '#5DCAA5', l: 'MMN safe zone' },
    ],
  },
  {
    label: 'Periosteal elevation',
    type: 'normal',
    detail: "Using a Howarth's periosteal elevator, dissect subperiosteally along the inferior and lateral surfaces of the mandible to expose the fracture site. Keep the dissection on bone throughout. Retract soft tissues with Langenbeck retractors. Irrigate copiously with saline throughout to keep the field clear.",
    instruments: ["Howarth's elevator", 'Periosteal elevator', 'Langenbeck retractors', 'Saline irrigation'],
    warn: 'Stay subperiosteal at all times. Straying off bone risks injury to the inferior alveolar nerve within its canal, and to the facial vessels superiorly.',
    danger: null,
    legend: [
      { c: '#E24B4A', l: 'Fracture line' },
      { c: '#1D9E75', l: 'Retractors' },
      { c: '#D3D1C7', l: 'Bone stripped' },
    ],
  },
  {
    label: 'Reduction & plating',
    type: 'normal',
    detail: 'Apply IMF to bring the teeth into occlusion — this is your reference for correct reduction. Manually reduce the fracture under direct vision and confirm alignment. Apply a 2.0mm reconstruction plate along the inferior border. Confirm occlusion once more before fully tightening the screws. Release IMF. Check mouth opening and verify the bite is correct.',
    instruments: ['IMF wires', 'Bone reduction forceps', '2.0mm plate system', 'Drill + 2.0mm bit', 'Screwdriver'],
    warn: 'Confirm occlusion with IMF before plating AND after plating before final tightening. Plating with the teeth out of occlusion will hold the fracture in malreduction — this is the most common reason for return to theatre.',
    danger: null,
    legend: [
      { c: '#378ADD', l: '2.0mm plate' },
      { c: '#FAEEDA', l: 'IMF in place' },
      { c: '#E1F5EE', l: 'Fracture reduced' },
    ],
  },
];

export const HOT_SEAT_QUESTIONS = [
  {
    q: 'Why do we place the incision 2 finger-breadths below the inferior border of the mandible?',
    a: "The marginal mandibular nerve (CN VII) runs in the plane just deep to platysma, approximately 1–2cm below the inferior border. Placing the incision below this level keeps us safely beneath the nerve's course. An incision that is too high risks dividing or retracting the nerve before we have even reached the deep dissection.",
    level: 'ms',
  },
  {
    q: 'What is the marginal mandibular nerve a branch of, and what does it supply?',
    a: 'It is the lowest branch of the facial nerve (CN VII). It supplies the depressor anguli oris, depressor labii inferioris and mentalis muscles. Injury results in lower lip asymmetry — the corner of the mouth droops and the patient cannot fully symmetrically smile. It is particularly distressing to patients and often the most feared complication of this approach.',
    level: 'ms',
  },
  {
    q: 'What is the difference between a favourable and unfavourable mandible fracture?',
    a: 'Favourability relates to the direction of muscle pull relative to the fracture geometry. A favourable fracture is one where the muscles of mastication resist displacement — pulling the fragments together. An unfavourable fracture is one where muscle pull causes the fragments to displace apart — operative fixation is more likely needed in these cases.',
    level: 'fy',
  },
  {
    q: 'What is intermaxillary fixation (IMF) and when is it used intraoperatively?',
    a: 'IMF brings the upper and lower teeth into occlusion by wiring the jaws together, using either arch bars or pre-inserted IMF screws. Used intraoperatively as a reference to confirm correct occlusion before and after plating. Without checking occlusion, there is a significant risk of plating in a malreduced position — the most common reason for return to theatre after ORIF.',
    level: 'fy',
  },
  {
    q: 'What are the Champy lines of osteosynthesis and why are they clinically relevant?',
    a: 'Champy et al. (1978) described ideal zones for miniplate placement based on the biomechanics of the mandible — the lines of tension and compression during masticatory function. The superior border is a tension zone; the inferior border is a compression zone. Plates placed along the tension band (superior border) prevent distraction of the fracture. For angle fractures, a single superior border plate placed through a transoral approach is often biomechanically sufficient.',
    level: 'cst',
  },
  {
    q: 'What are the indications for extracting a tooth that lies in the fracture line?',
    a: 'Extraction is indicated when the tooth is non-restorable, fractured itself, periodontally compromised, or has existing periapical pathology. A tooth with an intact root and healthy periodontal ligament may be retained — it can actually aid reduction and stability. However, any tooth in a fracture line increases the risk of infection. The decision requires clinical and radiological assessment of each case individually.',
    level: 'cst',
  },
  {
    q: 'How would you manage a patient with a mandible fracture who is anticoagulated on warfarin?',
    a: 'Assess urgency first — if there is airway compromise or severe haemorrhage, immediate management takes priority over anticoagulation optimisation. If not, plan in liaison with haematology. For warfarin, target INR <1.5 for surgery. Bridge if indicated, given the nature of the underlying anticoagulation indication. Ensure reversal agents are available. Regional nerve blocks (e.g. inferior alveolar nerve block) can bridge analgesia while anticoagulation is being optimised.',
    level: 'reg',
  },
  {
    q: 'A patient develops altered lower lip sensation post-operatively after ORIF. How do you counsel them?',
    a: 'Distinguish between the three injury types: neurapraxia (most common — temporary conduction block, full recovery expected within weeks to months), axonotmesis (structural axonal injury, recovery likely but slower — months), and neurotmesis (nerve division — potentially permanent). Importantly, establish whether the altered sensation was pre-existing from the fracture itself, which is why pre-operative documentation of IAN sensation is essential. Review with formal sensory mapping at 3 months if no improvement. Refer to specialist nerve surgery at 9–12 months if no recovery.',
    level: 'reg',
  },
];

export const LEVEL_LABELS = { ms: 'Med student', fy: 'FY1/2', cst: 'CST', reg: 'Registrar' };
export const LEVEL_TAGS   = { ms: 'tag-blue', fy: 'tag-green', cst: 'tag-amber', reg: 'tag-purple' };
export const LEVEL_ORDER  = { ms: 0, fy: 1, cst: 2, reg: 3 };

export const INSTRUMENTS = [
  {
    id: 'metzenbaum', name: 'Metzenbaum scissors', cat: 'scissors', icon: 'ti-cut',
    bg: '#FAEEDA', ic: '#B45309',
    short: 'Blunt-tipped scissors for blunt and sharp dissection in soft tissue.',
    text: "Metzenbaum scissors have long shanks with relatively short blades and blunt rounded tips. They are designed for blunt dissection of soft tissue planes and delicate cutting — not for cutting sutures, which blunts them rapidly. The curved variant is more common in deep dissection; the straight variant for more superficial work.",
    eponym: 'Named after Myron Falk Metzenbaum (1876–1944), American otolaryngologist.',
    uses: ['Submandibular approach — platysma division', 'Neck dissection', 'Parotidectomy', 'Soft tissue dissection generally'],
    ask: '"Metzenbaum scissors please" — or simply "Metz." Specify curved or straight.',
  },
  {
    id: 'mayo', name: 'Mayo scissors', cat: 'scissors', icon: 'ti-cut',
    bg: '#FAEEDA', ic: '#B45309',
    short: 'Heavy-duty scissors for cutting sutures, fascia and tougher tissues.',
    text: 'Heavier and stronger than Metzenbaum scissors. Used for cutting sutures, thick fascia, and more robust tissues. Not for delicate dissection — the heavier blades lack the precision of Metz scissors. A surgical rule: Metzenbaums for tissue, Mayos for suture.',
    eponym: 'Named after the Mayo brothers — William (1861–1939) and Charles (1865–1939) — founders of the Mayo Clinic.',
    uses: ['Suture cutting', 'Fascial closure', 'Tough fibrous tissue cutting'],
    ask: '"Mayo scissors please" — or "heavies." Straight most common; curved for deep work.',
  },
  {
    id: 'iris', name: 'Iris scissors', cat: 'scissors', icon: 'ti-cut',
    bg: '#FAEEDA', ic: '#B45309',
    short: 'Fine-tipped scissors for delicate work near nerves and vessels.',
    text: 'Very small, fine-tipped scissors originally developed for ophthalmic surgery. Used in OMFS for fine dissection around nerves, small vessels, and in the orbit where precision is paramount.',
    eponym: 'Originally designed for iris surgery in ophthalmology.',
    uses: ['Orbital surgery', 'Nerve dissection', 'Fine tissue work', 'Periorbital repair'],
    ask: '"Iris scissors please" — specify straight or curved.',
  },
  {
    id: 'langenbeck', name: 'Langenbeck retractor', cat: 'retractors', icon: 'ti-arrow-autofit-width',
    bg: '#EFF6FF', ic: '#1D4ED8',
    short: 'Right-angled blade retractor — the workhorse of open surgery.',
    text: 'A simple right-angled blade attached to a handle, used to hold soft tissue and skin edges out of the operative field. One of the most universally used retractors across all open surgery. Comes in multiple widths — narrow for deeper work, wide for broad tissue retraction.',
    eponym: 'Named after Bernhard von Langenbeck (1810–1887), German surgeon and pioneer of modern operative technique.',
    uses: ['All open approaches', 'Submandibular approach', 'Neck dissection', 'Parotidectomy'],
    ask: '"Langenbeck please" — specify size: small / medium / large.',
  },
  {
    id: 'cat-paw', name: "Cat's paw retractor", cat: 'retractors', icon: 'ti-arrow-autofit-width',
    bg: '#EFF6FF', ic: '#1D4ED8',
    short: 'Small multi-pronged retractor for skin edge retraction.',
    text: 'A small retractor with multiple fine prongs used to hold skin edges open, particularly at the beginning of an incision. The prongs grip soft tissue without requiring a scrubbed assistant to hold.',
    eponym: null,
    uses: ['Skin edge retraction', 'Incision opening', 'Superficial dissection'],
    ask: '"Cat\'s paw retractor" or "skin hook" — sometimes interchangeable terminology.',
  },
  {
    id: 'howarth', name: "Howarth's elevator", cat: 'dissection', icon: 'ti-tool',
    bg: '#ECFDF5', ic: '#065F46',
    short: 'Periosteal elevator for clean bone stripping.',
    text: "A double-ended periosteal elevator with a flat curved blade. One end sharper for initiating periosteal elevation, the other broader for sweeping across bone surfaces. Stay subperiosteal throughout the dissection to avoid injury to deeper structures.",
    eponym: 'Named after Wilfred Howarth (1879–1946), English maxillofacial surgeon.',
    uses: ['Submandibular approach', 'Orbital floor repair', 'Le Fort osteotomy', 'Any bony exposure'],
    ask: '"Howarth\'s please" — widely known in OMFS. Also called periosteal elevator or McKenty in some units.',
  },
  {
    id: 'bipolar', name: 'Bipolar diathermy', cat: 'haemostasis', icon: 'ti-bolt',
    bg: '#FEF2F2', ic: '#991B1B',
    short: 'Precise coagulation between forceps tips only.',
    text: 'Forceps that deliver electrical current between their two tips, coagulating only what is held between them. Unlike monopolar, current does not pass through the patient — making it far safer near nerves and in fine tissue territory. Essential in facial nerve surgery and delicate vessel control.',
    eponym: null,
    uses: ['Facial nerve surgery', 'Parotidectomy', 'Fine haemostasis', 'Any nerve-adjacent dissection'],
    ask: '"Bipolar please" — scrub nurse connects to the bipolar machine. Always distinguish from monopolar diathermy.',
  },
  {
    id: 'monopolar', name: 'Monopolar diathermy', cat: 'haemostasis', icon: 'ti-bolt',
    bg: '#FEF2F2', ic: '#991B1B',
    short: 'Cutting and coagulation via monopolar current.',
    text: 'Delivers electrical current from the active electrode through the patient to a grounding plate. Used for cutting through tissue (cutting mode) or coagulating bleeding points (coag mode). Not safe near nerves due to current spread. Standard in most surgical approaches for speed and efficiency.',
    eponym: null,
    uses: ['Incision through superficial tissue', 'Haemostasis in bulk tissue', 'Subcutaneous dissection'],
    ask: '"Diathermy please" — or "cautery." Specify "cut" or "coag" mode as needed.',
  },
  {
    id: 'artery-clip', name: 'Artery clip (haemostat)', cat: 'haemostasis', icon: 'ti-bolt',
    bg: '#FEF2F2', ic: '#991B1B',
    short: 'Clamps vessels for ligation or temporary haemostasis.',
    text: 'Curved or straight locking clamps used to occlude vessels before tying or to achieve temporary haemostasis. Various sizes — mosquito (very fine), medium, and large. Applied before dividing the facial artery in the submandibular approach.',
    eponym: null,
    uses: ['Facial artery ligation', 'Vessel control', 'General haemostasis'],
    ask: '"Artery clip please" or "haemostat" — specify size: mosquito (fine), medium, or large.',
  },
  {
    id: 'drill', name: 'Oscillating drill', cat: 'power', icon: 'ti-drill',
    bg: '#F5F3FF', ic: '#5B21B6',
    short: 'Drills pilot holes and performs osteotomies.',
    text: 'A pneumatic or electric high-speed drill used to create pilot holes for screws or to perform bone cuts (osteotomies). Continuous irrigation with saline is mandatory during use to prevent thermal necrosis of bone.',
    eponym: null,
    uses: ['ORIF plating', 'Le Fort osteotomy', 'BSSO', 'Any screw fixation in bone'],
    ask: '"Drill please" — scrub will attach the appropriate bit. Specify bit size: "2.0mm drill bit." Confirm irrigation is running before drilling.',
  },
  {
    id: 'miniplate', name: '2.0mm miniplate', cat: 'fixation', icon: 'ti-grid-dots',
    bg: '#F1F5F9', ic: '#334155',
    short: 'Titanium plate for rigid mandible fracture fixation.',
    text: 'Pre-formed titanium plates with drilled holes providing rigid internal fixation of fractured bone segments. 2.0mm is the standard mandible fracture fixation system. Plates are bent intraoperatively using plate-bending pliers to conform to the bone contour.',
    eponym: null,
    uses: ['Mandible fracture ORIF', 'Zygomatic fixation', 'Orbital repair', 'Le Fort fixation'],
    ask: '"Can I have a 6-hole 2.0 plate please" — specify hole count.',
  },
  {
    id: 'vicryl', name: 'Vicryl (polyglactin 910)', cat: 'sutures', icon: 'ti-needle-thread',
    bg: '#ECFDF5', ic: '#065F46',
    short: 'Absorbable braided suture for layered closure.',
    text: 'Braided synthetic absorbable suture. Loses approximately 50% tensile strength at 2 weeks, fully absorbed by 56–70 days. The standard suture for platysma, subcutaneous tissue and intraoral mucosa in OMFS.',
    eponym: null,
    uses: ['Platysma closure', 'Deep wound closure', 'Intraoral suturing', 'Submandibular layer closure'],
    ask: '"3-0 Vicryl please" — specify gauge. Intraoral: 3-0. Deep layers: 2-0.',
  },
  {
    id: 'monocryl', name: 'Monocryl (poliglecaprone)', cat: 'sutures', icon: 'ti-needle-thread',
    bg: '#ECFDF5', ic: '#065F46',
    short: 'Absorbable monofilament for subcuticular skin closure.',
    text: 'Monofilament absorbable suture with a very smooth surface, causing minimal tissue drag. Excellent cosmetic result when placed subcuticularly. Fully absorbed by 91–119 days. The preferred skin closure suture in OMFS for visible wounds.',
    eponym: null,
    uses: ['Subcuticular skin closure', 'Neck incision closure', 'Fine facial wounds'],
    ask: '"4-0 Monocryl please" — subcuticular placement only.',
  },
  {
    id: 'prolene', name: 'Prolene (polypropylene)', cat: 'sutures', icon: 'ti-needle-thread',
    bg: '#ECFDF5', ic: '#065F46',
    short: 'Non-absorbable monofilament for skin or vessel repair.',
    text: 'Non-absorbable blue monofilament suture. Very low tissue reactivity. Used for interrupted skin closure where sutures are to be removed post-operatively, or for vascular anastomosis. Must be documented as non-absorbable so it can be removed.',
    eponym: null,
    uses: ['Interrupted skin closure', 'Vascular anastomosis', 'Drain securing'],
    ask: '"4-0 Prolene please" — always document use. Must be removed at 5–7 days for skin.',
  },
  {
    id: 'trach-tube', name: 'Tracheostomy tube', cat: 'airway', icon: 'ti-lungs',
    bg: '#EFF6FF', ic: '#1E40AF',
    short: 'Inserted into surgically created tracheal stoma.',
    text: 'A curved tube inserted through a surgically created opening between tracheal rings 2–3 or 3–4. Has a removable inner cannula for cleaning without disturbing the outer tube. Cuffed variants allow ventilation; uncuffed variants for spontaneously breathing patients.',
    eponym: null,
    uses: ['Elective tracheostomy', 'Emergency airway', 'Long-term ventilation', 'Upper airway obstruction'],
    ask: '"Size 8 cuffed tracheostomy tube please" — always specify size AND cuffed vs uncuffed.',
  },
  {
    id: 'yankauer', name: 'Yankauer suction', cat: 'airway', icon: 'ti-droplet',
    bg: '#EFF6FF', ic: '#1E40AF',
    short: 'Rigid suction for oral and pharyngeal clearance.',
    text: 'A rigid plastic suction tip with a large-bore opening for rapid clearance of blood, secretions and vomit from the oropharynx. The bulbous tip prevents suction injury to delicate mucosa.',
    eponym: 'Named after Sidney Yankauer (1872–1932), American laryngologist.',
    uses: ['Airway clearance', 'Intraoperative oral suction', 'Resuscitation'],
    ask: '"Yankauer please" — also called "sucker," "suction" or "tonsil tip suction."',
  },
  {
    id: 'bp-handle', name: 'BP handle and blade', cat: 'dissection', icon: 'ti-scalpel',
    bg: '#ECFDF5', ic: '#065F46',
    short: 'Scalpel handle and disposable blade for incisions.',
    text: 'The standard incision instrument. The Bard-Parker (BP) handle holds a disposable blade. Most common: size 3 handle with size 15 blade (for fine curved incisions in the face and neck) or size 10 blade (for larger incisions).',
    eponym: null,
    uses: ['All surgical incisions', 'Skin incision', 'Deep tissue cutting'],
    ask: '"Scalpel please" or "size 15 blade please" — specify blade size for the task.',
  },
];

export const INSTRUMENT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'scissors', label: 'Scissors' },
  { id: 'retractors', label: 'Retractors' },
  { id: 'dissection', label: 'Dissection' },
  { id: 'haemostasis', label: 'Haemostasis' },
  { id: 'fixation', label: 'Fixation' },
  { id: 'sutures', label: 'Sutures' },
  { id: 'power', label: 'Power tools' },
  { id: 'airway', label: 'Airway' },
];

// Sample case log entries — in production these would come from a database
export const SAMPLE_CASE_LOG = [
  { date: '12 May 2025', procedure: 'ORIF mandible angle fracture', hospital: 'QMC Nottingham', role: 'per', supervisor: 'Mr Ahmed', notes: 'Good exposure. IMF check pre and post plating.' },
  { date: '28 Apr 2025', procedure: 'Parotidectomy', hospital: 'QMC Nottingham', role: 'ast', supervisor: 'Mr Ahmed', notes: 'Facial nerve identified with nerve stimulator.' },
  { date: '14 Apr 2025', procedure: 'Neck dissection (level I–III)', hospital: 'City Hospital', role: 'ast', supervisor: 'Mr Patel', notes: 'Submandibular triangle dissection. MMN preserved.' },
  { date: '02 Apr 2025', procedure: 'ORIF zygomatic fracture', hospital: 'City Hospital', role: 'obs', supervisor: 'Mr Patel', notes: 'Gillies approach. Good reduction confirmed on OPG.' },
];
