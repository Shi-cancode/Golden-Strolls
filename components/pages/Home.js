// pages/Home.js
import React from 'react';
import featuredBookCover from '../assets/featured-book-cover.jpg'; // Path to the image

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to the author's website!</h1>
      <p className="mt-2 text-lg">This website features a collection of books and stories that inspire and educate.</p>
      <section className="mt-4">
        <h2 className="text-2xl">Featured Book</h2>
        <img src={featuredBookCover} alt="Birds Gonna Be Happy" className="mt-2 w-48 h-auto rounded" />
        <p className="mt-1">"Birds Gonna Be Happy" - An inspiring tale about finding happiness in the simplest things.</p>
      </section>
    </div>
  );
};

export default Home;
