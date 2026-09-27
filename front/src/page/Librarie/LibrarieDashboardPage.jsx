import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Library/Layout/DashboardHeader';
import DashboardSideBar from '../../components/Library/Layout/DashboardSideBar'
import DashboardMain from '../../components/Library/DashboardMain.jsx';
const LibrarieDashboardPage = () => {

  // const [data, setData] = useState(null);
  // useEffect(() => {
  
  // const data = allBooks && allBooks.find((i) => i._id === id);
  // setData(data);
    
  // //  /const data = allBooks && allBooks.find((i) => i._id === id);
  
  // }, []);
  return (
    <div>
       
    <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className='w-[80px]:w-[330px] w-full bg-slate-200 h-screen flex justify-between items-start'>
                <DashboardSideBar active={1}  isOwner={true}  />
                <DashboardMain/>
        </div>




      </div>
                
    </div>
  )
}

export default LibrarieDashboardPage
