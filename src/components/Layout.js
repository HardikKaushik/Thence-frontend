import { Outlet, Link } from "react-router-dom";
import banner from '../assets/Frame 1261155216.png'
const Layout = () => {
  return (
    <>
     
      <header class="text-gray-600 mb-4 body-font rounded-3xl border container  ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link class=" mb-4 md:mb-0" to="/">
    <img className="mx-6 p-2" src={banner} alt="" />
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base gap-5 justify-center">
     
      <Link class="border-gray-200 border rounded-full px-6 py-3 hover:bg-black hover:text-white " to="/register">Get Project</Link>
      <Link class="border-gray-200 border bg-black text-white rounded-full px-6 py-3 hover:bg-gray-500 hover:text-white" to="/">Onboard talent</Link>
     
    </nav>
  
  </div>
</header>

      <Outlet />
    </>
  )
};

export default Layout;