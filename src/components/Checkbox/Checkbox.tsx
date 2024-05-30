import React, { useState } from 'react';

import CheckmarkSvg from '@/components/Checkbox/CheckmarkSvg';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (['Enter', ' '].includes(e.key)) {
      setChecked(!checked);
    }
  };

  return (
    <label className='flex items-center justify-center cursor-pointer p-10'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
        className='sr-only'
      />
      <span
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={`w-5 h-5 flex items-center justify-center border-2 rounded transition-all ${
          checked ? 'bg-black' : 'bg-white border-gray-300'
        }`}
      >
        {checked && <CheckmarkSvg />}
      </span>
      <span className='ml-2 text-gray-700'>Custom Checkbox</span>
    </label>
  );
};

export default CustomCheckbox;
