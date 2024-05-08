import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import banner from '../assets/Frame 1261155216.png'
import tick from '../assets/tick.png'
function SuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      redirectToHomePage();
    }, 5000);

    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const redirectToHomePage = () => {
    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <>
  <Link class=" mb-4 md:mb-0" to="/">
    <img className="mx-6 p-2" src={banner} alt="" />
    </Link>
    <div className="container  mt-20 mx-auto ">
      
    <img className="mx-auto mb-4 p-2" src={tick} alt="" />
      <p class="  sm:text-3xl mb-4 text-xl font-grace text-center text-green">
      Success Submitted
        
        </p>
        <div className="sm:w-1/3 w-1/2 mx-auto text-center ">

      <h2 class=" sm:text-5xl text-3xl mb-8 sm:px-2 px-0 font-manrope  font-semibold text-gray-900">
      Congratulations
        
        </h2>
        <p className='text-lg font-manrope text-gray-500'>
        Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
        </p>
        </div>
     
      <p className="text-lg font-manrope text-gray-500 text-center mt-40">Redirecting you to Homepage in  <span className='font-bold'> {countdown} seconds...</span></p>
    </div>
    
    </>
  );
}

export default SuccessPage;
