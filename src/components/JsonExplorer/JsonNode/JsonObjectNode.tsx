import React from 'react';

import { isPresentableValue } from '@/components/JsonExplorer/__helpers__/isPresentableValue';

import JsonNode from './JsonNode';

interface JsonObjectNodeProps {
  data: object;
  parentKey: string;
  onKeyClick: (key: string, value: string) => void;
}

const JsonObjectNode: React.FC<JsonObjectNodeProps> = ({
  data,
  parentKey,
  onKeyClick,
}) => {
  return (
    <>
      {'{'}
      <ul className='list-none pl-5 m-0'>
        {Object.entries(data).map(([key, value]) => {
          const compositeKey = parentKey ? `${parentKey}.${key}` : key;
          return (
            <li key={compositeKey} className='my-1'>
              <span
                className={`${
                  isPresentableValue(value)
                    ? 'text-blue-600 cursor-pointer hover:underline'
                    : 'text-black-400'
                }`}
                onClick={() => {
                  if (!isPresentableValue(value)) return;
                  onKeyClick(
                    compositeKey,
                    JSON.stringify(value).replace(/^"(.*)"$/g, '$1')
                  );
                }}
              >
                {key}
              </span>
              :{' '}
              <JsonNode
                data={value}
                parentKey={compositeKey}
                onKeyClick={onKeyClick}
              />
            </li>
          );
        })}
      </ul>
      {'}'}
    </>
  );
};

export default JsonObjectNode;
