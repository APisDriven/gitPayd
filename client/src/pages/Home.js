// import Receipt from "components/Receipt.js";
import { useQuery, useMutation, gql } from '@apollo/client';import { Link } from 'react-router-dom';



const Home = () => {
    return(
        <section>
            <header className="pad">
            <h2>Welcome!</h2>
            </header>
            <main>
              <p>What would you like to do?</p>
              <div id="homeBtns">
              <Link to="/newReceipt" style={{color: '#049A8F'}}>Create Receipt</Link>
                <Link to="/receipts" style={{color: '#049A8F'}}>View Receipt</Link>
              
              </div> 
            </main>
      </section>
    )
}

export default Home;

{/* <button style={{ Color: 'white' }} ><Link to="/newReceipt">Create Receipt</Link></button>
<button style={{ color: 'white' }} ><Link to="/receipts">View Receipt</Link></button>   */}
