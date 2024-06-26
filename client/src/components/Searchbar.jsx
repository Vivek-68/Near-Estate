import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {
const [formData,setFormData] = useState({
    type:'buy',city:'',minPrice:'',maxPrice:''
});
const navigate = useNavigate();
const handleChange = (e) =>{
    setFormData(prev => ({...prev,[e.target.name]:e.target.value}));
}
const handleSubmit = async(e) =>{
  e.preventDefault();
  navigate(`/list?city=${formData.city}&type=${formData.type}&minPrice=${formData.minPrice}&maxPrice=${formData.maxPrice}`)
}

const activeButton = 'p-2 md:p-4 px-6 bg-black text-white border-2 border-black border-b-0';
const inactiveButton = 'p-2 md:p-4 px-6  border-2 border-b-0';
  return (  
    <div>
    <div>
        <button onClick={()=>setFormData(prev => ({...prev,type:'buy'}))} name='buy' className={formData.type === 'buy'?activeButton:inactiveButton}>Buy</button>
        <button onClick={()=>setFormData(prev => ({...prev,type:'rent'}))} name='rent' className={formData.type === 'rent'?activeButton:inactiveButton}>Rent</button>
    </div>
    <form  onSubmit={handleSubmit} className='max-[500px]:w-[150%] flex flex-col max-[767px]:gap-4 md:flex-row md:border-grey md:border-2 md:gap-1'>
    <input onChange={handleChange}  value={formData.location} className='p-2 md:p-4 w-[100%] max-[767px]:border-2' type="text" name='city' placeholder='city'/>
    <input onChange={handleChange} value={formData.minPrice}  className='p-2 md:p-4 w-[100%] max-[767px]:border-2' type="number" name='minPrice' placeholder='Min Price' min={0} max={10000000}/>
    <input  onChange={handleChange} value={formData.maxPrice} className='p-2 md:p-4 w-[100%] max-[767px]:border-2' type="number" name='maxPrice' placeholder='Max Price' min={0} max={10000000}/>
    <button type='submit' className='flex justify-center p-4 bg-lilac'><img src="/icons/search-interface-symbol.png" alt="search-icon" className='w-4  md:w-16 text-white' /></button>
    </form>
    </div>
   
  )
}

export default Searchbar