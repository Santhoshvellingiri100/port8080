import React, { useRef, useState } from "react";
import styles from "./components.module.css";
import { Label01, SmallText01 } from "../theme/fonts";
import COLORS from "../theme/color";
import { CRT_TA_SONNA } from "../meta/data";



function Accordion({ elements }) {
  const [currentTab, setCurrentTab] = useState(null);

  const contentRef = useRef();
  const toggleAccordion = (tabIndex) => {
    if (tabIndex != currentTab) {
      console.log(tabIndex);
      setCurrentTab(tabIndex);
    } else {
      setCurrentTab(null);
    }
  };
  return (
    <div className={styles.accordionContainer}>
      {CRT_TA_SONNA.about_page02_carosuls.map((item, index) => {
        return (
          <div key={index} className={styles.accordionblock}>
            {/* header */}
            <div
              style={index == 0 ? { borderTopWidth: 0 } : {}}
              onClick={() => {
                toggleAccordion(index);
              }}
              className={styles.accordionHeader}
            >
              <Label01
                style={{
                  width: "calc(100% - 50px)",
                  // height: "100%",
                  flexDirection: "row",
                  color: currentTab == index ? COLORS.accentColor : "white",
                  transition: "400ms all ease-in-out",
                }}
              >
                {item.title}
              </Label01>
              <div
                style={{
                  width: "50px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={
                  currentTab == index
                    ? styles.accordionArrow
                    : styles.accordionArrowClose
                }
              >
                <i
                  style={{ fontSize: "1.5rem", color: "white" }}
                  className="uil uil-angle-down"
                ></i>
              </div>
            </div>
            {/* content */}
            <div
              className={
                currentTab == index
                  ? styles.accordionContent
                  : styles.accordionContentClose
              }
            >
              <div style={{ padding: "1rem",width:"100%" ,transition:"all 600ms ease"}}>
                <SmallText01 style={{ padding: "1rem" }}>
                  {item.content}
                </SmallText01>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
