import React from 'react';

function Hero() {
    return ( 
    <div className='container p-5'> 
       <div className='row text-center'>
           <img src='media/images/HomeHero.png'  alt="Hero Image" className="mb-5" />
           <h1 ClassName="mt-5">Invest in everything</h1>
           <p>Online platform to invest in stocks, derivatives,mutual funds, and more</p>
           <button 
                className="btn btn-primary fs-5 mb-5 px-4 py-1" 
                style={{ width: "20%", margin: "0 auto" }}
               >
             Signup Now
            </button>
        </div>
    </div>
);
}

export default Hero;