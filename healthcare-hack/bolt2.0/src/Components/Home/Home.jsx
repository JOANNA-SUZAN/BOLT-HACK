// import React from 'react';
// import './home.css';
// import physicalwellbeing from '../Resourses/doraemonfitness.jpg'

// const Home = () => {
//     return (
//         <div className="container">
//             <div className='header'>
//             <h1 className="website-name">HealthGURU</h1>
//             <h2 className="student-name">Angela Baruch</h2>
//             </div>
    
//             <h3 className="my-learning">My Learning</h3>
//             <div className="learning-options">
//                 <a href="physical_wellness.html" className="learning-button">
//                     <img src={physicalwellbeing} alt="Physical Wellness" />
//                     <p>Physical Wellness</p>
//                 </a>
//                 <a href="mental_wellness.html" className="learning-button">
//                     <img src="mental_wellness.jpg" alt="Mental Wellness" />
//                     <p>Mental Wellness</p>
//                 </a>
//                 <a href="physical_fitness.html" className="learning-button">
//                     <img src="physical_fitness.jpg" alt="Physical Fitness" />
//                     <p>Physical Fitness</p>
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './home.css';
import dowalking from '../Resourses/dobow.webp'

const App = () => {
  useEffect(() => {
    const typed = new Typed('.skillset', {
      strings: ["HealthGURU"],
      typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* <div className="navbar">
        <a href="#" className="logo">Portfolio.</a>
        <div className="tabs">
          <a href="./home.html" className="active">Home</a>
          <a href="./about.html">About</a>
          <a href="./skills.html">Skills</a>
          <a href="./projects.html">Projects</a>
          <a href="./contact.html">Contact</a>
        </div>
      </div> */}
      <div className="home-contents">
        <div className="home-about">
          <h3>Hello, It's Me</h3>
          {/* <h1>Joanna Suzan Biju</h1> */}
          <h1 className='header'><span className="skillset"></span></h1>
          <p>I'm your study mate on a mission to help you level up your health and wellness game. Dive into our app for expert-led lessons on nutrition, fitness, mindfulness, and self-care. Let's crush those health goals together and become the best version of ourselves!</p>
        </div>
        <div className="profile-image-box">
          <img src={dowalking} alt="profile-pic" className="profile-image"/>
        </div>
      </div>
    </div>
  );
}

export default App;
