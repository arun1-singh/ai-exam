// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation';
// import StepProgress from '../_components/StepProgress';
// import QuizCardItem from './_components/QuizCardItem'

// function Quiz() {
//     const {courseId}=useParams();
//     const [quizData,setQuizData]=useState();
//     const [stepCount,setStepCount]=useState(0);
//     const [quiz,setQuiz]=useState([]);
//     useEffect(()=>{
//     GetQuiz()
//     },[courseId])

//     const GetQuiz=async()=>{
//         console.log(courseId)
//         const result=await axios.post('/api/study-type',{
//         courseId:courseId,
//         studyType:'Quiz'

//         });

//         setQuizData(result.data);
//         setQuiz(result.data?.content?.questions)
//         console.log(result);
//     }
//   return (
//     <div>
//       <h2 className='font-bold text-2xl'>Quiz</h2>

//       <StepProgress data={quiz} stepCount={stepCount} setStepCount={(value)=>setStepCount(value)} />
//         <div>

//         {/* {quiz&&quiz.map((item,index)=>(
//             <QuizCardItem quiz={item} key={index} />
//         ))} */}
//         <QuizCardItem quiz={quiz[stepCount]} />

//     </div>
//     </div>
//   )
// }

// export default Quiz

// "use client"
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import StepProgress from '../_components/StepProgress';
// import QuizCardItem from './_components/QuizCardItem';

// function Quiz() {
//     const { courseId } = useParams();
//     const [quizData, setQuizData] = useState(); // Initialize to null
//     const [stepCount, setStepCount] = useState(0);
//     const [quiz, setQuiz] = useState([]); // Initialize to empty array
//     const [loading, setLoading] = useState(true);
//     const [isCorrectAns, setIsCorrectAnswer] = useState(null);
//     const [correctAns,setCorrectAns]=useState();

//     useEffect(() => {
//         GetQuiz();
//     }, [courseId]);

//     const GetQuiz = async () => {
//         console.log(courseId);
//         try {
//             const result = await axios.post('/api/study-type', {
//                 courseId: courseId,
//                 studyType: 'Quiz'
//             });

//             setQuizData(result.data);
//             setQuiz(result.data?.content?.questions || []); // Handle potential undefined
//             console.log(result);
//         } catch (error) {
//             console.error("Error fetching quiz:", error);
//             // Handle error, e.g., display an error message
//         } finally {
//             setLoading(false);
//         }
//     };

//     const checkAnswer = (userAnswer, currentQuestion) => {

//         console.log(currentQuestion?.answer, userAnswer);
//         if (userAnswer == currentQuestion?.answer) 
//         {
//             setIsCorrectAnswer(true);
//             setCorrectAns(currentQuestion?.answer)
//             return;
//         }

//         setIsCorrectAnswer(false);

//     }

//     useEffect(()=>{
//         setCorrectAns(null);
//         setCorrectAns(null);
//     },[stepCount])

//     // Conditional Rendering to prevent error
//     if (loading) {
//         return <div>Loading...</div>; // Or a loading indicator component
//     }

//     if (!quiz || quiz.length === 0) {
//         return <div>No quiz available.</div>; // Handle no quiz case
//     }
//     const handleNext = () => {
//         if (stepCount < quiz.length - 1) {
//             setStepCount(stepCount + 1);
//         }
//     }
//     const handlePrevious = () => {
//         if (stepCount > 0) {
//             setStepCount(stepCount - 1);
//         }
//     }

//     return (
//         <div>
//             <h2 className='font-bold text-2xl text-center mb-4'>Quiz</h2>

//             <StepProgress
//                 data={quiz}
//                 stepCount={stepCount}
//                 setStepCount={(value) => setStepCount(value)}
//             />

//             <div>
//                 {quiz[stepCount] && <QuizCardItem quiz={quiz[stepCount]}
//                     userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])}
//                 />} {/* Key check! */}
//             </div>
//             {isCorrectAns==false && <div>
//                 <h2>Incorrect</h2>
//                 <div className='border p-3 border-red-700 bg-red-200 rounded-lg'>
//                 <h2 className='font-bold text-lg text-red-600'>Incorrect</h2>
//                 <p className='text-red-600'>Correct Answer is : {correctAns}</p>
//                 </div>
//             </div>}
//             {/* {JSON.stringify(correctAns)} */}
//             {isCorrectAns==true && <div>
//                 <div className='border p-3 border-green-700 bg-green-200 rounded-lg'>
//                 <h2 className='font-bold text-lg text-green-600'>Correct</h2>
//                 <p className='text-green-600'>Your answer is Correct.</p>
//                 </div>
//             </div>}
//         </div>


// );
// }

// export default Quiz;

"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import StepProgress from '../_components/StepProgress';
import QuizCardItem from './_components/QuizCardItem';

function Quiz() {
    const { courseId } = useParams();
    const [quizData, setQuizData] = useState(); // Initialize to null
    const [stepCount, setStepCount] = useState(0);
    const [quiz, setQuiz] = useState([]); // Initialize to empty array
    const [loading, setLoading] = useState(true);
    const [isCorrectAns, setIsCorrectAnswer] = useState(null);
    const [correctAns, setCorrectAns] = useState();

    useEffect(() => {
        GetQuiz();
    }, [courseId]);

    const GetQuiz = async () => {
        console.log(courseId);
        try {
            const result = await axios.post('/api/study-type', {
                courseId: courseId,
                studyType: 'Quiz'
            });

            setQuizData(result.data);
            setQuiz(result.data?.content?.questions || []); // Handle potential undefined
            console.log(result);
        } catch (error) {
            console.error("Error fetching quiz:", error);
            // Handle error, e.g., display an error message
        } finally {
            setLoading(false);
        }
    };

    const checkAnswer = (userAnswer, currentQuestion) => {
        console.log("User Answer:", userAnswer);
        console.log("Correct Answer:", currentQuestion?.answer); // Log correct answer to check
        if (userAnswer == currentQuestion?.answer) {
            setIsCorrectAnswer(true);
            setCorrectAns(currentQuestion?.answer);  // Correct answer is being set here
            return;
        }

        setIsCorrectAnswer(false);
        setCorrectAns(currentQuestion?.answer); // Set correct answer when answer is incorrect
    }

    useEffect(() => {
        // Reset correct answer only if the step changes
        setCorrectAns(null);
    }, [stepCount]);

    // Conditional Rendering to prevent error
    if (loading) {
        return <div>Loading...</div>; // Or a loading indicator component
    }

    if (!quiz || quiz.length === 0) {
        return <div>No quiz available.</div>; // Handle no quiz case
    }

    const handleNext = () => {
        if (stepCount < quiz.length - 1) {
            setStepCount(stepCount + 1);
        }
    }

    const handlePrevious = () => {
        if (stepCount > 0) {
            setStepCount(stepCount - 1);
        }
    }

    return (
        <div>
            <h2 className='font-bold text-2xl text-center mb-4'>Quiz</h2>

            <StepProgress
                data={quiz}
                stepCount={stepCount}
                setStepCount={(value) => setStepCount(value)}
            />

            <div>
                {quiz[stepCount] && <QuizCardItem quiz={quiz[stepCount]}
                    userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])}
                />} {/* Key check! */}
            </div>

            {isCorrectAns === false && (
                <div>
                    <h2>Incorrect</h2>
                    <div className='border p-3 border-red-700 bg-red-200 rounded-lg'>
                        <h2 className='font-bold text-lg text-red-600'>Incorrect</h2>
                        <p className='text-red-600'>Correct Answer is : {correctAns}</p> {/* This will display correctAns properly */}
                    </div>
                </div>
            )}

            {isCorrectAns === true && (
                <div>
                    <div className='border p-3 border-green-700 bg-green-200 rounded-lg'>
                        <h2 className='font-bold text-lg text-green-600'>Correct</h2>
                        <p className='text-green-600'>Your answer is Correct.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
