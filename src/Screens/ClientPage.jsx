import React from "react";
import styles from "./screen.module.css";
import { Heading02, Label01, Label02, Title01, Title02 } from "../theme/fonts";
import WorkCard from "../components/WorkCard";
import COLORS from "../theme/color";
import { CRT_TA_SONNA } from "../meta/data";
import SickPage from "./sickPage";

function ClientPage() {
  
  return (
    <div className={styles.clientPageContainer}>

      <div style={{}} className={styles.workPageHeader}>
        <Title02 className={styles.workPageHederHeadText}>
        {CRT_TA_SONNA.client_page_title}
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
        {CRT_TA_SONNA.client_page_description}
          </Label01>
        </div>
      </div>

      {/* content */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
            backgroundColor: COLORS.primaryColor05,
          }}
        ></div>
        <div className={styles.logosSectionContainer}>
          {CRT_TA_SONNA.clients.map((element) => (
            <LogoCard element={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

const LogoCard = ({element}) => {
  return (
    <a href={element?.openURL} target="_blank" className={styles.logContainer} onClick={()=>{
      console.log(element?.openURL);
    }}>
      {/* <Heading02 style={{ color: "white" }}>LOGO</Heading02> */}
      <img className={styles.clientPageImageContainer} src={element?.imageURl}/>
    </a>
  );
};

export default ClientPage;
