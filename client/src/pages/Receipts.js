import React, { useState} from "react";
import { useQuery, useMutation, gql } from "@apollo/react-hooks";
import {RECEIPTS} from "../utils/queries.js";

export default function Receipts(){
    const {data, loading } = useQuery(RECEIPTS);
    const receipts = data?.receipts.receipts||[];
    console.log(receipts);
    return(
    <>
        <section>
            <header>
                <h2>All receipts</h2>
            </header>
              {receipts.map((receipt,index)=>(
            <div key={index} className="card margin-bot">
                <div className="container center"> 
                  <p>Receipt#: {receipt.receiptNumber}</p>
                  <p>Amount: {receipt.amount}</p>
                  <p>Date: {receipt.date}</p>
                  <p>From: {receipt.from}</p>
                  <p>To: {receipt.to}</p>
                  <p>Email: {receipt.email}</p>
                </div>
            </div>
              ))}
        </section>
    </>
    )
}