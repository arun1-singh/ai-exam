// import { Button } from '@/components/ui/button'

// import React from 'react'

// function StepProgress({ stepCount, setStepCount, data }) {
//     return (
//         <div className='flex gap-5 items-center'>
//             {stepCount != 0 && <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount - 1)}>Previous</Button>}
//             {data?.map((item, index) => (
//                 <div key={index} className={`w-full h-2 rounded-full
//                     ${index < stepCount ? 'bg-blue-500' : 'bg-gray-200'}`}>
//                 </div>
//             ))}

//             <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount + 1)}>Next</Button>
//         </div>

//     )
// }
// export default StepProgress

import { Button } from '@/components/ui/button'

import React from 'react'

function StepProgress({ stepCount, setStepCount, data }) {
    // Check if the user is at the last step
    const isAtEnd = stepCount === data?.length - 1;

    return (
        <div className='flex gap-5 items-center'>
            {/* Only show Previous button if stepCount > 0 */}
            {stepCount > 0 && (
                <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount - 1)}>
                    Previous
                </Button>
            )}
            
            {/* Render progress steps */}
            {data?.map((item, index) => (
                <div
                    key={index}
                    className={`w-full h-2 rounded-full
                    ${index < stepCount ? 'bg-blue-500' : 'bg-gray-200'}`}
                />
            ))}

            {/* Only show Next button if not at the end */}
            {!isAtEnd && (
                <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setStepCount(stepCount + 1)}
                >
                    Next
                </Button>
            )}
        </div>
    );
}

export default StepProgress;
