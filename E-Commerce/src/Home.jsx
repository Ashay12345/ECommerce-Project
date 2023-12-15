import React from 'react'
import HeroSection from "./components/HeroSection";
const Home = () => {
  const data = {
    name: "thapa store",
  };
  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

export default Home