import React, { useEffect } from "react";
import styles from "./screen.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { HeroFont01, Title01 } from "../theme/fonts";
import { CRT_TA_SONNA } from "../meta/data";
    gsap.registerPlugin(ScrollTrigger);

function SickPage() {
  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#sickImg",
          scrub: true,
        },
      })
      .to("#sickImg", {
        stagger: 0.2,
        y: -500,
        scrub: true,
      });
  }, []);
  
  return (
    <div className={styles.sickScreen}>
      

     <h1 className={styles.titleh1Container}>
     {CRT_TA_SONNA.client_page_title}
     </h1>

      <section className={styles.sickPageLineSection}>
        <div class={styles.sickScreenline}></div>
        <div class={styles.sickScreenline}></div>
        <div class={styles.sickScreenline}></div>
      </section>

      <section className={styles.sickPageimgSection}>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
        <div
          class={styles.sickImg}
          id="sickImg"
          style={{
            background: "url(https://assets.codepen.io/2621168/img1.jpg)",
          }}
        ></div>
      </section>

      {/* <div className='currrentWork'>
</div> */}
    </div>
  );
}

export default SickPage;
