import React, { useState} from "react";
import { useQuery, useMutation, gql } from "@apollo/react-hooks";
import {QUERY_WHEN} from "../utils/queries.js";

export default function Receipts(){
    const {data, loading, error} = useQuery(QUERY_WHEN);
    return(
    <>
        <section>
            <header>
                <h2>All receipts</h2>
            </header>
            <blockquote>
              {data.receipts.map((receipt)=>(
                <p>{receipt.email}</p>
              ))}
            </blockquote>
        </section>
    </>
    )
}