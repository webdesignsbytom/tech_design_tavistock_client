import React, { useEffect, useRef, useState } from 'react';

function TestPage() {
  const [currentID, setCurrentID] = useState(1);
  const [part2, setPart2] = useState();

  console.log('currentID', currentID);

  useEffect(() => {

  }, []);

  const handleScroll = (event) => {
    console.log('event', event.target.id);
  };
  
  return (
    <div className='grid'>
      <div id='1' onFocus={handleScroll} className='bg-blue-400 grid h-screen w-full'>
        1
      </div>
      <div id='2' onLoad={handleScroll} className='bg-red-400 grid h-screen w-full'>
        2
      </div>
      <div onFocus={handleScroll} id='3' className='bg-blue-400 grid h-screen w-full'>
        3
      </div>
      <div id='4' onFocusCapture={handleScroll} className='bg-red-400 grid h-screen w-full'>
        4
      </div>
      <div id='5' onLoadStartCapture={handleScroll} className='bg-blue-400 grid h-screen w-full'>
        5
      </div>
      <div id='6' onMouseEnter={handleScroll} className='bg-red-400 grid h-screen w-full'>
        6
      </div>
      <div id='7' onPointerEnter={handleScroll} className='bg-blue-400 grid h-screen w-full'>
        7
      </div>
      <div id='8' onPointerOver={handleScroll} className='bg-blue-400 grid h-screen w-full'>
        8
      </div>
      <div id='9' onScrollCapture={handleScroll} className='bg-blue-400 grid h-screen w-full'>
        9
      </div>
      <div id='10' onScroll={handleScroll} className='bg-blue-400 grid h-screen w-full'>
        10
      </div>
    </div>
  );
}

export default TestPage;
