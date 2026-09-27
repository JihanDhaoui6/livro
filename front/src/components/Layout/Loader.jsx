import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../assets/loader/Animation - 1713137091567.json";
const Loader = () => {
  const defaultOptions = {
    loop:false,
    autoplay: true,
    animationData:animationData,
    renderSettings: {
        preserveAspectRatio : "xMidYMid slice",
    },
};
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Lottie options={defaultOptions} width={300} height={300} />
      
    </div>
  )
}

export default Loader
