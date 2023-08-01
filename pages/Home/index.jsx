import * as s from "./styles"
import { useState } from "react"
import UploadBox from "../../components/UploadBox"

const Home = () => {
    const [picture, setPicture] = useState()
    const handleFileSelected = (file) => {
        const pictureUrl = URL.createObjectURL(file)
        setPicture(pictureUrl)
    }

    return (
        <>
            <s.FlexContainer>
                <s.Title>ANIMEFIeND🔍</s.Title>
                {picture && (<s.PicturePreview background={picture}/>)}
                <UploadBox handleFileSelected={handleFileSelected}/>
            </s.FlexContainer>
        </>
    )
}

export default Home