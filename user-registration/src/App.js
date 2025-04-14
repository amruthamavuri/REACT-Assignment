import React from 'react';
import { useState } from 'react';
import './Registration.css'

function Registration()
{
  const[firstName, setFirstName]=useState('');
  const[middleName, setMiddleName]=useState('');
  const[lastName, setLastName]=useState('');
  const[fullName, setFullName]=useState('');
  const[dateOfBirth, setDateOfBirth]=useState('');
  const[age, setAge]=useState('');
  const[postCode, setPostCode]=useState('');
  const[email, setEmail]=useState('');
  const[phone, setPhone]=useState('');
  const[mobile, setMobile]=useState('');

  function handleFirstName(e){
    setFirstName(e.target.value);
  }

  function handleMiddleName(e){
    setMiddleName(e.target.value);
  }

  function handleLastName(e){
    setLastName(e.target.value);
  }

  function handleFullName(e){
    setFullName(e.target.value);
  }

  function handleDateOfBirth(e){
    setDateOfBirth(e.target.value);
  }

  function handleAge(e){
    setAge(e.target.value);
  }

  function handlePostCode(e){
    setPostCode(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePhone(e){
    setPhone(e.target.value);
  }

  function handleMobile(e){
    setMobile(e.target.value);
  }

return(
<>
  <form onSubmit={e => {e.preventDefault();
    alert("Form Submitted Successfully");
  }}>
  
  <h1>User Registration</h1>
    <div>
    <label>First Name* : </label>
    <input
    placeholder='First Name'
    value={firstName}
    onChange={handleFirstName}
    />
    </div>
    
    <div>
    <label>Middle Name : </label>
    <input
    placeholder='Middle Name'
    value={middleName}
    onChange={handleMiddleName}
    />
    </div>
    
    <div>
    <label>Last Name* : </label>
    <input
    placeholder='Last Name'
    value={lastName}
    onChange={handleLastName}
    />
    </div>
    
    <div>
    <label>Full Name* : </label>
    <input
    placeholder='Full Name'
    value={fullName}
    onChange={handleFullName}
    />
    </div>
    
    <div>
    <label>Date of Birth* : </label>
    <input
    placeholder='Date of Birth'
    value={dateOfBirth}
    onChange={handleDateOfBirth}
    />
    </div>
    
    <div>
    <label>Age* : </label>
    <input
    placeholder='Age'
    value={age}
    onChange={handleAge}
    />
    </div>
    
    <div>
    <label>Post Code* : </label>
    <input
    placeholder='Post Code'
    value={postCode}
    onChange={handlePostCode}
    />
    </div>
    
    <div>
    <label>Email* : </label>
    <input
    placeholder='Email'
    value={email}
    onChange={handleEmail}
    />
    </div>
    
    <div>
    <label>Phone* : </label>
    <input
    placeholder='Phone'
    value={phone}
    onChange={handlePhone}
    />
    </div>
    
    <div>
    <label>Mobile* : </label>
    <input
    placeholder='Mobile'
    value={mobile}
    onChange={handleMobile}
    />
    </div>

    <div>
  <button type="submit">Submit</button>
   </div>


  </form>
</>
);

}

export default Registration;