import React from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Feedback = () => {
  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Feedback" icon={Star} />
      
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Rate Your Experience</h2>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className="p-3 hover:bg-emerald-900/30 rounded-lg transition-colors"
                >
                  <Star
                    size={24}
                    className="text-emerald-400"
                    fill={rating <= 3 ? 'currentColor' : 'none'}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Share Your Thoughts</h2>
            <textarea
              placeholder="Tell us what you think..."
              className="w-full h-32 bg-gray-700/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
              Submit Feedback
            </button>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Quick Reactions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-700/50 rounded-lg hover:bg-emerald-900/30 transition-colors">
                <ThumbsUp size={20} className="text-emerald-400" />
                <span>Helpful</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-700/50 rounded-lg hover:bg-emerald-900/30 transition-colors">
                <MessageSquare size={20} className="text-emerald-400" />
                <span>Suggest Feature</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;