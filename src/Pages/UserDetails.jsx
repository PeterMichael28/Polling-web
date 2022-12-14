import React from 'react'
import { Link } from 'react-router-dom'

const UserDetails = () => {
  return (
    <div>
        <h1 className='text-[18px] font-["Inter"] font-[700] text-center uppercase p-6 mt-4 text-[#000]'>User Details</h1>
      
        
<form className='p-6 pl-[36%] space-y-10'>
  <div class="relative z-0 mb-6 w-[400px] rounded-[3px] border-[1px] border-[#87A5A5]  group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none pl-6 dark:text-white focus:outline-none focus:ring-0  peer" placeholder="Enter your full name" required=""/>
      <label for="floating_email" class="peer-focus:font-medium absolute text-[16px] font-[600] text-[#092D2D] duration-300 transform -translate-y-6 scale-75 top-3 left-2 bg-[#E7EDED] -z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100">Name</label>
  </div>
  <div class="relative z-0 mb-6 w-[400px] rounded-[3px] border-[1px] border-[#87A5A5]  group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none pl-6 dark:text-white focus:outline-none focus:ring-0  peer" placeholder="someone@example.com" required=""/>
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-[#092D2D] duration-300 transform -translate-y-6 scale-75 top-3 left-2 bg-[#E7EDED] -z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100">Email Address (optional)</label>
  </div>
  <div class="relative z-0 mb-6 w-[400px] rounded-[3px] border-[1px] border-[#87A5A5]  group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none pl-6 dark:text-white focus:outline-none focus:ring-0  peer" placeholder="Enter your location" required=""/>
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-[#092D2D] duration-300 transform -translate-y-6 scale-75 top-3 left-2 bg-[#E7EDED] -z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100">Location</label>
  </div>
  
  
  {/* <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div> */}
  <div class="grid md:grid-cols-2 md:gap-6">
    {/* <div class="relative z-0 mb-6 w-full group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div> */}
    {/* <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div> */}
  </div>
  {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
</form>
      <div className="btn flex justify-center">
      <Link to='/selectcandidate'>
        <button className='text-white text-[18px] font-["Inter"] bg-[#0F4C4B] active:bg-[#167674] text-base px-14 py-4 text-center'>Next</button>
      </Link>
    </div>
    </div>
  )
}

export default UserDetails



