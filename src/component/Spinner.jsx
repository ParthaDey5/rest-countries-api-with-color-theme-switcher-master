import React from 'react'

function Spinner() {
    // Spinner component
const Spinner = () => (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-8 w-8 text-customBlue-900 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
  
  return (
    <>
      <Spinner/>    
    </>
  )
}

export default Spinner