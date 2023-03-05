import { useAuth } from "utils/auth.js";

import { Link } from "react-router-dom";

export default function Header(){
  const {user}=useAuth();
    return(
        <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/receipts">Receipts</Link></li>
            <li><Link to="/newReceipt">New Receipt</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </nav>
      <h1>GitPayd</h1>
      <h2>user ? `Welcome ${user.username}!` : "User is not found"</h2>
      </header>
    )
}