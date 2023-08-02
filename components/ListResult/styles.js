import { styled } from "styled-components";

export const ListResultContainer = styled.div`
    width: 100%;
    height: ${props => props.expand ? "500px" : "90px"};
    font-size: 25px;
    color: white;
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
`

export const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
`

export const FrameVideo = styled.video`
    height: 100%;
`

export const ImgContainer = styled.img`
    background: ${(props) => `url${props.background}`};
    border-radius: 25px;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`