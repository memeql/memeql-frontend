import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await props.loginUser(loginData)
        setLoginData({
            email: "",
            password: ""
        })
        navigate('/memes');
    }
    return (
        <div className="login form">
            <h6>Login</h6>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={loginData.email} onChange={handleChange} />
                <input type="password" name="password" value={loginData.password} onChange={handleChange} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )

}

export default LoginPage
