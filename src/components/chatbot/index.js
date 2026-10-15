import { PortfolioChatbot } from './components/PortfolioChatbot.jsx';
import { ChatWindow } from './components/ChatWindow.jsx';
import { MessageBubble } from './components/MessageBubble.jsx';
import { ProjectCard } from './components/ProjectCard.jsx';
import { QuickSuggestions } from './components/QuickSuggestions.jsx';
import { ThinkingIndicator } from './components/ThinkingIndicator.jsx';
import { DumeArmWidget } from './components/DumeArmWidget.jsx';
import { usePortfolioChat } from './hooks/usePortfolioChat.js';
import './styles/chatbot.css';

export {
  PortfolioChatbot,
  ChatWindow,
  MessageBubble,
  ProjectCard,
  QuickSuggestions,
  ThinkingIndicator,
  DumeArmWidget,
  usePortfolioChat,
};

export default {
  PortfolioChatbot,
  usePortfolioChat,
};

