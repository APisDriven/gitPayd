// import {useQuery} from "@apollo/client";

// import{ QUERY_WHERE} from "./utils/queries";

import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Home from "pages/Home.js";

function App() {
 
  return (
    <>
    <Header />
    <main>
      <Home />
    </main>
   <Footer />
    
    </>
  );
}

export default App;




{/* <p>Where: {display}</p> */}

// const { data, loading, error }= useQuery(QUERY_WHERE);
//  const where = data?.where;
//  const display = loading || error || `${where.message} - ${where.timestamp}!`;

