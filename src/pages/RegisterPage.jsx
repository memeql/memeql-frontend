import { useState } from "react";

const RegisterPage = (props) => {

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        first_name: "",
        last_name: ""
    })

    const handleChange = (event) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const request = await fetch(`${props.baseBackendURL}auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerData)
        })

        await request.json()
        setRegisterData({
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        })
    }

    return (
        <div className="registration_form">
            <h6>Register for an account</h6>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first_name" placeholder="first name" value={registerData.first_name} onChange={handleChange} />
                <input type="text" name="last_name" placeholder="last name" value={registerData.last_name} onChange={handleChange} />
                <input type="email" name="email" placeholder="email" value={registerData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={registerData.password} onChange={handleChange} />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterPage