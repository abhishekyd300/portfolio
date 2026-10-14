import React from 'react';

/**
 * Animated Thinking/Querying indicator.
 */
export function ThinkingIndicator() {
  return (
    <div className="pc-msg-wrap pc-msg-assistant">
      <div className="pc-thinking">
        <div className="pc-dots">
          <span className="pc-dot"></span>
          <span className="pc-dot"></span>
          <span className="pc-dot"></span>
        </div>
        <span>Thinking & querying portfolio knowledge...</span>
      </div>
    </div>
  );
}

export default ThinkingIndicator;
