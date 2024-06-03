import React from 'react';
import { MdElectricCar } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { BiSolidCarMechanic } from "react-icons/bi";

// Import the background image
import carBackgroundImage from '../assets/bmw.webp';

function Page3() {
  return (
    <div className="page3">
      <div className="shopping-tools">
        <h3 style={{ color: 'gray', fontSize: "17px", fontFamily: "roboto", letterSpacing: "1.5px" }}>SHOPPING TOOLS</h3>

        <h1 style={{ color: 'black', fontFamily: "Poppins", fontSize: "45px", fontWeight: "300" }}>FIND YOUR BMW</h1>
        <div className="car-icons">
          <div className="icon-container">
            <MdElectricCar />
            <button>Search now</button>
          </div>
          <div className="icon-container">
            <IoCarSport />
            <button>Request a test drive</button>
          </div>
          <div className="icon-container">
            <BiSolidCarMechanic />
            <button>Configure & Price</button>
          </div>
        </div>
      </div>
      {/* Background image of the car */}
      <div className="car-background" style={{ position: 'relative', backgroundImage: `url(${carBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', width: '100%' }}>
        {/* This is Forwardism heading */}
        <h1 className="forwardism-heading" style={{ position: 'absolute', top: '220px', left: '60px', color: 'white', fontFamily: "Poppins", fontSize: "45px", fontWeight: "300", zIndex: 1 }}>THIS IS FORWARDISM</h1>
        {/* The 7 heading */}
        <h1 className="the-7-heading" style={{ position: 'absolute', top: '280px', left: '60px', color: 'white', fontFamily: "Poppins", fontSize: "45px", fontWeight: "300", zIndex: 1 }}>THE 7</h1>
        {/* Explore More button */}
        <button className="explore-button" style={{ position: 'absolute', bottom: '70px', left: '60px', backgroundColor: 'transparent', color: 'white', border: '2px solid white',  padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer', zIndex: 1 ,width:"280px" ,height:"50px",borderRadius:"none"}}>Know more</button>
      </div>
    </div>
  );
}

export default Page3;
