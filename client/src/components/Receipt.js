import React, { useState } from 'react';
// import sendEmail from './mailer.js';
import SignaturePad from 'react-signature-canvas';
import { useQuery, useMutation, gql } from '@apollo/client';
import {saveReceipt} from "../utils/mutations.js";

const Receipt = () => {
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    date:'',
    business:'',
    receiptNo:''
  });
  const [SaveReceipt, { error }] = useMutation(saveReceipt);

  const { email, amount, date, business, receiptNumber} = formData;
  const [signatureData, setSignatureData] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      window.location.href=('mailto:test@gmail.com')
    try {
      const { data, error } = await SaveReceipt({
        variables:{
         input: {
          email: email, amount: Number(amount), date: date, business: business, receiptNumber: receiptNumber
         }
        } 
     })
     console.log(data)
    } catch (e) {
      console.log(e)
    }

    // sendEmail(email, `New receipt from GitPayd`, amount, date, business, receiptNo);
  };
  let signaturePad = {}
  // const[newReceipt, {error}] = useMutation(saveReceipt)
  
//This is what will populate the receipt
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      </div>
      
     <div>
         <label>Amount:</label>
     <input
        type="input"
        name="amount"
        value={amount}
        onChange={handleChange}
      />
     </div>

    <div>
    <label>Date:</label>
        <input
        type="input"
        name="date"
        value={date}
        placeholder='mm/dd/yy'
        onChange={handleChange}
      />
    </div>
     
     <div>
     <label>Business:</label>
     <input
        type="input"
        name="business"
        value={business}
        onChange={handleChange}
      />
     </div>
      
     <div>
     <label>Receipt No:</label>
     <input
        type="input"
        name="receiptNumber"
        value={receiptNumber}
        onChange={handleChange}
      />
     </div>
     <div>
     <label>Signature:</label>
     <SignaturePad
       penColor='black'
       canvasProps={{width: 200, height: 100, className: 'canvas'}}
       ref={(ref) => { signaturePad = ref; }}
        onEnd={() => setSignatureData(signaturePad.toDataURL())}/>
    </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Receipt;
