
import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdOutlineMessage } from "react-icons/md";
import { GiBookmark } from "react-icons/gi";
import { CiGift } from "react-icons/ci";
import { TbBasketDiscount, TbBooks } from "react-icons/tb";
import { LiaGiftsSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import axios from "axios";
import { server } from "../../../server";
import styles from "../../../styles/style";

const DashboardSideBar = ({ active, isOwner } ) => {

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/librarie/logout`, { withCredentials: true });
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  return (
    <div className="w-[30vh] bg-[#5f2488cf] h-screen flex-col justify-between items-center gap-10 relative">

 <div >
        <Link to="/dashboard">
          {/* <img src="" alt="logo de votre page " /> */}
          <h1 className="text-4xl font-bold text-[#ee72d1b1] items-center justify-center ml-5">
      Book'Store
    </h1>
        </Link>
      </div>

      <div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 1 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <MdDashboard
              size={30}
              color={`${active === 1 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
           Dashboard
          </h5>
        </Link>
      </div>
{/*  2 ORDRRS */}
<div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 2 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <LiaGiftsSolid 
              size={30}
              color={`${active === 2 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      {/*3 all books */}
      <div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 3 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-books" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <TbBooks 
              size={30}
              color={`${active === 3 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            All Books
          </h5>
        </Link>
      </div>
      {/* 4 AJOUTER LIV */}
      <div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 4 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-create-post" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <GiBookmark 
              size={30}
              color={`${active === 4 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            Add Book
          </h5>
        </Link>
      </div>


{/* 5 ALL PROMO */}
<div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 5 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-events" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <LiaGiftsSolid 
              size={30}
              color={`${active === 5 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>
      
{/* 6 CRE EVENT */}
      <div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 6 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <CiGift 
              size={30}
              color={`${active === 6 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            Add Event
          </h5>
        </Link>
      </div>


      


      



   

      {/* 8 MSG */}

      <div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 8 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            < MdOutlineMessage
              size={30}
              color={`${active === 8 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            Messages
          </h5>
        </Link>
      </div>
{/* 9 add CODE */}



      <div className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 9 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
       <Link to="/dashboard-coupouns" className="w-full flex items-center">
       <div className="rounded-full bg-gray-200 p-2 mr-3">
            <TbBasketDiscount
              size={30}
              color={`${active === 9 ? "crimson" : "#555"}`}
            />
          </div>
         <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
     </div>


      {/* <div
        className={`w-[28vh] p-2 mx-2 mt-5 border rounded-[4px] ${
          active === 11 ? "border-white bg-[#e9d4f0]" : "border-transparent"
        }`}
      >
        <Link to="/dashboard-settings" className="w-full flex items-center">
          <div className="rounded-full bg-gray-200 p-2 mr-3">
            <IoSettings
              size={30}
              color={`${active === 11 ? "crimson" : "#555"}`}
            />
          </div>
          <h5
            className={`hidden 800px:block text-sm font-normal ${
              active ? "text-black" : "text-[#555]"
            }`}
          >
            LogOut
          </h5>
        </Link>
      </div> */}
      
      {isOwner && (
            <div className="py-3 px-4">
              {/* <Link to="/settings">
                <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                  <span className="text-white">Edit Library </span>
                </div>
              </Link> */}
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[19px] !bg-[#ec3f7e]`}
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
              
            </div>
          )} 
    </div>
    
  );
};

export default DashboardSideBar;














































































































// /dashboard
// /dashboard-books
// /dashboard-create-post
// /dashboard-events
// /dashboard-events
// /dashboard-create-event
// /dashboard-messages

// /dashboard-coupouns
// /settings



// import React from "react";
// import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
// import { FiPackage, FiShoppingBag } from "react-icons/fi";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";
// import { VscNewFile } from "react-icons/vsc";
// import { CiMoneyBill, CiSettings } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { HiOutlineReceiptRefund } from "react-icons/hi";
// import { IoSettings } from "react-icons/io5";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// import { CiGift } from "react-icons/ci";
// import { GiBookmark } from "react-icons/gi";
// import { TbBooks } from "react-icons/tb";
// import { LiaGiftsSolid } from "react-icons/lia";
// import { TbBasketDiscount } from "react-icons/tb";
// import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md";
// const DashboardSideBar = ({ active }) => {
//   return (
//     <div className="w-[30vh] bg-[#360757] h-screen flex-col justify-between items-center gap-10 relative">
//       {/* single item */}
//       <div className="w-1/5 flex items-center p-4">
//         <Link to="/dashboard" className="w-full flex items-center">
//           <RxDashboard
//             size={30}
//             color={`${active === 1 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 1 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Dashboard YY
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-orders" className="w-full flex items-center">
//           <FiShoppingBag
//             size={30}
//             color={`${active === 2 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 2 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Orders
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-books" className="w-full flex items-center">
//           <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 3 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Books
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/dashboard-create-post"
//           className="w-full flex items-center"
//         >
//           <AiOutlineFolderAdd
//             size={30}
//             color={`${active === 4 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 4 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Create Post
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-events" className="w-full flex items-center">
//           <MdOutlineLocalOffer
//             size={30}
//             color={`${active === 5 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 5 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Events
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-create-event" className="w-full flex items-center">
//           <VscNewFile
//             size={30}
//             color={`${active === 6 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 6 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Create Event
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-messages" className="w-full flex items-center">
//           <BiMessageSquareDetail
//             size={30}
//             color={`${active === 8 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 8 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Library Inbox
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-coupouns" className="w-full flex items-center">
//           <AiOutlineGift
//             size={30}
//             color={`${active === 9 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 9 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Discount Codes
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/settings" className="w-full flex items-center">
//           <CiSettings
//             size={30}
//             color={`${active === 11 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 11 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Settings
//           </h5>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DashboardSideBar;
