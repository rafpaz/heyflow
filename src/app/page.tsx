'use client';

import * as React from 'react';
import '@/lib/env';

import JsonExplorer from '@/app/jsonExplorer/page';
import { sampleData } from '@/app/jsonExplorer/sampleData';

const App = () => {
  const handleKeyClick = (key: string, value: unknown) => {
    alert(`Key: ${key}\nValue: ${JSON.stringify(value, null, 2)}`);
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">JSON Data Display</h1>
      <JsonExplorer data={sampleData} onKeyClick={handleKeyClick} />
    </div>
  );
}

export default App;
