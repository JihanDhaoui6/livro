// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { backend_url, server } from '../../server';
// import styles from '../../styles/style';
// import axios from 'axios';
// import { getAllBooksLibrarie } from '../../redux/actions/book';
// import { getAllEventsLibrarie } from '../../redux/actions/event';

// const LibraryInfo = ({isOwner}) => {

//   const {products} = useSelector((state) => state.products);
//     const { id } = useParams();
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(getAllBooksLibrarie(id));
//       dispatch(getAllEventsLibrarie(id));
//     }, [dispatch]);
  

//     const logoutHandler = async () => {
//       axios.get(`${server}/librarie/logout`,{
//         withCredentials: true,
//       });
//       window.location.reload();
//     };
  
//     return (
//     <div>
//         <div className='w-full py-5'>
//       <div className="w-full flex items-center justify-center ">
//             <img 
//             src={`${backend_url}${seller?.avatar}`}
//             alt=""
//             className="w-[150px] h-[150px] object-cover rounded-full"
//             />
//       </div>
//       <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
//         <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
//           {seller.description}
//         </p>
//     </div>
//     <div className="p-3">
//         <h5 className="font-[600]">Address</h5>
//         <h4 className="text-[#000000a6]">{seller.address}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Phone Number</h5>
//         <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Total Books</h5>
//         <h4 className="text-[#000000a6]">10</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Library Ratings</h5>
//         <h4 className="text-[#000000b0]">3/5</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Joined on</h5>
//         <h4 className="text-[#000000b0]">{seller.createdAt.slice(0,10)}</h4>
//       </div>
//       {
//         isOwner && (
//             <div className='py-3 px-4 '>
//                 <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px] `}>
//                     <span className='text-white'>Edit Library</span>
//                 </div>
//                 <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px] `}
//                 onClick={logoutHandler}
//                 >
//                     <span className='text-white'>Log Out</span>
//                 </div>
//             </div>
//         )
//       }
//     </div>

//   )
// }

//export default LibraryInfo











// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/style";
// import Loader from "../Layout/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllBooksLibrarie } from "../../redux/actions/book";

// const LibraryInfo = ({ isOwner }) => {
//   const [data,setData] = useState({});
//   const {book} = useSelector((state) => state.book);
//   const [isLoading,setIsLoading] = useState(false);
//   const {id} = useParams();


//   useEffect(() => {
//     setIsLoading(true);
//     axios.get(`${server}/libarrie/get-librarie-info/${id}`).then((res) => {
//      setData(res.data.librarie);
//      setIsLoading(false);
//     }).catch((error) => {
//       console.log(error);
//       setIsLoading(false)
//     })
//   }, [])
  

//   const logoutHandler = async () => {
//     axios.get(`${server}/librarie/logout`,{
//       withCredentials: true,
//     });
//     window.location.reload();
//   };

//   // const totalReviewsLength =
//   //   book &&
//   //   book.reduce((acc, product) => acc + product.reviews.length, 0);

//   // const totalRatings = book && book.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

//   // const averageRating = totalRatings / totalReviewsLength || 0;

//   return (
//    <>
//    {
//     isLoading  ? (
//       <Loader />
//     ) : (
//       <div>
//       <div className="w-full py-5">
//         <div className="w-full flex item-center justify-center">
//           <img
//             // src={`${data.avatar?.url}`}
//             src={`${backend_url}${book?.librarie?.avatar}`}
//             alt=""
//             className="w-[150px] h-[150px] object-cover rounded-full"
//           />
//         </div>
//         <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
//         <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
//           {data.description}
//         </p>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Address</h5>
//         <h4 className="text-[#000000a6]">{data.address}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Phone Number</h5>
//         <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Total Products</h5>
//         <h4 className="text-[#000000a6]">{book && book.length}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Shop Ratings</h5>
//         <h4 className="text-[#000000b0]">averageRating/5</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Joined On</h5>
//         {/* <h4 className="text-[#000000b0]">{data.createdAt.slice(0, 10)}</h4> */}
//       </div>
//       {isOwner && (
//         <div className="py-3 px-4">
//            <Link to="/settings">
//            <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
//             <span className="text-white">Edit Library </span>
//           </div>
//            </Link>
//           <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
//           onClick={logoutHandler}
//           >
//             <span className="text-white">Log Out</span>
//           </div>
//         </div>
//       )}
//     </div>
//     )
//    }
//    </>
//   );
// };

// export default LibraryInfo;










import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backend_url, server } from "../../server";
import styles from "../../styles/style";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksLibrarie } from "../../redux/actions/book";

const LibraryInfo = ({ isOwner }) => {
  const [data,setData] = useState({});
  const {books} = useSelector((state) => state.books);
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksLibrarie(id));
    setIsLoading(true);
    axios.get(`${server}/librarie/get-librarie-info/${id}`).then((res) => {
     setData(res.data.librarie);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [])
  
  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/librarie/logout`, { withCredentials: true });
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
 
  return (
    <>
      
        <div>
          <div className="w-full py-5">
            <div className="w-full flex item-center justify-center">
              <img
               src={`${backend_url}${data.avatar}`}
            
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {data.description}
            </p>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{data.address}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Total books</h5>
            <h4 className="text-[#000000a6]">{books && books.length}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Library Ratings</h5>
            <h4 className="text-[#000000b0]">4/5</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
          </div>
        
         
        </div>
     
    </>
  );
};

export default LibraryInfo;
