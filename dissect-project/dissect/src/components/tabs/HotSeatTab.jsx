// components/tabs/HotSeatTab.jsx
// Graded viva questions with reveal, filtering by level, and an accordion list.
// All state is local — no global variables needed.

import React, { useState, useMemo } from 'react';
import { HOT_SEAT_QUESTIONS, LEVEL_LABELS, LEVEL_TAGS, LEVEL_ORDER } from '../../data/surgicalData';

const FILTER_LEVELS = [
  { id: 'all', label: 'All' },
  { id: 'ms',  label: 'Med student' },
  { id: 'fy',  label: 'FY1/2' },
  { id: 'cst', label: 'CST' },
  { id: 'reg', label: 'Registrar' },
];

export default function HotSeatTab() {
  const [filterLevel, setFilterLevel] = useState('all');
  const [currentIdx, setCurrentIdx]   = useState(0);
  const [showAnswer, setShowAnswer]   = useState(false);
  // Tracks which accordions are open (by question index in filtered list)
  const [openAccordions, setOpenAccordions] = useState(new Set());

  // Filter + sort questions whenever the filter changes
  const questions = useMemo(() => {
    const base = filterLevel === 'all'
      ? HOT_SEAT_QUESTIONS
      : HOT_SEAT_QUESTIONS.filter(q => q.level === filterLevel);
    return [...base].sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
  }, [filterLevel]);

  // Reset card state when filter changes
  function handleFilterChange(lvl) {
    setFilterLevel(lvl);
    setCurrentIdx(0);
    setShowAnswer(false);
    setOpenAccordions(new Set());
  }

  function nextQuestion() {
    setCurrentIdx(i => (i + 1) % questions.length);
    setShowAnswer(false);
  }

  function toggleAccordion(i) {
    setOpenAccordions(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const current = questions[currentIdx];
  if (!current) return null;

  return (
    <div>
      {/* Filter buttons */}
      <div className="hs-filter">
        <span className="hs-filter-title">Filter by level</span>
        <div className="hs-filter-btns">
          {FILTER_LEVELS.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filterLevel === f.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flash card */}
      <div className="hotseat-card">
        <div className="hs-q">{current.q}</div>

        <div className="hs-controls">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setShowAnswer(a => !a)}
          >
            {showAnswer ? 'Hide answer' : 'Reveal answer'}
          </button>
          <button className="btn btn-ghost btn-sm" onClick={nextQuestion}>
            Next question →
          </button>
          <span className="hs-counter">{currentIdx + 1} of {questions.length}</span>
        </div>

        {/* Answer — shown/hidden with React state (no display:none hacks) */}
        {showAnswer && (
          <div className="hs-answer">{current.a}</div>
        )}
      </div>

      {/* Accordion list of all questions */}
      <div>
        {questions.map((q, i) => {
          const isOpen = openAccordions.has(i);
          return (
            <div className="q-accordion" key={i}>
              <button
                className="q-accordion-head"
                onClick={() => toggleAccordion(i)}
                aria-expanded={isOpen}
              >
                <span className="q-acc-text">{q.q}</span>
                <div className="q-acc-right">
                  <span className={`tag ${LEVEL_TAGS[q.level]}`}>{LEVEL_LABELS[q.level]}</span>
                  <i className={`ti ti-chevron-down q-acc-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true" />
                </div>
              </button>
              {isOpen && (
                <div className="q-accordion-body">{q.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
