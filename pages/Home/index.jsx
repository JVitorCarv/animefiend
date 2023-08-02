import * as s from "./styles"
import { useEffect, useState } from "react"
import UploadBox from "../../components/UploadBox"
import PictureBox from "../../components/PictureBox"
import ListResult from "../../components/ListResult"
import mockData from "../../mockData.json" /* remove later */
import Spinner from "../../components/Spinner"

const Home = () => {
    const [picture, setPicture] = useState()
    const [file, setFile] = useState()
    const handleFileSelected = (file) => {
        const pictureUrl = URL.createObjectURL(file)
        setFile(file)
        setPicture(pictureUrl)
    }

    const [spinnerEnabled, setSpinnerEnabled] = useState(false)
    const [animeData, setAnimeData] = useState()
    const fetchData = async() => {
        setAnimeData()
        setSpinnerEnabled(true)
        if (picture) {
            const formData = new FormData()
            formData.append("image", file)
            const data = await fetch("https://api.trace.moe/search?anilistInfo", {
                method: "POST",
                body: formData,
            })
            const dataJson = await data.json()
            const arrayData = dataJson.result.filter(data => data.anilist.isAdult === false)
            console.log(arrayData)
            setAnimeData(arrayData)
        }
        setSpinnerEnabled(false)
    }

    return (
        <>
            <s.FlexContainer>
                <s.Title>ANIMEFIeND🔍</s.Title>
                {picture && (<PictureBox onClick={fetchData} picture={picture}/>)}
                <s.ResultContainer>
                    {spinnerEnabled && (<Spinner />)}
                    {animeData && animeData.map(data => (<ListResult key={data} data={data} />))}
                </s.ResultContainer>
                <UploadBox handleFileSelected={handleFileSelected}/>
            </s.FlexContainer>
        </>
    )
}

export default Home