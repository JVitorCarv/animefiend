import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 400px) {
        width: 100%;
    }

    @media screen and (max-width: 360px) {
        width: 90%;
    }
`

export const Title = styled.h1`
    color: white;
    font-family: 'Kanit', sans-serif;
    animation-iteration-count: infinite;
    animation-duration: 40s;
    animation-name: rgb_title;

    @media screen and (min-width: 1025px) {
        font-size: 100px;
    }

    @media screen and (min-width: 500px) {
        &::after {
            content: "🔍";
        }
    }

    @keyframes rgb_title {
        from {
            filter: hue-rotate(0deg);
        }
        50% {
            filter: hue-rotate(360deg);
        }
        to {
            filter: hue-rotate(0deg);
        }
    }
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    font-size: 60px;
    cursor: pointer;

    @media screen and (max-width: 360px) {
        font-size: 30px;
        width: 30px;
    }
`
