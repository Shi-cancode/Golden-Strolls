// pages/AnimatedStories.js
import React from 'react';
import bookCover1 from '../assets/book-cover1.jpg'; // Path to the image
import bookCover2 from '../assets/book-cover2.jpg'; // Path to the image

const AnimatedStories = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Animated Stories</h1>
      <p className="mt-2">Engaging tales that bring the teachings of prophets to life through animation.</p>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center">
          <img src={bookCover1} alt="Book Title 1" className="w-24 h-auto mr-4" />
          <div>
            <h2 className="text-xl">Book Title 1</h2>
            <p>Brief description 1</p>
          </div>
        </li>
        <li className="flex items-center">
          <img src={bookCover2} alt="Book Title 2" className="w-24 h-auto mr-4" />
          <div>
            <h2 className="text-xl">Book Title 2</h2>
            <p>Brief description 2</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AnimatedStories;
