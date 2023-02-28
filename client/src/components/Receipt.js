import React, { useState } from 'react';
import sendEmail from './mailer.js';

const Receipt = () => {
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    date:'',
    business:'',
    receiptNo:''
  });

  const { email, amount, date, business, receiptNo} = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email, `New receipt from GitPayd`, amount, date, business, receiptNo);
  };
//wrap in div and lable
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
      
      <input
        type="input"
        name="amount"
        value={amount}
        onChange={handleChange}
      />
      <input
        type="input"
        name="date"
        value={date}
        placeholder='mm/dd/yy'
        onChange={handleChange}
      />
      <input
        type="input"
        name="business"
        value={business}
        onChange={handleChange}
      />
      <input
        type="input"
        name="receiptNo"
        value={receiptNo}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Receipt;
