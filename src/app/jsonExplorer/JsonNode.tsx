import React from 'react';

import JsonArrayNode from '@/app/jsonExplorer/JsonArrayNode';
import JsonObjectNode from '@/app/jsonExplorer/JsonObjectNode';
import JsonValueNode from '@/app/jsonExplorer/JsonValueNode';


interface JsonNodeProps {
  data: unknown;
  parentKey: string;
  onKeyClick: (key: string, value: unknown) => void;
}

const JsonNode: React.FC<JsonNodeProps> = ({ data, parentKey, onKeyClick }) => {
  if (Array.isArray(data)) {
    return <JsonArrayNode data={data} parentKey={parentKey} onKeyClick={onKeyClick} />;
  } else if (typeof data === 'object' && data !== null) {
    return <JsonObjectNode data={data} parentKey={parentKey} onKeyClick={onKeyClick} />;
  } else {
    return <JsonValueNode data={data} />;
  }
};

 

export default JsonNode;
