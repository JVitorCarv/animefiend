import { PicturePreview, Overlay, SearchButton} from "./styles"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';


const PictureBox = ({onClick, picture, setPicture, handleDrag}) => {
    const [onSearch, setOnSearch] = useState()

    return (
        <PicturePreview $background={picture}>
            <Overlay 
                onMouseEnter={() => setOnSearch(1)} 
                onMouseLeave={() => setOnSearch(0)} 
                onDragEnter={handleDrag}
            >
                <SearchButton onClick={onClick} $visible={onSearch}>
                    <DeleteIcon onClick={() => setPicture()} fontSize="large"/>
                </SearchButton>
            </Overlay>
        </PicturePreview>
    )
}

export default PictureBox