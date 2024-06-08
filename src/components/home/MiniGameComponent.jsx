import React, { useEffect, useRef } from 'react';

function MiniGameComponent() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas height
    const width = window.innerWidth;
    const height = window.innerHeight - 32;
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = 'green'

    // Set tiles to build from center
    const originX = width / 2;
    const originY = height / 2;

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    contextRef.current = context;
  }, []);


  return (
    <section
      id='minigames'
      ref={sectionRef}
      className='grid relative h-screen w-full overflow-hidden'
    >
      <div className='grid w-full h-full bg-slate-50 overflow-hidden items-center'>
        <div className='grid w-full h-[90%] overflow-hidden bg-slate-800'>
          {/* Main content */}
          <div className='grid grid-cols-reg w-full h-full overflow-hidden'>
            {/* Text - Left side */}
            <section className='grid bg-red-400 items-center justify-center w-full h-full p-10'>
              <div className='bg-white'>text</div>
            </section>

            {/* Game - right side */}
            <section>
              <div>
                <canvas ref={canvasRef} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiniGameComponent;
