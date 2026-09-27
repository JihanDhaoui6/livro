import React from 'react'
import img from "../../assets/[ save & follow ] - (◍•ᴗ•◍).jpg"
import styles from '../../styles/style'
import CountDown from './CountDown';
const OffreCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2  `}>
      <div className='w-full lg:-w[50%] m-auto '>
        <img  src={img} alt=""/>
      </div>
      <div className='w-full lg:[w-50%] flex flex-col justify-center'>
        <h2 className={`${styles.livreTitle}`}>Book xxxx</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusamus asperiores, iusto facilis mollitia numquam eum optio nihil consequuntur provident velit sit placeat rerum inventore corporis. Labore officia accusamus obcaecati.</p>
      <div className='flex py-2 justify-between'> 
        <div className='flex'> 
            <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through '> 
            48 DT 
            </h5>
            <h5 className='font-bold  text-[20px] text-[#333] font-Roboto'>35 DT </h5>
        </div>
        <span className='pr-3 font-[400] text-[17px] text-[#44a55e] '> 50 sold </span>
      </div>
      <CountDown />
      </div>

    </div>
  )
}

export default OffreCard
oppa