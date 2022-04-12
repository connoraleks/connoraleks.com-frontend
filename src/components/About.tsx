import { FunctionComponent } from 'react'
import '../styles/About.css';

const About: FunctionComponent<any> = () => {

  return (
  <div className="aboutPage">
    <div className="aboutText">
      <h1>About Me</h1>
      <div className="bubbleContainer">
        <div className="textBubble">
          <p>Hello there! My name&apos;s Connor.<br/>I&apos;m a developer from the United States.<br/>Looking for my <a href = '/ConnorAleks.pdf'download={'/ConnorAleks.pdf'}>resume</a>?</p>
        </div>
      </div>
    </div>
    <div className="animoji">
      <img alt="Waving Connor Animoji" src="/wavingAnimoji.PNG" style={{maxHeight: "100%", maxWidth: "100%"}}/>
    </div>
  </div>
  )
}

export default About
