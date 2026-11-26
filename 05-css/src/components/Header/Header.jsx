import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.head}>
      <p className={styles.logo}>Hello This Header</p>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
