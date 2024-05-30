'use client';

import * as React from 'react';
import '@/lib/env';

import JsonExplorer from '@/app/JsonExplorer/page';

const App = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>JSON Data Display</h1>
      <JsonExplorer />
    </div>
  );
};

export default App;
