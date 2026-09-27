import React from 'react'
import styles from '../../styles/style';
import { AiOutlineDelete } from 'react-icons/ai';
import Header from '../Layout/Header';

const Adresse = () => {
    return (
        <div>
            <Header/>
      <div className="w-full px-5">
        <div className="flex items-center justify-between ">
          <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
            Address
          </h1>
          <div className={`${styles.button} !rounded-md`}>
            <span className="text-[#fff]">Add New</span>
          </div>
        </div>
        <br />
        <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10  ">
          <div className="flex items-center ">
            <h5 className="pl-5 font-[600] ">Default</h5>
          </div>
          <div className="pl-8 flex items-center ">
            <h6>1234 rue taher sfar 201, Metouia</h6>
          </div>
          <div className="pl-8 flex items-center ">
            <h6>(216) 22 333 555</h6>
          </div>
          <div className="min-w-[10%] flex items-center justify-between pl-8 ">
            <AiOutlineDelete size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
      </div>
    );
  };
export default Adresse
