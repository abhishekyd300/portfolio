import { useState, useEffect, useCallback } from 'react';

const DEFAULT_GREETING =
  "Hello! I am Abhishek's Portfolio AI Assistant. I can answer questions about Abhishek's projects, technical skills, background, or help you send him a message. How can I help you today?";

/**
 * Custom React hook managing portfolio AI conversation state, API requests,
 * and session persistence.
 *
 * @param {Object} [config]
 * @param {string} [config.apiEndpoint='/api/agent/chat'] - URL of the AI Agent chat endpoint.
 * @param {string} [config.initialGreeting] - Welcome message from the assistant.
 * @param {boolean} [config.initialOpen=false] - Whether the modal starts opened.
 */
const DEFAULT_ENDPOINT =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CHATBOT_API_ENDPOINT) ||
  'https://dum-e-ai.vercel.app/api/agent/chat';

export function usePortfolioChat(config = {}) {
  const apiEndpoint = config.apiEndpoint || DEFAULT_ENDPOINT;
  const greeting = config.initialGreeting || DEFAULT_GREETING;

  const [isOpen, setIsOpen] = useState(Boolean(config.initialOpen));
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'msg_welcome',
      role: 'assistant',
      content: greeting,
      timestamp: Date.now(),
      sources: [],
      projects: [],
    },
  ]);

  // Initialize or retrieve persistent sessionId
  useEffect(() => {
    try {
      let storedId = window.sessionStorage?.getItem('portfolio_ai_session_id');
      if (!storedId) {
        storedId = 'sess_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
        window.sessionStorage?.setItem('portfolio_ai_session_id', storedId);
      }
      setSessionId(storedId);
    } catch {
      // Fallback in environments where sessionStorage is unavailable
      setSessionId('sess_fallback_' + Date.now());
    }
  }, []);

  const toggleChat = useCallback((forceState) => {
    setIsOpen((prev) => (typeof forceState === 'boolean' ? forceState : !prev));
  }, []);

  const clearHistory = useCallback(() => {
    try {
      const newId = 'sess_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
      window.sessionStorage?.setItem('portfolio_ai_session_id', newId);
      setSessionId(newId);
    } catch {
      setSessionId('sess_' + Date.now());
    }

    setMessages([
      {
        id: 'msg_' + Date.now(),
        role: 'assistant',
        content: greeting,
        timestamp: Date.now(),
        sources: [],
        projects: [],
      },
    ]);
  }, [greeting]);

  const sendMessage = useCallback(
    async (text) => {
      if (!text || typeof text !== 'string' || text.trim().length === 0 || isLoading) {
        return;
      }

      const cleanText = text.trim();
      const userMsgId = 'msg_user_' + Date.now();

      // 1. Append user message optimistically
      setMessages((prev) => [
        ...prev,
        {
          id: userMsgId,
          role: 'user',
          content: cleanText,
          timestamp: Date.now(),
        },
      ]);

      setIsLoading(true);

      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: cleanText,
            sessionId: sessionId || undefined,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || `Server responded with status ${response.status}`);
        }

        const data = await response.json();

        // 2. Append assistant response with structured artifacts
        setMessages((prev) => [
          ...prev,
          {
            id: 'msg_asst_' + Date.now(),
            role: 'assistant',
            content: data.message || "I've processed your inquiry.",
            timestamp: Date.now(),
            sources: data.sources || [],
            projects: data.projects || [],
            toolCalls: data.toolCalls || [],
          },
        ]);
      } catch (err) {
        console.error('[Portfolio Chatbot Error]:', err);
        setMessages((prev) => [
          ...prev,
          {
            id: 'msg_err_' + Date.now(),
            role: 'assistant',
            content: `⚠️ Sorry, I encountered an issue connecting to the portfolio assistant: ${err.message}`,
            timestamp: Date.now(),
            isError: true,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [apiEndpoint, sessionId, isLoading]
  );

  return {
    isOpen,
    isLoading,
    sessionId,
    messages,
    sendMessage,
    toggleChat,
    clearHistory,
  };
}

export default usePortfolioChat;
