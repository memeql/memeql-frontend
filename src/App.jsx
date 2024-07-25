import Demo from './components/Demo.jsx'
import Memes from './components/Memes.jsx'
import Login from './components/Login.jsx'
import './App.css'
import { useState } from "react";

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

  const [userData, setUserData] = useState(null)
  const loginUser = async (loginData) => {
    const request = await fetch (`${baseBackendURL}auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData),
    })
    const requestData = await request.json()
    setUserData(requestData)
  }
  
  return (
    <>
      <div className='Demo'>
        <Demo baseBackendURL = {baseBackendURL} userData = {userData}/>
      </div>
      <Login loginUser = {loginUser}/>
      <Memes baseBackendURL = {baseBackendURL} userData = {userData}/>
    </>
  )
}

export default App
