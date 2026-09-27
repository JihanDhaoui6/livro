
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { getAllBooksLibrarie } from "../../redux/actions/book";
import { toast } from "react-toastify";
import img from "../../assets/homepage/blanc.jpg";
import axios from "axios";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
const LivreDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { book } = useSelector((state) => state.book);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  // const {books} = useSelector ((state) =>state.books)
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllBooksLibrarie(id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllBooksLibrarie(data && data?.librarie._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
      toast.error("book already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("book out of stock!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.librarie._id;

      console.log("Sending request with data:", {
        groupTitle,
        userId,
        sellerId,
      });

      try {
        const response = await axios.post(
          `${server}/conversation/create-new-conversation`,
          {
            groupTitle,
            userId,
            sellerId,
          }
        );

        console.log("Conversation created:", response.data);
        navigate(`/inbox?${response.data.conversation._id}`);
      } catch (error) {
        console.error("Error creating conversation:", error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  // src={img}
                  // src={`${data && data.images[select]?.url}`}
                  src={`${backend_url}${data.images[0]}`}
                  alt=""
                  className="w-[50%] h-[40vh]"
                />

                <div className="w-full flex">
                  {data &&
                    data.images.map((i, index) => (
                      <div
                        className={`${
                          select === 0 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={`${backend_url}${data?.images[1]}`}
                          //  src={`${i?.url}`}
                          alt=""
                          className="h-[200px] overflow-hidden mr-3 mt-3"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ></div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h1
                      className={`${styles.productTitle} text-[#000] font-semibold`}
                    >
                      {data.name}
                    </h1><br />
                    <h1
                      className={`${styles.productTitle} text-[#000] font-semibold mb-3`}
                    >
                      {data.author}
                    </h1>
                  </div>

                 <h3 className="pl-6 border-[1px] border-[#333] bg-[#3323e27e] w-36 h-12 rounded-3xl text-[19px] text-[#fff] flex items-center justify-center mb-6" style={{ textAlign: "center" }}>
  {data.post}
</h3>

                </div>
                <p className="text-[#444]">{data.description}</p>
                <br />
                <div className="flex pt-3">
                  <h4
                    style={{ fontSize: "20px", color: "green" }}
                    className={`${styles.productDiscountPrice} font-semibold`}
                  >
                    {data.originalPrice} DT
                  </h4>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center !bg-[#1f1fec]`}
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center ">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <Link to={`/librarie/preview/${data?.librarie._id}`}>
                    <img
                  
                       src={`${backend_url}${data?.librarie?.avatar}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/librarie/preview/${data?.librarie._id}`}>
                      <h3
                        className={`${styles.shop_name} pb-1 pt-1 text-[20px] text-[#fb383b]`}
                      >
                        {data.librarie.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">(4/5) Rattings</h5>
                  </div>
                  <div
                    className={`${styles.button} !bg-[#6443d1] mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LivreDetailsInfo data={data} book={book} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};
const LivreDetailsInfo = ({ data, book }) => {
  const [active, setActive] = useState(1);
  const { books } = useSelector((state) => state.books);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Book Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Book Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line ">
            {data.description}
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Reviews Yet !!!</p>
        </div>
      ) : null}
      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link to={`/librarie/preview/${data.librarie._id}`}>
              <div className="flex items-center">
                <img
                  src={`${backend_url}${data?.librarie?.avatar}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>
                    {data.librarie.name}
                  </h3>
                  <h5 className="pb-2 text-[15px]">4/5 Ratings</h5>
                </div>
              </div>
            </Link>
            <p className="pt-2 ">
             
              {data.librarie.description}
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                joined on :{" "}
                <span className="font-[500]">
                  {data.librarie?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Books :{" "}
                <span className="font-[500]">{books && books.length}</span>
              </h5>
              <h5 className="font-[600]">
                Total Reviews: <span className="font-[500]">Not yet!!</span>
              </h5>
              <Link to={`/librarie/preview/${data.librarie._id}`}>
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3 !bg-[#d2b9b9]`}
                >
                  <h4 className="text-white">Visit Library</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LivreDetails;
