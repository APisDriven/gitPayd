import React, { useState} from "react";
import { useQuery } from "@apollo/client";
import {ME} from "../utils/queries.js";

export default function Receipts(){
    const {data, loading, error} = useQuery(ME);
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