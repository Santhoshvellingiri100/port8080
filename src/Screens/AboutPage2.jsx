import React from "react";
import styles from "./screen.module.css";
import { Heading01, Label01, Subhead01, Title02 } from "../theme/fonts";
import COLORS from "../theme/color";
import Accordion from "../components/accordion";
import { CRT_TA_SONNA } from "../meta/data";
function AboutPage2() {
  return (
    <div className={styles.aboutPage2Container}>
      {/* card */}
      <AboutImageCard />
      <div className={styles.aboutPage2FQAContainer} style={{}}>
        {/* left */}
        <div className={styles.faqConentContainer}>
          <Heading01 style={{ color: "white", marginBottom: "2rem" }}>
            {CRT_TA_SONNA.about_page02_title}
          </Heading01>
          <Label01>
          {CRT_TA_SONNA.about_page02_description}
          </Label01>
        </div>
        {/* right */}
        <div
          className={styles.faqAccordionContainer}
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Accordion />
        </div>
      </div>
    </div>
  );
}

// const AboutImageCard = () => {
//   return (
//     <div className={styles.about2ImageCard}>
//       <Label01 className={styles.aboutImageCardText}>
//         {}
//         <div
//           className={styles.aboutImageCardBefore}
//         />
//       </Label01>
//     </div>
//   );
// };

const AboutImageCard = () => {
  return (
    <div className={styles.about2ImageCard}>
      <div className={styles.about2ImageContainer}>
      <img
          src={CRT_TA_SONNA.about_page02_card_image_url}
          style={{ backgroundColor: "red", width: "100%", height: "100%" }}
        ></img>
      </div>
      <Label01 className={styles.aboutImageCardText}>
        {CRT_TA_SONNA.about_page02_card_side_word}
        <div className={styles.aboutImageCardBefore}></div>
      </Label01>
    </div>
  );
};


export default AboutPage2;
