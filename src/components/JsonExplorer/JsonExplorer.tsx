'use client';
import React, { useState } from 'react';

import { JsonExplorerContext } from '@/components/JsonExplorer/JsonExplorerContext';
import JsonExplorerInput from '@/components/JsonExplorer/JsonExplorerInput/JsonExplorerInput';
import JsonNode from '@/components/JsonExplorer/JsonNode/JsonNode';

interface JsonExplorerProps {
  jsonData: Record<string, unknown>;
}

const JsonExplorer: React.FC<JsonExplorerProps> = ({ jsonData }) => {
  const [jsonKey, setJsonKey] = useState('');
  const [value, setValue] = useState('');

  const handleKeyClick = (key: string, value: string) => {
    setJsonKey(key);
    setValue(value);
  };

  return (
    <JsonExplorerContext.Provider value={{ jsonData }}>
      <div className='font-mono p-4'>
        <JsonExplorerInput
          jsonKey={jsonKey}
          setJsonKey={setJsonKey}
          value={value}
          setValue={setValue}
        />
        <div className='leading-6 p-4 bg-gray-100 border border-gray-300 rounded-md'>
          <JsonNode data={jsonData} parentKey='' onKeyClick={handleKeyClick} />
        </div>
      </div>
    </JsonExplorerContext.Provider>
  );
};

export default JsonExplorer;
