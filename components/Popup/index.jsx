import { useEffect, useRef } from 'react'
import { BackgroundOverlay, ClosePopup, Instructions, InstructionsContainer } from './styles'

const Popup = ({ setPopup, toggleScroll }) => {
    const instructionsRef = useRef(null)
    
    const handleClick = () => {
        setPopup(false)
        toggleScroll(true)
    }

    const useOutside= (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setPopup(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutside(instructionsRef)

    return (
        <>
            <BackgroundOverlay />
            <InstructionsContainer>
                <Instructions ref={instructionsRef}>
                    <p>Drag and drop an anime frame or upload it from your files.
                        ANIMEFIeND will search for the image and tell you from what anime
                        it is, as well as the episode and its timestamp!</p>
                    <ClosePopup onClick={handleClick}>✖</ClosePopup>
                </Instructions>
            </InstructionsContainer>
        </>
    )
}

export default Popup