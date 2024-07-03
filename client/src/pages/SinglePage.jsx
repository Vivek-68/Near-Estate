import React, { useContext, useState } from 'react'
import Slider from '../components/Slider'
import { singlePostData,userData } from '../lib/dummydata'
import Map from '../components/Map'
import {useLoaderData, useNavigate} from "react-router-dom"
import DOMPurify from "dompurify"
import { AuthContext } from '../context/AuthContext'
import apiRequest from "../lib/apiRequest"

const SinglePage = () => {
  const post = useLoaderData();
  const [saved,setSaved] = useState(post.isSaved);
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSave = async(e) =>{
    if(!currentUser){
     return navigate('/login');
    }
    try{
      await apiRequest.post('/posts/save',{postId:post?.id});
      setSaved(prev => !prev)
    }
    catch(error){
      console.log(error);
    }
  }

    return (
    <div className='lg:h-[85%] max-[767px]:pt-16 flex max-[1200px]:flex-col max-[1200px]:overflow-y-auto gap-8 pb-8'>
        <div className='min-[1201px]:w-[65%] flex flex-col min-[1201px]:last:overflow-y-auto gap-6'>
        <Slider images={post?.images}/>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-between'>
            <h2 className='text-3xl font-semibold'>{post?.title}</h2>
            <div className='flex text-gray-500'><img src="/icons/pin.png" className='h-[1.5rem]' alt="Could not load image" /> <p>{post?.address}</p></div>
            <p className='text-2xl'>${post?.price}</p>
          </div>
          <div className='flex flex-col p-4 items-center bg-indigo-100 rounded-lg'>
            <img className='h-[3rem] w-[3rem] object-cover rounded-full' src={post?.user?.avatar || 'icons/noavatar.jpg'} alt="" />
            <p className='text-xl '>{post?.user?.username}</p>
          </div>
        </div>
        <div><p className='text-gray-800' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post?.postDetail?.desc)}}/></div>
        </div>

        
        <div className='min-[1201px]:w-[35%] flex flex-col  justify-between min-[1201px]:overflow-y-auto rounded-lg p-4 bg-indigo-200 '>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl font-semibold'>General</h2>
          <div className='p-4 bg-white'>
            <div >
              <h3 className='text-xl font-semibold'>Utilities</h3>
              <p>{post?.postDetail?.utilities}</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Pet Policy</h3>
              <p>{post?.postDetail?.pet}</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Property Fees</h3>
              <p>{post?.postDetail?.income}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Sizes</h2>
          <div className='p-4 bg-white flex justify-between flex-wrap gap-2'>
            <div className='flex gap-1' >
              <img className='h-[1.5rem]' src='/icons/size.png' alt='Could not load image' />
              <p>{post?.postDetail?.size} sqft</p>
            </div>
            <div className='flex gap-1'>
              <img className='w-[1.5rem]' src="/icons/bed.png" alt="Could not load image" />
              <p>{post?.bedrooms} beds</p>
            </div>
            <div className='flex gap-1'>
             <img className='w-[1.5rem]' src="/icons/bath.png" alt="Could not load image" />
              <p>{post?.bathrooms} bathroom</p>
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
              <p>{post?.postDetail?.school > 999?post?.postDetail?.school/1000 + 'k':post?.postDetail?.school}m away</p>
              </div>
            </div>
            <div className='flex gap-1'>
              <img className='h-[1.5rem]' src="/icons/bus.png" alt="Could not load image" />
              <div className='flex flex-col'>
              <h3 className='font-semibold'>Bus Stop</h3>
              <p>{post?.postDetail?.bus > 999?post?.postDetail?.bus/1000 + 'k':post?.postDetail?.bus}m away</p>
              </div>
              
            </div>
            <div className='flex gap-1'>
             <img className='h-[1.5rem]' src="/icons/restaurant.png" alt="Could not load image" />
             <div className="flex flex-col">
             <h3 className='font-semibold'>Restaurant</h3>
              <p>{post?.postDetail?.restaurant > 999?post?.postDetail?.restaurant/1000 + 'k':post?.postDetail?.restaurant}m away</p>
             </div>
             
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Location</h2>
          <div className="py-4 h-[250px] ">
            <Map items={[post]}/>
          </div>
          <div className="flex max-[350px]:flex-col gap-4 justify-between">
            <button className='bg-white min-[450px]:p-4 p-2'>Send a Message</button>
            <button onClick={handleSave} className={saved?'bg-indigo-300 min-[450px]:p-4 p-2':'bg-white min-[450px]:p-4 p-2'}>{saved?"Place Saved":"Save the place"}</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SinglePage