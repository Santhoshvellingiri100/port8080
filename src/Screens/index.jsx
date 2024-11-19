import React, { useEffect, useRef, useState } from 'react'
import cssCls from './screen.module.css'
import HeroPage from './HeroPage'
import AboutPage1 from './AboutPage1'
import WorkPage from './WorkPage'
import ClientPage from './ClientPage'
import AboutPage2 from './AboutPage2'
import ContactPage from './ContactPage'
import DemoPage from './DemoPage'
import SplashPage from './SplashPage'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Camelion from './Camelion'
import SickPage from './sickPage'
import Study from './Study'

function DashBoard() {
  // images loaeder
  const [loading,setLoading] = useState(true);
  // const lenisRef = useRef()
  // gsap.registerPlugin(ScrollTrigger)
  
  // useEffect(() => {

  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000)
  //   }
  
  //   gsap.ticker.add(update)
  
  //   return () => {
  //     gsap.ticker.remove(update)
  //   }
  // })
  // return(
  //   <Camelion/>
  // )
  //  return(
  //   <Study name1='hihihi'/>
  // )
  // return(
  //   // <ClientPage/>
  //   <Camelion/>
  // )
  return (
    <div className={`${cssCls.rootContainer}`}>
      {loading ? <SplashPage setisLoading={setLoading}/>
      
      :
      <>
      <HeroPage/>
      <AboutPage1/>
      <WorkPage/>
      {/* <ClientPage/> */}
      <AboutPage2/>
      <ContactPage/>

      </>}
      
      {/* <DemoPage/> */}
    </div>
  )
}

export default DashBoard