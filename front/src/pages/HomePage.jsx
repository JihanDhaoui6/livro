import React from 'react'
import Header from "../components/Layout/Header"
import Hero from "../components/Route/Hero/Hero" 
import Categories from "../components/Route/Categorie/Categorie"

import Catego from "../components/Layout/catego";

//import FeaturedBook from "../components/Layout/FeaturedBook";
//import OffreWeek from "../components/Layout/OffreWeek";<OffreWeek />
import FeaturedBook from "../components/Route//FeaturedBook/FeaturedBook";//<Avis /> < Beastdeal/>
import BestDeals from "../components/Route/BestDeal/BestDeal"
import Events from "../components/Events/Events"
import Sponsor from "../components/Route/Sponsor";
import Footer  from "../components/Layout/Footer"
import HeroLibrariePage from '../page/HeroLibrariePage';
import About from "../components/Route/About.jsx"
import Oppa from "../components/Layout/Oppa.jsx"
const HomePage = () => {
  return (
    <div>
         <Header activeHeading={1}/> 
    {/* <HeroLibrariePage/>  */}
      {/* <Hero /> */}
     <Oppa /> 
     <Categories/>
     <Catego/>
     <BestDeals />
      {/* <About/> */}
      <Events /> 
     <FeaturedBook />
     <Sponsor /> 
   <Footer />

     
    

    </div>
  )
}

export default HomePage
