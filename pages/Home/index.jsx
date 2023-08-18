import * as s from "./styles"
import { useEffect, useState } from "react"
import ListResult from "../../components/ListResult"
import Spinner from "../../components/Spinner"
import Header from "../../components/Header"
import VersatileUploadBox from "../../components/VersatileUploadBox"
import axios from "axios"

const Home = () => {
    const [file, setFile] = useState()
    const [picture, setPicture] = useState()
    const [spinnerEnabled, setSpinnerEnabled] = useState(false)
    const [animeData, setAnimeData] = useState()

    const fetchData = async () => {
        setSpinnerEnabled(true);
        if (picture) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post(
                    'https://api.trace.moe/search?anilistInfo',
                    formData
                );

                const arrayData = response.data.result.filter(
                    (data) => data.anilist.isAdult === false
                );
                setAnimeData(arrayData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        setSpinnerEnabled(false);
    };

    useEffect(() => {
        if (picture) {
            fetchData()
        }
    }, [picture])

    return (
        <s.HomeContainer >
            <s.FlexContainer>
                <Header />
                <VersatileUploadBox picture={picture} setPicture={setPicture} setFile={setFile} />
                {picture && <s.ResultContainer>
                    {spinnerEnabled && (<Spinner />)}
                    {animeData && animeData.map(data => (<ListResult key={data} data={data} />))}
                </s.ResultContainer>}
            </s.FlexContainer>
        </s.HomeContainer>
    )
}

export default Home