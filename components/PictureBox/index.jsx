import { PicturePreview, Overlay, SearchButton} from "./styles"
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';


const PictureBox = ({onClick, picture}) => {
    const [onSearch, setOnSearch] = useState()

    return (
        <PicturePreview background={picture}>
            <Overlay onMouseEnter={() => setOnSearch(1)} onMouseLeave={() => setOnSearch(0)}>
                <SearchButton onClick={onClick} visible={onSearch}><SearchIcon fontSize="large"/></SearchButton>
            </Overlay>
        </PicturePreview>
    )
}

export default PictureBox