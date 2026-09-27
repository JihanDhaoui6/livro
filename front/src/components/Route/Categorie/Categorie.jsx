import React from "react";
//import { useNavigate } from "react-router-dom";
import { brandingData } from "../../../static/data";
import styles from "../../../styles/style";

const Categories = () => {
  //const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-3 flex justify-between w-full shadow-sm  p-5 rounded-md !bg-[#ffffff]`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>


             
    </>
  );
};

export default Categories;