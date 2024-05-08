import React from 'react'
import union from "../assets/Union.png"

const Questions = () => {
  return (
    <>
    <section class= " w-[95%]  mx-auto rounded-3xl  bg-ques ">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-12 lg:mb-0 rounded-lg overflow-hidden">
    <p class="  sm:text-3xl  text-md font-grace  mx-10 text-gray-400">
               Whats on your mind
        
        </p>
        <h2 class=" sm:text-5xl text-2xl mx-16  sm:px-2 px-0 font-manrope  font-semibold text-gray-900">
                 Ask Questions
        
        </h2>
      <img alt="feature" class="object-cover object-center mt-8 h-5/6 w-[60%]" src={union}/>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      
      <div class="flex   flex-col mb-10 lg:items-start items-center"> 
        <div class="flex items-center w-[85%] justify-between ">
          <h2 class="text-gray-900  text-lg title-font font-medium mb-3">Do you offer freelancers?</h2>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black"/>
</svg>
        </div>
        <div class="border-b-2 w-[85%] h-0.5 bg-gray-400 "></div>
      </div>

      <div class="flex flex-col mb-10 lg:items-start items-center">  
      <div class="flex items-center  justify-between ">
          <h2 class="text-gray-900  w-[72%] text-lg title-font font-medium mb-3">What’s the guarantee that I will be satisfied
with the hired talent?</h2>
<svg width="14" height="14" viewBox="0 0 14 14" className='mx-2' fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black"/>
</svg>
        </div>
        <div class="border-b-2 w-[87%] h-0.5 bg-gray-400 "></div>
      </div>


      <div class="flex mb-10 lg:items-start items-center">
      <div class="flex flex-col  w-[83%] justify-between ">
          <h2 class="text-gray-900  text-lg  font-medium mb-3">Can I hire multiple talents at once?</h2>
          <h2 class="text-gray-900  text-xs  mb-3">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</h2>
          <div class="border-b-2 w-[100%] h-0.5 bg-gray-400 "></div>
        </div>
        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V2H14V0H0Z" fill="black"/>
</svg>
        
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
      <div class="flex items-center w-[85%] justify-between ">
          <h2 class="text-gray-900  text-lg title-font font-medium mb-3">Why should I not go to an agency directly?</h2>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black"/>
</svg>
        </div>
        <div class="border-b-2 w-[85%] h-0.5 bg-gray-400 "></div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
      <div class="flex items-center w-[85%] justify-between ">
          <h2 class="text-gray-900  text-lg title-font font-medium mb-3">Who can help me pick a right skillset
and duration for me?</h2>
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black"/>
</svg>
        </div>
        <div class="border-b-2 w-[85%] h-0.5 bg-gray-400 "></div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Questions
