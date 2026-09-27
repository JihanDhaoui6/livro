

import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag, HiOutlineBookOpen, HiOutlineTag, HiOutlineTicket } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfLibrarie } from "../../redux/actions/order";
import {getAllBooksLibrarie}  from "../../redux/actions/book";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Orders Over Time",
    },
  },
};

const DashboardMain = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { books } = useSelector((state) => state.books);
  const { events } = useSelector((state) => state.events);
  

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Orders",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
 
  useEffect(() => {
    dispatch(getAllOrdersOfLibrarie(seller._id));
    dispatch(getAllBooksLibrarie(seller._id));
    
  }, [dispatch]);

  useEffect(() => {
    if (orders) {
      const labels = orders.map((order, index) => `Order ${index + 1}`);
      const data = orders.map((order) => order.totalPrice);

      setChartData({
        labels,
        datasets: [
          {
            label: "Orders",
            data,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }
  }, [orders]);
console.log(orders,'RRRR')
  return (
    <section className="w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4">
      {/* main section */}
      <div
        id="main-section"
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full         mt-20"
        >
          <Card
            title="Orders"
            count={orders && orders.length}
            increment="+2"
            link="/dashboard-orders"
            bgColor="bg-blue-200"
            iconBgColor="bg-blue-400"
            iconHoverBgColor="hover:bg-blue-500"
            icon={<HiOutlineShoppingBag className="w-[30px] h-[30px]" />}
          />
          <Card
            title="Books"
            count={books && books.length}
            increment="+1"
            link="/dashboard-books"
            bgColor="bg-red-200"
            iconBgColor="bg-red-400"
            iconHoverBgColor="hover:bg-red-500"
            icon={<HiOutlineBookOpen className="w-[30px] h-[30px]" />}
          />
          <Card
            title="Promotions"
            count={events ? events.length : 0}
            increment="+1"
            link="#/dashboard-events"
            bgColor="bg-green-200"
            iconBgColor="bg-green-400"
            iconHoverBgColor="hover:bg-green-500"
            icon={<HiOutlineTag className="w-[30px] h-[30px]" />}
          />
          <Card
            title="Discount Codes"
            count="1"
            increment="+1"
            link="/dashboard-discount-codes"
            bgColor="bg-yellow-200"
            iconBgColor="bg-yellow-400"
            iconHoverBgColor="hover:bg-yellow-500"
            icon={<HiOutlineTicket className="w-[30px] h-[30px]" />}
          />
        </div>
        
        {/* chart section */}
        <div style={{ width: '100%', height: '800px' }}>
          <Line options={options} data={chartData} />
        </div>
      </section>
    );
  };
  
  const Card = ({ title, count, increment, link, bgColor, iconBgColor, iconHoverBgColor, icon }) => (
    <div
      className={`w-full flex flex-col justify-center items-center ${bgColor} p-5 rounded-xl gap-5 transition-transform hover:rotate-[-3deg] hover:scale-105 cursor-pointer`}
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="text-md text-black font-Poppins">{title}</h1>
        <h1 className="text-green-600 font-semibold">{increment}</h1>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-3xl text-black font-semibold">{count}</h1>
          <Link to={link}>
            <p className="text-slate-700">{title.toLowerCase()}</p>
          </Link>
        </div>
        <div className={`${iconBgColor} ${iconHoverBgColor} cursor-pointer text-black p-3 rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
  
  export default DashboardMain;
  
