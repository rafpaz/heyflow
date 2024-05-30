import React from 'react';

import { getValueByPath } from '@/__helpers__/getValueByPath';

interface StyledInputProps {
  jsonKey: string;
  setJsonKey: (key: string) => void;
  value: string;
  setValue: (value: string) => void;
  data: Record<string, unknown>;
}

const StyledInput: React.FC<StyledInputProps> = ({
  jsonKey,
  setJsonKey,
  value,
  setValue,
  data,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJsonKey(e.target.value);
    const extractedValue = getValueByPath(data, e.target.value);
    setValue(
      isPresentableValue(extractedValue)
        ? extractedValue.toString()
        : 'undefined'
    );
  };

  return (
    <div className='flex flex-col'>
      <label htmlFor='name' className='mb-2 text-gray-700 text-sm'>
        Property
      </label>
      <input
        type='text'
        id='name'
        value={jsonKey}
        onChange={handleChange}
        className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
      />

      <label htmlFor='name' className='my-8 text-gray-700 text-sm'>
        {value}
      </label>
    </div>
  );
};

const isPresentableValue = (
  value: unknown
): value is number | string | boolean =>
  ['string', 'number', 'boolean'].includes(typeof value);

export default StyledInput;
