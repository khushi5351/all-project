import React, { useState } from 'react';
import './Contact.css';
import { addContact } from '../apis/handle_apis';

function Contact() {
 const [name,setCname]=useState('')
 const [number,setCnumber]=useState('')
 const [city,setCity]=useState('')
//  console.log(name);
//  console.log(number);
//  console.log(city);
const submitContact = async (e) => {
  e.preventDefault();
   const userId = sessionStorage.getItem("userId");
  const success = await addContact({ name, number, city,userId }); 
  console.log(success);
};

  return (
    <div className="add-contact-container">
      <h2>Add New Contact</h2>
      <form className="contact-form" onSubmit={submitContact}>
        <label>
          Contact Name:
          <input type="text" name="name" value={name} onChange={(e)=>setCname(e.target.value)} required/>
        </label>

        <label>
          Contact Number:
          <input type="tel" name="number" value={number} onChange={(e)=>setCnumber(e.target.value)} required  pattern="[0-9]{10}"  title="Enter a valid 10-digit number"/>
        </label>

        <label>
          City:
          <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
        </label>

        <button>Add Contact</button>
      </form>
    </div>
  );
}

export default Contact;
