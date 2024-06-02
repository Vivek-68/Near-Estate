import React, { useState } from 'react'
import { userData,listData } from '../lib/dummydata'
import Card from '../components/Card'

const ProfilePage = () => {
    const [chat,setChat] = useState(true);
    const openChatboxStyle = 'flex flex-col gap-4 max-[1023px]:max-h-[400px] lg:h-[45%] overflow-y-auto';
    const closedChatboxStyle = 'flex flex-col gap-4 max-[1023px]:max-h-[600px] lg:h-[100%] overflow-y-auto'
    

  return (
    <div className='max-[768px]:pt-[5rem] max-[500px]:pt-[3.5rem] lg:flex lg:h-[85vh] pb-8 lg:pb-0'>
        <div className='lg:w-[65%] md:pr-8 mb-8'>
            <div className='flex justify-between items-center gap-2'>
                <h2 className='min-[450px]:text-3xl text-2xl font-semibold'>User Information</h2>
                <button className='px-2 py-1.5 sm:px-4 text-[14px] sm:text-[1rem] sm:py-3 rounded-md text-white bg-lilac'>Update Profile</button>
            </div>
            <div className=' flex flex-col pt-4 gap-4'>
                <span className=' flex gap-4 items-center'>Avatar : <img src={userData.img} className='h-[2.25rem] w-[2.25rem] rounded-full object-cover' alt="Could not load image" /></span>
                <span >Username:  <span className='m-4'>{userData.name}</span></span>
                <span >Email:  <span className='m-4'>{'john2123@gmail.com'}</span></span>
            </div>
            <div className='flex justify-between items-center mt-4'>
            <h2 className='min-[450px]:text-3xl text-2xl font-semibold'>My List</h2>
            <button className='px-2 py-1.5 sm:px-4 text-[14px] sm:text-[1rem] sm:py-3 rounded-md text-white bg-lilac'>Add New Post</button>
            </div>
            <div className='flex flex-col gap-4 md:h-[60vh] overflow-y-auto pt-4'>
            {
                listData.map((item) => <div className='max-h-[20rem]'><Card key={item.id} {...item}/></div>)
            }
            </div>
            
        </div>
        <div className='lg:w-[35%] px-6 bg-[#FFE6E6]  max-[1023px]:max-h-[1000px] lg:h-[100%] pt-4 pb-4'>
            <div className='mb-2'>
            <h2 className='text-3xl font-semibold'>Messages</h2>
            </div>
            <div className={chat?openChatboxStyle:closedChatboxStyle}>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
                <div className='bg-white flex gap-4 p-4'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className=''>{userData.name}</p>
                    <p className='line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, labore!</p>
                </div>
            </div>
            {
                chat &&
            <div className='max-[1023px]:h-[350px] lg:h-[45%]'>
                <div className='flex justify-between items-center p-2 bg-lilac'>
                    <span className='flex items-center'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className='text-white'>{userData.name}</p>
                    </span>
                    <p className='text-white cursor-pointer' onClick={()=>setChat(prev =>!prev)}>X</p>
                </div>
                <div className='gap-2 h-[70%] text-[14px] flex flex-col bg-white p-2 overflow-y-auto'>
                    <div className='bg-white'>
                        <p className='line-clamp-1'>Lorem ipsum dolor sit amet...</p>
                        <span className='text-[.75rem]'>1 hour ago</span>
                    </div>
                    <div className='bg-white flex justify-end'>
                        <span className=''>
                        <p className='line-clamp-1'>Lorem ipsum dolor sit amet...</p>
                        <span className='text-[.75rem]'>1 hour ago</span>
                        </span>
                        
                    </div>
                    <div className='bg-white'>
                        <p className='line-clamp-1'>Lorem ipsum dolor sit amet...</p>
                        <span className='text-[.75rem]'>1 hour ago</span>
                    </div>
                    <div className='bg-white flex justify-end'>
                        <span className=''>
                        <p className='line-clamp-1'>Lorem ipsum dolor sit amet...</p>
                        <span className='text-[.75rem]'>1 hour ago</span>
                        </span>  
                    </div>
                    <div className='bg-white'>
                        <p className='line-clamp-1'>Lorem ipsum dolor sit amet...</p>
                        <span className='text-[.75rem]'>1 hour ago</span>
                    </div>
                    <div className='bg-white'>
                        <p className='line-clamp-1'>Lorem ipsum dolor sit amet...</p>
                        <span className='text-[.75rem]'>1 hour ago</span>
                    </div>
                </div>
                
                <div className='flex mt-2'>
                    <textarea className='w-[100%]'></textarea>
                    <button className='bg-lilac p-3'>Send</button>
                </div>

            </div>
            }

        </div>



    </div>
  )
}

export default ProfilePage