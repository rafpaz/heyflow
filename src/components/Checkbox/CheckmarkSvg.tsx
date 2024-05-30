import React from 'react';

const CheckmarkSvg: React.FC = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
      <rect width='256' height='256' fill='none'></rect>
      <polyline
        points='216 72.005 104 184 48 128.005'
        fill='none'
        stroke='white'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      ></polyline>
    </svg>
  );
};

export default CheckmarkSvg;
