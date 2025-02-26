 "use client"
 import { SignIn } from '@clerk/nextjs'


// export default function Page() {
//   return (
//   <div className='flex items-center justify-center h-screen'>
//   <SignIn />
//   </div>
//   )
// }

import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // For navigation

const SignInPage = () => {
  const { user, isSignedIn } = useUser();  // Access the user and signed-in status
  const router = useRouter(); // Next.js router to handle navigation

  useEffect(() => {
    // If the user is signed in, navigate to the dashboard
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]); // Run this effect whenever sign-in state changes

  return (
    <div>
      {/* Your sign-in form or Clerk's sign-in component here */}
      <SignIn/>
      {/* You can render Clerk's SignInForm component here */}
    </div>
  );
};

export default SignInPage;
