import React from 'react';
import { Bot, Sparkles, MessageSquare, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex-1 overflow-auto p-4 pb-24">
      <div className="flex items-center justify-center mb-8 pt-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
          <Bot size={64} className="text-emerald-400 relative z-10 animate-glow" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-2 animate-slide-up">VivoBot</h1>
      <p className="text-emerald-400 text-center mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>Your AI Assistant</p>

      <div className="grid gap-4">
        <div className="bg-gray-800/50 p-4 rounded-xl border border-emerald-800/30 hover-scale animate-scale-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="text-emerald-400" size={20} />
            Popular Topics
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {['Writing Help', 'Code Review', 'Math Tutor', 'Language Learning'].map((topic, index) => (
              <button
                key={topic}
                className="p-3 bg-gray-700/30 rounded-lg text-sm hover:bg-emerald-900/30 transition-all hover:scale-105"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-xl border border-emerald-800/30 hover-scale animate-scale-in" style={{animationDelay: '0.4s'}}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="text-emerald-400" size={20} />
            Quick Start
          </h2>
          <div className="space-y-2">
            {[
              'How can you help me today?',
              'Tell me about your features',
              'Start a coding project',
              'Help me learn something new'
            ].map((suggestion, index) => (
              <button
                key={suggestion}
                className="w-full p-3 text-left bg-gray-700/30 rounded-lg text-sm hover:bg-emerald-900/30 transition-all hover:scale-105"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 p-4 rounded-xl border border-emerald-400/30 hover-scale animate-scale-in" style={{animationDelay: '0.6s'}}>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Zap className="text-emerald-400" size={20} />
            Premium Features
          </h2>
          <p className="text-sm text-emerald-200/80 mb-3">
            Unlock advanced capabilities with our premium plan
          </p>
          <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;