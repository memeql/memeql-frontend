import { Link } from "react-router-dom"
import Login from "./Login.jsx";

const Header = (props) => {

  
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                <div>Home</div>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/register">
                <div>Sign Up</div>
                </Link>
            </li>
        </ul> 


          <Login baseBackendURL = {props.baseBackendURL} loginUser = {props.loginUser} logoutUser = {props.logoutUser} userData = {props.userData}/>
      </nav>
  );
}

export default Header