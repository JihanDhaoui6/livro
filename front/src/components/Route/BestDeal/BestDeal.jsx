import React, { useEffect, useState } from 'react';
// import { livreData } from '../../../static/data';
import styles from "../../../styles/style";
import LivreCard from "../../Route/LivreCard/LivreCard";
import { useSelector } from 'react-redux';

const BestDeal = () => {
    const [data ,setData] = useState([]);
const {allBooks} = useSelector((state)=> state.book)
    // useEffect(() => {
    //     // const sortedData = livreData && livreData.sort((a, b) => b.total_sell - a.total_sell);
    //     // const firstFive = sortedData.slice(0, 5); // Assuming you want the top 5 items
    //     // setData(firstFive);
    //     // const d=
    //     // books && books.sort((a,b)=> b.sold_out - a.sold_out);
    //     const firstFive = books.slice(0, 5);
    //     setData(firstFive);
    // }, []);
    useEffect(() => {
        if (allBooks) {
            const firstFive = allBooks.slice(0, 5);
            setData(firstFive);
        }
    }, [allBooks]);
    return (
        <div>
            <div className={`${styles.section}`}>
                <div className={`styles.heading`}>
                    <h1 className='text-[45px] '>Best Deals</h1>
                </div>
                <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
                    {data && data.map((i, index) => (
                        <LivreCard data={i} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestDeal;
