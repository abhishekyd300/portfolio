import React, { useState, useRef, useEffect } from 'react';
import { MessageBubble } from './MessageBubble.jsx';
import { ThinkingIndicator } from './ThinkingIndicator.jsx';
import { QuickSuggestions } from './QuickSuggestions.jsx';

/**
 * Chat Window Modal Component.
 */
export function ChatWindow({
  isOpen,
  onClose,
  messages,
  isLoading,
  onSendMessage,
  onClearHistory,
}) {
  const [inputText, setInputText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdown menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Auto-scroll to bottom on new messages or thinking states
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;
    onSendMessage(inputText);
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`pc-window ${isOpen ? 'pc-visible' : ''} ${isExpanded ? 'pc-expanded' : ''}`}>
      {/* Header */}
      <div className="pc-header">
        <div className="pc-header-left">
          <div className="pc-header-avatar">DE</div>
          <div className="pc-header-info">
            <h4>DUM-E</h4>
            <div className="pc-header-status">
              <span className="pc-header-dot"></span>
              <span>Online</span>
            </div>
          </div>
        </div>

        <div className="pc-header-actions">
          {/* Quick Expand / Compress toggle */}
          <button
            type="button"
            className="pc-icon-btn"
            title={isExpanded ? 'Restore compact size' : 'Expand chat window'}
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-label={isExpanded ? 'Restore window size' : 'Expand window size'}
          >
            {isExpanded ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            )}
          </button>

          {/* Three-dot menu button & dropdown */}
          <div className="pc-menu-anchor" ref={menuRef}>
            <button
              type="button"
              className={`pc-icon-btn ${isMenuOpen ? 'pc-active' : ''}`}
              title="More options"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="More options"
              aria-expanded={isMenuOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.8" />
                <circle cx="12" cy="12" r="1.8" />
                <circle cx="12" cy="19" r="1.8" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="pc-dropdown-menu">
                <button
                  type="button"
                  className="pc-menu-item"
                  onClick={() => {
                    setIsExpanded((prev) => !prev);
                    setIsMenuOpen(false);
                  }}
                >
                  {isExpanded ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="4 14 10 14 10 20" />
                        <polyline points="20 10 14 10 14 4" />
                        <line x1="14" y1="10" x2="21" y2="3" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                      <span>Restore Compact Size</span>
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                      <span>Expand Chat Window</span>
                    </>
                  )}
                </button>

                <div className="pc-menu-divider" />

                <button
                  type="button"
                  className="pc-menu-item pc-menu-danger"
                  onClick={() => {
                    onClearHistory();
                    setIsMenuOpen(false);
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M8 16H3v5" />
                  </svg>
                  <span>Clear & Refresh Chat</span>
                </button>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            type="button"
            className="pc-icon-btn"
            title="Close chat"
            onClick={onClose}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Message List */}
      <div className="pc-messages-container">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            onAction={(actionText) => onSendMessage(actionText)}
          />
        ))}

        {isLoading && <ThinkingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions Pills */}
      {messages.length <= 2 && !isLoading && (
        <QuickSuggestions onSelect={(text) => onSendMessage(text)} />
      )}

      {/* Input Bar */}
      <form className="pc-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          className="pc-input"
          placeholder="Ask about projects, skills, or contact..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="pc-send-btn"
          disabled={!inputText.trim() || isLoading}
          title="Send message"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
