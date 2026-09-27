

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/style";
import { livreData } from "../../static/data";
import { categoriesData } from "../../static/data";
import logo from "../../../src/assets/homepage/logo.png";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";
import foto from "../../assets/homepage/Books (2).jpg";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../Cart/Cart";

import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import { MdManageSearch } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import UserInbox from "../../page/UserInbox.jsx";
import Dropdwn from "../Profile/Dropdwn.jsx";
const Header = ({activeHeading}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const {isSeller} = useSelector((state)=> state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const [openWishlist, setOpenWishlist] = useState(false);
  const { books} = useSelector((state) => state.books);
// const {message} = useSelector((state)=>state.message)
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPro,setOpenPro] = useState(false);
  
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredLivres =
    books &&
    books.filter((book) =>
        book.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredLivres);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
       <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src={logo}
                className="w-[22vh] h-[10vh]"
                alt=""
              />
             
            </Link>
          </div>

{/* ajouter les icons de contact  */}
<div className="flex items-center space-x-2  rounded-full">
      <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-[22px] h-[22px] text-[#e98a5ad3]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"></path>
      </svg>
      <span>(+216) 23109145</span>
      <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-[22px] h-[22px] text-[#e98a5ad3]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
      </svg>
      <span>contact@gmail.com</span>
    </div>



        
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full !bg-[#ff9e36c7] h-[70px] `}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* ajouter buton de role  */}
          <div className={`${styles.button} !bg-indigo-500`}>
            <Link to="/librarie-create\">
              <h1 className="text-[#fff] flex items-center">
                {isSeller ?"Dashboard" : "Start As Seller"} 
              </h1>
            </Link>
          </div>

         
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="w-[15%] relative">
            <input
              type="text"
              placeholder="search for book....."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] px-2 w-full border-[#ead876] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer "
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 ">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/livre/${i._id}`} >
                        <div className="w-full flex items-start-py-3">
                          {/* <img
                     src={`${i.images[0]?.url}`}
                            //  src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px] "
                          /> */}
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
{/* <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div> */}
          <div className="flex">
           
{/* message liste */}

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

          
            
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px] "
                onClick={() => setOpenCard(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                //  <Link to="/profile"></Link>
                  <div>
                    <img
                      src={`${backend_url}${user.avatar}`}
                      
                      className="w-[40px] h-[40px] rounded-full"
                      onClick={() => setOpenPro ((prev) => !prev)}
                      alt=""
                    />
                   {
                    openPro&& (
                      <div className="dropDownProfile before:absolute before:top-[-0.&px] before:right-[0.3rem] before:w-3 before:h-3 before:rotate-45 before:bg-white">
                      <Dropdwn/>
                      </div>
                    )
                   }
                  </div>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>
            {openCard && <Cart setOpenCard={setOpenCard} />}
                  {/* {openMessage && <Message setOpenMessage={setOpenMessage} />} */}
            {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
         
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src={foto}
                alt=""
                className="mt-3 cursor-pointer w-[150px] h-[50px]"
              />
            </Link>
          </div>
          <div>
            <div className="relative mr-[20px] ">
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className={` fixed w-full bg-[#b8b8c7] z-20 h-full top-0 left-0`}>
          <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
            <div className="w-full justify-between flex pr-3 ">
              <div>
                <div className="relative mr-[15px] ">
                  <AiOutlineHeart size={30} className="mt-5 ml-3" />
                  <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    3
                  </span>
                </div>
              </div>

              <RxCross1
                size={30}
                className="ml-4 mt-5"
                onClick={() => setOpen(false)}
              />
            </div>
           
            <Navbar active={activeHeading} />
            <div className={`${styles.button} ml-4 !rounded-[4px]`}>
              <Link to="/dashboard">
                <h1 className="text-[#fff] flex items-center">
                  Start as Seller <IoIosArrowForward className="ml-1" />
                </h1>
              </Link>
            </div>
            <br />
            <br />
            <br />
            <div className="!flex w-full justify-center ">
              {isAuthenticated ? (
                <div>
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      alt=""
                      className="w-[65px] h-[65px] rounded-full border-[3px] border-[#4ceb69] "
                    />
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="!text-[18px] !pr-[10px] text-[#000000b7]"
                  >
                    Login /
                  </Link>
                  <Link
                    to="/sign-up"
                    className="!text-[18px] !pr-[10px] text-[#000000b7]"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../styles/style";
// import { livreData } from "../../static/data";
// import { categoriesData } from "../../static/data";
// //import dropDown from "./dropDown";
// import {
//   AiOutlineHeart,
//   AiOutlineSearch,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { BiMenuAltLeft } from "react-icons/bi";
// import foto from "../../assets/Capture d'écran 2024-03-05 232140.png";
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";
// import { backend_url } from "../../server";
// import Cart from "../Cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
// import { RxCross1 } from "react-icons/rx";

// const Header = (activeHeading) => {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { cart } = useSelector((state) => state.cart);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchData, setSearchData] = useState([]);
//   const [active, setActive] = useState(false);
//   const [dropDown, setDropDown] = useState(false);
//   const [openCard, setOpenCard] = useState(false);
//   const [openWishlist, setOpenWishlist] = useState(false);

//   const [open, setOpen] = useState(false);
//   //console.log(user);

//   const handleSearchChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredLivres =
//       livreData &&
//       livreData.filter((livre) =>
//         livre.name.toLowerCase().includes(term.toLowerCase())
//       );
//     setSearchData(filteredLivres);
//   };
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 70) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   });
//   return (
//     <>
//       <div className={`${styles.section}`}>
//       <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
//           <div>
//             <Link to="/">
//               <img src={foto} alt="" />
//             </Link>
//           </div>

//           {/*/serqrch box*/}
//           <div className="w-[50%] relative">
//             <input
//               type="text"
//               placeholder="rechercher un livre....."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="h-[40px] px-2 w-full border-[#ead876] border-[2px] rounded-md"
//             />
//             <AiOutlineSearch
//               size={30}
//               className="absolute right-2 top-1.5 cursor-pointer "
//             />
//             {searchData && setSearchData.length !== 0 ? (
//               <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 ">
//                 {searchData &&
//                   searchData.map((i, index) => {

//                     return (
//                       <Link to={`/livre/${i._id}`}>
//                         <div className="w-full flex items-start-py-3">
//                           <img
//                             src={i.image_Url[0].url}
//                             alt=""
//                             className="w-[40px] h-[40px] mr-[10px] "
//                           />
//                           <h1>{i.name}</h1>
//                         </div>
//                       </Link>
//                     );
//                   })}
//               </div>
//             ) : null}
//           </div>

//                 <div className={`${styles.button}`}>
//             <Link to="/librarie-create">
//               <h1 className="text-[#fff] flex items-center">
//                 Start As Seller <IoIosArrowForward className="ml-1 " />
//               </h1>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         } transition hidden 800px:flex items-center justify-between w-full bg-yellow-700 h-[70px] `}
//       >
//         <div
//           className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
//         >

//            {/* categories */}
//            <div onClick={() => setDropDown(!dropDown)}>
//             <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
//               <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
//               <button
//                 className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
//               >
//                 All Categories
//               </button>
//               <IoIosArrowDown
//                 size={20}
//                 className="absolute right-2 top-4 cursor-pointer"
//                 onClick={() => setDropDown(!dropDown)}
//               />
//               {dropDown ? (
//                 <dropDown
//                   categoriesData={categoriesData}
//                   setDropDown={setDropDown}
//                 />
//               ) : null}
//             </div>
//           </div>

//           <div className={`${styles.noramlFlex}`}>
//             <Navbar active={activeHeading} />
//           </div>

//           <div className="flex">
//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenWishlist(true)}
//               >
//                 <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {wishlist && wishlist.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px] "
//                 onClick={() => setOpenCard(true)}
//               >
//                 <AiOutlineShoppingCart
//                   size={30}
//                   color="rgb(255 255 255 / 83%)"
//                 />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                 {cart && cart.length}
//                 </span>
//               </div>
//             </div>
//             <div className={`${styles.noramlFlex}`}>
//               <div className="relative cursor-pointer mr-[15px]">
//                 {isAuthenticated ? (
//                   <Link to="/profile">
//                     <img
//                     // src={`${user?.avatar?.url}`}
//                       src={`${backend_url}${user.avatar}`}
//                       className="w-[40px] h-[40px] rounded-full"
//                       alt=""
//                     />
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
//                   </Link>
//                 )}
//               </div>
//             </div>
//             {/* cart pop up */}
//             {openCard ? <Cart setOpenCard={setOpenCard} /> : null}
//             {/* wish liste popup */}
//             {openWishlist ? (
//               <Wishlist setOpenWishlist={setOpenWishlist} />
//             ) : null}
//           </div>
//         </div>
//       </div>
//       {/* version mobile header */}
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         }
//       w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
//       >
//         <div className="w-full flex items-center justify-between">
//           <div>
//             <BiMenuAltLeft
//               size={40}
//               className="ml-4"
//               onClick={() => setOpen(true)}
//             />
//           </div>
//           <div>
//             <Link to="/">
//               <img
//                 src={foto}
//                 alt=""
//                 className="mt-3 cursor-pointer w-[150px] h-[50px]"
//               />
//             </Link>
//           </div>
//           <div>
//             <div className="relative mr-[20px] ">
//               <AiOutlineShoppingCart size={30} />
//               <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                 {
//                   cart && cart.length
//                 }
//               </span>
//             </div>
//           </div>

//           {/* //errur  mt3C cart wishlist*/}
//           </div>
//         {/** header sidebar */}
//         {open && (
//           <div
//             className={` fixed w-full bg-[#b8b8c7] z-20 h-full top-0 left-0`}
//           >
//             <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
//               <div className="w-full justify-between flex pr-3 ">
//                 <div>
//                   <div className="relative mr-[15px] ">
//                     <AiOutlineHeart size={30} className="mt-5 ml-3" />
//                     <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                       3
//                     </span>
//                   </div>
//                 </div>
//                 <RxCross1
//                   size={30}
//                   className="ml-4 mt-5"
//                   onClick={() => setOpen(false)}
//                 />
//               </div>
//               <div className="my-8 w-[92%] m-auto h-[40px]  relative">
//                 <input
//                   type="search"
//                   placeholder="Search a book......"
//                   className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md "
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />

//                 {searchData && (
//                   <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
//                     {searchData.map((i) => {
//                       const d = i.name;
//                       const Livre_name = d.replace(/\s+/g, "-");
//                       return (
//                         <Link to={`/livre/${Livre_name}`} key={i.id}>
//                           <div className="flex items-center">
//                             <img
//                               src={i.image_Url[0].url}
//                               alt=""
//                               className="w-[50px] mr-2"
//                             />
//                             <h5>{i.name}</h5>
//                           </div>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//               <Navbar active={activeHeading} />
//               <div className={`${styles.button} ml-4 !rounded-[4px]`}>
//                 <Link to="/librarie-create">
//                   <h1 className="text-[#fff] flex items-center">
//                     Start as Seller <IoIosArrowForward className="ml-1" />
//                   </h1>
//                 </Link>
//               </div>
//               <br />
//               <br />
//               <br />
//               <div className="!flex w-full justify-center ">
//                 {isAuthenticated ? (
//                   <div>
//                     <Link to="/profile">
//                       <img
//                         src={`${backend_url}${user.avatar}`}
//                         alt=""
//                         className="w-[65px] h-[65px] rounded-full border-[3px] border-[#4ceb69] "
//                       />
//                     </Link>
//                   </div>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="!text-[18px] !pr-[10px] text-[#000000b7]"
//                     >
//                       Login /
//                     </Link>
//                     <Link
//                       to="/sign-up"
//                       className="!text-[18px] !pr-[10px] text-[#000000b7]"
//                     >
//                       Sign Up
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;
