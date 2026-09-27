// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getAllOrdersOfLibrarie } from "../../redux/actions/order";
// import { AiOutlineArrowRight } from "react-icons/ai";
// const LibrarieAllOrders = () => {

//     const { orders} = useSelector((state) => state.order);
//   const { seller } = useSelector((state) => state.seller);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllOrdersOfLibrarie(seller._id));
//   }, [dispatch]);

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
//             <Link to={`/order/${params.id}`}>
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
//         itemsQty: item.cart.length,
//         total:  item.totalPrice + " dt ",
//         status: item.status,
//       });
//     });
// console.log(orders,"rrrrrrr")
//   return (
//     <>
//      (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       )
//     </>
//   );
// };

// export default LibrarieAllOrders



// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect } from "react";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getAllBooksLibrarie, deleteBook } from "../../redux/actions/book";
// import Loader from "../Layout/Loader";

// const AllBooks = () => {
//   const { book, isLoading } = useSelector((state) => state.book);
//   const { seller } = useSelector((state) => state.seller);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllBooksLibrarie(seller._id));
//   }, [dispatch, seller._id]);

//   const handleDelete = (id) => {
//     dispatch(deleteBook(id));
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
//       field: "Stock",
//       headerName: "Stock",
//       type: "number",
//       minWidth: 80,
//       flex: 0.5,
//     },

//     {
//       field: "sold",
//       headerName: "Sold out",
//       type: "number",
//       minWidth: 130,
//       flex: 0.6,
//     },
//     {
//       field: "Preview",
//       flex: 0.8,
//       minWidth: 100,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/book/${params.id}`}>
//               <Button >
//                 <AiOutlineEye size={20} color="blue"/>
//               </Button>
//             </Link>
//           </>
//         );
//       },
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
//          <div style={{ border: '1px solid black', padding: '10px', display: 'inline-block'  }}>
//             <Button onClick={() =>handleDelete(params._id)}>
//               <AiOutlineDelete size={20} color="red"/>
//             </Button>
//             </div>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   book &&
//     book.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "DT  " + item.discountPrice,
//         Stock: item.Stock,
//         sold: item?.sold_out,
//       });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
         
          
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
          
//         </div>
//       )}
//     </>
//   );
// };

// export default AllBooks;


// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect } from "react";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { deleteBook, getAllBooksLibrarie } from "../../redux/actions/book";
// import Loader from "../Layout/Loader";

// const AllBooks = () => {
//   const { book, isLoading } = useSelector((state) => state.book);
//   const { seller } = useSelector((state) => state.seller);
//   const dispatch = useDispatch();

//   useEffect(() => {
    
//       dispatch(getAllBooksLibrarie(seller._id));
    
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteBook(id));
//     window.location.reload();
//   };

//   const columns = [
//     { field: "id", headerName: "Book Id", minWidth: 150, flex: 0.7 },
//     { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 },
//     { field: "price", headerName: "Price", minWidth: 100, flex: 0.6 },
//     { field: "Stock", headerName: "Stock", type: "number", minWidth: 80, flex: 0.5 },
//     { field: "sold", headerName: "Sold out", type: "number", minWidth: 130, flex: 0.6 },
    
//     {
//       field: "Preview",
//       flex: 0.8,
//       minWidth: 100,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/livre/${params.id}`}>
//               <Button>
//                 <AiOutlineEye size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
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
//             <Button onClick={() => handleDelete(params.id)}>
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   book &&
//     book.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "DT  " + item.discountPrice,
//         Stock: item.stock,
//         sold: item?.sold_out,
//       });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default AllBooks;*



import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { getAllOrdersLibrarie, getAllOrdersOfLibrarie } from "../../redux/actions/order";

const AllOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfLibrarie(seller._id));
  }, [dispatch]);

;

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
            <Link to={`/order/${params.id}`}>
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

// console.log(orders,'rrrrrrr')
  return (
    <>
    
        <div className="w-[990vh] mx-8 mt-1 bg-[#e3e3e61b] items-center mr-1 ml-36">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      
    </>
  );
};

export default AllOrders;