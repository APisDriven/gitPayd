import userEvent from "@testing-library/user-event";
import img_avatar from "../../src/img_avatar.webp";
import { useQuery, useMutation, gql } from '@apollo/client';
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
        <div class="card margin-bot">
            <img src={img_avatar} class="img-size" />
            <div class="container center">
            <h3 class="center"><b>{user.username}</b></h3>
            <p class="margin-bot">
            <p class="center"><b>Username: {user.username}</b></p>
            <p>
                <br></br>
                User ID: {user.userId}<br></br>
                Email: {user.email}<br></br>
                Signature: {user.userId}<br></br>
            </p>
            </p>
            </div>
        </div>
        </section>
    </>
    )
}