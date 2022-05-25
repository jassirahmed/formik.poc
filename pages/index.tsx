import type { NextPage } from 'next'
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
