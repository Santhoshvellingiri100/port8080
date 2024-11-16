import React, { useEffect } from 'react'
import { Heading01, Label01 } from '../theme/fonts'
import styles from "./screen.module.css"
import { gsap } from 'gsap'
import SplitType from 'split-type'
import { CRT_TA_SONNA } from '../meta/data'

function SplashPage({setisLoading}) {
    useEffect(()=>{
        const titles = gsap.utils.toArray('#splashAnimationText')
        
        const t1 = gsap.timeline({repeat:0,onComplete:function(){
          setisLoading(false);
        }});
        

        titles.forEach((title)=>{
          const splitText = new SplitType(title);
          // title.style = {opacity:1}
          t1.from(splitText.chars,{
            opacity:0,
            y:20,
            rotateX:-90,
            stagger:.02,
          },"<")
          .to(title,{
            opacity:0,
                y:-20,
                rotateX:90,
                stagger:.02,
          },"<1")

        })
         
    },[])
  return (
    <div className={styles.splashScreenContainer} style={{position:"relative",overflow:"hidden",overflowY:"hidden",maxHeight:"100vh"}}>
      
      
      {(CRT_TA_SONNA.splashScreenLoadingText).map(({text,color},index)=>(
        <Heading01 className={styles.splashAnimationText} key={index} style={{color:color}} id={'splashAnimationText'}>{text}</Heading01>
      
      ))}
    </div>
  )
}

export default SplashPage