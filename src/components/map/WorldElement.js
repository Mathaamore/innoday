import styled from "styled-components";
import Carte from '../../images/new_bg.png'


export const Camera = styled.div`
    width: 98vw;
    height: 96vh;
    overflow: hidden;
    background: #fffcda;
    position: relative;

    outline: 5px solid #534741;
`

export const Map = styled.div`
    background: #fffcda;
    background-image: url(${Carte});
    background-size: 100%;
    width: calc(65 * var(--grid-cell));
    height: calc(32 * var(--grid-cell));
    position: relative;
`