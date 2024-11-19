import React from "react";
import styles from "./screen.module.css";
import { Label01, Label02, Title02 } from "../theme/fonts";
import WorkCard from "../components/WorkCard";
import { CRT_TA_SONNA } from "../meta/data";
const elements = [
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/19671785/pexels-photo-19671785/free-photo-of-two-people-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
function WorkPage() {
  return (
    <div id={"workPageID"} className={styles.workPageContainer}>
      <div style={{padding:0,margin:0,height:300}} className={styles.workPageHeader}>
        <Title02 className={styles.workPageHederHeadText}>
         {CRT_TA_SONNA.work_page_title}
        </Title02>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Label01 className={styles.workPageHeaderDescriptionText}>
            {CRT_TA_SONNA.work_page_description}
          </Label01>
        </div>
      </div>

      {/* content desktop view */}
      <div  className={styles.workContainerDesktop}>
        {(CRT_TA_SONNA?.work_cards?.filter((_,i)=>((i%2) == 0)))?.map((element, index) => {
          {/* return (
            <></>); */}
            console.log('🥦🥦🥦🥦🥦🥦🥦',element,index);
            return(
              <div
            key={index}
             
              style={{
                width:CRT_TA_SONNA?.work_cards?.[2*index + 1] == undefined ? ( "calc(50% + 1.5rem)"): "100%",
                aspectRatio:'2/1',
                maxHeight:'50vh',
                marginBottom: "3rem",
                display: "flex",
                flexDirection: "row",
                columnGap: "3rem",
                rowGap: "2rem",
                padding: "0px 3rem",
              }}
            >
              <WorkCard element={CRT_TA_SONNA?.work_cards?.[2*index]} />

              {
                CRT_TA_SONNA?.work_cards?.[2*index + 1] != undefined && 
                <WorkCard
                element={CRT_TA_SONNA?.work_cards?.[2*index + 1]}
                containerStyle={{ transform: "translateY(25vh)" }}
              />
              }
            </div>
            )
        })}
      </div>

{/* content mobile view */}
<div style={{ width: "100%" }} className={styles.workContainerMobile}>
        {CRT_TA_SONNA?.work_cards?.map((element, index) => {
          return (
            <div
            key={index}
              style={{
                width: "100%",
                aspectRatio:'2/1',
                
                marginBottom: "3rem",
                display: "flex",
                flexDirection: "row",
                columnGap: "3rem",
                rowGap: "2rem",
                padding: "0px 3rem",
              }}
            >
              <WorkCard element={element} />
            </div>
          );
        })}
      </div>



    </div>
  );
}

export default WorkPage;
