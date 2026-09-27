
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../../../styles/style";
import BookDetailsCart from '../BookDetailsCard/BookDeatailsCard'
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,

  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import { backend_url } from "../../../server";

const LivreCard = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };
  
  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };
  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("bokk already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("book stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("book added to cart successfully!");
      }
    }
  };



  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/livre/${data._id}`}>
        <h3 className="text-[#444] bg-[#f6dc4c] w-20 rounded-[12px] flex justify-center items-center">{data.post}</h3>

          <img
            //  src={`${data.images && data.images[0]?.url}`}
            // src={`${data.images && data.images[0]?.url}`}
            // src={data.images[0].url}
            src={`${backend_url}${data.images[0]}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to={`/librarie/preview/${data?.librarie._id}`}>
          <h5 className={`${styles.shop_name}`}>{data.librarie.name}</h5>
        </Link>
        <Link to={`/livre/${data._id}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>




          <div className="flex">
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiOutlineStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
          </div>
          <div className="py-2 flex items-center justify-between ">
            <div className="flex">
              <h5 className={`${styles.livreDiscountPrice}`}>
                {data.originalPrice} DT
               
                {/* {data.originalPrice  === 0 ? data.originalPrice : data.discountPrice} DT */}
              </h5>
              <h4 className={`${styles.price}`}>
                {/* {data.originalPrice  ? data.originalPrice  + " dt" : null} */}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
            {data?.sold_out} sold
            </span>
          </div>
        </Link>
        {/* side option iconsssss */}
        <div className="">
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="add to wishlist"
            />
          )}
          <AiOutlineEye
          size={22}
              className="cursor-pointer absolute right-2 top-14"
              onClick={() => setOpen(!open)}
              color= "#333"
              title="Have a Quick view"
            />
            <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data)}
            color= "#444"
            title="Add to Cart"
            />
          {
            open ? (
              <BookDetailsCart open={open} setOpen={setOpen} data={data}/>
            ): null
          }
        </div>
      </div>
    </>
  );
};

export default LivreCard;






































// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/style";
// import BookDetailsCart from '../BookDetailsCard/BookDeatailsCard'
// import {
//   AiFillHeart,
//   AiFillStar,
//   AiOutlineEye,
//   AiOutlineHeart,
//   AiOutlinePropertySafety,
//   AiOutlineShoppingCart,
//   AiOutlineStar,
// } from "react-icons/ai";

// const LivreCard = ({ data }) => {
//   const [click, setClick] = useState(false);
//   const [open, setOpen] = useState(false);

//   const d = data.name;
//   const livre_name = d.replace(/\s+/g, "-");
//   return (
//     <>
//       <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
//         <div className="flex justify-end"></div>
//         <Link to={`/livre/${livre_name}`}>
//           <img
//             src={data.image_Url[0].url}
//             alt=""
//             className="w-full h-[170px] object-contain"
//           />
//         </Link>
//         <Link to="/">
//           <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
//         </Link>
//         <Link to={`/livre/${livre_name}`}>
//           <h4 className="pb-3 font-[500]">
//             {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
//           </h4>
//           <div className="flex">
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               color="#F6BA00"
//               size={20}
//             />
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               color="#F6BA00"
//               size={20}
//             />
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               color="#F6BA00"
//               size={20}
//             />
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               color="#F6BA00"
//               size={20}
//             />
//             <AiOutlineStar
//               className="mr-2 cursor-pointer"
//               color="#F6BA00"
//               size={20}
//             />
//           </div>
//           <div className="py-2 flex items-center justify-between ">
//             <div className="flex">
//               <h5 className={`${styles.livreDiscountPrice}`}>
//                 {data.price === 0 ? data.price : data.discount_price} DT
//               </h5>
//               <h4 className={`${styles.price}`}>
//                 {data.price ? data.price + " dt" : null}
//               </h4>
//             </div>
//             <span className="font-[400] text-[17px] text-[#68d284]">
//               {data.total_sell} sold
//             </span>
//           </div>
//         </Link>
//         {/* side option iconsssss */}
//         <div className="">
//           {click ? (
//             <AiFillHeart
//               size={22}
//               className="cursor-pointer absolute right-2 top-5"
//               onClick={() => setClick(!click)}
//               color={click ? "red" : "#333"}
//               title="Remove from wishlist"
//             />
//           ) : (
//             <AiOutlineHeart
//               size={22}
//               className="cursor-pointer absolute right-2 top-5"
//               onClick={() => setClick(!click)}
//               color={click ? "red" : "#333"}
//               title="add to wishlist"
//             />
//           )}
//           <AiOutlineEye
//           size={22}
//               className="cursor-pointer absolute right-2 top-14"
//               onClick={() => setOpen(!open)}
//               color= "#333"
//               title="Quick view"
//             />
//             <AiOutlineShoppingCart
//             size={25}
//             className="cursor-pointer absolute right-2 top-24"
//             onClick={() => setOpen(!open)}
//             color= "#444"
//             title="Add to Cart"
//             />
//           {
//             open ? (
//               <BookDetailsCart open={open} setOpen={setOpen} data={data}/>
//             ): null
//           }
//         </div>
//       </div>
//     </>
//   );
// };

// export default LivreCard;


