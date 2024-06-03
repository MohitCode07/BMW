import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css'; // Correct import path for CSS file
import Page2 from './components/Page2';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Page2/>

      <video autoPlay muted loop id="background-video">
        <source src="i5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

   
  );
}

export default App;
