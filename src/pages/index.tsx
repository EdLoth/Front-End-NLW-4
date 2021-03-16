import Head from 'next/head';
import { ChallangeBox } from '../Components/ChallangeBox';
import CompletedChallanges from "../Components/CompletedChallenges";
import Countdown from '../Components/Countdown';
import ExperienceBar from "../Components/ExperienceBar";
import Profile from "../Components/Profile";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.It</title>
      </Head>
    
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div>
  )
}
