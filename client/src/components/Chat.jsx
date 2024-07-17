import React from 'react'

const Chat = ({receiver,lastMessage}) => {
  return (
    <div className='bg-white flex gap-4 p-4 cursor-pointer'>
    <img className='h-[2.5rem] w-[2.5rem] object-cover rounded-full' src={receiver?.avatar || 'icons/noavatar.jpg'} alt="Could not load image" />
    <p className=''>{receiver?.username}</p>
    <p className='line-clamp-2'>{lastMessage}</p>
    </div>
  )
}

export default Chat