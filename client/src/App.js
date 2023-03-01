// import {useQuery} from "@apollo/client";

// import{ QUERY_WHERE} from "./utils/queries";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Home from "pages/Home.js";
import About from "pages/About.js";

function App() {
 
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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

