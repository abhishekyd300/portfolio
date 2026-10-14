import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard.jsx';

/**
 * Parses inline markdown tokens:
 * - Bold (**text**) -> <strong>text</strong>
 * - Italic (*text*) -> <em>text</em>
 * - Code (`code`) -> <code>code</code>
 * - Links ([text](url)) -> <a>text ↗</a>
 * - Strips any orphaned/unmatched ** so raw asterisks never appear.
 */
export function parseInline(text, keyPrefix = '') {
  if (!text) return null;

  const regex = /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|`[^`]+`|\*\*[^*]+\*\*|(?<!\*)\*[^*]+\*(?!\*)|https?:\/\/[^\s<]+)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const rawSlice = text.substring(lastIndex, match.index);
      const cleanSlice = rawSlice.replace(/\*\*/g, '');
      if (cleanSlice) parts.push(cleanSlice);
    }

    const token = match[0];
    const key = `${keyPrefix}-${match.index}`;

    if (token.startsWith('**') && token.endsWith('**')) {
      const inner = token.substring(2, token.length - 2).trim();
      parts.push(
        <strong key={key} className="pc-strong">
          {inner}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      const inner = token.substring(1, token.length - 1);
      parts.push(
        <code key={key} className="pc-inline-code">
          {inner}
        </code>
      );
    } else if (token.startsWith('[') && token.includes('](')) {
      const labelMatch = token.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
      if (labelMatch) {
        parts.push(
          <a
            key={key}
            href={labelMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-md-link"
          >
            {labelMatch[1]} <span style={{ fontSize: '10px' }}>↗</span>
          </a>
        );
      } else {
        parts.push(token);
      }
    } else if (token.startsWith('http://') || token.startsWith('https://')) {
      parts.push(
        <a
          key={key}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-md-link"
        >
          {token} <span style={{ fontSize: '10px' }}>↗</span>
        </a>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      const inner = token.substring(1, token.length - 1).trim();
      parts.push(<em key={key}>{inner}</em>);
    } else {
      parts.push(token.replace(/\*\*/g, ''));
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    const rawEnd = text.substring(lastIndex).replace(/\*\*/g, '');
    if (rawEnd) parts.push(rawEnd);
  }

  return parts;
}

/**
 * Extracts and formats contact confirmation drafts into structured data.
 */
export function extractContactDraft(text) {
  if (!text) return null;

  const isContactDraft =
    (text.includes('contact request for Abhishek') ||
      text.includes('prepared your contact request') ||
      text.includes('draft for Abhishek') ||
      text.includes('send this message to Abhishek')) &&
    /Name\*{0,2}\s*:/i.test(text) &&
    /Email\*{0,2}\s*:/i.test(text);

  if (!isContactDraft) return null;

  const nameMatch = text.match(/(?:[\*\•\-]\s*)?\*{0,2}Name\*{0,2}\s*:\s*([^\n\r]+)/i);
  const emailMatch = text.match(/(?:[\*\•\-]\s*)?\*{0,2}Email\*{0,2}\s*:\s*([^\n\r]+)/i);
  const msgMatch = text.match(/(?:[\*\•\-]\s*)?\*{0,2}Message\*{0,2}\s*:\s*([^\n\r]+)/i);

  if (!nameMatch || !emailMatch) return null;

  const name = nameMatch[1].replace(/[*"`]/g, '').trim();
  const email = emailMatch[1].replace(/[*"`]/g, '').trim();
  const message = msgMatch ? msgMatch[1].replace(/^["']|["']$/g, '').replace(/[*`]/g, '').trim() : '';

  const introLines = [];
  const followUpLines = [];
  let foundFields = false;

  const lines = text.split('\n');
  for (const line of lines) {
    const isFieldLine =
      /(?:Name|Email|Message)\*{0,2}\s*:/i.test(line) ||
      (line.trim().startsWith('*') && /(?:Name|Email|Message)/i.test(line));

    if (isFieldLine) {
      foundFields = true;
      continue;
    }

    if (!foundFields) {
      if (line.trim().length > 0) introLines.push(line.trim());
    } else {
      if (line.trim().length > 0) followUpLines.push(line.trim());
    }
  }

  return {
    name,
    email,
    message,
    intro: introLines.join(' '),
    followUp: followUpLines.join(' '),
  };
}

/**
 * Rich markdown block renderer converting plain text into modern UI blocks.
 */
export function renderFormattedContent(text) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let currentList = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <div key={`list-${elements.length}`} className="pc-list-wrap">
          {currentList.map((item, idx) => (
            <div key={idx} className="pc-list-item">
              {item.type === 'bullet' ? (
                <span className="pc-bullet">✦</span>
              ) : (
                <span className="pc-num-badge">{item.num}</span>
              )}
              <div className="pc-list-content">{parseInline(item.text, `li-${elements.length}-${idx}`)}</div>
            </div>
          ))}
        </div>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      elements.push(<div key={`sp-${i}`} className="pc-spacer" />);
      continue;
    }

    // Heading: ### or ## or #
    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      elements.push(
        <h4 key={`h-${i}`} className="pc-content-heading">
          {parseInline(headingMatch[2], `h-${i}`)}
        </h4>
      );
      continue;
    }

    // Numbered list: 1. or 2.
    const numMatch = trimmed.match(/^(\d+)[\.\)]\s+(.+)$/);
    if (numMatch) {
      currentList.push({ type: 'numbered', num: numMatch[1], text: numMatch[2] });
      continue;
    }

    // Bullet list: * or - or + or •
    const bulletMatch = trimmed.match(/^[\*\-\+•]\s+(.+)$/);
    if (bulletMatch) {
      currentList.push({ type: 'bullet', text: bulletMatch[1] });
      continue;
    }

    // Regular paragraph line
    flushList();
    elements.push(
      <p key={`p-${i}`} className="pc-text-p">
        {parseInline(rawLine, `p-${i}`)}
      </p>
    );
  }

  flushList();
  return elements;
}

/**
 * Dedicated Glassmorphic Contact Draft Review Card.
 */
export function ContactDraftCard({ draft, onAction }) {
  return (
    <div className="pc-contact-card">
      <div className="pc-contact-card-header">
        <div className="pc-contact-card-badge">
          <span className="pc-pulse-dot"></span>
          <span>Contact Request Draft</span>
        </div>
        <span className="pc-contact-card-to">To: Abhishek Yadav</span>
      </div>

      <div className="pc-contact-card-body">
        <div className="pc-contact-field">
          <span className="pc-contact-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Sender
          </span>
          <span className="pc-contact-val pc-contact-bold">{draft.name}</span>
        </div>

        <div className="pc-contact-field">
          <span className="pc-contact-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </span>
          <span className="pc-contact-val pc-contact-email">{draft.email}</span>
        </div>

        {draft.message && (
          <div className="pc-contact-field pc-contact-col">
            <span className="pc-contact-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Message
            </span>
            <div className="pc-contact-quote">&ldquo;{draft.message}&rdquo;</div>
          </div>
        )}
      </div>

      <div className="pc-contact-actions">
        <button
          type="button"
          className="pc-hitl-btn pc-hitl-confirm"
          onClick={() => onAction && onAction('Yes, please send it to Abhishek!')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Confirm & Send
        </button>
        <button
          type="button"
          className="pc-hitl-btn pc-hitl-cancel"
          onClick={() => onAction && onAction('No, cancel it')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Cancel
        </button>
      </div>
    </div>
  );
}

/**
 * Copy to clipboard button with animated feedback.
 */
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const clean = (text || '').replace(/\*\*/g, '').trim();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(clean).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      type="button"
      className="pc-copy-btn"
      onClick={handleCopy}
      title={copied ? 'Copied to clipboard!' : 'Copy response'}
    >
      {copied ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

/**
 * Enhanced Message Bubble Component.
 */
export function MessageBubble({ message, onAction }) {
  const isUser = message.role === 'user';
  const draft = !isUser ? extractContactDraft(message.content) : null;
  const isSentSuccess =
    !isUser &&
    message.content &&
    (message.content.includes('successfully sent to Abhishek') ||
      message.content.includes('Your message has been saved'));

  const timeString = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : '';

  const hasConfirmationPrompt =
    !isUser &&
    !draft &&
    message.content &&
    (message.content.includes('Would you like me to send this message') ||
      message.content.includes('Please confirm'));

  return (
    <div className={`pc-msg-wrap ${isUser ? 'pc-msg-user' : 'pc-msg-assistant'}`}>
      {!isUser && (
        <div className="pc-msg-header-bar">
          <span className="pc-asst-label">
            <span className="pc-sparkle">✦</span> DUM-E
          </span>
          <CopyButton text={message.content} />
        </div>
      )}

      <div className="pc-bubble">
        {draft ? (
          <div>
            {draft.intro && <p className="pc-text-p">{parseInline(draft.intro, 'intro')}</p>}
            <ContactDraftCard draft={draft} onAction={onAction} />
            {draft.followUp && !draft.followUp.includes('Would you like me to send') && (
              <p className="pc-text-p" style={{ marginTop: '10px' }}>
                {parseInline(draft.followUp, 'followup')}
              </p>
            )}
          </div>
        ) : (
          renderFormattedContent(message.content)
        )}

        {isSentSuccess && (
          <div className="pc-success-card">
            <div className="pc-success-badge">
              <span className="pc-success-check">✔</span>
              <span>Delivered directly to Abhishek</span>
            </div>
          </div>
        )}

        {hasConfirmationPrompt && !draft && (
          <div className="pc-hitl-actions">
            <button
              type="button"
              className="pc-hitl-btn pc-hitl-confirm"
              onClick={() => onAction && onAction('Yes, please send it to Abhishek!')}
            >
              ✔ Confirm & Send
            </button>
            <button
              type="button"
              className="pc-hitl-btn pc-hitl-cancel"
              onClick={() => onAction && onAction('No, cancel it')}
            >
              ✖ Cancel
            </button>
          </div>
        )}

        {Array.isArray(message.projects) && message.projects.length > 0 && (
          <div className="pc-projects-list">
            {message.projects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} />
            ))}
          </div>
        )}

        {Array.isArray(message.sources) && message.sources.length > 0 && (
          <div className="pc-sources-wrap">
            {message.sources.map((s, idx) => (
              <span key={idx} className="pc-source-chip" title={s.title}>
                📄 {s.source}
              </span>
            ))}
          </div>
        )}
      </div>

      {timeString && <span className="pc-msg-meta">{timeString}</span>}
    </div>
  );
}

export default MessageBubble;
