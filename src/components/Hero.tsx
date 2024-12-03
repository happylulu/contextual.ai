import React from 'react';
import { ArrowRight, ShieldCheck, LineChart } from 'lucide-react';
import { usePlatform } from '../contexts/PlatformContext';
import { DashboardPreview } from './dashboard/DashboardPreview';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const { platform } = usePlatform();

  return (
    <div className="pt-24 pb-16 dashboard-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="transition-opacity duration-500">
                {platform === 'perplexity' ? 'Perplexity' : 'SearchGPT'} AI Ad Performance
              </span>
              <span className="block text-indigo-600">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600">
              Monitor and optimize your ad performance with real-time AI-powered analytics and brand safety monitoring.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={onGetStarted}
                className="group bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
              >
                <span>Get Started with Contextual</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 pt-4">
              <div className="flex items-center space-x-2">
                <LineChart className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-600">Performance Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-600">Brand Safety Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </div>
  );
}