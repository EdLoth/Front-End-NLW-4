import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContent';

import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallanges() {
    const { challangesCompleted } = useContext(ChallangesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos: </span>
            <span>{challangesCompleted} </span>
        </div>
    )
}
