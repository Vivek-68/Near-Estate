import React from 'react'
import { listData } from '../lib/dummydata.js'
import ListSearch from '../components/ListSearch.jsx'
import Card from '../components/Card.jsx'

const ListPage = () => {
  return (
    <div>
        <div className="md:w-[65%] flex flex-col gap-4 ">
            <ListSearch/>
            {
                listData.map((item) => <Card key={item.id} title={item.title} image={item.img}
                bathroom ={item.bathroom} address={item.address} bedroom={item.bedroom}
                latitude ={item.latitude} longitude = {item.longitude} price={item.price}/>)
            }
        </div>
    </div>
  )
}

export default ListPage