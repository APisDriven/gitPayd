// import {useQuery} from "@apollo/client";

// import{ QUERY_WHERE} from "./utils/queries";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Home from "pages/Home.js";
import About from "pages/About.js";
import Login from "pages/Login.js";
import NewReceipt from "pages/NewReceipt";
import Receipts from "pages/Receipts";
import Profile from "pages/Profile";


function App() {
 
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/newReceipt" element={<NewReceipt />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
   <Footer />
    
    </BrowserRouter>
  );
}

export default App;




{/* <p>Where: {display}</p> */}

// const { data, loading, error }= useQuery(QUERY_WHERE);
//  const where = data?.where;
//  const display = loading || error || `${where.message} - ${where.timestamp}!`;

