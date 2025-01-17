import React, { useState } from 'react';
// Components
import ReviewItem from './ReviewItem';
// Data
import { reviewsDataArray } from '../../utils/ReviewsDataUtil';

function ReviewsComponent() {
  const [allReviews] = useState(reviewsDataArray);

  return (
    <section className='bg-alt-colour dark:bg-dark-alt-colour rounded mt-4 mb-10 lg:my-20 mx-4 lg:mx-10 px-1'>
      <div className='flex justify-center text-center text-xl py-1'>
        <h3 className='max-w-lg my-6 font-sans text-3xl font-bold leading-none tracking-tight text-white dark:text-dark-text-light sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 right-0 z-0 w-32 -mr-2 -mt-8 text-yellow-500 lg:w-32 lg:-ml-28 lg:-mt-10'
            >
              <defs>
                <pattern
                  id='bd1bde-4a23-49f7-bf27-ca140852cf21'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='1' />
                </pattern>
              </defs>
              <rect
                fill='url(#bd1bde-4a23-49f7-bf27-ca140852cf21)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Reviews and Recommendations</span>
          </span>
        </h3>
      </div>
      <section className='grid'>
          <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:justify-center my-4 mx-4'>
            {allReviews.map((review, index) => {
              return <ReviewItem key={index} review={review} />;
            })}
          </ul>
      </section>
    </section>
  );
}

export default ReviewsComponent;
