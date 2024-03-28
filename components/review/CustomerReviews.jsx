import React from 'react'
import Slide from '../Slide/Slide'
import { Comments } from '../Slide/Comments'

const CustomerReviews = () => {
  return (
    <div className='max-container flex flex-col justify-center gap-2 min-h-full relative'>
      <h2 className='text-2xl font-bold text-center py-8'>What Our <span className='text-orange-500'>Customers</span> Say?</h2>
      <p className='text-center max-w-xl mx-auto text-[13px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className='example-container'>
      <Slide />
    </div>
    </div>
  )
}

export default CustomerReviews
