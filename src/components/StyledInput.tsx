import React from 'react';

interface StyledInputProps {
  jsonKey: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput: React.FC<StyledInputProps> = ({
  jsonKey,
  value,
  handleChange,
}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor='name' className='mb-2 text-gray-700 text-sm'>
        Property
      </label>
      <input
        type='text'
        data-testid='styledInput'
        id='name'
        value={jsonKey}
        onChange={handleChange}
        className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
      />

      <label
        htmlFor='name'
        className='my-8 text-gray-700 text-sm'
        data-testid='styledInputLabel'
      >
        {value}
      </label>
    </div>
  );
};

export default StyledInput;
