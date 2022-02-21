import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import styles from '../styles/Links.module.css';
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
            <a href="https://github.com/Connorjaz" target="_blank" rel="noopener noreferrer" className={styles.github}><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/connor-aleksandrowicz-731233217/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://twitter.com/Connorjaz" target="_blank" rel="noopener noreferrer" className={styles.twitter}><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
    )
}

export default Navbar;
