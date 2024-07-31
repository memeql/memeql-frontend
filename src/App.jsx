import Demo from './components/Demo.jsx'
import Memes from './components/Memes.jsx'
import Register from './components/Register.jsx'
import { useEffect, useState } from "react";
import Header from './components/Header.jsx'
import { Route, Routes } from 'react-router-dom'

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
    console.log(requestData)
    if (requestData.message === "Login successful") {
      setUserData(requestData)
    } else {
      setUserData(null)
    } 
  }

  const logoutUser = async () => {
    const URL = `${baseBackendURL}auth/logout`
    await fetch(URL, {
        method: "POST",
        credentials: 'include'
    })
    setUserData(null)
  }

  const getCurrentUserData = async () => {
    const request = await fetch (`${baseBackendURL}auth/`, {
      method: "GET",
      credentials: 'include',
  })
  const requestData = await request.json()
  if (requestData.message === "Returning user data") {
    setUserData(requestData)
  } else {
    setUserData(null)
  }
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])
  
  return (
    <>
      <div className='Demo'>
        <Demo baseBackendURL = {baseBackendURL} userData = {userData}/>
      </div>
      <Header baseBackendURL = {baseBackendURL} loginUser = {loginUser} logoutUser = {logoutUser} userData = {userData}/>
      <Memes baseBackendURL = {baseBackendURL} userData = {userData}/>
      <Routes>
              <Route path="/register" element={<Register baseBackendURL = {baseBackendURL} />}/>
      </Routes>
    </>
  )
}

export default App
