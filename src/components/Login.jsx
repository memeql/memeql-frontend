import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/LoginPage.jsx"
import Cookies from 'js-cookie'

const Login = (props) => {

    const loginUser = async (loginData) => {
        const loginResponse = await fetch (`${props.baseBackendURL}auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData),
        })
        const loginResponseJSON = await loginResponse.json()
        console.log(loginResponseJSON)
        // Cookies.set('')
    }

    return (
        <Routes>
            <Route path="/" element={<LoginPage loginUser={loginUser}/> }/>
        </Routes>
    )
}

export default Login