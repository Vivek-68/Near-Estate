import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext'
import { useNavigate, Outlet } from 'react-router-dom';


const RequireAuth = () => {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
      if(!currentUser){
       return navigate('/login');
      }

    }, []);
   
  return (
    <>
    <div className="md:hidden top-0 w-screen h-[max(7.5dvh,2.5rem)] fixed z-0 bg-[#FAFAFA]"></div>
    <div className="max-[767px]:pt-4 max-w-[95rem] lg:h-screen m-auto px-5 md:px-20 ">
      <Navbar />
      <Outlet />
    </div>
  </>
  )
}

export default RequireAuth