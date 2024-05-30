import React from 'react';

interface JsonValueNodeProps {
  data: unknown;
}

const JsonValueNode: React.FC<JsonValueNodeProps> = ({ data }) => {
  return <span className='text-gray-800'>{String(data)},</span>;
};

export default JsonValueNode;
