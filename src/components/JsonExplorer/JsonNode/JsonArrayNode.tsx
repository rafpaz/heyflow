import React from 'react';

import JsonNode from './JsonNode';

interface JsonArrayNodeProps {
  data: unknown[];
  parentKey: string;
  onKeyClick: (key: string, value: string) => void;
}

const JsonArrayNode: React.FC<JsonArrayNodeProps> = ({
  data,
  parentKey,
  onKeyClick,
}) => {
  return (
    <>
      [
      <ul className='list-none pl-5 m-0'>
        {data.map((item, index) => (
          <li key={`${parentKey}[${index}]`} className='my-1'>
            <JsonNode
              data={item}
              parentKey={`${parentKey}[${index}]`}
              onKeyClick={onKeyClick}
            />
          </li>
        ))}
      </ul>
      ]
    </>
  );
};

export default JsonArrayNode;
