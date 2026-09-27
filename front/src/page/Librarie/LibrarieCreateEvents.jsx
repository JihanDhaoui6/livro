import React from 'react'
import DashboardHeader from '../../components/Library/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
import  CreateEvent from "../../components/Library/CreateEvent.jsx"
const LibrarieCreateEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px]:w-[330px] ">
          <DashboardSideBar active={6} />
        </div>
        <div className="w-full justify-center flex">
            <CreateEvent />
        </div>
      </div>
    </div>
  )
}

export default LibrarieCreateEvents
