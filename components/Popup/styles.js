import styled from 'styled-components'

export const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 2s linear ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const InstructionsContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Instructions = styled.div`
    background-color: white;
    border-radius: 25px;
    padding: 25px;
    display: flex;
    gap: 10px;
`

export const ClosePopup = styled.p`
    cursor: pointer;
`
