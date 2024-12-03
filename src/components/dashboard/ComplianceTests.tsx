import React from 'react';

export function ComplianceTests() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Non-Compliance Tests</span>
          <span className="text-xs text-gray-500">Updated 15:45:00</span>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Query Classification</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">pass</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Content Policy</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">warning</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Source Verification</span>
            <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">fail</span>
          </div>
        </div>
      </div>
    </div>
  );
}