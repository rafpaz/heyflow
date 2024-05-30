'use client';
import React, { useState } from 'react';

import JsonExplorerInput from '@/components/JsonExplorer/JsonExplorerInput/JsonExplorerInput';
import JsonNode from '@/components/JsonExplorer/JsonNode/JsonNode';

interface JsonExplorerProps {
  data: Record<string, unknown>;
}

const JsonExplorer: React.FC<JsonExplorerProps> = ({ data }) => {
  const [jsonKey, setJsonKey] = useState('');
  const [value, setValue] = useState('');

  const handleKeyClick = (key: string, value: string) => {
    setJsonKey(key);
    setValue(value);
  };
  return (
    <div className='font-mono p-4'>
      <JsonExplorerInput
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
