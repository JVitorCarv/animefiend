import { HeaderContainer, IconContainer, Title } from "./styles"
import GitHubIcon from '@mui/icons-material/GitHub';
import { theme } from "../../styles/global";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
    return (
        <HeaderContainer>
            <a href="https://github.com/JVitorCarv/animefiend" target="_blank" rel="noreferrer">
                <IconContainer>
                    <GitHubIcon style={{ color: theme.palette.primary.main }} fontSize="inherit" />
                </IconContainer>
            </a>
            <Title>ANIMEFIeND🔍</Title>
            <IconContainer>
                <HelpOutlineIcon style={{ color: theme.palette.primary.main }} fontSize="inherit" />
            </IconContainer>

        </HeaderContainer>
    )
}

export default Header