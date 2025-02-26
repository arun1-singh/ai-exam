import React from 'react'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'

function CourseIntroCard({course}) {
  return (
    <div className='flex gap-5 items-center p-10 border shadow-md rounded'>
      <Image src={'/knowledge.png'} alt='other'  height={70} width={70}/>
      <div>
      <h2 className='font-bold text-2xl'>{course?.courseLayout.courseTitle}</h2>
     <p>{course?.courseLayout?.courseSummary}</p>
     <Progress className="mt-3"/>
     <h2 className='mt-3 text-lg text-blue-500'>Total Chapters: {course?.courseLayout?.chapters?.length}</h2>
    </div>
    </div>
  )
}

export default CourseIntroCard