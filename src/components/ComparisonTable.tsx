import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    name: 'Real-time Ad Monitoring',
    perplexity: true,
    searchGPT: true,
  },
  {
    name: 'Brand Safety Alerts',
    perplexity: true,
    searchGPT: true,
  },
  {
    name: 'AI-Powered Analytics',
    perplexity: true,
    searchGPT: true,
  },
  {
    name: 'Custom Safety Rules',
    perplexity: true,
    searchGPT: false,
  },
  {
    name: 'Multi-Channel Support',
    perplexity: true,
    searchGPT: false,
  },
  {
    name: 'Advanced ROI Tracking',
    perplexity: true,
    searchGPT: true,
  },
];

export function ComparisonTable() {
  return (
    <section className="py-20 bg-gray-50" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-gray-500">Features</th>
                <th className="px-6 py-4 text-center text-purple-600">Perplexity</th>
                <th className="px-6 py-4 text-center text-blue-600">SearchGPT</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="px-6 py-4 text-gray-900">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.perplexity && <Check className="w-5 h-5 text-purple-600 mx-auto" />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.searchGPT && <Check className="w-5 h-5 text-blue-600 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}