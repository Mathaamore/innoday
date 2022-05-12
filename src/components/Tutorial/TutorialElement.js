import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap-grid.min.css'; //create display errors
import {
    Row,
    Col
} from 'reactstrap';

export const PopUp = styled.div`
    display: ${({isTutorial}) => ( isTutorial ? '' : 'none' )};

    width: 60vw;
    height: 70vh;

    margin: 13vh 0 0 19vw;
    
    position: absolute;
    
    color: #534741;
    background: rgba(255, 252, 218, 0.8);
    outline: 5px solid #534741;
    border-radius : 10px;

    z-index: 3;
`

export const Wrapper = styled.div`
    padding: 10px 30px;
`

export const Title = styled.h1`
    text-align: center;
    font-family: "Dancing Script";
    margin: 5px;
`

export const Descp = styled.p`
    text-align: center;
    margin: 10px;
`

export const CustomRow = styled(Row)`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto; 
`

export const CustomCol = styled(Col)`
    padding: 0px 5px;
    margin-bottom: 0px;
    font-family: "Dancing Script";
`

export const Btn = styled.button`
    padding: 2px 10px;
    background: white;
    color: #534741;
    border-radius: 10px;
    border: 2px solid #534741;
    font-size: 18px;
    font-weight: bold;
    font-family: "Dancing Script";
    cursor: pointer;
`