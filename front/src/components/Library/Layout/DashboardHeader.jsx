import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineGift } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md'; 
import {FiPackage, FiShoppingBag} from 'react-icons/fi'
import { BiMessageSquareDetail } from "react-icons/bi";
import { backend_url } from "../../../server";
import pic from "../../../assets/homepage/téléchargement (2).jpg"
const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (

   
    <div className="fixed top-0 right-0 w-[167vh] h-[80px] bg-[#5f2488cf] shadow z-30 flex items-center justify-between px-4">
      <div >
          
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
        <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              color="#000"
              size={30}
              className="mx-5 cursor-pointer "
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#000"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-books" className="800px:block hidden">
            <FiShoppingBag
              color="#000"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage
              color="#000"
              size={30}
              className="mx-5 cursor-pointer "
            />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#000"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          {/* <Link to={`/librarie/${seller._id}`}>
            <img src={`${backend_url}${seller?.avater}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link> */}
          <Link to={`/librarie/${seller._id}`}>
            <img
             src={`${backend_url}/${seller.avatar}`}
           
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
