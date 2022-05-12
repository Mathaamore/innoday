import React from 'react';

import { Block
} 
from './MuseeElement'

const Musee = ({
  style,
  isClose
}) => {
  return (
    <>
      <Block style={style} isClose={isClose}></Block>
    </>
  )
}

export default Musee