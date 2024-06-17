// Button.js
import React from 'react';
// Components
import LoadingSpinner from '../utils/LoadingSpinner'

const ButtonComponent = ({ label, onClick, type, btnType, btnValue, href, loading }) => {
  let styles = '';

  let btnTypeSelected = btnType || '';
  let btnValueSelected = btnValue || label;

  switch (type) {
    case 'primary':
      styles =
        'bg-alt-colour text-white border-alt-colour hover:bg-opacity-90 hover:bg-white hover:purple-main-colour w-full sm:max-w-[350px] h-fit sm:px-1 lg:px-4 text-sm sm:text-base py-2 font-semibold border-2 border-solid rounded-lg duration-300 shadow-xl hover:shadow-2xl ';
      break;
    case 'secondary':
      styles =
        'bg-white purple-main-colour border-alt-colour hover:bg-alt-colour hover:text-white w-full sm:max-w-[350px] h-fit sm:px-1 lg:px-4 text-sm sm:text-base py-2 font-semibold border-2 border-solid rounded-lg duration-300 shadow-xl hover:shadow-2xl ';
      break;
    case 'selected':
      styles = 'bg-purple-main dark:bg-purple-dark text-white dark:text-dark-text-light px-4 py-2 hover:brightness-90';
      break;
    case 'unselected':
      styles =
        'px-4 py-2 hover:bg-purple-main hover:dark:bg-purple-dark hover:text-white dark:text-dark-text-light duration-300';
      break;
    case 'cancel':
      styles =
        'bg-red-500 text-white border-red-500 hover:bg-opacity-90 w-full sm:max-w-[350px] h-fit sm:px-1 lg:px-4 text-sm sm:text-base py-2 font-semibold border-2 border-solid rounded-lg duration-300 shadow-xl hover:shadow-2xl ';
      break;
    case 'submit':
      styles =
        'bg-alt-colour text-white border-alt-colour hover:bg-opacity-90 hover:bg-white hover:purple-main-colour w-full h-fit sm:px-1 lg:px-4 text-sm sm:text-base py-2 font-semibold border-2 border-solid rounded-lg duration-300 shadow-xl hover:shadow-2xl ';
      break;
    default:
      styles = '';
  }

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${styles}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${styles}`}
      type={btnTypeSelected}
      value={btnValueSelected}
      aria-label={label}
    >
      {loading ? <LoadingSpinner width={'w-[12px]'} height={'h-[12px]'} /> : <span>{label}</span> }
    </button>
  );
};

export default ButtonComponent;
