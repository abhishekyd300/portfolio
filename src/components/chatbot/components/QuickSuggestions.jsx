import React from 'react';

const DEFAULT_SUGGESTIONS = [
  '🚀 What MERN projects has Abhishek built?',
  '🧠 Explain the architecture of SAERS',
  '💼 What are Abhishek’s technical skills?',
  '📬 How can I contact or hire Abhishek?',
];

/**
 * Quick Suggestions Pills component.
 *
 * @param {Object} props
 * @param {Array<string>} [props.suggestions]
 * @param {Function} props.onSelect
 */
export function QuickSuggestions({ suggestions = DEFAULT_SUGGESTIONS, onSelect }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="pc-suggestions">
      {suggestions.map((text, idx) => (
        <button
          key={idx}
          type="button"
          className="pc-pill"
          onClick={() => onSelect && onSelect(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default QuickSuggestions;
