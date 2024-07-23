import Demo from './components/Demo.jsx'
import Memes from './components/Memes.jsx'
import './App.css'

function App() {

  const getBaseBackendURL = () => {
       switch (window.location.origin) {
        case "https://memeql.com":
          console.log("Running in the production environment")
          return ("https://backend.prod.memeql.com/")
        case "https://dev.memeql.com":
          console.log("Running in the development environment")
          return ("https://backend.dev.memeql.com/")
        default: 
          console.log("Running in the local environment")
          return("http://localhost:4000/")
       }
  }

  const baseBackendURL = getBaseBackendURL()
  
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