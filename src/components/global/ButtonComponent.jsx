// Button.js
import React from 'react';

const ButtonComponent = ({ label, onClick, type }) => {
  let styles = "";

  switch(type) {
    case 'primary':
      styles = 'bg-alt-colour text-white border-alt-colour hover:bg-opacity-90 hover:bg-white hover:text-alt-colour';
      break;
    case 'secondary':
      styles = 'bg-white text-alt-colour border-alt-colour hover:bg-alt-colour hover:text-white';
      break;
    case 'cancel':
      styles = 'bg-red-500 text-white border-red-500 hover:bg-opacity-90';
      break;
    default:
      styles = 'bg-gray-200 text-black border-gray-200 hover:bg-opacity-90';
  }

  return (
    <button
      onClick={onClick}
      className={`w-full sm:max-w-[350px] h-fit sm:px-1 lg:px-4 text-sm sm:text-base py-2 font-semibold border-2 border-solid rounded-lg duration-300 shadow-xl hover:shadow-2xl ${styles}`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
