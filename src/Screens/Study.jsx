import React, { useEffect, useLayoutEffect, useRef, useState, useTransition } from 'react'


const users = [1,2];
const admin = 1;


const tabs = {
    About:"about",
    post:"post",
    settings:'settings'
}



function Study({name1='hello'}) {

   
   const [currentTab,setCurrentTab] = useState(tabs.About);


  

  

   const changeStage = (value)=>{
    
    // startTransisition(()=>{        
        setCurrentTab(value);
    // })
    
   }

  return (
    <div style={{display:"flex",flexDirection:"column",width:"100vw",height:"100vh"}}>
        <div style={{width:'100%',display:'flex',flexDirection:"row",columnGap:10}}>

            <div onClick={()=>{changeStage(tabs.About)}} style={{width:70,cursor:"pointer",height:30,display:"flex",alignItems:"center",justifyContent:"center",background:currentTab == tabs.About ? 'blue':'gray'}}>
                <p>{name1}</p>
            </div>

            <div onClick={()=>{changeStage(tabs.post)}} style={{width:70,cursor:"pointer",height:30,display:"flex",alignItems:"center",justifyContent:"center",background:currentTab == tabs.post ? 'blue':'gray'}}>
                <p>{tabs.post}</p>
            </div>

            <div onClick={()=>{changeStage(tabs.settings)}} style={{width:70,cursor:"pointer",height:30,display:"flex",alignItems:"center",justifyContent:"center",background:currentTab == tabs.settings ? 'blue':'gray'}}>
                <p>{tabs.settings}</p>
            </div>

        </div>

        <div style={{width:"100%",height:400}}>
            {currentTab == tabs.About && <AboutPage setCurrentTab={setCurrentTab}/>}
            {currentTab == tabs.post && <PostPage setCurrentTab={setCurrentTab}/>}
            {currentTab == tabs.settings && <SettingPage setCurrentTab={setCurrentTab}/>}

        </div>
   
       </div>
  )
}


const AboutPage = ({setCurrentTab})=>{
    return(
        <div style={{flex:1,display:'flex'}}>
            <h1>ABOUT PAGE 🤣</h1>

        </div>
    )
}
const PostPage = ({setCurrentTab})=>{
    let items = []
    for(let i =0;i < 2500;i++){
        items.push(
         <SlowComp index={i}/>
        )
    }

    return(
        <div style={{flex:1,display:'flex'}}>
            {
                items?.map((el)=>{
                    return(el)
                })
            }

        </div>
    )
}

const SlowComp = ({index})=>{
    let now = performance.now();
    while(performance.now() - now < 1){

    
    }
    return(
        <h1>{index} post</h1>
    )

}
const SettingPage = ({setCurrentTab})=>{
    return(
        <div style={{flex:1,display:'flex'}}>
            <h1>Settings 🍽️</h1>

        </div>
    )
}

export default Study