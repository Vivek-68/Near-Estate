import React from 'react'
import { userData,listData } from '../lib/dummydata'
import Card from '../components/Card'

const ProfilePage = () => {
  return (
    <div className='flex md:h-[85vh]'>
        <div className='w-[65%] pr-8 '>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-semibold'>User Information</h2>
                <button className='px-4 py-3 rounded-md text-white bg-lilac'>Update Profile</button>
            </div>
            <div className=' flex flex-col pt-4 gap-4'>
                <span className=' flex gap-4 items-center'>Avatar : <img src={userData.img} className='h-[2.25rem] w-[2.25rem] rounded-full object-cover' alt="Could not load image" /></span>
                <span >Username:  <span className='m-4'>{userData.name}</span></span>
                <span >Email:  <span className='m-4'>{'john2123@gmail.com'}</span></span>
            </div>
            <div className='flex justify-between items-center mt-4'>
            <h2 className='text-3xl font-semibold'>My List</h2>
            <button className='px-4 py-3 rounded-md text-white bg-lilac'>Add New Post</button>
            </div>
            <div className='flex flex-col gap-4 md:h-[60vh] overflow-y-auto pt-4'>
            {
                listData.map((item) => <div className='max-h-[20rem]'><Card key={item.id} {...item}/></div>)
            }
            </div>
            
        </div>
        <div className='w-[35%] px-8 bg-[#FFE6E6] pt-4 pb-4'>
            <div className='mb-2'>
            <h2 className='text-3xl font-semibold'>Messages</h2>
            </div>
            <div className='flex flex-col gap-4 h-[45%] overflow-y-auto'>
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
            <div className='h-[50%]'>
                <div className='flex justify-between items-center p-2 bg-lilac'>
                    <span className='flex items-center'>
                    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={userData.img} alt="Could not load image" />
                    <p className='text-white'>{userData.name}</p>
                    </span>
                    <p className='text-white'>X</p>
                </div>
                <div className='gap-2 h-[70%] flex flex-col bg-white p-2 overflow-y-auto'>
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

        </div>



    </div>
  )
}

export default ProfilePage