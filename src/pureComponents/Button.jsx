import React from 'react';

const Button = ({ styles, text, handleSave, type = 'button' }) => (
  <button
    type={type}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    onClick={handleSave}
  >
    {text}
  </button>
);

export default Button;
