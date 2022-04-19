import { FunctionComponent } from 'react'
import '../styles/LandingPage.css';

const LandingPage: FunctionComponent<any> = () => {

  return (
  <div className="landingPage">
    <div className="introText">
      <h1>Connor Aleksandrowicz</h1>
      <h3>Fullstack Web Developer</h3>
      <div className="bubbleContainer">
        <div className="textBubble">
          <p>Hello there! My name&apos;s Connor.<br/>I&apos;m a developer from the United States.<br/>Take a look at my <a href = '/ConnorAleks.pdf'download={'/ConnorAleks.pdf'}>resume</a> and <a target="_blank" rel="noopener noreferrer" href = 'https://stars-mauve.vercel.app/'>portfolio</a>!</p>
        </div>
      </div>
    </div>
    <div className="animoji">
      <img alt="Waving Connor Animoji" src="/wavingAnimoji.PNG" style={{maxHeight: "100%", maxWidth: "100%"}}/>
    </div>
  </div>
  )
}

export default LandingPage
