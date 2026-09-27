import React from 'react'
import DashboardHeader from '../../components/Library/Layout/DashboardHeader';
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
import DashboardMessages from '../../components/Library/Layout/DashboardMessages.jsx'
const LibrarieInboxPage = () => {
  return (
    <div>
       
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className='w-[80px] 800px:w-[330px] '>
                <DashboardSideBar active={8} />
        </div>



<DashboardMessages />

      </div>
                
    </div>
  )
}

export default LibrarieInboxPage
