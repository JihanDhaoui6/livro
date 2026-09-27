import React, { useEffect } from 'react'
import { backend_url } from '../../server';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import {MdOutlineTrackChanges} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineArrowRight, AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import {TbAddressBook} from "react-icons/tb";
import axios from "axios";
import { server } from "../../server";
import {toast} from "react-toastify";
import { getAllOrdersOfUser } from '../../redux/actions/order';
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import Orders from "./Orders.jsx"
const Dropdwn = () => {
  const navigate = useNavigate();
       
  const {  user } = useSelector((state) => state.user);
  const logoutHandler = () =>{
    axios.get(`${server}/user/logout`,{ withCredentials:true}).then((res) =>{
      toast.success(res.data.message);
      window.location.reload(true);
        navigate("/login");
        
    }).catch((error) => {
      console.log(error.response.data.message)
    })
  }
  return (
    <div className=' flex flex-col absolute top-12 right-2 w-[40vh] p-6  border-[3px] border-[#d4333342] bg-[#ffffff] rounded-[12px]'>
       <ul className='flex flex-col gap-4 '>
     
       <li className='flex flex-col items-center'>
        <img
                      src={`${backend_url}${user.avatar}`}
                      // src={`${backend_url}${user.avatar}`}
                      className="w-[80px] h-[80px] items-center rounded-full border-[#62ef809d] border-[2px] "
                    
                      alt=""
                    />
                    <h4>{user.name}</h4>
                    <h4 className='text-[#4f4d4d]'>{user.email}</h4>
                    <br />
                    <Link to="/profile">
                    <div className='border-[2px] border-[#555] rounded-[10px] bg-[#302ad966] w-52 flex items-center justify-center h-[40px]'>   Visit Profile</div></Link>
           
        </li>
      



        <li className='border-[1px] border-[#f7a93c98] rounded-[10px] h-[35px] flex items-center justify-center mt-3'>
            
        <Link to='/orders'>Orders</Link>
        </li>





        <li className='border-[1px] border-[#f7a93c98] rounded-[10px] h-[35px] flex items-center justify-center'>
            <Link to="/update-user-password">
                Change password
            </Link>
        </li>



        <li className='border-[1px] border-[#f7a93c98] rounded-[10px] h-[35px] flex items-center justify-center'>
        <Link to="/address">
           Address
           </Link>
        </li>
        
        <li className='border-[1px] border-[#f7a93c98] rounded-[10px] h-[35px] flex items-center justify-center'>
            <Link to="/inbox">
            Inbox
            </Link>
        </li>
       
           





        {/* log out */}
        <li className='border-[1px] border-[#f7a93c98] rounded-[10px] h-[35px] flex items-center justify-center'>
        <div
        className="single_item flex items-center cursor-pointer w-full mb-8 "
        onClick={() => logoutHandler()}
      >
        <AiOutlineLogin size={20}  />
        <span className={`pl-3  "text-[red]"  800px:block hidden `}>
          Log out
        </span>
      </div>
      </li>


       </ul>
    </div>
  )
}



export default Dropdwn
