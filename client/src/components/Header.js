import { useAuth } from "utils/auth.js";
import '../../src/index.css'
import { Link } from "react-router-dom";

export default function Header(){
  const {user}=useAuth();
    return(
        <header className="pad">
        <nav className="navBar topnav">
          <ul className="ul-no-marg">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/receipts">Receipts</Link></li>
            <li><Link to="/newReceipt">New Receipt</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </nav>
      <h1 className="pad top-mar">GitPayd</h1>
      </header>
    )
}