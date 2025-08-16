import React from 'react';

const Button = ({ styles, text, handleSave, type = 'button', disabled = false }) => (
  <button
    type={type}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${disabled ? 'opacity-70 cursor-not-allowed' : ''} ${styles}`}
    onClick={handleSave}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
