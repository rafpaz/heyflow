'use client';
import React, { useState } from 'react';

import JsonNode from '@/components/JsonNode/JsonNode';
import StyledInput from '@/components/StyledInput';

import { data } from './sampleData';

const JsonExplorer: React.FC = () => {
  const [jsonKey, setJsonKey] = useState('');
  const [value, setValue] = useState('');

  const handleKeyClick = (key: string, value: string) => {
    setJsonKey(key);
    setValue(value);
  };
  return (
    <div className='font-mono p-4'>
      <StyledInput
        jsonKey={jsonKey}
        setJsonKey={setJsonKey}
        value={value}
        setValue={setValue}
        data={data}
      />
      <div className='leading-6 p-4 bg-gray-100 border border-gray-300 rounded-md'>
        <JsonNode data={data} parentKey='' onKeyClick={handleKeyClick} />
      </div>
    </div>
  );
};

export default JsonExplorer;
