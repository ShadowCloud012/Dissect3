// components/CaseLog.jsx
// Case log with add form and persistent state within session.

import React, { useState } from 'react';
import { SAMPLE_CASE_LOG } from '../data/surgicalData';

const ROLE_STYLES = {
  obs: { label: 'Observer',  cls: 'role-obs' },
  ast: { label: 'Assistant', cls: 'role-ast' },
  per: { label: 'Performed', cls: 'role-per' },
};

const EMPTY_FORM = { date: '', procedure: '', hospital: '', role: 'obs', supervisor: '', notes: '' };

export default function CaseLog() {
  const [cases, setCases] = useState(SAMPLE_CASE_LOG);
  const [form, setForm] = useState(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);

  function handleSubmit() {
    if (!form.procedure || !form.date) return;
    setCases(prev => [form, ...prev]);
    setForm(EMPTY_FORM);
    setShowForm(false);
  }

  const stats = {
    total: cases.length,
    performed: cases.filter(c => c.role === 'per').length,
    assisted: cases.filter(c => c.role === 'ast').length,
    observed: cases.filter(c => c.role === 'obs').length,
  };

  return (
    <div className="mod-layout">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div className="section-header" style={{ marginBottom: 0 }}>
          <div className="section-icon" style={{ background: '#FFFBEB', color: '#92400E' }}>
            <i className="ti ti-clipboard-list" aria-hidden="true" />
          </div>
          <div>
            <div className="section-title">Case log</div>
            <div className="section-sub">Track your procedures, roles, and supervisors.</div>
          </div>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowForm(f => !f)}>
          <i className="ti ti-plus" aria-hidden="true" /> Add case
        </button>
      </div>

      {/* Stats */}
      <div className="log-stats-row">
        {[
          { val: stats.total,     lbl: 'Total cases' },
          { val: stats.performed, lbl: 'Performed' },
          { val: stats.assisted,  lbl: 'Assisted' },
          { val: stats.observed,  lbl: 'Observed' },
        ].map((s, i) => (
          <div className="log-stat" key={i}>
            <div className="log-stat-val">{s.val}</div>
            <div className="log-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Add case form */}
      {showForm && (
        <div className="add-case-form">
          <div className="add-form-title">Log a new case</div>
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">Date</label>
              <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
                <option value="obs">Observer</option>
                <option value="ast">Assistant</option>
                <option value="per">Performed</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Procedure</label>
            <input type="text" placeholder="e.g. ORIF mandible angle fracture" value={form.procedure} onChange={e => setForm(f => ({ ...f, procedure: e.target.value }))} />
          </div>
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">Hospital</label>
              <input type="text" placeholder="e.g. QMC Nottingham" value={form.hospital} onChange={e => setForm(f => ({ ...f, hospital: e.target.value }))} />
            </div>
            <div className="form-group">
              <label className="form-label">Supervisor</label>
              <input type="text" placeholder="e.g. Mr Ahmed" value={form.supervisor} onChange={e => setForm(f => ({ ...f, supervisor: e.target.value }))} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Notes</label>
            <input type="text" placeholder="Key learning points" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-primary btn-sm" onClick={handleSubmit}>Save case</button>
            <button className="btn btn-ghost btn-sm" onClick={() => { setShowForm(false); setForm(EMPTY_FORM); }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="log-table-wrap">
        <table className="log-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Procedure</th>
              <th>Hospital</th>
              <th>Role</th>
              <th>Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr key={i}>
                <td>{c.date}</td>
                <td className="primary">{c.procedure}</td>
                <td>{c.hospital}</td>
                <td>
                  <span className={`role-pill ${ROLE_STYLES[c.role]?.cls}`}>
                    {ROLE_STYLES[c.role]?.label}
                  </span>
                </td>
                <td>{c.supervisor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
