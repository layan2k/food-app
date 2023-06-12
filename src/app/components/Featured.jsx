import React, { useState } from 'react'
import styles from "../styles/Featured.module.css"
import Image from 'next/image'

const Featured = () => {
    const images = ["/img/featured.png", "/img/featured2.png", "/img/featured3.png"]
    const [Index, setIndex] = useState(0)

    const handleArrow = (direction) => {
        if (direction == 'l') {
            setIndex(Index !==0 ? Index - 1 : 2)
        }
        if (direction == 'r') {
            setIndex(Index !==2 ? Index - 1 : 0)
        }
    }
  return (
      <div className={styles.container}>
          <div className={styles.arrowContaner} style={{left:0}}>
          <Image src="/img/arrowl.png" alt='Left-Arrow' fill={true} onClick={()=>handleArrow("l")} style={{objectFit:"contain"}} />
          </div>
          <div className={styles.wrapper} style={{transform: `translateX(${-100*Index})`}}>
              <div className={styles.imgContainer}>
                  {images.map((item, i) => (
                      <Image key={i} src="/img/pizza.png" alt='Featured-Image' fill={true} style={{objectFit:"contain"}}/>
                  ))}
              </div>
          </div>
          <div className={styles.arrowContaner} style={{right:0}}>
          <Image src="/img/arrowr.png" alt='Right-Arrow' fill={true} onClick={()=>handleArrow("r")} style={{objectFit:"contain"}}/>
          </div>
      </div>
  )
}

export default Featured