// import Receipt from "components/Receipt.js";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Link } from 'react-router-dom';



const Home = () => {
    return(
        <section>
            <header className="pad">
            <h2>Welcome!</h2>
            </header>
            <main>
              <p>What would you like to do?</p>
              <div>
                <button style={{ color: 'white' }} ><Link to="/newReceipt">Create Receipt</Link></button>
                <button style={{ color: 'white' }} ><Link to="/receipts">View Receipt</Link></button>
              </div>
            </main>
      </section>
    )
}

export default Home;