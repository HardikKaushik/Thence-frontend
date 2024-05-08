import React from 'react'

const Footer = () => {
  return (
   <>

<footer class="bg-gray-200 w-[95%]  mx-auto rounded-3xl border">
    <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
       

        <p class="text-sm text-gray-600 dark:text-gray-300">© Talup 2023. All rights reserved</p>

        <div class="flex mx-2">
           <p className='mx-2'>Terms & Conditions</p>
           <p className='mx-2'>Privacy Policy</p>
        </div>
    </div>
</footer>
   </>
  )
}

export default Footer
