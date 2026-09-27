import React from "react";
import { HiPaperClip } from "react-icons/hi";

const About = () => {
  return (
  <>
  
  <div className="bg-[#66666691] bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10 ">
      <div className="container mx-auto">
        <div className="flex items-center flex-col xl:flex-row xl:mb-[60px] ">
          <h2 className="h-2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left ">About Us!</h2>
          <p className="text-white flex flex-1 text-center xl:text-left max-w-2xl xl:max-w-none ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            doloribus natus dignissimos vero ex nobis, consectetur impedit rerum
            aspernatur.
          </p>
        </div>
      </div>
    
    </div>
    {/* // grid */}
    <div className="container mx-auto mt-8  xl:-mt[144px] ">
        <div>
            <div className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
            <div className="mb-[15px] ">
                <HiPaperClip />
            </div>
            <h3 className="mb-[10px] ">
                    lizuefh zoirfuh
            </h3 >
            <p className="font-light leading-normal max-w-[300px] ">zekdj "oiu zkerjfnt ioetgto grotigu roit</p>
            </div>
            <div className="bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
            <div className="mb-[15px] ">
                <HiPaperClip />
            </div>
            <h3 className="mb-[10px] ">
                    lizuefh zoirfuh
            </h3 >
            <p className="font-light leading-normal max-w-[300px] ">zekdj "oiu zkerjfnt ioetgto grotigu roit</p>
            </div>
        </div>
        </div> 
  </>
  );
};

export default About;
