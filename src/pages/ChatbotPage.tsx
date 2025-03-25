import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI legal assistant. How can I help you with your legal questions today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    // Simulate bot response
    const botMessage: Message = {
      type: 'bot',
      content: 'I understand your query about legal matters. As an AI assistant, I can provide general information, but please consult with a qualified legal professional for specific legal advice.',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-900 p-4 text-white">
            <h1 className="text-xl font-semibold">Legal AI Assistant</h1>
            <p className="text-sm text-blue-100">Ask any legal questions about civil cases</p>
          </div>

          {/* Chat Messages */}
          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 rounded-full p-2 ${
                  message.type === 'user' ? 'bg-blue-900' : 'bg-gray-200'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-blue-900" />
                  )}
                </div>
                <div className={`flex flex-col ${
                  message.type === 'user' ? 'items-end' : 'items-start'
                }`}>
                  <div className={`rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your legal question..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Send</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}