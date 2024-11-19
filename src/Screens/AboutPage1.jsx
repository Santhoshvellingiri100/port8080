import React from "react";
import styles from "./screen.module.css";
import { Label01, Subhead01, Title02 } from "../theme/fonts";
import COLORS from "../theme/color";
import LinkButton from "../components/LinkButton";
import { CRT_TA_SONNA } from "../meta/data";
function AboutPage1() {
  return (
    <div className={styles.aboutPageContainer}>
      {/* card */}
      <AboutImageCard />
      <div
       className={styles.aboutPageTextContent}
        // style={{
        //   display: "flex",
        //   width: "30%",
        //   height: "70%",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   margin: "0px 4rem",
        // }}
      >
        <Title02 style={{ color: "white" }}>{CRT_TA_SONNA.about_page_title01}</Title02>
        <span style={{ display: "flex", flexDirection: "row" }}>
          <Title02 style={{ color: "white" }}>{CRT_TA_SONNA.about_page_title02}</Title02>
          <span style={{opacity:0}}>""</span>
          <Title02 style={{ color: COLORS.accentColor }}>
            {CRT_TA_SONNA.about_page_title03}
          </Title02>
        </span>
        <Title02 style={{ color: COLORS.accentColor }}>{CRT_TA_SONNA.about_page_title04}</Title02>

        <Label01
          style={{ color: "white", margin: "2rem 0", lineHeight: "30px" }}
          // className={styles.textContainer}
        >
         {CRT_TA_SONNA.about_page_descriptio01}
        </Label01>

        <Label01
          style={{ color: "white", marginBottom: "1rem", lineHeight: "30px" }}
          // className={styles.textContainer}
        >
         {CRT_TA_SONNA.about_page_descriptio02}
        </Label01>

        <LinkButton 
        
        onClick={() => {
          const contactElement = document.getElementById("aboutPage2ID");
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
        key={"view My work"}>{CRT_TA_SONNA.about_page_work_button_text}</LinkButton>
      </div>
    </div>
  );
}

const AboutImageCard = () => {
  return (
    <div className={styles.aboutImageCard}>
      <div className={styles.aboutImageContainer}>

      <img src={CRT_TA_SONNA.about_page_card_image_url} style={{backgroundColor:"red",width:"100%",height:"100%"}} 
    
    ></img>
    </div>

      <Label01 className={styles.aboutImageCardText}>
       {CRT_TA_SONNA.about_page_card_side_word}
        <div
          className={styles.aboutImageCardBefore}
        >
           
        </div>
      </Label01>
    </div>
  );
};

export default AboutPage1;
