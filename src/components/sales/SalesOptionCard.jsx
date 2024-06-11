import React from 'react';

function SalesOptionCard({ type }) {
  return (
    <section>
      <section
        title={type.label}
        className={`rounded-xl bg-white max-w-[280px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] active:scale-95 cursor-pointer duration-200 `}
      >
        <div className='p-6'>
          <img src={type.image} alt='' />
        </div>
      </section>
    </section>
  );
}

export default SalesOptionCard;
