import React from 'react'
import Slider from '../components/Slider'
import { singlePostData,userData } from '../lib/dummydata'
import Map from '../components/Map'

const SinglePage = () => {
  return (
    <div className='lg:h-[85%] max-[767px]:pt-16 flex max-[1200px]:flex-col max-[1200px]:overflow-y-auto gap-8 pb-8'>
        <div className='min-[1201px]:w-[65%] flex flex-col min-[1201px]:last:overflow-y-auto gap-6'>
        <Slider images={singlePostData.images}/>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-between'>
            <h2 className='text-3xl font-semibold'>{singlePostData.title}</h2>
            <div className='flex text-gray-500'><img src="/icons/pin.png" className='h-[1.5rem]' alt="Could not load image" /> <p>{singlePostData.address}</p></div>
            <p className='text-2xl'>${singlePostData.price}</p>
          </div>
          <div className='flex flex-col p-4 items-center bg-[#FFE6E6] rounded-lg'>
            <img className='h-[3rem] w-[3rem] object-cover rounded-full' src={userData.img} alt="" />
            <p className='text-xl '>John Doe</p>
          </div>
        </div>
        <div><p className='text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum similique nemo reiciendis necessitatibus delectus recusandae itaque quisquam accusantium odit! Modi saepe natus soluta itaque, ex debitis magni quia tempora assumenda facilis sint sapiente. Quae dolores molestiae consequuntur magnam illo exercitationem debitis corrupti eligendi, blanditiis quo quidem explicabo autem unde nihil voluptas saepe aut nobis alias accusamus quia! Alias, magni officia!</p></div>
        </div>

        
        <div className='min-[1201px]:w-[35%] flex flex-col  justify-between min-[1201px]:overflow-y-auto rounded-lg p-4 bg-[#FFE6E6]'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl font-semibold'>General</h2>
          <div className='p-4 bg-white'>
            <div >
              <h3 className='text-xl font-semibold'>Utilities</h3>
              <p>Renter is responsible</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Pet Policy</h3>
              <p>Pets allowed</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Property Fees</h3>
              <p>Must have 3x the rent in total household income</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Sizes</h2>
          <div className='p-4 bg-white flex justify-between flex-wrap gap-2'>
            <div className='flex gap-1' >
              <img className='h-[1.5rem]' src='/icons/size.png' alt='Could not load image' />
              <p>80 sqft</p>
            </div>
            <div className='flex gap-1'>
              <img className='w-[1.5rem]' src="/icons/bed.png" alt="Could not load image" />
              <p>2 beds</p>
            </div>
            <div className='flex gap-1'>
             <img className='w-[1.5rem]' src="/icons/bath.png" alt="Could not load image" />
              <p>1 bathroom</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-[14px] '>
          <h2 className='text-xl font-semibold'>Nearby Places</h2>
          <div className='p-4 bg-white flex justify-between flex-wrap gap-2'>
            <div className='flex gap-1' >
              <img className='h-[1.5rem]' src='/icons/school.png' alt='Could not load image' />
              <div className='flex flex-col'>
              <h3 className='font-semibold'>School</h3>
              <p>250m away</p>
              </div>
            </div>
            <div className='flex gap-1'>
              <img className='h-[1.5rem]' src="/icons/bus.png" alt="Could not load image" />
              <div className='flex flex-col'>
              <h3 className='font-semibold'>Bus Stop</h3>
              <p>150m away</p>
              </div>
              
            </div>
            <div className='flex gap-1'>
             <img className='h-[1.5rem]' src="/icons/restaurant.png" alt="Could not load image" />
             <div className="flex flex-col">
             <h3 className='font-semibold'>Restaurant</h3>
              <p>100m away</p>
             </div>
             
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Location</h2>
          <div className="py-4 h-[250px] ">
            <Map/>
          </div>
          <div className="flex max-[350px]:flex-col gap-4 justify-between">
            <button className='bg-white min-[450px]:p-4 p-2'>Send a Message</button>
            <button className='bg-white min-[450px]:p-4 p-2'>Save the place</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SinglePage