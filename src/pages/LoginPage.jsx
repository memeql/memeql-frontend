import { useState } from "react";

const LoginPage = (props) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value })
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        await props.loginUser(loginData)
        setLoginData({
            email: "",
            password: ""
        })
    }

    const handleLogout = async (event) => {
        event.preventDefault()
        await props.logoutUser()
    }

    return (
        <div className="login_form">
            <h6>Login</h6>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email" value={loginData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={loginData.password} onChange={handleChange} />
                <input type="submit" value="Login" />
            </form>
            <form onSubmit={handleLogout}>
                <input type="submit" value="Logout"/>
            </form>

        </div>
    )

}

export default LoginPage