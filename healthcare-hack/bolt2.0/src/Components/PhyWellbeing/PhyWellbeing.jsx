import React, { useState } from 'react';
import './phywellbeing.css';
import testvideo from '../Resourses/testvideo.mp4'
import VideoProcessor from '../VideoProcessor/VideoProcessor';

const PhyFitnes = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }

  return (
    <div className="phyfitnes-container">
      <div className="video-container">
        {/* <video className="video" controls>
          <source src={testvideo} type="video/mp4" />
        </video>
        {showDescription && (
          <div className="description-box">
            <p>Description about the video goes here...</p>
          </div>
        )}
        <button className="see-more" onClick={toggleDescription}>See More</button> */}
        <VideoProcessor/>
      </div>
      {/* <button className="next-module">Next Module</button>
      <button className="fitness-button">Fitness</button> */}
    </div>
  );
}

export default PhyFitnes;
