import React from 'react';

function Home() {
  return (
    <div className="content">
      <h2 className='head1'>THE FIRST FULLY ELECTRIC</h2>
      <h1 className='head2'>BMW i5</h1>
      <h3 className='head3'>CHARGE AHEAD.XCEED.</h3>
      <div className="button-container">
       <button 
  style={{
    backgroundColor: '#1C68D4',
    height: "60px",
    width: "300px",
    borderRadius: '5px',
    fontWeight: "bold",
    transition: 'background-color 0.3s' // Add transition for smooth effect
  }}
  onMouseOver={e => e.target.style.backgroundColor = '#1652A2'} // Change color on hover
  onMouseOut={e => e.target.style.backgroundColor = '#1C68D4'} // Revert color on mouse out
>
  Discover now
</button>


      </div>


   
</div>



  );
}

export default Home;
