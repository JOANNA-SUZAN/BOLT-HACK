import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import PhyFitnes from './Components/PhyWellbeing/PhyWellbeing'; 
// import Home from './Home';
// import PhysicalWellness from './PhysicalWellness';
// import MentalWellness from './MentalWellness';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            {/* <Route path='/' element={<Home color={darkmode ? "white" : "#252525"} />} />
            <Route path='/about-us' element={<AboutUs color={darkmode ? "white" : "#252525"} />} />
            <Route path='/projects' element={<Projects color={darkmode ? "white" : "#252525"} />} />
            <Route path='/events' element={<Events color={darkmode ? "white" : "#252525"} />} />
            <Route path='/timeline' element={<Timeline darkmode={darkmode} />} />

            <Route path='/sponsors' element={<Sponsors color={darkmode ? "white" : "#252525"} />} /> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/PhyWellbeing' element={<PhyFitnes/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
