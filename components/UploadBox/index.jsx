import * as s from "./styles"
import { useRef, useState } from "react"

const UploadBox = ({handleFileSelected}) => {
    const [dragActive, setDragActive] = useState(false)
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

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            handleFileSelected(e.target.files[0])
        }
    }
    
    const inputRef = useRef()
    const onButtonClick = () => {
        inputRef.current.click()
    }


    return (
        <s.FormFileUpload onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <s.InputFileUpload ref={inputRef} onChange={handleChange} type="file" id="upload" />
            <s.LabelFileUpload htmlFor="upload" className={dragActive ? "drag-active" : ""}>
                <div>
                    <p>Drag and drop your file here or </p>
                    <s.UploadButton onClick={onButtonClick}>Upload a file</s.UploadButton>
                </div>
            </s.LabelFileUpload>
            { dragActive && <s.DragFileElement onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} /> }
        </s.FormFileUpload>
    )
}

export default UploadBox
