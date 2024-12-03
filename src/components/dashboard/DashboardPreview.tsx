import React from 'react';
import { usePlatform } from '../../contexts/PlatformContext';
import { MetricsGrid } from './MetricsGrid';
import { ComplianceTests } from './ComplianceTests';

const metrics = {
  perplexity: {
    safetyScore: '97.8%',
    citationScore: '94.2%',
    improvement: '2.1%'
  },
  searchgpt: {
    safetyScore: '95.6%',
    citationScore: '92.8%',
    improvement: '1.8%'
  }
};

export function DashboardPreview() {
  const { platform } = usePlatform();
  const currentMetrics = metrics[platform];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Content Safety Score</h3>
        <select className="text-sm border-gray-200 rounded-lg">
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
      
      <MetricsGrid metrics={currentMetrics} />
      <ComplianceTests />
    </div>
  );
}