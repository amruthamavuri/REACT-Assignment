import React, { useState }from 'react';
import './Registration.css';

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
  

  function UpdateFullName(first, middle, last){
    const nameParts = [first, middle, last].filter(part => part.trim() !== '');
    setFullName(nameParts.join(' '));
  }

  function handleFirstName(e){
    const value = e.target.value;
    setFirstName(value);
    UpdateFullName(value, middleName, lastName);
  }

  function handleMiddleName(e){
    const value = e.target.value;
    setMiddleName(value);
    UpdateFullName(firstName, value, lastName);
  }

  function handleLastName(e){
    const value = e.target.value;
    setLastName(value);
    UpdateFullName(firstName, middleName, value);
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
    onChange={UpdateFullName}
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
