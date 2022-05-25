import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Valdation from '../Components/Valdation'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Valdation />
    </div>
  )
}

export default Home
