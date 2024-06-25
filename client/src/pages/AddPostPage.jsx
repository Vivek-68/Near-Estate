import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import apiRequest from '../lib/apiRequest.js';
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../components/UploadWidget.jsx';

const AddPostPage = () => {
    const [editorText,setEditorText] = useState('');
    const [error,setError] = useState('')
    const [image,setImage] = useState([])
    const handleChange = e =>{
        setEditorText(e)
    }
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);

        try {
            const response = await apiRequest.post('/posts',{
                postData : {
                    title : inputs.title,
                    price:parseInt(inputs.price),
                    address:inputs.address,
                    city:inputs.city,
                    bedrooms: parseInt(inputs.bedrooms),
                    bathrooms: parseInt(inputs.bathrooms),
                    latitude: inputs.latitude,
                    longitude:inputs.longitude,
                    type:inputs.type,
                    property:inputs.property,
                    images:image
                },
                postDetail:{
                    desc:editorText,
                    utilities:inputs.utilities,
                    pet:inputs.pets,
                    income:inputs.income,
                    size:parseInt(inputs.size),
                    school:parseInt(inputs.school),
                    bus:parseInt(inputs.bus)
                }
            });
            setError("")
            navigate('../' + response.data.data.id)
        } catch (error) {
            console.log(error);
            if(error.response)
            setError(error.response.data?.message);
            else{
              setError(error.message);
            }
        }
        
    }
console.log(image)
    return (
    <div className='w-full mt-16 md:mt-8 '>
        <form className='w-full flex flex-wrap' onSubmit={handleSubmit}>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='title' className=''>
                Title
            </label>
            <input className='min-[450px]:w-[80%] w-full  p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='title' type="text" name='title'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='price' className=''>
                Price
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='price' type="text" name='price'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='address' className=''>
                Address
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='address' type="text" name='address'/>  
                   
        </div>
       
        
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='city' className=''>
                City
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='city' type="text" name='city'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='bedrooms' className=''>
                Bedrooms
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='bedrooms' type="text" name='bedrooms'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='bathrooms' className=''>
                Bathrooms
            </label>
            <input className='min-[450px]:w-[80%] w-full  p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='bathrooms' type="text" name='bathrooms'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='Latitude' className=''>
                Latitude
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='latitude' type="text" name='latitude'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='longitude' className=''>
                Longitude
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='longitude' type="text" name='longitude'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='type' className=''>
                Type
            </label>
            <select  className='bg-white min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md' name="type" id="type">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>     
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='property' className=''>
                Property
            </label>
            <select  className='bg-white min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md' name="property" id="property">
            <option value="any">any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='utilities' className=''>
                Utilities Policy
            </label>
            <select  className='bg-white min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md' name="utilities" id="utilities">
            <option value="Owner is responsible">Owner is responsible</option>
            <option value="Renter is responsible">Renter is responsible</option>
          </select>                     
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='pets' className=''>
                Pet Policy
            </label>
            <select  className='bg-white min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md' name="pets" id="pets">
            <option value="Allowed">Allowed</option>
            <option value="Not allowed">Not allowed</option>
          </select>                     
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='income' className=''>
                Income Policy
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='income' type="text" name='income'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='size' className=''>
                Total Size(sqft)
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' id='size' type="number" min={0} name='size'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='school' className=''>
                School
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' min={0} id='school' type="number" name='school'/>  
                   
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='bus' className=''>
                Bus
            </label>
            <input className='min-[450px]:w-[80%] w-full p-2 border-lilac border-2 rounded-md focus:outline-none focus:ring-0' min={0} id='bus' type="number" name='bus'/>  
                   
        </div>
        <UploadWidget setForm={setImage} uwConfig={
                {
                  cloudName:'dachq7dm8',
                  uploadPreset:'estate',
                  multiple:true,
                  maxImageFileSize:4000000,
                  folder:'posts'
                }}/>
        <div className='w-full  flex flex-col p-4 md:p-0 md:pb-4'>
            <label htmlFor='desc' className=''>
                Description
            </label>
            <ReactQuill value={editorText} onChange={handleChange} id='desc'/>      
        </div>
        <button type='submit' className='mt-12 px-6 py-4 bg-lilac text-white rounded-md mb-12'>Submit</button>
       
        </form>
       
        {
            error && <p className='text-red-500 relative bottom-6 mb-10'>{error}</p>
        }
       
    </div>
  )
}
export default AddPostPage