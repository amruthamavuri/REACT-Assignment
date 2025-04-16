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
  

  function updateFullName(first, middle, last){
    const nameParts = [first, middle, last].filter(part => part.trim() !== '');
    setFullName(nameParts.join(' '));
  }

  function handleFirstName(e){
    const value = e.target.value;
    setFirstName(value);
    updateFullName(value, middleName, lastName);
  }

  function handleMiddleName(e){
    const value = e.target.value;
    setMiddleName(value);
    updateFullName(firstName, value, lastName);
  }

  function handleLastName(e){
    const value = e.target.value;
    setLastName(value);
    updateFullName(firstName, middleName, value);
  }

  function handleDateOfBirth(e){
    const value = e.target.value;
    setDateOfBirth(value);

    const birthDate = new Date(value);
    const today = new Date();
    let calculateAge = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
      calculateAge--;
    }

    if(!isNaN(calculateAge)){
      setAge(calculateAge.toString());
    } else{
      setAge('');
    }
  }

  function handlePostCode(e){
    const value = e.target.value;
    setPostCode(value);
  }

  function handleEmail(e){
    const value = e.target.value;
    setEmail(value);
  }

  function handlePhone(e){
    const value = e.target.value;
    setPhone(value);
  }

  function handleMobile(e){
    const value = e.target.value;
    setMobile(value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form submitted succesfully");
  }

return(
<>
  <form onSubmit={handleSubmit}>
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
    onChange={updateFullName}
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
    readOnly
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
