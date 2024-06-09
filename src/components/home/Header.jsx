import React from 'react';
import HeaderTitle from './HeaderTitle';

function Header() {
  return (
    <div className='bg-red-500 grid h-full min-h-screen'>
      <header className='grid grid-rows-reg md:grid-rows-none md:grid-cols-2'>
        <section className='relative min-h-[200px] grid w-full h-full bg-purple-500'>
          <HeaderTitle />
        </section>
        <section className='bg-orange-500 grid w-full h-full'>hiii</section>
      </header>
    </div>
  );
}

export default Header;
