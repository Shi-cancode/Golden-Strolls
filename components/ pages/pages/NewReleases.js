// pages/NewReleases.js
import React from 'react';
import newReleaseCover1 from '../assets/new-release-cover1.jpg'; // Path to the image
import newReleaseCover2 from '../assets/new-release-cover2.jpg'; // Path to the image

const NewReleases = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">New Releases</h1>
      <p className="mt-2">Rediscovered Gems - Books that were unpublished during the author's lifetime but have been released posthumously.</p>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center">
          <img src={newReleaseCover1} alt="The Garden of Wisdom" className
