import { styled } from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ResultContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 25px;
    align-items: center;
    margin: 0 100px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px){
        width: 100%;
        margin: 0;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 1023px){
        width: 80%;
        margin: 0;
        margin-bottom: 40px;
    }
`

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        min-height: 100vh;
    }
`
