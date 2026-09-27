import React from "react";
import img1 from "../../assets/about.jpg";
import { CgDetailsMore } from "react-icons/cg";
//import img from "../../assets/direct-marketing.png"
const Autre = () => {
  return (
    <div>
      <div className="max-h-[600px] mx-auto bg-gray rounded-lg shadow-lg overflow-hidden md:flex max-w-[80%] items-center flex justify-center    margin-top: 20px">
        {/* Image à gauche */}
        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover object-center"
            src={img1}
            alt="About"
          />
        </div>
        {/* Description textuelle à droite */}
        <div className="md:w-1/2 px-6 py-8">
          <h2 className="text-2xl font-bold mb-2">À propos de nous</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod ultrices urna, ut fermentum lorem feugiat nec. Integer
            suscipit urna quis ante efficitur, non hendrerit turpis hendrerit.
            Sed maximus nisl auctor, blandit justo sed, finibus purus.
          </p>
          <p className="text-gray-700 mb-4">
            Nulla facilisi. Proin suscipit nunc quis lectus accumsan, nec
            dignissim ex scelerisque. Vivamus dapibus ex et justo eleifend
            faucibus. Nulla facilisi.
          </p>
          <p className="text-gray-700 mb-4">
            Fusce sed efficitur quam, nec congue mauris. Vestibulum ut odio id
             Vivamus ut odio nec
            justo blandit lacinia.
          </p>
           <div>
            <div></div>
            <div></div>
            <div></div>
           </div>
          <button className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline flex items-center">
  <CgDetailsMore className="mr-2 text-xl"  /> {/* Adjust margin-right as needed */}
  <span>About us !</span>
</button>
        </div>
      </div>
    </div>
  );
};

export default Autre;
