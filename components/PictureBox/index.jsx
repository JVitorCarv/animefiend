import { PicturePreview, Overlay, SearchButton} from "./styles"
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';


const PictureBox = ({onClick, picture, handleDrag}) => {
    const [onSearch, setOnSearch] = useState()


    return (
        <PicturePreview background={picture}>
            <Overlay 
                onMouseEnter={() => setOnSearch(1)} 
                onMouseLeave={() => setOnSearch(0)} 
                onDragEnter={handleDrag}
            >
                <SearchButton onClick={onClick} visible={onSearch}><SearchIcon fontSize="large"/></SearchButton>
            </Overlay>
        </PicturePreview>
    )
}

export default PictureBox