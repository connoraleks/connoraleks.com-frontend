import { FunctionComponent} from 'react'
import '../styles/Links.css';
import SvgGithub from './svgs/githubsvg';
import SvgLinkedin from './svgs/linkedinsvg';
import SvgTwitter from './svgs/twittersvg';

const Navbar: FunctionComponent<any> = () => {
    return (
        <div className="links">
            <a href="https://github.com/connoraleks" target="_blank" rel="noopener noreferrer" className="github">
                <SvgGithub fill="white"/>
            </a>
            <a href="https://www.linkedin.com/in/connor-aleksandrowicz-731233217/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <SvgLinkedin fill="white"/>
            </a>
            <a href="https://twitter.com/cjaleks" target="_blank" rel="noopener noreferrer" className="twitter">
                <SvgTwitter fill="white"/>
            </a>
        </div>
    )
}

export default Navbar;
