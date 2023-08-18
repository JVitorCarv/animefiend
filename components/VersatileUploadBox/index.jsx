import PictureBox from '../PictureBox'
import UploadBox from '../UploadBox'
import { useState } from 'react'
import { DragFileElement, VersatileUploadContainer } from './styles'


const VersatileUploadBox = ({picture, setPicture, setFile}) => {
    const [dragActive, setDragActive] = useState(false)
    
    const handleFileSelected = (file) => {
        const pictureUrl = URL.createObjectURL(file)
        setFile(file)
        setPicture(pictureUrl)
    }

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelected(e.dataTransfer.files[0]) 
        }
    }

    return (
        <VersatileUploadContainer>
            {picture && (<PictureBox 
                picture={picture}
                setPicture={setPicture}
                handleDrag={handleDrag}
            />)}
            {!picture && <UploadBox 
                handleDrag={handleDrag}
                handleFileSelected={handleFileSelected}
            />}
            {dragActive && <DragFileElement 
                onDragEnter={handleDrag} 
                onDragLeave={handleDrag} 
                onDragOver={handleDrag} 
                onDrop={handleDrop} 
            />}
        </VersatileUploadContainer>
    )
}

export default VersatileUploadBox