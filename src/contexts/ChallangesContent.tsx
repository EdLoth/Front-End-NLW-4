import {createContext, useState, ReactNode} from 'react';
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
}

export const ChallangesContext = createContext({} as ChallangeContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [challangesCompleted, setChallangeCompleted] = useState(0);



  function levelUp() {
    setLevel(level + 1);
  }

  const [activeChallange, setActiveChallange] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function startNewChallange() {
    const randomChallangesIndex = Math.floor(Math.random() * challanges.length)
    const challange = challanges[randomChallangesIndex];

    setActiveChallange(challange)
  }

  function resetChallange() {
      setActiveChallange(null)
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
        experienceToNextLevel
        }}>
        {children}
  </ChallangesContext.Provider>
  )
}