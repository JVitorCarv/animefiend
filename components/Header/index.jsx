import { HeaderContainer, IconContainer, Title } from "./styles"
import GitHubIcon from '@mui/icons-material/GitHub';
import { theme } from "../../styles/global";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from "react";
import Popup from "../Popup";

const Header = () => {
    const [popup, setPopup] = useState(false)
    const toggleScroll = (value) => {
        const overflowValue = value ?  'auto' : 'hidden'
        document.body.style.overflow = overflowValue
    }
    const handleClick = () => {
        setPopup(true)
        toggleScroll(false)
    }
    return (
        <HeaderContainer>
            <a href="https://github.com/JVitorCarv/animefiend" target="_blank" rel="noreferrer">
                <IconContainer>
                    <GitHubIcon 
                        style={{ color: theme.palette.primary.main }} 
                        fontSize="inherit" 
                    />
                </IconContainer>
            </a>
            <Title>ANIMEFIeND🔍</Title>
            {popup && (<Popup setPopup={setPopup} toggleScroll={toggleScroll} />)}
            <IconContainer>
                <HelpOutlineIcon 
                    onClick={handleClick}
                    style={{ color: theme.palette.primary.main }} 
                    fontSize="inherit" 
                />
            </IconContainer>

        </HeaderContainer>
    )
}

export default Header