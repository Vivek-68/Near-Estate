import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListSearch = () => {
   const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData);
    console.log(data)
    navigate(`/list/?city=${data.location}&bedrooms=${data.bedrooms}&type=${data.type}&property=${data.property}&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`)
  }
  return (
    <form  onSubmit={handleSubmit} className='md:pt-0 pt-14'>
        <h2 className='text-[18px] sm:text-xl'>Search results for <span>London</span></h2>
        <input className='p-2 w-[100%] border-2 rounded-md' type="text" name='location' placeholder='City location'/>
        <div className='flex justify-between mt-2 flex-wrap '>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="type">Type</label>
          <select  className='p-2 pl-2 pr-[2.3vw] bg-white border-2' name="type" id="type">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="property">Property</label>
          <select className='p-2 pl-2 pr-[2.3vw] bg-white border-2' name="property" id="property">
            <option value="any">any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="minPrice">Min Price</label>
          <input
          className='border-2 w-24 py-[6px] bg-white placeholder-black pl-2'
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="maxPrice">Max Price</label>
          <input
          className='border-2 w-24 py-[6px] bg-white placeholder-black pl-2'
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="bedroom">Bedroom</label>
          <input
          className='border-2 w-24 py-[6px] bg-white placeholder-black pl-2'
            type="number"
            id="bedrooms"
            name="bedrooms"
            placeholder="any"
          />
          </div>
          <button type='submit' className='ml-2 mt-2 w-[6rem] max-[520px]:w-[3rem] max-[520px]:h-[3rem]  flex justify-center items-center rounded-sm bg-lilac'><img className='w-6' src='../icons/search-interface-symbol.png' /></button>
        </div>
    </form>
  )
}

export default ListSearch