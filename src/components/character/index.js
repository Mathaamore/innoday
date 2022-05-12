import React, { useState } from 'react';

import { Character,
         Shadow,
         CharacterSpritesheet
} 
from './HeroElement'

const Hero = ({
  dir,
  style
}) => {
  const [pos, setpos] = useState(0);
  const [isWalking, setisWalking] = useState(false);

  if(dir === 'up'){
    if(pos !== 64){
      setpos(64)
    }
    if(isWalking !== true){
      setisWalking(true)
    }
  }
  else if(dir === 'left'){
    if(pos !== 96){
      setpos(96)
    }
    if(isWalking !== true){
      setisWalking(true)
    }
  }
  else if(dir === 'right'){
    if(pos !== 32){
      setpos(32)
    }
    if(isWalking !== true){
      setisWalking(true)
    }
  }
  else if(dir === 'down'){
    if(pos !== 0){
      setpos(0)
    }
    if(isWalking !== true){
      setisWalking(true)
    }
  }
  else if(dir === 'no' && isWalking !== false){
    setisWalking(false)
  }

  return (
    <>
      <Character style={style}>
        <Shadow></Shadow>
        <CharacterSpritesheet pos={pos} isWalking={isWalking}></CharacterSpritesheet>
      </Character>
    </>
  )
}

export default Hero