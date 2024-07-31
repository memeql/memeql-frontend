import { Link } from "react-router-dom"
import LoginPage from "../pages/LoginPage.jsx";

const Header = (props) => {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                    <div>Home</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                    <div>Sign Up</div>
                    </Link>
                </li>
            </ul>
            <LoginPage baseBackendURL = {props.baseBackendURL} loginUser = {props.loginUser} logoutUser = {props.logoutUser} userData = {props.userData}/>
        </div>
    </nav>
  );
}

export default Header