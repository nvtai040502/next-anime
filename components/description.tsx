"use client"
import { useState } from 'react';

export const Description = ({ text }: {text: string}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Product Description</h1>
      <div className="mt-4">
        
        <p 
          dangerouslySetInnerHTML={{ __html: text }}
          className={`${showFullText ? '' : ' line-clamp-4'}`}>
        
        </p>
        <button
          onClick={toggleText}
          className="text-blue-500 mt-2 focus:outline-none"
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};