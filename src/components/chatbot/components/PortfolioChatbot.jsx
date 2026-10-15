import React from 'react';
import { usePortfolioChat } from '../hooks/usePortfolioChat.js';
import { ChatWindow } from './ChatWindow.jsx';
import { DumeArmWidget } from './DumeArmWidget.jsx';
import '../styles/chatbot.css';

/**
 * PortfolioChatbot Root Component.
 * Drop-in floating action 3D DUM-E robot arm widget and chat modal for React portfolios.
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

      {/* 3D DUM-E Interactive Robot Arm Chatbot Launcher */}
      <DumeArmWidget
        isOpen={isOpen}
        onToggle={() => toggleChat()}
        position={position}
      />
    </div>
  );
}

export default PortfolioChatbot;
