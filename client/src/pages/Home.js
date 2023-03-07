// import Receipt from "components/Receipt.js";
import { useQuery, useMutation } from "@apollo/react-hooks";


const Home = () => {
    return(
        <section>
            <header className="pad">
            <h2>Welcome!</h2>
            </header>
            <main>
              <p>What would you like to do?</p>
              <div>
                <button>Create Receipt</button>
                <button>View Receipt</button>
              </div>
            </main>
      </section>
    )
}

export default Home;