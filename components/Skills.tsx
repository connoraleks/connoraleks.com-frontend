import { FC } from 'react'
import styles from '../styles/Skills.module.css'
import Image from 'next/image';


const Skills: FC = () => {
    return (
        <div className={styles.skills}>
            <div>
                <Image src="/ReactLogo.png" alt="React Logo" width={100} height={34}/>
            </div>
            <div>
                <Image src="/HTML.png" alt="HTML Logo" width={100} height={100}/>
            </div>
            <div>
                <Image src="/css.png" alt="CSS Logo" width={100} height={100}/>
            </div>
            <div>
                <Image src="/Nextjs.png" alt="Nextjs Logo" width={100} height={60}/>
            </div>
        </div>
    )
}

export default Skills