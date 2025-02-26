// "use client"
// import { useParams, useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Button } from '@/components/ui/button';

// function ViewNotes() {

//   const {courseId}=useParams();
//   const [notes,setNotes]=useState();
//   const[stepCount,setStepCount]=useState(0);
//   const route=useRouter();
//   useEffect(()=>{
//     GetNotes();

//   },[])
//   const GetNotes=async()=>{
//     const result=await axios.post('/api/study-type',{
//       courseId:courseId,
//       studyType:'notes'
//     });
//     console.log(result?.data);
//     setNotes(result?.data);
//   }
//   return notes&&(
//     <div>
//     <div className='flex gap-5 items-center'>
//     {stepCount!=0&&  <Button variant="outline" size="sm" onClick={()=>setStepCount(stepCount-1)}>Previous</Button>}
//       {notes?.map((item,index)=>(
//         <div key={index} className={`w-full h-2 rounded-full
//         ${index<stepCount?'bg-blue-500':'bg-gray-200'}`}>
//             </div>
//       ))}
//       <Button variant="outline" size="sm" onClick={()=>setStepCount(stepCount+1)}>Next</Button>
//     </div>
//     <div className="mt-10">
//       <div dangerouslySetInnerHTML={{__html:(notes[stepCount]?.notes)?.replace('```html','') || "" ,}} />

//       {notes?.length==stepCount&&<div className='flex items-center gap-10 flex-col justify-center'>
//         <h2 className='font bold text-2xl'>End of Notes</h2>
//         <Button onClick={()=>route.back()}>Go to Course Page</Button>
//         </div>}
//     </div>
//     </div>
//     )
//   }

// export default ViewNotes

"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from '@/components/ui/button';

function ViewNotes() {

  const { courseId } = useParams();
  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const route = useRouter();

  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
    const result = await axios.post('/api/study-type', {
      courseId: courseId,
      studyType: 'notes'
    });
    console.log(result?.data);
    setNotes(result?.data);
  };

  const handleNext = () => {
    if (stepCount < notes.length - 1) {
      setStepCount(stepCount + 1);
    }
  };

  const handlePrevious = () => {
    if (stepCount > 0) {
      setStepCount(stepCount - 1);
    }
  };

  // if (!notes.length) {
  //   return (
  //     <div className='flex flex-col items-center justify-center'>
  //       <h2 className='font-bold text-2xl'>End of Notes</h2>
  //       <Button onClick={() => route.back()}>Go to Course Page</Button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className='flex gap-5 items-center'>
        {stepCount > 0 && (
          <Button variant="outline" size="sm" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        
        {notes?.map((item, index) => (
          <div key={index} className={`w-full h-2 rounded-full
            ${index <= stepCount ? 'bg-blue-500' : 'bg-gray-200'}`}
          />
        ))}
        
        {stepCount < notes.length - 1 && (
          <Button variant="outline" size="sm" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
      
      <div className="mt-10">
        <div dangerouslySetInnerHTML={{
          __html: (notes[stepCount]?.notes)?.replace('```html', '') 
        }} />
        
        {stepCount === notes.length - 1 && (
          <div className='flex items-center gap-10 flex-col justify-center'>
            <h2 className='font-bold text-2xl'>End of Notes!!!</h2>
            <Button  onClick={() => route.push('/dashboard')}>Go to Course Page</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewNotes;


