import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import MemeIndex from "../pages/MemeIndex.jsx"
import ShowMeme from "../pages/ShowMeme.jsx"

const Memes = (props) => {
    const [memes, setMemes] = useState(null)
    const [newMemeRefresh, setNewMemeRefresh] = useState({value: null}) 
    const [newCommentRefresh, setNewCommentRefresh] = useState({value:null})
    
    const createMeme = async(newMemeData) => {
        console.log(`making new meme with ${JSON.stringify(newMemeData)}`)
        const URL = `${props.baseBackendURL}memes/`
        const response = await fetch(URL, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMemeData)
        })
        const newMeme = await response.json()
        setNewMemeRefresh({value: newMeme})
    }
  
    const getMemes = async () => {
        const URL = `${props.baseBackendURL}memes/`
        console.log(`Memes connecting to backend on ${URL}`)
        const response = await fetch(URL, {
            method: "GET",
            credentials: 'include'
        })
        const data = await response.json()
        setMemes(data.data)
    }

    const updateMeme = async (meme, id) => {
        const URL = `${props.baseBackendURL}memes/${id}`
        await fetch(URL, {
            method: "PUT", 
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(meme)
        })
        getMemes()
    }

    const deleteMeme = async (id) => {
        const URL = `${props.baseBackendURL}memes/${id}`
        await fetch(URL, {
            method: "DELETE",
            credentials: 'include'
        })
        getMemes()
    }

    const [comments, setComments] = useState([])
    const getComments = async () => {
        const URL = `${props.baseBackendURL}comments/`
        const response = await fetch(URL, {
            method: "GET",
            credentials: "include"
        })
        const data = await response.json()
        setComments(data.data)
    }

    const createComment = async (newCommentData, parent_meme_id) => {
        newCommentData.parent_meme_id = parent_meme_id
        const URL = `${props.baseBackendURL}comments/`
        const response = await fetch(URL, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCommentData)
        })
        const newComment = await response.json()
        setNewCommentRefresh({value: newComment})
    } 
  
    useEffect(() => {
        getMemes()
        getComments()
    }, [props.userData, newMemeRefresh, newCommentRefresh])
  
    return (
      <main>
          <Routes>
              <Route path="/" element={<MemeIndex memes={memes} createMeme={createMeme} userData={props.userData}/>}/>
              <Route path="/memes/:id" element={<ShowMeme memes={memes} comments={comments} updateMeme={updateMeme} deleteMeme={deleteMeme} createComment={createComment}/>}/>
          </Routes>
      </main>
    )
  }
  
  export default Memes