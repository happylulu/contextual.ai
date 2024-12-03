import React from 'react';
import { BarChart3, Shield, Brain, Eye, Zap, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze ad performance in real-time.'
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    title: 'Brand Safety',
    description: 'Protect your brand with automated content screening and placement verification.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    title: 'Performance Metrics',
    description: 'Comprehensive analytics and insights to optimize your ad campaigns.'
  },
  {
    icon: <Eye className="w-6 h-6 text-purple-600" />,
    title: 'Content Monitoring',
    description: 'Real-time monitoring of ad placements and content context.'
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    title: 'Instant Alerts',
    description: 'Immediate notifications for potential brand safety violations.'
  },
  {
    icon: <LineChart className="w-6 h-6 text-purple-600" />,
    title: 'ROI Tracking',
    description: 'Track and measure the return on your advertising investments.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to optimize and protect your ad campaigns</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}