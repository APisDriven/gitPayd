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
        <div className="card margin-bot">
            <img src={img_avatar} className="img-size" />
            <div className="container center">
            <h3 className="center"><b>{user.username}</b></h3>
            <p className="margin-bot">
            <h4 className="center"><b>Username: {user.username}</b></h4>
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