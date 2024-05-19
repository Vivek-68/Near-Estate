import React from 'react'
import Slider from '../components/Slider'
import { singlePostData } from '../lib/dummydata'

const SinglePage = () => {
  return (
    <div className='lg:h-[85%]'>
        <div className='w-[65%]'>
        <Slider images={singlePostData.images}/>
        </div>
        <div className='w-[35%]'>

        </div>
    </div>
  )
}

export default SinglePage