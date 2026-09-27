import React from 'react'
import DashboardHeader from '../../components/Library/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
import AllEvents from "../../components/Library/All/AllEvents"
const LibrarieAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px]:w-[330px] ">
          <DashboardSideBar active={5} />
        </div>
        <div className="w-full justify-center flex ">
            <AllEvents />
        </div>
      </div>
    </div>
  )
}

export default LibrarieAllEvents
