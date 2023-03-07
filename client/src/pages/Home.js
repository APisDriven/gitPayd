// import Receipt from "components/Receipt.js";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ME } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(ME);
  const user = data?.me || [];
  console.log(user)

  if (loading) {
    return <h2>Loading....</h2>
  }

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