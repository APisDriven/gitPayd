import React, { useState} from "react";
import { useQuery, useMutation, gql } from "@apollo/react-hooks";
import {RECEIPTS} from "../utils/queries.js";
import "../components/Form/style.css"

export default function Receipts(){
    const {data, loading } = useQuery(RECEIPTS);
    const receipts = data?.receipts.receipts||[];
    console.log(receipts);

    const [modal, setModal] = useState(false);

    const toggleModal = (receipt) => {
      setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    return(
    <>
        <section>
            <header>
                <h2>All receipts</h2>
            </header>
              {receipts.map((receipt,index)=>(
            <div key={index} className="card margin-bot card-marg">
                <div className="container center"> 
                  <p><b>Receipt#:</b> {receipt.receiptNumber}</p>
                  <p><b>Amount:</b> ${receipt.amount}</p>
                  <p><b>Date:</b> {receipt.date}</p>
                  <p><b>From:</b> {receipt.from}</p>
                  <p><b>To:</b> {receipt.to}</p>
                  <p><b>Email:</b> {receipt.email}</p>
                  <button onClick={toggleModal} className="btn-modal">View Details</button>
                </div>
            </div>
              ))}
        </section>


        {modal && (

        <div className="modal">
          <div className="overlay" 
          onClick={toggleModal}></div>
          {this.receipt((receipt, index)=>(
          <div key={index} className="modal-content">
            <h2>Receipt Details</h2>
            <div>
                <p><b>Receipt#:</b> {receipt.receiptNumber}</p>
                <p><b>Amount:</b> ${receipt.amount}</p>
                <p><b>Date:</b> {receipt.date}</p>
                <p><b>From:</b> {receipt.from}</p>
                <p><b>To:</b> {receipt.to}</p>
                <p><b>Email:</b> {receipt.email}</p>
            </div>
            <button
            className="close-modal"
            onClick={toggleModal}>
              Close
            </button>
        </div>
        ))}
        </div>
        )}
    </>
    )
}