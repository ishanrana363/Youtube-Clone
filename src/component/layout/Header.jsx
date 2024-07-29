import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { IoIosCreate } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";



const Header = () => {
  return (
    <>
        <div className="menu m-4  ">
            <div className="row flex items-center justify-between ">
                <div className="col-3">
                    <div className="icon">
                        <span className=' flex font-light  ' >
                            <span className='text-4xl ' > <IoMenuSharp/> </span>
                            <span className=' text-red-600 ml-4  text-4xl mt-[3px] ' > <IoLogoYoutube /></span>
                            <span className='text-3xl font-semibold  ms-3 mb-3  ' >Youtube</span>
                        </span>
                    </div>
                </div>

                <div className="col-6   ">
                    <div className="search flex mx-[50px] ">
                        <input placeholder='Search' className=' w-[400px] ps-8 border-2 h-[45px] absolute  rounded-full outline-none border-gray-300 block -mt-[5px] ' type="text" name="" id="" />
                        <NavLink to={""} title='Search' ><button className=' relative mt-[6px] ms-[350px] text-2xl  ' > <span className=' font-extrabold ' ><IoSearchOutline /></span> </button></NavLink>
                        <span title='Search with your voice ' className=' relative ms-12 text-3xl mt-[3px] transition ease-in-out delay-150 hover:text-cyan-500 hover:-translate-y-1 hover:scale-110  duration-300    '  > <FaMicrophone /></span>
                    </div>
                </div>

                <div className='col-3' >
                    <div className='notification-bar flex ml-6  ' >
                        <span title='Create ' className=' relative text-3xl  transition ease-in-out delay-150 hover:text-cyan-500 hover:-translate-y-1 hover:scale-110  duration-300    '  > <IoIosCreate /></span>
                        <span title='Notification ' className=' mx-10 relative text-3xl  transition ease-in-out delay-150 hover:text-cyan-500 hover:-translate-y-1 hover:scale-110  duration-700    '  > <IoMdNotificationsOutline /></span>
                        <span className='w-10 text-center  text-3xl rounded-full h-10 bg-red-500 ' >I</span>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Header
