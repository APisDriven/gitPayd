import userEvent from "@testing-library/user-event";
import { useAuth } from "utils/auth.js";
import img_avatar from "../../src/img_avatar.webp";

export default function Profile(){
    const {user}=useAuth();
    return(
    <>
        <section>
            <header>
                <h2>Profile</h2>
            </header>
        <div class="card margin-bot">
            <img src={img_avatar} class="img-size" />
            <div class="container center">
            <h3 class="center"><b>{user.username}</b></h3>
            <p class="margin-bot">
                User ID: {user.userId}<br></br>
                Email: {user.email}<br></br>
                Signature: {user.userId}<br></br>
            </p>
            </div>
        </div>
        </section>
    </>
    )
}