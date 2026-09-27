import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Stepper from "../components/Service/stepper"

const ServicesPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <Stepper />
      <Footer />
    </div>
  );
};

export default ServicesPage;
