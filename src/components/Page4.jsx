import React from 'react';

const Page4 = () => {
  return (
    <div className="page4-container">
      <div className="page4-image" style={{ position: 'relative' }}>
        <img
          src="bmw2(1).jpg"
          alt="Image"
          className="page4-img"
        />
        <div className="page4-content">
          <h2 style={{ fontSize: '14px', color: 'gray', marginBottom: '10px', fontFamily: 'Roboto', letterSpacing: '1px', position: 'absolute', top: '0', left: '720px',whiteSpace: 'nowrap' }}>BMW ELECTRIFIED</h2>
          <h1 style={{ fontSize: '40px',color:"black", marginBottom: '0', fontFamily: 'poppins', fontWeight: '300', position: 'absolute', top: '30px', left: '720px',whiteSpace: 'nowrap'  }}>THE JOY OF ELECTRIC </h1>
          <h1 style={{ fontSize: '40px', color:"black",marginTop: '10px', fontFamily: 'poppins', fontWeight: '300', position: 'absolute', top: '90px', left: '720px',whiteSpace: 'nowrap' }}>DRIVING</h1>
          <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px', fontFamily: 'Roboto', position: 'absolute', top: '160px', left: '720px',whiteSpace: 'nowrap' }}>
            100 % electric. 100 % driving pleasure. 100 % BMW. Experience an entirely new sensation
          </p>
          <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px', fontFamily: 'Roboto', position: 'absolute', top: '180px', left: '720px',whiteSpace: 'nowrap' }}> of sheer driving pleasure.</p>
          <button className="page4-button" style={{ position: 'absolute', top: '390px', left: '650px' }}>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
