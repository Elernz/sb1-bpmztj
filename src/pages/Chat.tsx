import React, { useState } from 'react';
import { Send, Bot, User, Settings } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'I understand your message. How can I help you further?' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-emerald-800/30 p-4 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="text-emerald-400" size={24} />
            <h1 className="text-lg font-semibold">Chat with VivoBot</h1>
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-all hover:scale-110">
            <Settings size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 animate-scale-in ${
              message.type === 'user' ? 'flex-row-reverse' : ''
            }`}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className={`p-2 rounded-full transition-all hover:scale-110 ${
              message.type === 'user' ? 'bg-emerald-500' : 'bg-gray-700'
            }`}>
              {message.type === 'user' ? (
                <User size={16} />
              ) : (
                <Bot size={16} />
              )}
            </div>
            <div className={`p-3 rounded-lg max-w-[80%] transition-all hover:scale-105 ${
              message.type === 'user'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-800'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 p-4 bg-gray-900/95 backdrop-blur-sm border-t border-emerald-800/30 animate-slide-up">
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all hover:scale-110"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;