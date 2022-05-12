import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  PopUp,
  Title,
  Descp,
  Wrapper,
  Btn
}
from './TutorialElement'
import {MdClose} from 'react-icons/md'
import Key from '../../images/control.png'

const Tutorial = () => {
  const [isTutorial, setisTutorial] = useState(true);

  return (
    <>
      <PopUp isTutorial={isTutorial}>
        <Wrapper style={{textAlign : "right"}}>
          <span onClick={() => setisTutorial(false)} style={{fontSize : "30px", cursor : "pointer"}}><MdClose /></span>
          <Title>Bienvenue</Title>
          <Descp>Afin d'utiliser notre plateforme en ligne, veuillez utiliser les touches directionnelles de votre clavier afin de déplacer Sam :</Descp>
          <div style={{textAlign : "center"}}>
            <img src={Key} alt="keys" style={{height : "15vh"}} />
            <br />
            <br />
            <Btn onClick={() => setisTutorial(false)}>Commencer l'aventure !</Btn>
          </div>
        </Wrapper>
      </PopUp>
    </>
  )
}

export default Tutorial