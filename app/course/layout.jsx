import React from 'react';
import DashboardHeader from '../dashboard/_components/DashboardHeader';
import Image from 'next/image';

function CourseViewLayout({ children }) {
  return (
    <div>
     <Image src='/logo.svg' alt='logo' width={40} height={40} />
     <h2 className='font-bold text-2xl'>Easy Study</h2>
      <DashboardHeader/>
      

      <div className='mx-10 md:mx-36 lg:px-60 mt-10'>
        {children}
      </div>
    </div>
  );
}

export default CourseViewLayout;
