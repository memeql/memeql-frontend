import Demo from './components/Demo.jsx'
import Memes from './components/Memes.jsx'
import './App.css'

function App() {

  const getBaseBackendURL = () => {
       switch (window.location.origin) {
        case "https://memeql.com":
          console.log("Running in the production environment")
          return ("https://backend-memeql-prod.azurewebsites.net/")
        case "https://dev.memeql.com":
          console.log("Running in the development environment")
          return ("https://backend-memeql-dev.azurewebsites.net/")
        default: 
          console.log("Running in the local environment")
          return("http://localhost:4000/")
       }
  }
  
  return (
    <>
      <div className='Demo'>
        <Demo baseBackendURL = {getBaseBackendURL()}/>
      </div>
      <Memes baseBackendURL = {getBaseBackendURL()}/>
    </>
  )
}

export default App