// import React from 'react';
// import { BookOpen, ArrowRight, Video, Code } from 'lucide-react';


// function App() {
// return (
// <div className="min-h-screen bg-white">
// {/* Navigation */}
// <nav className="py-4 px-6 flex justify-between items-center border-b">
// <div className="flex items-center gap-2">
// <BookOpen className="w-6 h-6 text-blue-600" />
// <span className="text-xl font-bold">Easy Study</span>
// </div>
// <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
// Dashboard
// </button>
// </nav>


//   {/* New Apps Banner */}
//   <div className="flex justify-center mt-8">
//     <a href="#" className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
//       <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">New</span>
//     For Instant Prep
//       <ArrowRight className="w-4 h-4" />
//     </a>
//   </div>

//   {/* Hero Section */}
//   <main className="max-w-6xl mx-auto px-6 mt-16 text-center">
//     <div className="flex justify-center gap-16">
//       <img 
//         src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=150&h=150&fit=crop"
//         alt="Books and pencils"
//         className="w-32 h-32 object-cover"
//       />
//       <div className="flex-1">
//         <h1 className="text-5xl font-bold mb-4">
//           <span className="text-black">AI-Powered </span>
//           <span className="text-blue-600">Exam Prep</span>
//           <br />
//           <span className="text-black">Material Generator</span>
//         </h1>
//         <p className="text-gray-600 text-xl mb-8">
//           Your AI Exam Prep Companion: Effortless Study Material at Your Fingertips
//         </p>
//         <div className="flex gap-4 justify-center">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
//             Get Started <ArrowRight className="w-5 h-5" />
//           </button>
//           <button className="bg-white text-gray-800 px-6 py-3 rounded-lg border hover:bg-gray-50 transition flex items-center gap-2">
//             <Video className="w-5 h-5" /> Watch video
//           </button>
//         </div>
//       </div>
//       <Code className="w-32 h-32 text-blue-600" />
//     </div>


//   </main>
// </div>
// );
// }

// export default App;

"use client"
import React from 'react';
import { BookOpen, ArrowRight, Video, Code } from 'lucide-react';
import { useRouter } from 'next/navigation';  // Import Next.js router
import { useUser } from '@clerk/clerk-react';  // Import Clerk's useUser hook

function App() {
  const router = useRouter();  // Next.js router for navigation
  const { isSignedIn } = useUser();  // Check if the user is signed in

  // Handle the "Get Started" button click
  const handleGetStartedClick = () => {
    if (isSignedIn) {
      // If the user is signed in, redirect to the dashboard
      router.push('/dashboard');
    } else {
      // If the user is not signed in, redirect to the sign-in page
      router.push('/sign-in');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-4 px-6 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold">Easy Study</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Dashboard
        </button>
      </nav>

      {/* New Apps Banner */}
      <div className="flex justify-center mt-8">
        <a href="#" className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">New</span>
          For Instant Prep
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 mt-16 text-center">
        <div className="flex justify-center gap-16">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=150&h=150&fit=crop"
            alt="Books and pencils"
            className="w-32 h-32 object-cover"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-black">AI-Powered </span>
              <span className="text-blue-600">Exam Prep</span>
              <br />
              <span className="text-black">Material Generator</span>
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              Your AI Exam Prep Companion: Effortless Study Material at Your Fingertips
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleGetStartedClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg border hover:bg-gray-50 transition flex items-center gap-2">
                <Video className="w-5 h-5" /> Watch video
              </button>
            </div>
          </div>
          <Code className="w-32 h-32 text-blue-600" />
        </div>
      </main>
    </div>
  );
}

export default App;
