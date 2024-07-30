import { Link } from "react-router-dom"
import Login from "./Login.jsx";

const Header = (props) => {

  
    return (
      <nav className='nav'>
          <Link to="/">
              <div>Home</div>
          </Link>
          <Link to="/register">
              <div>Sign Up</div>
          </Link>
          <Login baseBackendURL = {props.baseBackendURL} loginUser = {props.loginUser} logoutUser = {props.logoutUser} userData = {props.userData}/>
      </nav>
  );
}

export default Header