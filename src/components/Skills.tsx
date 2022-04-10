import { FunctionComponent } from 'react'
import '../styles/Skills.css'


const Skills: FunctionComponent<any> = () => {
    return (
        <div className="landingPage">
            <h2>These are my skills</h2>
            <div className="skills">
                <div>
                    <img src="/ReactLogo.png" alt="React Logo" width={100} height={34}/>
                </div>
                <div>
                    <img src="/HTML.png" alt="HTML Logo" width={100} height={100}/>
                </div>
                <div>
                    <img src="/css.png" alt="CSS Logo" width={100} height={100}/>
                </div>
            </div>
        </div>
    )
}

export default Skills