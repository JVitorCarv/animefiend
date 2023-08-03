import * as s from "./styles"
import { useEffect, useState } from "react"
import ListResult from "../../components/ListResult"
import mockData from "../../mockData.json" /* remove later */
import Spinner from "../../components/Spinner"
import Header from "../../components/Header"
import VersatileUploadBox from "../../components/VersatileUploadBox"

const Home = () => {
    const [file, setFile] = useState()
    const [picture, setPicture] = useState()

    const [spinnerEnabled, setSpinnerEnabled] = useState(false)
    const [animeData, setAnimeData] = useState()
    const fetchData = async() => {
        setAnimeData()
        setSpinnerEnabled(true)
        
        /*
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
        */
        
        
        await new Promise(p => setTimeout(p, 2000))
        setAnimeData(mockData.result) 
        
        setSpinnerEnabled(false)
    }

    useEffect(() => {
        if (picture) {
            fetchData()
        }
    }, [picture])

    return (
        <s.HomeContainer>
            <s.FlexContainer>
                <Header />
                <VersatileUploadBox picture={picture} setPicture={setPicture} setFile={setFile}/>
                {picture && <s.ResultContainer>
                    {spinnerEnabled && (<Spinner />)}
                    {animeData && animeData.map(data => (<ListResult key={data} data={data} />))}
                </s.ResultContainer>}
            </s.FlexContainer>
        </s.HomeContainer>
    )
}

export default Home