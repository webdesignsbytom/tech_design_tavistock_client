import React from 'react';
// Images
import CatImage from '../../assets/images/pages/404-page-not-found-cat.png';
// Components
import Navbar from '../../components/nav/Navbar';


function Error404() {

  return (
    <div className='h-screen overflow-hidden grid bg-gray-50'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-reg'>
        <Navbar />
        <div className='font-poppins'>
          <main className='relative h-full w-full'>
            <section className='grid absolute w-full text-center h-full items-center justify-center z-10'>
              <section className='grid gap-2'>
                <article className='outline outline-2 font-semibold outline-black -mt-10 p-2 rounded'>
                  <h1 className='text-4xl'>
                    ERROR <span className='text-red-500'>404</span>
                  </h1>
                  <h2 className='text-4xl'>PAGE NOT FOUND</h2>
                </article>
                <article className='outline outline-2 font-semibold outline-black rounded'>
                  <h3>But you found a friend 💖</h3>
                </article>
              </section>
            </section>
            <section className='flex lg:justify-end lg:mr-20'>
              <img src={CatImage} alt='lost cat' loading='lazy' />
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Error404;
