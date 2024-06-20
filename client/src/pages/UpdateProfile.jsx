import { useContext, useState } from "react";
import axios from "axios";
import apiRequest from "../lib/apiRequest.js";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext.jsx";
import UploadWidget from "../components/UploadWidget.jsx";

export default function UpdateProfile() {
const {currentUser,updateUser} = useContext(AuthContext);
const [form,setForm] = useState({
    email:currentUser?.email,username:currentUser?.username,password:'',avatar:currentUser?.avatar
  })
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setForm(prev => ({...prev,[e.target.name]:e.target.value}))
  }

    const handleClick = async(e) =>{
        e.preventDefault();
        try {
          const response = await apiRequest.put(`/users/update/${currentUser.id}`,form);
          updateUser(JSON.stringify(response.data.data))
          setError("")
          navigate('/profile');
        } catch (error) {
          console.log(error);
          if(error.response)
          setError(error.response.data?.message);
          else{
            setError(error.message);
          }
        }
    }
    return (
      <>
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update your details
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-2">
              <UploadWidget setForm={setForm} uwConfig={
                {
                  cloudName:'dachq7dm8',
                  uploadPreset:'estate',
                  multiple:false,
                  maxImageFileSize:4000000,
                  folder:'avatars'
                }
                
              } 
              />
              </div>
  
              <div>
                <button
                  onClick={handleClick}
                  className="flex w-full justify-center rounded-md bg-lilac px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
            {
              error && <p className="text-red-500 mt-2">{error}</p>
            }

          </div>
        </div>
      </>
    )
  }
  