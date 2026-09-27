// // import { Button } from "@material-ui/core";
// // import { DataGrid } from "@material-ui/data-grid";
// // import React, { useEffect } from "react";
// // import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Link } from "react-router-dom";


// // import Loader from "../Layout/Loader";
// // import { deleteEvent, getAllEventsLibrarie } from "../../redux/actions/event";

// // const AllEvents = () => {
// //   const { events, isLoading } = useSelector((state) => state.events);
// //   const { seller } = useSelector((state) => state.seller);

// //   const dispatch = useDispatch();
// // const handleDelete = (id)=> {
  
// //   dispatch(deleteEvent(id))
// //   window.location.reload();
// // }
// //   useEffect(() => {
// //     dispatch(getAllEventsLibrarie(seller.id));
// //   }, [dispatch]);

  

// //   const columns = [
// //     { field: "id", headerName: "Book Id", minWidth: 150, flex: 0.7 },
// //     {
// //       field: "name",
// //       headerName: "Name",
// //       minWidth: 180,
// //       flex: 1.4,
// //     },
// //     {
// //       field: "price",
// //       headerName: "Price",
// //       minWidth: 100,
// //       flex: 0.6,
// //     },
// //     {
// //       field: "Stock",
// //       headerName: "Stock",
// //       type: "number",
// //       minWidth: 80,
// //       flex: 0.5,
// //     },

// //     {
// //       field: "sold",
// //       headerName: "Sold out",
// //       type: "number",
// //       minWidth: 130,
// //       flex: 0.6,
// //     },
// //     {
// //       field: "Preview",
// //       flex: 0.8,
// //       minWidth: 100,
// //       headerName: "",
// //       type: "number",
// //       sortable: false,
// //       renderCell: (params) => {
// //         return (
// //           <>
// //             <Link to={`/events/${params.id}`}>
// //               <Button >
// //                 <AiOutlineEye size={20} color="blue"/>
// //               </Button>
// //             </Link>
// //           </>
// //         );
// //       },
// //     },
// //     {
// //       field: "Delete",
// //       flex: 0.8,
// //       minWidth: 120,
// //       headerName: "",
// //       type: "number",
// //       sortable: false,
// //       renderCell: (params) => {
// //         return (
// //           <>
// //          <div style={{ border: '1px solid black', padding: '10px', display: 'inline-block'  }}>
// //             <Button onClick={() =>handleDelete(params._id)}>
// //               <AiOutlineDelete size={20} color="red"/>
// //             </Button>
// //             </div>
// //           </>
// //         );
// //       },
// //     },
// //   ];

// //   const row = [];

// //   events &&
// //     events.forEach((item) => {
// //       row.push({
// //         id: item._id,
// //         name: item.name,
// //         price: "DT  " + item.discountPrice,
// //         Stock: item.Stock,
// //         sold: item?.sold_out,
// //       });
// //     });

// //   return (
// //     <>
// //       {isLoading ? (
// //         <Loader />
// //       ) : (
// //         <div className="w-full mx-8 pt-1 mt-10 bg-white">
// //           <DataGrid
// //             rows={row}
// //             columns={columns}
// //             pageSize={10}
// //             disableSelectionOnClick
// //             autoHeight
// //           />
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default AllEvents;
// import React, { useEffect } from "react";
// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import { deleteEvent, getAllEventsLibrarie } from "../../../redux/actions/event";

// const AllEvents = () => {
//   const { events, isLoading } = useSelector((state) => state.events);
//   const { seller } = useSelector((state) => state.seller);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllEventsLibrarie(seller._id));
//   }, [dispatch, seller._id]);

//   const handleDelete = (id) => {
//     dispatch(deleteEvent(id));
//     window.location.reload();
//   };

//   const columns = [
//     { field: "id", headerName: "Event Id", minWidth: 150, flex: 0.7 },
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
//     //   renderCell: (params) => (

//     //     <Link to={`/events/${params.id}`}>
//     //       <Button>
//     //         <AiOutlineEye size={20} color="blue" />
//     //       </Button>
//     //     </Link>
//     //   ),
//     // },
//     renderCell: (params) => {
//       const d = params.row.name;
//       const book_name = d.replace(/\s+/g, "-");
//       return (
//         <>
//           <Link to={`/livre/${book_name}`}>
//             <Button>
//               <AiOutlineEye size={20} />
//             </Button>
//           </Link>
//         </>
//       );
//     },
//   },
//     {
//       field: "Delete",
//       flex: 0.8,
//       minWidth: 120,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       // renderCell: (params) => (
//       //   <div style={{ border: '1px solid black', padding: '10px', display: 'inline-block' }}>
//       //     <Button onClick={() => handleDelete(params.id)}>
//       //       {/* .row */}
//       //       <AiOutlineDelete size={20} color="red" />
//       //     </Button>
//       //   </div>
//       // ),
//       renderCell: (params) => {
//         return (
//           <>
//             <Button
//             onClick={() => handleDelete(params.id)}
//             >
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];
//   const row = [];

//   events &&
//   events.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "dt" + item.discountPrice,
//         Stock: item.stock,
//         sold: item.sold_out,
//       });
//     });
//   return (
//     <>
    
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={events}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
     
//     </>
//   );
// };

// export default AllEvents;


















// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect } from "react";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { deleteEvent, getAllEvents, getAllEventsLibrarie } from "../../../redux/actions/event";

// import Loader from "../../Layout/Loader";

// const AllEvents = () => {
//   const { events } = useSelector((state) => state.events);
//   const { seller } = useSelector((state) => state.seller);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllEventsLibrarie(seller._id));
    
//   },[dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteEvent(id));
//     window.location.reload();
//   }

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
//         const d = params.row.name;
//         const book_name = d.replace(/\s+/g, "-");
//         return (
//           <>
//             <Link to={`/livre/${book_name}`}>
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
//             <Button
//             onClick={() => handleDelete(params.id)}
//             >
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   events &&
//   events.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "dt " + item.discountPrice,
//         Stock: item.stock,
//         sold: item.sold_out,
//       });
//     });
// console.log(events)
//   return (
//     <>
      
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
    
//     </>
//   );
// };

// export default AllEvents;

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
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { deleteEvent, getAllEventsLibrarie } from "../../../redux/actions/event";


const AllEvents = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsLibrarie(seller._id));
  }, [dispatch, seller._id]);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    window.location.reload();
  };
  console.log(events);
  const columns = [
    { field: "id", headerName: "Book Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const book_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/livre/${book_name}`}>
              <Button>
                <AiOutlineEye size={25}  />
              </Button>
            </Link>
          </>
        );
      },
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
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20}  />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  events &&
    events.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price:  item.originalPrice +  " Dt ",
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
    
        <div className="w-full mx-8 pt-1  bg-white mt-20">
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

export default AllEvents;
