import {createContext, useState, ReactNode, useEffect} from 'react';
import challanges from '../../challenges.json'


interface ChallangesProviderProps {
    children: ReactNode;
}

interface Challange {
    type: 'body' | 'eye' ;
    description: string;
    amount:number;
}

interface ChallangeContextData {
    level: number;
    currentExperience: number;
    challangesCompleted: number;
    experienceToNextLevel: number;
    activeChallange: Challange;
    levelUp: () => void;
    startNewChallange: () => void;
    resetChallange: () => void;
    completeChallange: () => void;
}

export const ChallangesContext = createContext({} as ChallangeContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangeCompleted] = useState(0);

  const [activeChallange, setActiveChallange] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

useEffect(() => {
  Notification.requestPermission();
}, [])
  
  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange() {
    const randomChallangesIndex = Math.floor(Math.random() * challanges.length)
    const challange = challanges[randomChallangesIndex];

    setActiveChallange(challange)

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo Desafio!! <3', {
        body: `Valendo ${challange.amount}xp!`
      })
    }
  }

  function resetChallange() {
      setActiveChallange(null)
  }

function completeChallange() {
  if(!activeChallange) {
    return;
  }

  const { amount } = activeChallange;

  let finalExperience = currentExperience + amount;

  if(finalExperience => experienceToNextLevel){
    finalExperience = finalExperience - experienceToNextLevel;
    levelUp();
  }

  setCurrentExperience(finalExperience);
  setActiveChallange(null);
  setChallangeCompleted(challangesCompleted + 1);
}

  return(
    <ChallangesContext.Provider value={{ 
        level, 
        levelUp,
        currentExperience, 
        challangesCompleted,
        startNewChallange, 
        activeChallange,
        resetChallange,
        experienceToNextLevel,
        completeChallange
        }}>
        {children}
  </ChallangesContext.Provider>
  )
}
