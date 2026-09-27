import React from "react";
import mm from "../../assets/about.jpg";
const AvisClient = () => {
  return (
    <div className="bg-gray-100 text-black ">
      <div className="text-center py-10 ">
        <h5 className="text_heading_color">read more</h5>
        <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
          Read whate our client says about us !
        </h1>

        <div className="flex max-w-5xl mx-auto gap-8 group">
          <div className="bg-red-300 bg-opacity-10 p-8 rounded-xl mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none  group-hover:scale-[0.85] hover:!scale-100 duration-500">
            <img src={mm} alt="" className="h-20 mx-auto " />
            <h4 className="uppercase text-xl font-bold"> sara xdcf</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              deserunt hic nihil magni aliquam quo nulla corporis placeat
              deleniti neque recusandae .
            </p>

            <button className="bg-blue-200 py-2.5 px-8 rounded-full ">
              get in touch
            </button>
          </div>

          <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none  group-hover:scale-[0.85] hover:!scale-100 duration-500">
            <img src={mm} alt="" className="h-20 mx-auto" />
            <h4 className="uppercase text-xl font-bold"> sara xdcf</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              deserunt hic nihil magni aliquam quo nulla corporis placeat
              deleniti neque recusandae minima laudantium perferendis possimus
              nesciunt, mollitia rem repellendus in.
            </p>

            <button className="bg-blue-200 py-2.5 px-8 rounded-full ">
              get in touch
            </button>
          </div>

          <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none  group-hover:scale-[0.85] hover:!scale-100 duration-500">
            <img src={mm} alt="" className="h-20 mx-auto" />
            <h4 className="uppercase text-xl font-bold"> sara xdcf</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              deserunt hic nihil magni aliquam quo nulla corporis placeat
              deleniti neque recusandae minima laudantium perferendis possimus
              nesciunt, mollitia rem repellendus in.
            </p>

            <button className="bg-blue-200 py-2.5 px-8 rounded-full ">
              get in touch
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AvisClient;
