import { Route, Routes } from 'react-router-dom'
import RegisterPage from "../pages/RegisterPage.jsx"

const Register = (props) => {
    return (
        <Routes>
            <Route path="/" element={<RegisterPage baseBackendURL = {props.baseBackendURL} /> }/>
        </Routes>
    )
}

export default Register