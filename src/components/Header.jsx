import { Link } from "react-router-dom"
import LoginPage from "../pages/LoginPage.jsx";

const Header = (props) => {

    const renderSignUpLink = () => {
        return (
            <li className="nav-item">
            <Link className="nav-link" to="/register">
            <div>Sign Up</div>
            </Link>
        </li>
        )
    }

    const renderNothing = () => {
    }
    
    return (
    <div className="container">
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        <div>Home</div>
                        </Link>
                    </li>
                    {props.userData ? renderNothing() : renderSignUpLink()}
                </ul>
                <LoginPage baseBackendURL = {props.baseBackendURL} loginUser = {props.loginUser} logoutUser = {props.logoutUser} userData = {props.userData}/>
        </nav>
    </div>
  );
}

export default Header