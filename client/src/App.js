// import {useQuery} from "@apollo/client";

// import{ QUERY_WHERE} from "./utils/queries";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from "utils/auth.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Home from "pages/Home.js";
import About from "pages/About.js";
import Login from "pages/Login.js";
import SignUp from "pages/Signup.js";
import NewReceipt from "pages/NewReceipt.js";
import Receipts from "pages/Receipts.js";
import Profile from "pages/Profile.js";
import NotFound from "pages/NotFound.js";


function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
    <Header />
    <main className="pad">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/newReceipt" element={<NewReceipt />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
   <Footer />
    
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;




{/* <p>Where: {display}</p> */}

// const { data, loading, error }= useQuery(QUERY_WHERE);
//  const where = data?.where;
//  const display = loading || error || `${where.message} - ${where.timestamp}!`;

