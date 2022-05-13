import styled from "styled-components";
import Carte from '../../images/new_bg.png'


export const Camera = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #fffcda;
    position: relative;
`

export const Map = styled.div`
    background: #fffcda;
    background-image: url(${Carte});
    background-size: 100%;
    width: calc(65 * var(--grid-cell));
    height: calc(32 * var(--grid-cell));
    position: relative;
`