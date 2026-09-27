import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/style";
import { useSearchParams } from "react-router-dom";
import { livreData } from "../static/data";
import LivreCard from "../components/Route/LivreCard/LivreCard";
import Footer from "../components/Layout/Footer";
import { useSelector } from "react-redux";

const LivresPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const {allBooks,isLoading} = useSelector((state) => state.books);
  
  useEffect(() => {
    if (categoryData === null) {
      const d = allBooks;
      setData(d);
    } else {
      const d =
      allBooks && allBooks.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allBooks]);

  
  // useEffect(() => {
  //   if (categoryData === null) {
  //     const d =
  //       livreData && livreData.sort((a, b) => a.total_sell - b.total_sell);
  //     setData(d);
  //   } else {
  //     const d =
  //       livreData && livreData.filter((i) => i.category === categoryData);
  //     setData(d);
  //   }
  //   //window.scrollTo(0,0);
  // }, []);
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <LivreCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            NO BOOKS FOUND!!!!
          </h1>
        ) : null}
      </div>
      <Footer/>
    </div>
  );
};

export default LivresPage;
