import { useEffect, useState } from 'react'
import { AnimeContainer, FrameVideo, ImgContainer, ListResultContainer, StatsContainer, VideoContainer } from './styles'
import axios from 'axios'

const ListResult = ({ data, refresh }) => {
    const [mediaCover, setMediaCover] = useState()
    const [open, setOpen] = useState(false)

    const coverQuery = `
    query ($id: Int, $page: Int) {
        Page(page: $page) {
          media(id: $id) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
      `

    const fetchData = async () => {
        const variables = {
            id: data.anilist.id,
        };

        const url = 'https://graphql.anilist.co';
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };

        try {
            const response = await axios.post(url, {
                query: coverQuery,
                variables: variables,
            }, options);

            setMediaCover(response.data.data.Page.media[0].coverImage.large)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    const convertToDate = (num) => new Date(num * 1000).toISOString().slice(11, 19)

    const handleClick = () => {
        setOpen(prev => !prev)
        !mediaCover && fetchData()
    }

    useEffect(() => {
        setMediaCover(false)
    }, [refresh])

    return (
        <>
            <ListResultContainer expand={open} onClick={handleClick}>
                {data.anilist.title.romaji}
                {open && (<AnimeContainer>
                    <a href={`https://anilist.co/anime/${data.anilist.id}`} target="_blank" rel="noreferrer">
                        <ImgContainer src={mediaCover} />
                    </a>
                    <StatsContainer>
                        <p>Similarity: {(data.similarity * 100).toFixed(1)}%</p>
                        <VideoContainer>
                            <FrameVideo autoPlay={true} muted loop controls>
                                <source src={data.video} type="video/mp4" />
                            </FrameVideo>
                        </VideoContainer>
                        <p>Episode {data.episode} from {convertToDate(data.from)} to {convertToDate(data.to)}</p>
                    </StatsContainer>
                </AnimeContainer>)}
            </ListResultContainer>
        </>
    )
}

export default ListResult