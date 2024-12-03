import React from 'react';

interface MetricsGridProps {
  metrics: {
    safetyScore: string;
    citationScore: string;
    improvement: string;
  };
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="stat-card">
        <div className="text-sm text-gray-600 mb-2">Safety Score</div>
        <div className="metric-value transition-all duration-500">
          {metrics.safetyScore}
        </div>
        <div className="text-sm text-green-600 mt-2 flex items-center">
          <span>↑ {metrics.improvement}</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="text-sm text-gray-600 mb-2">Citation Analysis</div>
        <div className="metric-value transition-all duration-500">
          {metrics.citationScore}
        </div>
        <div className="text-sm text-gray-600 mt-2">Verified sources</div>
      </div>
    </div>
  );
}