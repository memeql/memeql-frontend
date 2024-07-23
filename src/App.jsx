import Demo from './components/Demo.jsx'
import Memes from './components/Memes.jsx'
import { useEffect, useState } from "react"
import './App.css'

function App() {
  
  const [baseBackendURL, setBaseBackendUrl] = useState('')

  const getBaseBackendURL = () => {
       switch (window.location.origin) {
        case "https://memeql.com":
          console.log("Running in the production environment")
          setBaseBackendUrl("https://backend-memeql-prod.azurewebsites.net/")
          break
        case "https://dev.memeql.com":
          console.log("Running in the development environment")
          setBaseBackendUrl("https://backend-memeql-dev.azurewebsites.net/")
          break
        default: 
          console.log("Running in the local environment")
          setBaseBackendUrl("http://localhost:4000/")
          break
       }
  }

  useEffect(() => {
    getBaseBackendURL()
  }, [])
  
  return (
    <>
      <div className='Demo'>
        <Demo baseBackendURL = {baseBackendURL}/>
      </div>
      <Memes baseBackendURL = {baseBackendURL}/>
    </>
  )
}

export default App