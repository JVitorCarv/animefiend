import { styled } from "styled-components";

export const ListResultContainer = styled.div`
    width: 100%;
    min-height: ${props => props.$expanded == 'true' ? "400px" : "90px"};
    padding: ${props => props.$expanded == 'true' ? "30px" : ""};
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 25px;
    color: white;
    border-radius: 25px;
    overflow: hidden;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
    text-align: center;
    margin: 10px;
    transition: 0.2s;
    font-weight: bold;
    text-shadow: 10px;
    text-shadow: 1px 1px 2px black;
    box-shadow: 5px 10px orangered;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const ListResultOverlay = styled.div`
    text-shadow: none;
    position: absolute;
    display: flex;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.1);
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const AnimeContainer = styled.div`
    width: 80%;
    text-shadow: none;
    display: flex;
    flex-direction: row;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
    overflow-wrap: break-word;
`

export const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        width: 240px;
        height: 135px;
    }

    @media screen and (max-width: 350px) {
        width: 160px;
        height: 90px;
    }
`

export const FrameVideo = styled.video`
    height: 100%;
`

export const ImgContainer = styled.img`
    background: ${(props) => `url${props.background}`};
    border-radius: 25px;
    @media screen and (max-width: 340px) {
        width: 150px;
    }
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-overflow: clip;
    min-width: 0; /* this is used to make word-break work */
    word-break: break-word;
`