import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function QuizCardItem({quiz,userSelectedOption}) {
    const [SelectedOption,setSelectedOption]=useState();
    
  return quiz&&(
    <div className='mt-10 p-5'>
     <h2 className='font-medium text-3xl text-center'>{quiz?.question}</h2>

      <div className='grid grid-cols-2 gap-5 mt-6'>
        {quiz?.options.map((option,index)=>(
        <h2
        onClick={()=>{setSelectedOption(option);
            userSelectedOption(option)
        }} 
        key={index} 
        variant="outline"
        className={`w-full border rounded-full p-3 px-4 text-center text-lg hover:bg-gray-200 cursor-pointer
        ${SelectedOption==option&&'bg-blue-500 text-white hover:bg-blue-500'}`}
        >{option}</h2>
        ))}
       
      </div>
    </div>
  )
}

export default QuizCardItem
