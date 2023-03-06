// import Receipt from "components/Receipt.js";
import { useAuth } from "utils/auth.js";

export default function Home(){
  const {user}=useAuth();

    return(
        <section>
            <header className="pad">
            <h2>Welcome {user.username}!</h2>
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