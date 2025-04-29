import React from 'react'
import "./Dashboard.css"
import Carousel from './component/carousel';
import Navigation from './component/Navigation';
import Services from './component/Services';
import Essentials from './component/Essentials';
import FreeLancing from './component/FreeLancing';
import Happening from './component/Happening';
import Contact from './component/Contact';
import Footer from './component/Footer';
const Dashboard = () => {
  return (
    <>
    <div id="navigation">
        <Navigation/>
    </div>
    <div id="carousel">
        <Carousel />
    </div>
    <div id="Services">
        <Services />
    </div>
    <div id="Essentials">
        <Essentials/>
        </div>
    <div id='FreeLancing'>
        <FreeLancing/>
    </div>
    <div id='Happening'>
        <Happening/>
    </div>
    <div id='Contact'>
        <Contact/>
    </div>
    <div id='Footer'>
        <Footer/>
    </div>
    </>
  )
}

export default Dashboard