import React from 'react';
import { usePortfolioChat } from '../hooks/usePortfolioChat.js';
import { ChatWindow } from './ChatWindow.jsx';
import '../styles/chatbot.css';

/**
 * PortfolioChatbot Root Component.
 * Drop-in floating action button and chat modal for React portfolios.
 *
 * @param {Object} props
 * @param {string} [props.apiEndpoint='/api/agent/chat'] - Custom AI Agent backend URL.
 * @param {string} [props.position='bottom-right'] - 'bottom-right' or 'bottom-left'.
 * @param {boolean} [props.initialOpen=false] - Initial open state.
 * @param {string} [props.initialGreeting] - Custom greeting message.
 */
const DEFAULT_ENDPOINT =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CHATBOT_API_ENDPOINT) ||
  'https://dum-e-ai.vercel.app/api/agent/chat';

export function PortfolioChatbot({
  apiEndpoint = DEFAULT_ENDPOINT,
  position = 'bottom-right',
  initialOpen = false,
  initialGreeting,
}) {
  const {
    isOpen,
    isLoading,
    messages,
    sendMessage,
    toggleChat,
    clearHistory,
  } = usePortfolioChat({
    apiEndpoint,
    initialOpen,
    initialGreeting,
  });

  const positionClass = position === 'bottom-left' ? 'pc-pos-left' : '';

  return (
    <div className={`pc-widget-root ${positionClass}`}>
      {/* Expandable Chat Window */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => toggleChat(false)}
        messages={messages}
        isLoading={isLoading}
        onSendMessage={sendMessage}
        onClearHistory={clearHistory}
      />

      {/* Floating Action Button (FAB) */}
      <button
        type="button"
        className={`pc-fab ${isOpen ? 'pc-open' : ''}`}
        onClick={() => toggleChat()}
        aria-label={isOpen ? 'Close AI Chat' : 'Open Portfolio AI Chat'}
      >
        <span className="pc-status-badge">
          <span className="pc-status-ping"></span>
        </span>

        {isOpen ? (
          <svg className="pc-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg className="pc-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default PortfolioChatbot;
