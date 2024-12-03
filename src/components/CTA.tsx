import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onGetStarted: () => void;
}

export function CTA({ onGetStarted }: CTAProps) {
  return (
    <section className="bg-gradient-cta py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Transform Your Ad Performance?
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          Join leading brands using Contextual to optimize their ad campaigns and ensure brand safety.
        </p>
        <button 
          onClick={onGetStarted}
          className="group bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center space-x-2"
        >
          <span>Get Started with Contextual</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}