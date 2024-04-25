import React from 'react'

const ListSearch = () => {
  return (
    <div className='md:pt-0 pt-14'>
        <h2 className='text-[18px] sm:text-xl'>Search results for <span>London</span></h2>
        <input className='p-2 w-[100%] border-2 rounded-md' type="text" name='location' placeholder='City location'/>
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="type">Type</label>
          <select  className='p-2 pl-2 pr-10 bg-white border-2' name="type" id="type">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="property">Property</label>
          <select className='p-2 pl-2 pr-10 bg-white border-2' name="property" id="property">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="minPrice">Min Price</label>
          <select className='p-2 pl-2 pr-10 bg-white border-2' name="minPrice" id="minPrice">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="maxPrice">Max Price</label>
          <select className='p-2 pl-2 pr-10 bg-white border-2' name="maxPrice" id="maxPrice">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          </div>
          <div className='flex flex-col'>
          <label className='text-[.75rem] text-gray-700' htmlFor="bedroom">Bedroom</label>
          <select className='p-2 pl-2 pr-10 bg-white border-2' name="bedroom" id="bedroom">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
          </div>
          <button className='w-[6rem] flex justify-center items-center rounded-sm bg-lilac'><img className='w-6' src='../icons/search-interface-symbol.png' /></button>
        </div>
    </div>
  )
}

export default ListSearch