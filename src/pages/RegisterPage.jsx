import { useState } from "react";
import { useNavigate} from "react-router-dom"

const RegisterPage = (props) => {
    const navigate = useNavigate()

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
        navigate("/")
    }

    return (
        <div className="registration_form container">
            <h4>Register for an account</h4>
            <p>You will get an email after you click Register to confirm, please check bulk mail, Updates, or spam folders.</p>
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