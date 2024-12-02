import React, { useEffect } from "react";
import styles from "./screen.module.css";

import {
  Label01,
  Title01,
} from "../theme/fonts";
import Header from "../components/Header";
import COLORS from "../theme/color";
import LinkButton from "../components/LinkButton";
import { CRT_TA_SONNA } from "../meta/data";
import { useRef } from "react";
import SplitType from 'split-type'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import JokeWidget from "../components/jokeWidget";

function HeroPage() {


  useEffect(()=>{
    // const _heroPageLable01ID = document.getElementById('heroPageLable01ID');
    // const lableSplitText = new SplitType(_heroPageLable01ID);
    // console.log('🤌🤌🤌🤌🤌🤌',lableSplitText)
    // gsap.from(lableSplitText.chars,{
    //   opacity:0,
    //   stagger:0.005,
    //   scale:.2,

    //   duration:.5
    // })
    // gsap.to(lableSplitText.chars,{
    //   scrollTrigger:{
    //     trigger:_heroPageLable01ID,
    //     start:"top 50%",
    //     end:"top 20%",
    //     scrub:true,
    //     markers:false
    //   },opacity:0.2,
    //   stagger:0.2
    // })
  },[])

  

  return (

    <div className={styles.heroPageContainer}>
       <img src={CRT_TA_SONNA.hero_page_bg_image_url} 
     className={styles.heroPageIMGContainer} ></img>
 <div className={styles.heroPageContainer} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
      
     
      <Header />
      <div style={{width:"100%",height:'100%',display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
      <div className={styles.heroPageConentContainer}>
        <Title01 style={{ color: COLORS.accentColor }}>{CRT_TA_SONNA.hero_page_title01}</Title01>
        <Title01 style={{ color: "white" }}>{CRT_TA_SONNA.hero_page_title02}</Title01>
        <Label01
          id={'heroPageLable01ID'}
          style={{ color: "white", margin: "2rem 0"}}
          className={styles.textContainer}
        >
          {CRT_TA_SONNA.hero_page_description}
        </Label01>
        <LinkButton 
         onClick={() => {
          const contactElement = document.getElementById("workPageID");
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
        >{CRT_TA_SONNA.hero_page_work_button_text}</LinkButton>
      </div>

      <JokeWidget/>
      </div>
     
    </div>

    </div>
   
  );
}

export default HeroPage;
