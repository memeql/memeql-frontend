import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import MemeIndex from "../pages/MemeIndex.jsx"

const Memes = () => {
    const [memes, setMemes] = useState(null)
  
    const URL = 'http://localhost:4000/memes/'
  
    //fetches all people from our API backend
    const getMemes = async () => {
      const reponse = await fetch(URL)
      const data = await reponse.json()
      setMemes(data.data)
    }
  
    useEffect(() => {
        getMemes()
    }, [])
  
    return (
      <main>
          <Routes>
              <Route path="/" element={<MemeIndex 
                  memes={memes} 
                  />}/>
          </Routes>
      </main>
    )
  }
  
  export default Memes