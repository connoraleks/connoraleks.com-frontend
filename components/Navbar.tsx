import { FunctionComponent } from 'react'
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

type props = {

}

const Navbar: FunctionComponent<props> = () => {
    return (
        <div className={styles.navbar}>
            <a>Home</a>
            <a>Skills</a>
            <a>Projects</a>
        </div>
    );
}

export default Navbar;
