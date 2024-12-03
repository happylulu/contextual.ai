import React from 'react';
import { Brain, Search, ArrowRight, Check } from 'lucide-react';

interface PlatformCardsProps {
  onTryPlatform: (platform: 'perplexity' | 'searchgpt') => void;
}

export function PlatformCards({ onTryPlatform }: PlatformCardsProps) {
  return (
    <section className="py-20 bg-white" id="platforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">Perplexity AI</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Advanced AI-powered platform with comprehensive brand safety features and multi-channel support.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-purple-600" />
                <span>Custom safety rules engine</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-purple-600" />
                <span>Multi-channel monitoring</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-purple-600" />
                <span>Advanced analytics dashboard</span>
              </li>
            </ul>
            <button 
              onClick={() => onTryPlatform('perplexity')}
              className="group bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <span>Try Perplexity</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="flex items-center space-x-3 mb-6">
              <Search className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">SearchGPT</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Streamlined solution focusing on essential brand safety and performance monitoring features.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Real-time monitoring</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Basic safety alerts</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Performance tracking</span>
              </li>
            </ul>
            <button 
              onClick={() => onTryPlatform('searchgpt')}
              className="group bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Try SearchGPT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}