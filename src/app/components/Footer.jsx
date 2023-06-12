import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div clasName={styles.item}>
        <Image src="/img/bg.png" alt='footer-image'   style={{objectFit:"contain"}} width="500" height="500"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            123 R Don Road #304.
            <br /> Harare, Zimbabwe
            <br /> +263 774578116
          </p>
          <p className={styles.text}>
            123 R Don Road #304.
            <br /> Harare, Zimbabwe
            <br /> +263 774578116
          </p>
          <p className={styles.text}>
            123 R Don Road #304.
            <br /> Harare, Zimbabwe
            <br /> +263 774578116
          </p>
          <p className={styles.text}>
            123 R Don Road #304.
            <br /> Harare, Zimbabwe
            <br /> +263 774578116
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer