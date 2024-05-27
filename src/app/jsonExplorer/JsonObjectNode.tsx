import React from 'react';

import JsonNode from './JsonNode';

interface JsonObjectNodeProps {
  data: object;
  parentKey: string;
  onKeyClick: (key: string, value: unknown) => void;
}

const JsonObjectNode: React.FC<JsonObjectNodeProps> = ({ data, parentKey, onKeyClick }) => {
  return (
    <>
      {'{'}<ul className="list-none pl-5 m-0">
        {Object.entries(data).map(([key, value]) => {
          const compositeKey = parentKey ? `${parentKey}.${key}` : key;
          return (
            <li key={compositeKey} className="my-1">
              <span
                className="text-blue-600 cursor-pointer font-bold hover:underline"
                onClick={() => onKeyClick(compositeKey, value)}
              >
                {key}
              </span>
              : <JsonNode data={value} parentKey={compositeKey} onKeyClick={onKeyClick} />
            </li>
          );
        })}
      </ul>{'}'}
    </>
  );
};

export default JsonObjectNode;
