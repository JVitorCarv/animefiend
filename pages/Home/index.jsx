import * as s from "./styles"
import { useState } from "react"
import UploadBox from "../../components/UploadBox"
import PictureBox from "../../components/PictureBox"


const Home = () => {
    const [picture, setPicture] = useState()
    const [file, setFile] = useState()
    const handleFileSelected = (file) => {
        const pictureUrl = URL.createObjectURL(file)
        setFile(file)
        setPicture(pictureUrl)
    }

    const [animeData, setAnimeData] = useState()
    const fetchData = async() => {
        if (picture) {
            const formData = new FormData()
            formData.append("image", file)
            const data = await fetch("https://api.trace.moe/search?anilistInfo", {
                method: "POST",
                body: formData,
            })
            const dataJson = await data.json()
            console.log(dataJson)
            setAnimeData(dataJson)
        }
    }

    return (
        <>
            <s.FlexContainer>
                <s.Title>ANIMEFIeND🔍</s.Title>
                {picture && (<PictureBox onClick={fetchData} picture={picture}/>)}
                <UploadBox handleFileSelected={handleFileSelected}/>
            </s.FlexContainer>
        </>
    )
}

export default Home