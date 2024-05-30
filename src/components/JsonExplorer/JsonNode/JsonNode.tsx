import React from 'react';

import JsonArrayNode from '@/components/JsonExplorer/JsonNode/JsonArrayNode';
import JsonObjectNode from '@/components/JsonExplorer/JsonNode/JsonObjectNode';
import JsonValueNode from '@/components/JsonExplorer/JsonNode/JsonValueNode';

interface JsonNodeProps {
  data: unknown;
  parentKey: string;
  onKeyClick: (key: string, value: string) => void;
}

const JsonNode: React.FC<JsonNodeProps> = ({ data, parentKey, onKeyClick }) => {
  if (Array.isArray(data)) {
    return (
      <JsonArrayNode
        data={data}
        parentKey={parentKey}
        onKeyClick={onKeyClick}
      />
    );
  } else if (typeof data === 'object' && data !== null) {
    return (
      <JsonObjectNode
        data={data}
        parentKey={parentKey}
        onKeyClick={onKeyClick}
      />
    );
  } else {
    return <JsonValueNode data={data} />;
  }
};

export default JsonNode;
