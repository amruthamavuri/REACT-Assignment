import React, { useState } from 'react';
import './Registration.css';
import LocationInfo from './LocationInfo';

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');

  const [Countries] = useState(Object.keys(LocationInfo));
  const [States, setStates] = useState([]);
  const [Cities, setCities] = useState([]);

  function updateFullName(first, middle, last) {
    const nameParts = [first, middle, last].filter(part => part.trim() !== '');
    setFullName(nameParts.join(' '));
  }

  function handleFirstName(e) {
    const value = e.target.value;
    setFirstName(value);
    updateFullName(value, middleName, lastName);
  }

  function handleMiddleName(e) {
    const value = e.target.value;
    setMiddleName(value);
    updateFullName(firstName, value, lastName);
  }

  function handleLastName(e) {
    const value = e.target.value;
    setLastName(value);
    updateFullName(firstName, middleName, value);
  }

  function handleDateOfBirth(e) {
    const value = e.target.value;
    setDateOfBirth(value);

    const birthDate = new Date(value);
    const today = new Date();
    let calculateAge = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      calculateAge--;
    }

    if (!isNaN(calculateAge)) {
      setAge(calculateAge.toString());
    } else {
      setAge('');
    }
  }

  function handleCountry(e) {
    const chooseCountry = e.target.value;
    setCountry(chooseCountry);
    setState('');
    setCity('');
    const updatedStates = Object.keys(LocationInfo[chooseCountry] || {}); // ✅ CHANGED HERE
    setStates(updatedStates);
    setCities([]);
  }

  function handleState(e) {
    const chooseState = e.target.value;
    setState(chooseState);
    setCity('');
    const Cities = LocationInfo[country][chooseState] || [];
    setCities(Cities);
  }

  function handleCity(e) {
    const chooseCity = e.target.value;
    setCity(chooseCity);
  }

  function handlePostCode(e) {
    setPostCode(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleMobile(e) {
    setMobile(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted successfully");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>User Registration</h1>

        <div>
          <label>First Name* : </label>
          <input placeholder='First Name' value={firstName} onChange={handleFirstName} />
        </div>

        <div>
          <label>Middle Name : </label>
          <input placeholder='Middle Name' value={middleName} onChange={handleMiddleName} />
        </div>

        <div>
          <label>Last Name* : </label>
          <input placeholder='Last Name' value={lastName} onChange={handleLastName} />
        </div>

        <div>
          <label>Full Name* : </label>
          <input placeholder='Full Name' value={fullName} readOnly />
        </div>

        <div>
          <label>Date of Birth* : </label>
          <input type="date" value={dateOfBirth} onChange={handleDateOfBirth} />
        </div>

        <div>
          <label>Age* : </label>
          <input placeholder='Age' value={age} readOnly />
        </div>

        <div>
          <label>Country* : </label>
          <select value={country} onChange={handleCountry}>
            <option value="">Select Country</option>
            {Countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label>State* : </label>
          <select value={state} onChange={handleState}>
            <option value="">Select State</option>
            {States.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label>City* : </label>
          <select value={city} onChange={handleCity}>
            <option value="">Select City</option>
            {Cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Post Code* : </label>
          <input placeholder='Post Code' value={postCode} onChange={handlePostCode} />
        </div>

        <div>
          <label>Email* : </label>
          <input type="email" placeholder='Email' value={email} onChange={handleEmail} />
        </div>

        <div>
          <label>Phone* : </label>
          <input placeholder='Phone' value={phone} onChange={handlePhone} />
        </div>

        <div>
          <label>Mobile* : </label>
          <input placeholder='Mobile' value={mobile} onChange={handleMobile} />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Registration;
