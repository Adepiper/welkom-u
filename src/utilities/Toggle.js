import React from 'react';

const Toggle = () => {
  return (
    <div className='toggle'>
      <button type='button'>
        <div className='sr-only'>Main Menu</div>
        <div className='icon-bar my-2'></div>
        <div className='icon-bar my-2'></div>
        <div className='icon-bar my-2'></div>
      </button>
    </div>
  );
};

export default Toggle;
