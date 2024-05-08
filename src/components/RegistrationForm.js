// src/components/RegisterForm.js

import React, { useState } from 'react';
import SuccessPage from './SuccessPage';
import banner from '../assets/Frame 1261155216.png'
import { Outlet, Link } from "react-router-dom";

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);


  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email validation
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setEmailError('Enter a valid email address');
    } else {
      // Submit form
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <SuccessPage/>
  }

  return (
    <>
   
    <div className="container mx-auto h-screen">
      <div className="flex justify-between mb-10">

      <Link class=" mb-4 md:mb-0" to="/">
    <img className="mx-6 p-2" src={banner} alt="" />
    </Link>
      <Link class="mx-6 p-2" to="/"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#CACACA"/>
<g clip-path="url(#clip0_11_215)">
<path d="M40 24L24 40" stroke="#0C1319" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 24L40 40" stroke="#0C1319" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11_215">
<rect width="32" height="32" fill="white" transform="translate(16 16)"/>
</clipPath>
</defs>
</svg>
</Link>
      </div>

      <p class="  sm:text-3xl mb-4 text-xl font-grace text-center text-green">
      Registration Form
        
        </p>
        <div className="sm:w-1/3 w-1/2 mx-auto text-center ">

      <h2 class=" sm:text-5xl text-3xl mb-10 sm:px-2 px-0 font-manrope  font-semibold text-gray-900">
      Start your success Journey here!
        
        </h2>
        </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-6">
          
          <input
            type="text"
            id="name"
            className="form-input  p-4 border bg-gray-100 rounded-3xl block w-full"
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          
          <input
            type="message"
            id="email"
            className={`form-input  p-4 border bg-gray-100 rounded-3xl block w-full ${emailError ? 'border-red-500' : ''}`}
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-md mx-2 mt-1">{emailError}</p>}
        </div>
        <button type="submit" className="bg-gray-200 text-white  px-4 py-4 w-full rounded-2xl hover:bg-black">Submit</button>
      </form>
    </div>
    <Outlet />
    </>
  );
}



export default RegistrationForm;
