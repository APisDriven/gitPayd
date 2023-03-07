import userEvent from "@testing-library/user-event";
import { useAuth } from "utils/auth.js";

export default function Profile(){
    const {user}=useAuth();
    return(
    <>
        <section>
            <header>
                <h2>Profile</h2>
            </header>
        <div class="card">
            <div class="container">
            <h4><b>User ID: {user.userId}</b></h4>
            <p>
                Username: {user.username}<br></br>
                Email: {user.email}<br></br>
                Signature: {user.userId}
            </p>
            </div>
        </div>
        </section>
    </>
    )
}