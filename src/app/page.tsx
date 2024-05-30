'use client';

import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

const App = () => {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
      <h1 className='text-2xl font-bold mb-4'>Heyflow Task</h1>
      <div className='flex flex-col items-start'>
        <Link href='/jsonExplorer' className='text-blue-500 hover:underline'>
          1. JSON Explorer
        </Link>
        <Link href='/customCheckbox' className='text-blue-500 hover:underline'>
          2. Custom Checkbox
        </Link>
      </div>
    </div>
  );
};

export default App;
