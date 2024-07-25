import { useState } from "react";

const LoginPage = (props) => {

    const [loginData, setLoginData] = useState({
        email: null,
        password: null
    })

    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.loginUser(loginData)
        setLoginData({
            email: "",
            password: ""
        })
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