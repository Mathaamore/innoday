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
          <div style={{textAlign : "center"}}>
          <Title>Bienvenue dans le monde BM5</Title>
          <Descp>Afin d'utiliser notre plateforme en ligne, veuillez utiliser les touches directionnelles de votre clavier afin de déplacer Sam :</Descp>
            <img src={Key} alt="keys" style={{height : "15vh"}} />
            <br />
            <Descp>Vous pourrez alors explorer les différents mondes et accéder aux différentes salles en cliquant sur les 🧭.<br />Bonne visite !</Descp>
            <Descp>Enfin si vous avez une quelconque question, n'hésitez pas à cliquer sur l'icone de tchat en bas à droite de votre écran.</Descp>
            <Btn onClick={() => setisTutorial(false)}>Commencer l'aventure !</Btn>
          </div>
        </Wrapper>
      </PopUp>
    </>
  )
}

export default Tutorial