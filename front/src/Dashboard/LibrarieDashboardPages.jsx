import React from 'react'
// app.jsx
import Sidebar from './Sidebar';
import Main from "./Main"
import DashboardMessages from './DashboardMessages';
import HeaderDash from './HeaderDash';

const LibrarieDashboardPages = () => {
  return (
    <main className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      
        <Sidebar active={1} />
         <Main/>
         <DashboardMessages active={7}/>
    </main>
  )
}

export default LibrarieDashboardPages
