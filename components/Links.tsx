import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useEffect, useState } from 'react'
import styles from '../styles/Links.module.css';
import github from '../public/github.svg';
import twitter from '../public/twitter.svg';
import linkedin from '../public/linkedin.svg';
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
            <a href="https://github.com/Connorjaz" target="_blank" rel="noopener noreferrer" className={styles.github}><FontAwesomeIcon icon={github}/></a>
            <a href="https://www.linkedin.com/in/connor-aleksandrowicz-731233217/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}><FontAwesomeIcon icon={linkedin}/></a>
            <a href="https://twitter.com/Connorjaz" target="_blank" rel="noopener noreferrer" className={styles.twitter}><FontAwesomeIcon icon={twitter}/></a>
        </div>
    )
}

export default Navbar;
