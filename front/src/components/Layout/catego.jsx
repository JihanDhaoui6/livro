import React from "react";

import { FaBusiness } from 'react-icons/fa';
import { GiBookmarklet } from "react-icons/gi";
import { TbPresentationAnalytics } from "react-icons/tb";
import { PiAirplaneTakeoff } from "react-icons/pi";
const catego = () => {
  return (
    <>
      <div className={`branding my-3 flex justify-between w-full shadow-sm  p-8 rounded-md bg-opacity-50`}>
        <section id="category">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center relative">
              <span>You can find</span>
              <span className="absolute top-0 left-0 bg-indigo-600 h-1 w-10 rounded-full mr-8"></span>
              <span className="absolute top-0 right-0 bg-indigo-600 h-1 w-10 rounded-full"></span>
              <svg className="absolute top-1/2 left-0 transform -translate-y-1/2 text-indigo-600 h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-leaf"></use>
              </svg>
              <svg className="absolute top-1/2 right-0 transform -translate-y-1/2 text-indigo-600 h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-leaf"></use>
              </svg>
            </h2>

            {/* Grille de cartes */}
            <div className="grid grid-cols-5 gap-5 justify-center items-center  ml-20">
              {/* Carte 1 */}
              <div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
                {/* Logo */}
                <div className="w-1/3 flex items-center justify-center">
                  {/* Ajout de l'icône avant le titre */}
                  <GiBookmarklet className="w-[33px] h-[33px]"/>
              
                </div>
                {/* Description textuelle */}
                <div className="w-2/3 flex flex-col justify-center p-4">
                  <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
                  Literature
                  </h4>
                  {/* Autres éléments textuels ou iconographiques */}
                  <br />
                </div>
              </div>
            
<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Logo */}
  <div className="w-1/3 flex items-center justify-center">
    {/* Ajout de l'icône avant le titre */}
    <img width="50" height="50" src="https://img.icons8.com/ios/50/teenager-male.png" alt="teenager-male"/>
  </div>
  
  {/* Description textuelle */}
  <div className="w-2/3 flex flex-col justify-center p-4">
    <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
    Youth
    </h4>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>


<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Logo */}
  <div className="w-1/3 flex items-center justify-center">
    {/* Ajout de l'icône avant le titre */}
    <img width="35" height="35" src="https://img.icons8.com/fluency-systems-regular/48/paint-palette-with-brush--v2.png" alt="paint-palette-with-brush--v2"/>
  </div>
  
  {/* Description textuelle */}
  <div className="w-2/3 flex flex-col justify-center p-4">
    <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
    Art, Culture, and Society
    </h4>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>


            <div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Logo */}
  <div className="w-1/3 flex items-center justify-center">
    {/* Ajout de l'icône avant le titre */}
    <img width="35" height="35" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-setting-business-elements-and-symbols-metaphors-flatart-icons-outline-flatarticons.png" alt="external-setting-business-elements-and-symbols-metaphors-flatart-icons-outline-flatarticons"/>
  </div>
  {/* Description textuelle */}
  <div className="w-2/3 flex flex-col justify-center p-4">
    <h4 className="text-black font-serif text-lg text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
    Science and Technology
    </h4>
    {/* <p className="text-color">
      Lorem ipsum dolor sit  .
    </p> */}
    <br />
  </div>
</div>


<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Logo */}
  <div className="w-1/3 flex items-center justify-center">
    {/* Ajout de l'icône avant le titre */}
    <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/naruto.png" alt="naruto"/>
  </div>
  
  {/* Description textuelle */}
  <div className="w-2/3 flex flex-col justify-center p-4">
    <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
      BD, Comics & Mangas
    </h4>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>


<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Logo */}
  <div className="w-1/3 flex items-center justify-center">
    {/* Ajout de l'icône avant le titre */}
    <img width="30" height="30" src="https://img.icons8.com/ios/50/teaching.png" alt="teaching"/>
  </div>
  
  {/* Description textuelle */}
  <div className="w-2/3 flex flex-col justify-center p-4">
    <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
    School and Language
    </h4>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>


<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Logo */}
  <div className="w-1/3 flex items-center justify-center">
    {/* Ajout de l'icône avant le titre */}
    <PiAirplaneTakeoff className="w-[39px] h-[39px]"/>
  </div>
  
  {/* Description textuelle */}
  <div className="w-2/3 flex flex-col justify-center p-4">
    <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
    Leisure, Nature, and Travel
    </h4>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>


<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Description textuelle */}
  <div className="w-full flex flex-col justify-center p-4">
    {/* Ajout de l'icône avant le titre */}
    <div className="flex items-center justify-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" className="mr-2">
        <path d="m6.768,15H0v-1h6.232l2.33-3.494,3,6,1.67-2.506h4.768v1h-4.232l-2.33,3.494-3-6-1.67,2.506Zm15.232-7.707v16.707H2v-7h1v6h18v-15h-7V1H4.5c-.827,0-1.5.673-1.5,1.5v9.5h-1V2.5c0-1.378,1.122-2.5,2.5-2.5h10.207l7.293,7.293Zm-7-.293h5.293L15,1.707v5.293Z"/>
      </svg>
      <h4 className="text-black font-serif text-xl text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
      Well-being and Practical Life
      </h4>
    </div>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>


<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Description textuelle */}
  <div className="w-full flex flex-col justify-center p-4">
    {/* Ajout de l'icône avant le titre */}
    <div className="flex items-center justify-center mb-2">
    <TbPresentationAnalytics className="w-[39px] h-[39px]"/>
    
      <h4 className="text-black font-serif text-lg text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
      Business, Law, and Economics
      </h4>
    </div>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>

<div className="bg-indigo-200 bg-opacity-35 flex rounded-lg overflow-hidden col-span-1" style={{ height: "80px" }}>
  {/* Description textuelle */}
  <div className="w-full flex flex-col justify-center p-4">
    {/* Ajout de l'icône avant le titre */}
    <div className="flex items-center justify-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
        <path d="m0,18h15v1H0v-1Zm0,4h12v-1H0v1Zm12-10H0v1h12v-1ZM0,10h15v-1H0v1Zm24,10.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5Zm-1,0c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5,1.121,2.5,2.5,2.5,2.5-1.122,2.5-2.5Zm1-9c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5Zm-1,0c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5,1.121,2.5,2.5,2.5,2.5-1.122,2.5-2.5Zm1-9v3.5H0v-3.5C0,1.122,1.121,0,2.5,0h19c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v2.5h22v-2.5Z"/>
      </svg><br /><br />
      <h4 className="text-black font-serif text-lg text-center" style={{ fontFamily: "Labrada, sans-serif" }}>
        Other
      </h4>
    </div>
    {/* Autres éléments textuels ou iconographiques */}
    <br />
  </div>
</div>

            {/* Ajouter d'autres cartes ici */}
            {/* Répétez la structure de la carte pour chaque carte nécessaire */}
          </div>
        </div>
      </section>
    </div>



    
 
   </>
  
  );
};

export default catego;
