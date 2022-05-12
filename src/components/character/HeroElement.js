import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

export const Character = styled.div`
    width: calc( var(--grid-cell)* 2 );
    height: calc( var(--grid-cell)* 2 );
    position: absolute;
    overflow:hidden;
    z-index: 2;
`

export const Shadow = styled.div`
    width: calc( var(--grid-cell)* 2 );
    height: calc( var(--grid-cell)* 2 );
    position: absolute;
    left:0;
    top:0;
    background: url("https://assets.codepen.io/21542/DemoRpgCharacterShadow.png") no-repeat no-repeat;
    background-size: 100%;
`

let walkAnimation = keyframes`
    from {
    transform: translate3d(0%,0%,0);
  }
  to {
    transform: translate3d(-100%,0%,0);
  }
`

export const CharacterSpritesheet = styled.div`
    position: absolute;
    background: url("https://assets.codepen.io/21542/DemoRpgCharacter.png") no-repeat no-repeat;
    background-size: 100%;
    width: calc( var(--grid-cell)* 8 );
    height: calc( var(--grid-cell)* 8 );
    background-position-y: ${({ pos = 0 }) => 2 * -pos}px;
    animation: ${({isWalking}) => ( isWalking ? css`${walkAnimation} 0.6s steps(4) infinite` : '')};
   
`