import React from 'react';

function Page2() {
  return (
    <div className="page2" id="page2" style={{ position: 'relative', width: '100%', height: '80vh' }}>
      {/* Background video */}
      <video autoPlay muted loop id="background-video-page2" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}>
        <source src="i5(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 1, color: 'white' }}>
        <h1 className='content2-head1 ' style={{letterSpacing: "1px"}}>THE NEW</h1>
        <h2 className='content2-head2'>BMW i5</h2>
        <h1 className='content2-head3'>CRAFTED SUPREMACY</h1>
      </div>
        <div className="buttons-container">
          <button className="configure-button">Configure & Price</button>
          <button className="know-more-button">Know More</button>
        </div>
      
    </div>
  );
}

export default Page2;
