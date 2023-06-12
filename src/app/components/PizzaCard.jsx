import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () => {
  return (
      <div className={styles.container}>
          <Image src='/img/pizza.png' alt='pizza' width="200" height="200" style={{objectFit:"contain"}}/>
          <h1 className={styles.title}>FIORI DI ZUCA</h1>
          <span className={styles.price}>$19.90</span>
          <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt eius, ipsum sed esse error sequi consectetur rerum nesciunt maxime at modi facere perspiciatis consequuntur! Possimus sequi consequatur dolores adipisci!
          </p>
    </div>
  )
}

export default PizzaCard