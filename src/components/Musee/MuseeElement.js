import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

export const Block = styled.div`
    width: 415px;
    height: 350px;
    position: absolute;
    background: ${({isClose}) => ( isClose ? 'rgba(25, 0, 0, 0.2)' : 'rgba(255, 0, 0, 0.56)' )};
    z-index: -1;
`