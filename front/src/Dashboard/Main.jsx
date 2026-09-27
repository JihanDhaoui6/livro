import React from "react";
import Header from "./HeaderDash";
import { IoLogoFacebook } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci"; //<CiBoxList />
import { FiUsers } from "react-icons/fi";
import { BsDatabaseDash } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu"; //dashbord a cote
import { HiOutlineShoppingBag } from "react-icons/hi2"; // orderqs
import { HiOutlineArrowTrendingUp } from "react-icons/hi2"; //total users       import { GiChart } from "react-icons/gi";
// import Chart from "./Chart";
const Main = () => {
  return (
    <section className="w-4/5 grow bg-white h-screen overflowy-y-auto flex flex-col justify-start items-center gap-2 p-4">
      <Header />
      
      {/* main section */}
      <div
        id="main-section"
        className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen"
      >
        <div
          id="left"
          className="col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full "
        >
          {/* three section */}
          <div className="grid lg:grid-cols-3 gap-4 w-full mb-4 ">
            <div
              className="w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform hover:rotate-[-3deg] hover:scale-105 cursor-pointer
                 "
            >
              <div className="w-full felx justify-between items-center">
                <h1 className="text-md text-black font-Poppins">Orders</h1>
                <h1 className="text-green-600 font-semibold ">+21</h1>
              </div>
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold ">10,44</h1>
                  <p className="text-slate-700 ">orders</p>
                </div>
                <div className="bg-bleu-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full ">
                  <HiOutlineShoppingBag className="w-[30px] h-[30px] " />
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col justify-center items-center bg-red-200 p-5 rounded-xl gap-5 transition-transform hover:rotate-[-3deg] hover:scale-105 cursor-pointer
                 "
            >
              <div className="w-full felx justify-between items-center">
                <h1 className="text-md text-black font-Poppins">users</h1>
                <h1 className="text-red-600 font-semibold ">+21</h1>
              </div>
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold ">10,44</h1>
                  <p className="text-slate-700 ">users</p>
                </div>
                <div className="bg-red-400 hover:bg-red-500 cursor-pointer text-black p-3 rounded-full ">
                  <HiOutlineShoppingBag className="w-[30px] h-[30px] " />
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform hover:rotate-[-3deg] hover:scale-105 cursor-pointer
                 "
            >
              <div className="w-full felx justify-between items-center">
                <h1 className="text-md text-black font-Poppins">books</h1>
                <h1 className="text-green-600 font-semibold ">+21</h1>
              </div>
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold ">10,44</h1>
                  <p className="text-slate-700 ">bookss</p>
                </div>
                <div className="bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full ">
                  <HiOutlineShoppingBag className="w-[30px] h-[30px] " />
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform hover:rotate-[-3deg] hover:scale-105 cursor-pointer
                 "
            >
              <div className="w-full felx justify-between items-center">
                <h1 className="text-md text-black font-Poppins">books</h1>
                <h1 className="text-green-600 font-semibold ">+21</h1>
              </div>
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold ">10,44</h1>
                  <p className="text-slate-700 ">bookss</p>
                </div>
                <div className="bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full ">
                  <HiOutlineShoppingBag className="w-[30px] h-[30px] " />
                </div>
              </div>
            </div>
          </div>
          {/* grid layout end */}

          {/* <Chart /> */}
        </div>
        {/* leftsection end */}

        {/* rightsec */}
        {/* <div id="right" className="p-2 flex flex-col justify-center items-center gap-4 h-full ">
            <div id="top" className="bg-slate-100 p-8  w-full rounded-xl flex flex-col justify-center items-center gap-6 h-fit">
                <div id="" className="w-full flex flex-col justify-center items-center gap-4 ">
                  <img src="" alt="" />
                  <div className="flex flex-col justify-center items-center">

                  </div>
                </div>

                <div id="" className="flex justify-between items-center gap-8 w-full ">
                      <div className="flex flex-col justify-center items-start ">
                          <h1>hj</h1>
                          <p>uuuuuu</p>
                      </div>
                </div>
                <div id="" className="flex justify-between items-center ">
                      <div className="flex flex-col justify-center items-start ">
                          <h1>hj</h1>
                          <p>uuuuuu</p>
                      </div>
                </div>
                <div id="" className="flex justify-between items-center ">
                      <div className="flex flex-col justify-center items-start ">
                          <h1>hj</h1>
                          <p>uuuuuu</p>
                      </div>
                </div>
            </div>



            <div id="bottom" className="bg-[#8049ef2d] w-full h-full p-6 rounded-xl flex flex-col justify-center items-center gap-8 ">
                <div className="flex md:flex-row flex-col justify-between items-center w-full gap-2">
                    <h1 className="text-black text-md">jiahn dhaoui</h1>
                        <button className="bg-indigo-600 text-white px-6 py-1 rounded-xl cursor-pointer text-md">Active</button>
                </div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Main;
