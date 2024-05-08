import Layout from "./Layout";
import img1 from "../assets/image 32618.png"
import vector from "../assets/Vector.png"
import Questions from "./Questions";
import Footer from "./Footer";

const Home = () => {
    return (
    
        <>
       
        
        <Layout/>
        
      <section class="text-gray-600 w-4/5 mx-auto h-screen  body-font">

      <p class="  sm:text-3xl  text-xl font-grace text-center text-green">
               success stories
        
        </p>
        <div className="w-1/2 mx-auto text-center ">

      <h2 class=" sm:text-5xl text-2xl mb-4 sm:px-2 px-0 font-manrope  font-semibold text-gray-900">
Every success journey we’ve encountered.
        
        </h2>
        </div>
  <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
   
    <div class="lg:max-w-lg lg:w-full static md:w-1/2 w-full  mb-10 md:mb-0">
       <div className="border-black shadow-xl text-gray-800  rounded-3xl absolute  sm:inset-x-[6%] inset-x-[2%] sm:p-3 p-2   sm:py-10 py-6 sm:my-28 my-10 sm:w-[12%] w-[35%]  bg-white flex flex-col">
        
 
        <h1 className="sm:text-5xl text-2xl font-semibold p-2  "> 40% </h1>
        <p className="sm:text-xs text-xs ">Achieved reduction in project execution time by optimising team availability</p>
        
      </div>
       <div className="border-black shadow-xl text-gray-800 bottom-0 sm:my-10 my-[52%] rounded-3xl absolute   sm:inset-x-[8%] inset-x-[4%] p-3  w-[40%] sm:w-[11%] bg-white flex items-center  ">
        
        <img class="object-cover object-center rounded-3xl bg-gray-200" alt="hero" src={vector}/>
        <div className="flex mx-3  flex-col">

        <h1 className="sm:text-xl text-md font-semibold "> 10 days </h1>
        <p className="sm:text-xs text-[10px]">staff deployment</p>
        </div>
        
      </div>
    
      <img class="object-cover object-center sm:w-4/5 w-full rounded-3xl" alt="hero" src={img1}/>

      <div className="border-black text-gray-400 shadow rounded-3xl absolute   sm:inset-x-[30%] inset-x-[55%]   p-2   sm:bottom-0 sm:top-[80%] top-[58%] sm:py-6 py-2  sm:w-[12%] w-[42%] bg-black flex flex-col">
        

        <h1 className="text-sm p-2 font-semibold text-center"> <span className="text-3xl font-bold text-white">$0.5  </span>MILLION</h1>
        <p className="text-xs p-1">Reduced client expenses by saving on hiring and employee costs.</p>
        
      </div>
    </div>
    <div class="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div className="w-5/6 mb-10 ">

      <h2 class="  sm:text-4xl text-2xl font-manrope text-gray-900">Enhance fortune 50 company’s insights teams research capabilities
        
      </h2>
        </div>
      
     
      <div class="flex justify-center">
            <div class="w-2 h-2 mx-2 bg-green rounded-full"></div>
            <div class="w-2 h-2 mx-2 bg-gray-300 hover:bg-green  rounded-full"></div>
            <div class="w-2 h-2 mx-2 bg-gray-300 hover:bg-green rounded-full"></div>
      </div>
       <button class="flex items-center justify-center mt-16 text-white  bg-black  border-0 py-4 px-8 focus:outline-none hover:bg-gray-500 rounded-3xl text-md">Explore more  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg></button>
    </div>
  </div>
</section>
<div className="mb-8">

<Questions/>
</div>
<div className="mb-8">

<Footer/>
</div>

      
        </>
  )};
  
  export default Home;