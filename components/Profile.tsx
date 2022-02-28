import { FunctionComponent } from 'react'
import styles from '../styles/Profile.module.css';
import Image from 'next/image';

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
          <p>Hello there! My name&apos;s Connor.<br/>I&apos;m a developer from the United States.<br/>Looking for my <a href = '/ConnorAleks.pdf'download={'/ConnorAleks.pdf'}>resume</a>?</p>
        </div>
      </div>
    </div>
    <div className={styles.animoji}>
      <Image alt="Waving Connor Animoji" src="/wavingAnimoji.PNG" width={421} height={421} quality={100} objectPosition={"bottom"} />
    </div>
  </div>
  )
}

export default Profile
