import React from 'react'
import { listData } from '../lib/dummydata.js'
import ListSearch from '../components/ListSearch.jsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.jsx'
import { useLoaderData } from 'react-router-dom'

const ListPage = () => {
  const posts = useLoaderData();
  return (
    <div className='lg:h-[85%] flex'>
        <div className="lg:w-[65%] h-[100%] flex flex-col gap-4 overflow-y-scroll lg:pr-2">
            <ListSearch/>
            {
              posts &&  posts.map((item) => <Card key={item.id} {...item}/>)
            }
        </div>
        <div className='max-[1023px]:hidden w-[35%]'>
          <Map items={posts}/>
        </div>
       

    </div>
  )
}

export default ListPage