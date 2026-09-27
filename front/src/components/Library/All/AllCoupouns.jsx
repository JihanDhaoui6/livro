// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect, useState } from "react";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { deleteBook, getAllBooksLibrarie } from "../../../redux/actions/book";

// import Loader from "../../Layout/Loader";
// // import styles from "../../../styles/style";
// import { RxCross1 } from "react-icons/rx";
// import axios from "axios";
// import { server } from "../../../server";
// import { toast } from "react-toastify";
// import styles from "../../../styles/style";

// const AllCoupouns = () => {
//   const [open, setOpen] = useState(false);
    
//   const [name, setName] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [coupouns, setCoupouns] = useState([]);
//   const [selectedBooks, setSelectedBooks] = useState(null);
//   const [value, setValue] = useState("");
//   const { seller } = useSelector((state) => state.seller);
//   const { books } = useSelector((state) => state.books);

//   const dispatch = useDispatch();
 
//   const handleDelete = async (id) => {
//     axios.delete(`${server}/coupon/delete-coupon/${id}`,{withCredentials: true}).then((res) => {
//       toast.success("Coupon code deleted succesfully!")
//     })
//     window.location.reload();
//   };
//   // const handleDelete = (id) => {
//   //   dispatch(deleteBook(id));
//   //   window.location.reload();
//   // };


//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${server}/coupounCode/get-coupoun/${seller._id}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setIsLoading(false);
//         console.log(res.data);
//         setCoupouns(res.data.coupounsCodes);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//       });
//   }, [dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const librarieId = req.seller.id;
//     await axios
//       .post(
//         `${server}/coupounCode/create-coupoun-code`,
//         {
//           name,
//           selectedBooks,
//           value,
//           librarieId: seller._id,
//         },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         toast.success("coupon code created !");
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//         setOpen(false);
//         window.location.reload();
//       });
//   };
//   const columns = [
//     { field: "id", headerName: "Book Id", minWidth: 150, flex: 0.7 },
//     {
//       field: "name",
//       headerName: "Name",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       minWidth: 100,
//       flex: 0.6,
//     },
   
    
//     {
//       field: "Delete",
//       flex: 0.8,
//       minWidth: 120,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <div
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 display: "inline-block",
//               }}
//             >
//               <Button onClick={() => handleDelete(params.id)}>
//                 <AiOutlineDelete size={20} color="red" />
//               </Button>
//             </div>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   coupouns &&
//   coupouns.length > 0 &&
//   coupouns.forEach((item) => {
//     row.push({
//       // id: item._id,
//       name: item.name,
//       price: item.value + "%",
//       sold: item?.sold_out,
//     });
//   });
// console.log(coupouns)
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <div className="w-full flex justify-end ">
//             <div
//               className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[25px] bg-[#3d2ceda5] mr-3 mb-3`}
//             >
//               <span className="text-white" onClick={() => setOpen(true)}>
//                 Create coupon code
//               </span>
//             </div>
//           </div>

//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//           {open && (
//             <div
//               className="fixed top-0 left-0 w-full
//                  h-screen bg-[#00000070] z-[2000] flex items-center justify-center "
//             >
//               <div className="w-[90%] 800px:w-[30%] h-[60vh] bg-[#7350f2] rounded-md shadow p-3">
//                 <div className="w-full flex justify-end">
//                   <RxCross1
//                     size={30}
//                     className="cursor-pointer"
//                     onClick={() => setOpen(false)}
//                   />
//                 </div>
//                 <h5 className="text-[30px] font-Poppins text-center">
//                   Create Coupon code
//                 </h5>
//                 <form onSubmit={handleSubmit} aria-required={true}>
//                   <br />
//                   <div>
//                     <label className="pb-2">
//                       Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={name}
//                       required
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[15px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
//                       placeholder="Give your coupoun code..."
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">
//                       Discount Percentenge{" "}
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="value"
//                       value={value}
//                       required
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[15px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
//                       placeholder="Give your coupoun code value..."
//                       onChange={(e) => setValue(e.target.value)}
//                     />
//                   </div>
//                   <br />
               
//                    <div>
//                     <label className="pb-2">Selected Book</label>
//                     <select
//                       className="w-full mt-2 border h-[35px] rounded-[15px] bg-[#e7cbcb]"
//                       value={selectedBooks}
//                       onChange={(e) => setSelectedBooks(e.target.value)}
//                     >
//                       <option value="Choose your selected books">
//                         Choose a selected book
//                       </option>
//                       {books &&
//                         books.map((i) => (
//                           <option value={i.name} key={i.name}>
//                           {i.name}
//                         </option>
//                         ))}
//                     </select>
//                   </div> 
//                   <br />
//                   <div>
//                     <input
//                       type="submit"
//                       value="Create"
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[15px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default AllCoupouns;

import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../../server";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import Loader from "../../Layout/Loader";
import styles from "../../../styles/style";

const AllCoupouns = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [coupouns, setCoupouns] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState("");
  const [value, setValue] = useState("");
  const { seller } = useSelector((state) => state.seller);
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${server}/coupounCode/delete-coupoun/${id}`, {
        withCredentials: true,
      });
      toast.success("Coupon code deleted successfully!");
      setCoupouns(coupouns.filter((coupoun) => coupoun._id !== id));
    } catch (error) {
      toast.error("Failed to delete coupon code.");
    }
  };

  useEffect(() => {
    const fetchCoupons = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${server}/coupounCode/get-coupoun/${seller._id}`, {
          withCredentials: true,
        });
        setCoupouns(res.data.couponCodes);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to fetch coupon codes.");
      }
    };

    if (seller) {
      fetchCoupons();
    }
  }, [seller]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${server}/coupounCode/create-coupoun-code`,
        {
          name,
          selectedBooks,
          value,
          librarieId: seller._id,
        },
        { withCredentials: true }
      );
      toast.success("Coupon code created!");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const columns = [
    { field: "id", headerName: "Coupon Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "value",
      headerName: "Value",
      minWidth: 100,
      flex: 0.6,
      renderCell: (params) => `${params.value}%`,
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button onClick={() => handleDelete(params.id)}>
            <AiOutlineDelete size={20} color="red" />
          </Button>
        );
      },
    },
  ];

  const rows = coupouns.map((coupoun) => ({
    id: coupoun._id,
    name: coupoun.name,
    value: coupoun.value,
  }));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <div className="w-full flex justify-end ">
            <div
              className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[25px] bg-[#3d2ceda5] mr-3 mb-3`}
              onClick={() => setOpen(true)}
            >
              <span className="text-white">Create coupon code</span>
            </div>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
          {open && (
            <div
              className="fixed top-0 left-0 w-full
                 h-screen bg-[#00000070] z-[2000] flex items-center justify-center "
            >
              <div className="w-[90%] 800px:w-[30%] h-[50vh] bg-[#c2c2f9] rounded-md shadow p-3">
                <div className="w-full flex justify-end">
                  <RxCross1
                    size={30}
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <h5 className="text-[30px] font-Poppins text-center">
                  Create Coupon code
                </h5>
                <form onSubmit={handleSubmit} aria-required={true}>
                  <br />
                  <div>
                    <label className="pb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[15px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                      placeholder="Give your coupon code..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div><br /><br />
                  <div>
                    <label className="pb-2">
                      Discount Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="value"
                      value={value}
                      required
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[15px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                      placeholder="Enter coupon value..."
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  {/* <div>
                    <label className="pb-2">Selected Book</label>
                    <select
                      className="w-full mt-2 border h-[35px] rounded-[15px] bg-[#e7cbcb]"
                      value={selectedBooks}
                      onChange={(e) => setSelectedBooks(e.target.value)}
                    >
                      <option value="">Choose a selected book</option>
                      {books &&
                        books.map((book) => (
                          <option value={book.name} key={book._id}>
                            {book.name}
                          </option>
                        ))}
                    </select>
                  </div> */}

                  <br /><br />
                  <div>
                    <input
                      type="submit"
                      value="Create"
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[15px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AllCoupouns;


