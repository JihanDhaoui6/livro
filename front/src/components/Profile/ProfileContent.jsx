import React, { useEffect, useState } from "react";
import { backend_url, server } from "../../server"; // pour ,, profile image
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { GoIssueTracks } from "react-icons/go";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { MdOutlineTrackChanges } from "react-icons/md";
import { updateUserInformation } from "../../redux/actions/user";
import { toast } from "react-toastify";
import axios from "axios";
import { getAllOrdersOfUser } from "../../redux/actions/order";
const ProfileContent = ({ active }) => {
  const { user, error } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, phoneNumber, password));
  };
  return (
    <div className="w-full ">
      {/* profile page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full ">
            <div className="relative ">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full  object-cover border-[3px] border-[#3ad132] "
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="!w-full 800px:flex block pb-3 ">
                <div className="!w-[100%] 800px:w-[50%] ">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] !mb-4 !800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="!w-[100%] !800px:w-[50%] ">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input}  !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block pb-3 ">
                <div className="w-[100%] 800px:w-[50%] ">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0 `}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[100%] 800px:w-[50%] ">
                  <label className="block pb-2">Password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0 `}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* order Page */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>  
      )}
      {/* refunds Page */}
      {/* {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )} */}

      {/* tracking  Page */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}
      {/* paiment mth  Page */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}
      {/* usr address  Page */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const {user} = useSelector((state) => state.user);

  const {orders} = useSelector((state) => state.order);
  const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getAllOrdersOfUser(user._id));
},[])
  
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "DT " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};
// const AllRefundOrders = () => {
//   const orders = [
//     {
//       _id: "7463hvbfbhfbrtr28820221",
//       orderItems: [
//         {
//           name: "Iphone 14 pro nax",
//         },
//       ],
//       totalPrice: 120,
//       orderStatus: "Processing",
//     },
//   ];
//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },

//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/user/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   orders &&
//     orders.forEach((item) => {
//       row.push({
//         id: item._id,
//         itemsQty: item.orderItems.length,
//         total: "DT " + item.totalPrice,
//         status: item.status,
//       });
//     });

//   return (
//     <div className="pl-8 pt-1 ">
//       <DataGrid
//         rows={row}
//         columns={columns}
//         pageSize={10}
//         autoHeight
//         disableSelectionOnClick
//       />
//     </div>
//   );
// };
const TrackOrder = () => {
  
  const {user} = useSelector((state) => state.user);

  const {orders} = useSelector((state) => state.order);
  const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getAllOrdersOfUser(user._id));
},[])
  
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button className={`${styles.button} !bg-[#10e361b9] !w-[20px]`}>
                <GoIssueTracks  size={20} className="bo"/>
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "DT " + item.totalPrice,
        status: item.status,
      });
    });
    
     
    
    
  return (
    <div className="pl-8 pt-1 ">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `${server}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.success);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="w-full px-5">
      <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col item-center justify-center items-center"
        >
          <div className="w-[100%] 800px:w-[50%] mt-5">
            <label className="block pb-2">Your Old password</label>
            <input
              type="password"
              className={`${styles.input} !w-full !mb-4 !800px:mb-0`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">Your New password</label>
            <input
              type="password"
              className={`${styles.input} !w-full !mb-4 !800px:mb-0`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[50%] mt-5">
            <label className="block pb-2">Confirm password</label>
            <input
              type="password"
              className={`${styles.input} !w-full !mb-4 !800px:mb-0`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            className={`w-[25%] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
            required
            value="Update"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};
const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Address
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10  ">
        <div className="flex items-center ">
          <h5 className="pl-5 font-[600] ">Default</h5>
        </div>
        <div className="pl-8 flex items-center ">
          <h6>1234 rue taher sfar 201, Metouia</h6>
        </div>
        <div className="pl-8 flex items-center ">
          <h6>(216) 22 333 555</h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8 ">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

//log out

export default ProfileContent;
