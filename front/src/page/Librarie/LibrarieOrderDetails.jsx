import React from 'react'
import DashboardHeader from '../../components/Library/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
import AllBooks  from "../../components/Library/All/AllBooks"
import Footer from '../../components/Layout/Footer';
import OrderDeatils from "../../components/Layout/OrderDeatils.jsx"

const LibrarieAllBooks = () => {
  return (
    <div className='w-full'>
      
      {/* <DashboardHeader /> */}
      <OrderDeatils />
     <Footer />
    </div>
  )
}

export default LibrarieAllBooks
