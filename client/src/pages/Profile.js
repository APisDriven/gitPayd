import userEvent from "@testing-library/user-event";
import img_avatar from "../../src/img_avatar.webp";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { ME } from "../utils/queries";

export default function Profile(){
    const { loading, data } = useQuery(ME);
    const user = data?.me || [];

    return(
    <>
        <section>
            <header>
                <h2>Profile</h2>
            </header>
        <div class="card">
            <img src={img_avatar} class="img-size" />
            <div class="container center">
            {/* <h4 class="center"><b>Username: {user.username}</b></h4>
            <p>
                <br></br>
                User ID: {user.userId}<br></br>
                Email: {user.email}<br></br>
                Signature: {user.userId}<br></br>
            </p> */}
            </div>
        </div>
        </section>
    </>
    )
}