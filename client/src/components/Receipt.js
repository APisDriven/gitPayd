import React, { useState } from 'react';
// import sendEmail from './mailer.js';
import SignaturePad from 'react-signature-canvas';
import { useQuery, useMutation, gql } from '@apollo/client';
import {saveReceipt} from "../utils/mutations.js";
import { v4 as uuid } from 'uuid';

// const uniqueId = uuid();
// const receiptNo = uniqueId(0,8);

const Receipt = () => {
  const [formData, setFormData] = useState({
    amount: '',
    date:'',
    from:'',
    to:'',
    email:''
  });
  const [SaveReceipt, { error }] = useMutation(saveReceipt);
  const { email, amount, date, from, to } = formData;
  const [signatureData, setSignatureData] = useState('');
  

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data, error } = await SaveReceipt({
          variables:{
            input: {
              email: email, amount: Number(amount), date: date, to: to, from: from
            }
          } 
        })
        setFormData({
          amount: '',
          date:'',
          from:'',
          to:'',
          email:''
        });
        window.location.href=('mailto:test@gmail.com');
     console.log(data)
    } catch (err) {
      console.log(err)
      setFormData({
        amount: '',
        date:'',
        from:'',
        to:'',
        email:''
      });
      window.location.href=('mailto:test@gmail.com');
    }

    // sendEmail(email, `New receipt from GitPayd`, amount, date, business, receiptNo);
  };
  let signaturePad = {}
  // const[newReceipt, {error}] = useMutation(saveReceipt)

//This is what will populate the receipt
  return (
    <form onSubmit={handleSubmit}>

    <div>
    {/* <label>Receipt No:</label>
    <p>{receiptNo}</p> */}
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
     <label>From:</label>
     <input
        type="input"
        name="from"
        value={from}
        onChange={handleChange}
      />
     </div>

     <div>
     <label>To:</label>
     <input
        type="input"
        name="to"
        value={to}
        onChange={handleChange}
      />
     </div>

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
     <label>Signature:</label>
     <SignaturePad
       penColor='black'
       canvasProps={{width: 200, height: 100, className: 'canvas'}}
       ref={(ref) => { signaturePad = ref; }}
        onEnd={() => setSignatureData(signaturePad.toDataURL())}/>
    </div>
      <button 
      type="submit" 
      style={{color: 'white', border: 'white', backgroundColor: '#023436'}}>
      Save and Send
      </button>
    </form>

  );

};

export default Receipt;
