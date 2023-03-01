// import {Link} from "react-router-dom";

import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/">History</a></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      <h1>GitPayd</h1>
      <h2>Comming Soon!</h2>
      </header>
    )
}