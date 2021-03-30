import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallangesContext);
   const percentToNextLever = Math.round(currentExperience * 100) / experienceToNextLevel;
   
    return(
        <header className={styles.experienceBar}>
            <span>0 Exp</span>
            <div >
                <div style={{ width: `${percentToNextLever}%`}} />
                <span 
                className={styles.currentExperience} 
                style={{left: `${percentToNextLever}%`}
                }>
                    {currentExperience} Exp
                </span>
            </div>
            <span>{experienceToNextLevel} Exp</span>
        </header>

    )
}
