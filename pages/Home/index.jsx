import * as s from "./styles"
import { useEffect, useState } from "react"
import UploadBox from "../../components/UploadBox"
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const [onSearch, setOnSearch] = useState()

    const [picture, setPicture] = useState()
    const handleFileSelected = (file) => {
        const pictureUrl = URL.createObjectURL(file)
        setPicture(pictureUrl)
    }

    const fetchData = async() => {
        /* if (picture) {
            const formData = new FormData()
            formData.append("image", picture)
            const data = await fetch("https://api.trace.moe/search", {
                method: "POST",
                body: formData,
            })
            const dataJson = await data.json()
            console.log(dataJson)
        }*/
    }

    useEffect(() => {
        fetchData()
    }, [picture])

    return (
        <>
            <s.FlexContainer>
                <s.Title>ANIMEFIeND🔍</s.Title>
                {picture && (
                    <s.PicturePreview background={picture}>
                        <s.Overlay onMouseEnter={() => setOnSearch(1)} onMouseLeave={() => setOnSearch(0)}>
                            <s.SearchButton visible={onSearch}><SearchIcon fontSize="large"/></s.SearchButton>
                        </s.Overlay>
                    </s.PicturePreview>)}
                <UploadBox handleFileSelected={handleFileSelected}/>
            </s.FlexContainer>
        </>
    )
}

export default Home