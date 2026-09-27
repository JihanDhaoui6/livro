import React, { useEffect } from 'react'
import LibrarieLogin from '../components/Library/LibrarieLogin'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LibraryLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller  ,isLoading} = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller  === true){
      navigate(`/dashboard`);
    }
  }, [isLoading, isSeller]);
  
  return (
    <div>
      <LibrarieLogin />
    </div>
  )
}

export default LibraryLoginPage
