import React from 'react'

const Reserve = () => {
  return (
    <div className="relative min-h-screen max-container text-white flex justify-center items-center max-md:flex-col ">

      <div className="text-center space-y-4 w-3/6 mx-2 max-md:w-[90%] max-md:mx-auto max-md:mt-2">
        <h2 className="text-3xl font-bold max-w-[420px] leading-[40px]">Reserve Your Seats</h2>
        <p className="text-gray-300 max-w-[530px] text-justify pt-6 text-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
        </p>

        
      </div>
      <div className='w-3/6 mx-2 max-md:w-[90%] max-md:mx-auto max-md:my-4'>
       <div className='max-w-full  bg-white p-8 rounded-md'>
        <form>
          <input type='text' name='name' placeholder='Your Name' className='input'/>
          <input type='email' name='name' placeholder='Your Email Address' className='input'/>
          <input type='text' name='name' placeholder='Your Phone Number' className='input'/>
          <input type='Date' name='name' placeholder='Date and Time' className='input text-gray-600'/>
          <select name="event" id="e1" placeholder="Select a fruit"  className='input text-gray-500'>
            <option value="event one">Event One</option>
            <option value="event one">Event One</option>
            <option value="event one">Event One</option>
          </select>
          <div className='flex justify-center'>
          <button className='bg-red-500 text-white px-4 py-2 text-center my-2'>Make Rservation</button>
          </div>
          
        </form>
        </div>
       
      </div>
    
    </div>
  )
}

export default Reserve
