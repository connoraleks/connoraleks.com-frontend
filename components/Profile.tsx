import { FunctionComponent } from 'react'
import styles from '../styles/Profile.module.css';
import Image from 'next/image';
import animoji from '../public/animoji.png'

type props = {

}

const Profile: FunctionComponent<props> = () => {

  return (
  <div className={styles.landingPage}>
    <div className={styles.introText}>
      <h1>Connor Aleksandrowicz</h1>
      <h3>Fullstack Web Developer</h3>
      <div className={styles.bubbleContainer}>
        <div className={styles.textBubble}>
          <p>Hello there! My name&apos;s Connnor.<br/>I&apos;m a Software Engineer from the United States.</p>
        </div>
      </div>
    </div>
    <div className={styles.animoji}>
      <Image alt="Vercel logo" src={animoji} width={410} height={330} quality={100} objectPosition={"bottom"} />
    </div>
  </div>
  )
}

export default Profile
