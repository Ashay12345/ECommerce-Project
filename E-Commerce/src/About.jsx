import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import {AppContext} from './context/productcontext'
const About = () => {
  const myName = useContext(AppContext)
  const data = {
    name: "Thapa Ecommerce",
  };
  return (
  <>
    {myName}
      <HeroSection myData={data} />
  </>
  
  )
};

export default About;