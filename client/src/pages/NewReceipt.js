import React, { useState, useEffect} from "react";
import Receipt from "../components/Receipt.js";


export default function About(){
   
    return(
    <>
        <section>
            <header>
                <h2>New Receipt</h2>
            </header>
            <Receipt/>
        </section>
    </>
    )
}