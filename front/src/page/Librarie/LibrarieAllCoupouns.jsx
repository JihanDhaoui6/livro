import React from 'react'
import DashboardHeader from '../../components/Library/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
import AllCoupouns from '../../components/Library/All/AllCoupouns'

const LibrarieAllCoupouns = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px]:w-[330px] ">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
            <AllCoupouns />
        </div>
      </div>
    </div>
  )
}

export default LibrarieAllCoupouns
