import React from 'react';

function ReviewItem({ review }) {
  const { desc, imageUrl, url } = review;

  return (
    <li>
      <article className='grid bg-white border-2 text-sm lg:text-base shadow-lg border-black border-solid p-1 rounded w-full'>
        <div className='grid justify-center md:flex md:justify-between w-full'>
          <div className='flex gap-1 justify-center w-full'>⭐⭐⭐⭐⭐</div>
        </div>
        <article className='flex justify-center my-4'>
          <a href={url} target='_blank' rel='noreferrer'>
            <img
              className='h-20 w-20 rounded-full shadow-lg'
              src={imageUrl}
              alt='Componay logo for review'
            />
          </a>
        </article>
        <article className='grid text-center justify-center '>
          <h4 className='text-hyperlink-blue text-ss md:text-base'>
            <a href={url} rel='noreferrer' target='_blank'>
              {url}
            </a>
          </h4>
          <p className='text-xs md:text-base md:leading-5 dark:text-gray-100'>
            {desc}
          </p>
        </article>
      </article>
    </li>
  );
}

export default ReviewItem;