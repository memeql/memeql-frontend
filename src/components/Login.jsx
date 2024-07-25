import { Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/LoginPage.jsx"

const Login = (props) => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage loginUser={props.loginUser}/> }/>
        </Routes>
    )
}

export default Login