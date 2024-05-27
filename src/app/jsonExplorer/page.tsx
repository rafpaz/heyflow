import React from 'react';

import JsonNode from './JsonNode';

interface JsonExplorerProps {
  data: Record<string, unknown>;
  onKeyClick: (key: string, value: unknown) => void;
}

const JsonExplorer: React.FC<JsonExplorerProps> = ({ data, onKeyClick }) => {
  return (
    <div className="font-mono leading-6 p-4 bg-gray-100 border border-gray-300 rounded-md">
      <JsonNode data={data} parentKey="" onKeyClick={onKeyClick} />
    </div>
  );
};

export default JsonExplorer;
