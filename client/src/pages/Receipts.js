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
                  <p><b>Receipt#:</b> {receipt.receiptNumber}</p>
                  <p><b>Amount:</b> ${receipt.amount}</p>
                  <p><b>Date:</b> {receipt.date}</p>
                  <p><b>From:</b> {receipt.from}</p>
                  <p><b>To:</b> {receipt.to}</p>
                  <p><b>Email:</b> {receipt.email}</p>
                </div>
            </div>
              ))}
        </section>
    </>
    )
}