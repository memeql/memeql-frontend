import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import MemeIndex from "../pages/MemeIndex.jsx"

const Memes = (props) => {
    const [memes, setMemes] = useState(null)
    let [newMemeRefresh, setNewMemeRefresh] = useState(null) 

    const createMeme = async(newMemeData) => {
        const URL = `${props.baseBackendURL}memes/`
        const response = await fetch(URL, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMemeData)
        })
        await response.json()
        setNewMemeRefresh = true
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
  
    useEffect(() => {
        getMemes()
    }, [props.userData, newMemeRefresh])
  
    return (
      <main>
          <Routes>
              <Route path="/" element={<MemeIndex memes={memes} createMeme={createMeme} userData={props.userData}/>}/>
          </Routes>
      </main>
    )
  }
  
  export default Memes