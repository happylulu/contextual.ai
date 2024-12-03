import React, { createContext, useContext, useState, useEffect } from 'react';

type Platform = 'perplexity' | 'searchgpt';

interface PlatformContextType {
  platform: Platform;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export function PlatformProvider({ children }: { children: React.ReactNode }) {
  const [platform, setPlatform] = useState<Platform>('perplexity');

  useEffect(() => {
    const interval = setInterval(() => {
      setPlatform(prev => prev === 'perplexity' ? 'searchgpt' : 'perplexity');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PlatformContext.Provider value={{ platform }}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (context === undefined) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
}