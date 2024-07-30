import { Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/LoginPage.jsx"

const Login = (props) => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage baseBackendURL = {props.baseBackendURL} loginUser={props.loginUser} logoutUser = {props.logoutUser} userData={props.userData}/> }/>
        </Routes>
    )
}

export default Login