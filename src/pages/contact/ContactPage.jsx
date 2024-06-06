import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function ContactPage() {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <div className='grid w-full h-full overflow-y-scroll scroll-hidden'>
        {/* Header container */}
        <div className='grid grid-rows-reg h-screen w-full overflow-hidden bg-slate-50'>
          {/* Navigation */}
          <Navbar />
          ProjectsPage
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
