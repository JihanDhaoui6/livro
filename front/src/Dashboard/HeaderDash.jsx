import React from 'react'
import {IoSearch} from 'react-icons/io5';
import {IoIosArrowDown} from 'react-icons/io';
import {blanc} from '../assets/homepage/blanc.jpg'
import { useSelector } from 'react-redux';
import { backend_url } from '../server';
import { Link } from 'react-router-dom';

const HeaderDash = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
 


<div className='!flex justify-between items-center gap-10 '>
    <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all'/>
    <div id='client-info' className='felx justify-center items-center gap-4 '>
    <Link to={`/librarie/${seller._id}`}>
            <img 
             src={`${backend_url}${seller?.avatar}`} 
            // src={`${backend_url}${seller.avater}`}
            alt=""
            className=" w-12 h-12  rounded-full object-cover"
            />
          </Link>


          <Link to={`/librarie/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
    {/* <img src="" alt="client-image" className='rounded-full w-12 h-12 ' /> */}
    {/* <div className='flex flex-col justify-center items-start '>
        <div className='flex justify-center items-center -mb-1 gap-2 '>
          <h1 className='text-lg font-semibold '>hi, jihan</h1><IoIosArrowDown/>
           </div>
        <p>Seller</p>
    </div> */}
  
    </div>
</div>
      
  
  )
}

export default HeaderDash
