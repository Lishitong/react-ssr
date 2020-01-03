import React from 'react'
import styles from './About.css'
import withStyle from '../component/withStyle'
function About() {
  return <div>
    <h1 className={styles.title}>关于</h1>
  </div>
}

export default withStyle(About,styles)