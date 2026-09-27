import React from 'react'
import { FaAdn } from 'react-icons/fa';
import { MdHMobiledata } from 'react-icons/md';
import { RiMicroscopeFill } from 'react-icons/ri';
import { SlBasket } from "react-icons/sl";
import { BiLayerPlus } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiCash } from "react-icons/gi";
import { IoLogInOutline } from "react-icons/io5";

const Stepper = () => {
  const icons1 = <IoLogInOutline size={35} className='text-[#48c595c2]'/>
  const icons2 = <BiLayerPlus size={35} className='text-[#48c595c2]'/>
  const icons3 = <LiaShippingFastSolid size={35} className='text-[#48c595c2]'/>
  const icons4 = <GiCash size={35} className='text-[#48c595c2]'/>
  const icons5 = <SlBasket size={35} className='text-[#48c595c2]'/>

  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-3 lg:pt-2'>
      <div className='flex flex-col items-center lg:flex-row justify-between '>
        <div className='pt-2'>
          <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Services</h1>
          <p className='mt-2 text-center lg:text-start '>Discover a variety of services tailored to meet your needs. From registration to purchasing, we offer seamless and efficient solutions.</p>
        </div>
        <div className='mt-4 lg:mt-0 '>
        {/* <Button title="See Services"/> */}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 pt-14 '>
        <ServicesCard icon={icons1} title="Register" description="Join our platform with a simple registration process."/>
        <ServicesCard icon={icons2} title="Add an Article" description="Easily add and manage your articles with our intuitive tools."/>
        <ServicesCard icon={icons3} title="Deliver" description="Fast and reliable delivery service for your convenience."/>
        <ServicesCard icon={icons4} title="Receive Payment" description="Secure and prompt payment processing."/>
        <ServicesCard icon={icons5} title="Buy" description="Browse and purchase products effortlessly."/>
      </div>
    </div>
  )
}

export default Stepper;

const ServicesCard = ({icon, title, description}) => {
  return (
   <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
     <div className='bg-[#555] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc] '>
      {icon}
    </div>
    <h1 className='font-semibold text-lg'>{title}</h1>
    <p>{description}</p>
    <h3 className='text-[#65b4a0] cursor-pointer hover:text-[#222] transition duration-300 ease-in-out'>Learn more...</h3>
   </div>
  )
};
