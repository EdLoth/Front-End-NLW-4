import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';
import { ChallangeBox } from './ChallangeBox';

export default function Profile() {
    const { level } = useContext(ChallangesContext)

    return (

        <div className={styles.profileContainer}>
            <img src="https://github.com/edloth.png" alt="Eduardo Ramos"/>
            <div>
                <strong>Eduardo Ramos</strong>
                <p>
                   <img src="icons/level.svg" alt="level"/>
                   Level {level}
                </p>
            </div>
        </div>
    )
}
