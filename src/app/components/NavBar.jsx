import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'


const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt='telephone' width="32" height="32" />
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW</div>
            <div className={styles.text}>0771234578</div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo.png' alt="logo" width="160" height="96" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt="logo" width="30" height="30" />
        </div>
        <div className={styles.counter}>
          2
        </div>
      </div>
    </div>
  )
}

export default NavBar