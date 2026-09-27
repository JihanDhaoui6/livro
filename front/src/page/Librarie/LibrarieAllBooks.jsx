import React from 'react'
import DashboardHeader from '../../components/Library/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
 import AllBooks from '../../components/Library/All/AllBooks'
// import AllBooks  from "../../components/Library/AllBooks"
const LibrarieAllBooks = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex  justify-between w-full">
        <div className="w-[80px]:w-[330px] ">
          <DashboardSideBar active={3} />
        </div>
        <div className="w-full justify-center flex">
            <AllBooks />
        </div>
      </div>
    </div>
  )
}

export default LibrarieAllBooks
