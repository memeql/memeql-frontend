import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import MemeIndex from "../pages/MemeIndex.jsx"

const Memes = (props) => {
    const [memes, setMemes] = useState(null)
  
    const URL = `${props.baseBackendURL}memes`
    console.log(`Memes connecting to backend on ${URL}`)
  
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