import React from 'react';

import { Block
} 
from './ConferenceElement'

const Conference = ({
  style,
  isClose
}) => {
  return (
    <>
      <Block style={style} isClose={isClose}></Block>
    </>
  )
}

export default Conference