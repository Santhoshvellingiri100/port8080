import React from "react";
import styles from "./screen.module.css";
import { Label01, Subhead01, Title01, Title02 } from "../theme/fonts";
import COLORS from "../theme/color";
import IconButton from "../components/IconButton";
import { CRT_TA_SONNA } from "../meta/data";

function ContactPage() {
  return (
    <div id={"contactPage"} className={styles.contactPageContainer}>
      <div className={styles.contactLeftSection}>
        <Title02 style={{ color: "white" }}>
          {CRT_TA_SONNA.contact_page_title01}
        </Title02>

        <Title02 style={{ color: COLORS.accentColor }}>
          {CRT_TA_SONNA.contact_page_title02}
        </Title02>

        <Label01
          style={{ color: "white", margin: "2rem 0", lineHeight: "30px" }}
          // className={styles.textContainer}
        >
          {CRT_TA_SONNA.contact_page_descriptioin}
        </Label01>

        <div className={styles.contactCardContainer}>
          {/* contact card Image */}
          <div
            style={{
              width: "40%",
              height: "100%",
              backgroundColor: COLORS.accentColor,
              overflow:'hidden'
            }}
          >
            <img style={{width:"100%",height:'100%',objectFit:'cover'}} src={CRT_TA_SONNA.contact_page_card_img}/>
          </div>

          <div
            style={{
              minWidth: "55%",
              height: "100%",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Subhead01>{CRT_TA_SONNA.contact_page_card_title01}</Subhead01>

            <Label01 style={{ marginTop: "10px" }}>
              {CRT_TA_SONNA.contact_page_card_email}
            </Label01>
            <Label01>{CRT_TA_SONNA.contact_page_card_phone}</Label01>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "2rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Subhead01>{CRT_TA_SONNA.contact_page_card_company}</Subhead01>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {CRT_TA_SONNA.contact_icons_data.map((el, index) => (
              <IconButton key={index} url={el.url} icon={el.icon} />
            ))}
          </div>
        </div>
        <Label01 style={{ marginTop: "10px" }}>
          {CRT_TA_SONNA.contact_page_card_address01}
        </Label01>
        <Label01>{CRT_TA_SONNA.contact_page_card_address02}</Label01>
      </div>
      <div className={styles.contactRightSection}>
        <img style={{width:"100%",height:"100%"}} src={CRT_TA_SONNA.contact_page_image}/>
      </div>
    </div>
  );
}

export default ContactPage;
