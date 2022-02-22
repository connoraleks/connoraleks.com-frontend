import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../styles/Links.module.css';
import SvgGithub from './svgs/githubsvg';
import SvgLinkedin from './svgs/linkedinsvg';
import SvgTwitter from './svgs/twittersvg';

const Navbar: FunctionComponent<any> = () => {
    const [size, setSize] = useState("1x");
    useEffect(() => {
        window.addEventListener('resize', () =>{
            if(window.innerWidth < 500) setSize("2x")
            else if(window.innerWidth < 1000) setSize("3x")
            else if(window.innerWidth < 1500) setSize("4x")

        });
    }, [])
    return (
        <div className={styles.links}>
            <a href="https://github.com/Connorjaz" target="_blank" rel="noopener noreferrer" className={styles.github}>
                <SvgGithub fill="white"/>
            </a>
            <a href="https://www.linkedin.com/in/connor-aleksandrowicz-731233217/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                <SvgLinkedin fill="white"/>
            </a>
            <a href="https://twitter.com/Connorjaz" target="_blank" rel="noopener noreferrer" className={styles.twitter}>
                <SvgTwitter fill="white"/>
            </a>
        </div>
    )
}

export default Navbar;
