import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../server";
import styles from "../styles/style";
import { getAllOrdersOfUser } from "../redux/actions/order";



const UserOrderDetails = () => {
  const { user} = useSelector((state) => state.user);
const {orders} = useSelector((state)=>state.order);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
const orderUpdateHandler =(e)=>{
    console.log("object")
}
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between ">
        <div className="flex item-center mt-20">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px] ">Order Details:</h1>
        </div>
        <Link to="/profile">
          <div
            className={`${styles.button} !bg-[#edbce3] !rounded-[4px] text-[#a92e9f] font-[600] !h-[45px] text-[18px] `}
          >
            Come Back
          </div>
        </Link>
      </div>
      <div className="w-full flex items-center justify-between pt-6 ">
        <h5 className="text-[#3d3dde]">
          Order ID : <sapn>#{data?._id?.slice(0, 8)}</sapn>
        </h5>
        <h5 className="text-[#4848ef]">
          Placed ON : <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>
      {/* all order item */}
      <br /> <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5" key={index}>
            <img
              src={`${backend_url}/${item.images[0]}`}
              alt=""
              className="w-[150px] h-[150px]"
            />
            <div className="w-full ml-5">
              <h5 className="pl-3 text-[20px] ">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#745ced]">
                {item.discountPrice} DT x {item.qty}
              </h5>
            </div>
          </div>
        ))}
      <div className="border-t w-full text-right ">
        <h5 className="pt-3 text-[18px] ">
          Total Price : <strong>DT {data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <br />
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[60%] ">
          <h4 className="pt-3 text-[20px] font-[600]">
            ShippingAddress
            <h4 className="pt-3 text-[20px]">
              {data?.shippingAddress.address1}
            </h4>
          </h4>
          <h4 className="text-[20px]">{data?.shippingAddress.country}</h4>
          {/* <h4 className="text-[20px]">{data?.shippingAddress.city}</h4> */}

          <h4 className=" pt-3 text-[20px]">{data?.user?.email}</h4>
        </div>
        <div className="w-full 800px:w-[40%] ">
          <h4 className="pt-3 text-[20px] ">Payment Info:</h4>
          <h4>
            Status:
            <span className="text-[15px]">
              <strong>(Not Paid)<br/>Cash On delivery </strong>
            </span>{" "}
          </h4>
        </div>
      </div>
      <br />

      <Link to="/">
        <div className={`${styles.button} text-white`}>Send Message</div>
      </Link>
      <br />
      
    </div>
  );
};

export default UserOrderDetails;
