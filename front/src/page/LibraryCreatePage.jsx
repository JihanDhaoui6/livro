import React, { useEffect } from 'react'
import LibraryCreate from "../components/Library/LibraryCreate"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const LibraryCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller , seller} = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller  === true){
      navigate(`/librarie/${seller._id}`);
    }
  }, [isSeller, navigate]);
  return (
    <div>
      <LibraryCreate />
    </div>
  )
}

export default LibraryCreatePage
