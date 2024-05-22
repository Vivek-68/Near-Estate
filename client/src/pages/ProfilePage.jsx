import React from 'react'
import { userData,listData } from '../lib/dummydata'
import Card from '../components/Card'

const ProfilePage = () => {
  return (
    <div>
        <div className='w-[65%]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-semibold'>User Information</h2>
                <button className='px-4 py-3 rounded-md text-white bg-lilac'>Update Profile</button>
            </div>
            <div className='text-xl flex flex-col pt-8 gap-4'>
                <span className=' flex gap-4 items-center'>Avatar : <img src={userData.img} className='h-[2.25rem] w-[2.25rem] rounded-full object-cover' alt="Could not load image" /></span>
                <span >Username:  <span className='m-4'>{userData.name}</span></span>
                <span >Email:  <span className='m-4'>{'john2123@gmail.com'}</span></span>
            </div>
            <div className='flex justify-between items-center'>
            <h2 className='text-3xl font-semibold'>My List</h2>
            <button className='px-4 py-3 rounded-md text-white bg-lilac'>Add New Post</button>
            </div>
            <div className='flex flex-col gap-4'>
            {
                listData.map((item) => <div className='max-h-[20rem]'><Card key={item.id} {...item}/></div>)
            }
            </div>
            
        </div>



    </div>
  )
}

export default ProfilePage