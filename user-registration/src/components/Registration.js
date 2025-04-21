import React, { useState } from 'react';
import './Registration.css';
import LocationInfo from './LocationInfo';
import emailjs from '@emailjs/browser';

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

  const [errors, setErrors] = useState({});
  const [submitted, setsubmitted] = useState(false);

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

    if (calculateAge < 0) {
      calculateAge = 0;
      setErrors((prev) => ({
        ...prev, dateOfBirth: 'Date of Birth cannot be in the future',
      }));
    } else {
      setErrors((prev) => ({ ...prev, dateOfBirth: '' }));
    }
  
    setAge(calculateAge.toString());

    if (!value) {
      setErrors(prev => ({ ...prev, dateOfBirth: 'Date of Birth is required' }));
    } else {
      setErrors(prev => ({ ...prev, dateOfBirth: '' }));
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
    const updatedStates = Object.keys(LocationInfo[chooseCountry] || {}); 
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
    const value = e.target.value;
    setPostCode(value);
  }

  function handleEmail(e) {
    const value = e.target.value;
    setEmail(value);
    if (!value || !(value.includes('@') && value.includes('.'))) {
      setErrors(prev => ({ ...prev, email: 'Enter a valid email address' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  }   

  function handlePhone(e) {
    const value = e.target.value;
    setPhone(value);
    if (!value || isNaN(value) || value.length !== 10) {
      setErrors(prev => ({ ...prev, phone: 'Enter a valid 10-digit phone number' }));
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  }

  function handleMobile(e) {
    const value = e.target.value;
    setMobile(value);
    if (!value || isNaN(value) || value.length !== 10) {
      setErrors(prev => ({ ...prev, mobile: 'Enter a valid 10-digit mobile number' }));
    } else {
      setErrors(prev => ({ ...prev, mobile: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const newErrors = {};
  
    // validation
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!country) newErrors.country = 'Country is required';
    if (!state) newErrors.state = 'State is required';
    if (!city) newErrors.city = 'City is required';
    if (!postCode) newErrors.postCode = 'Post code is required';
    if (!email || !(email.includes('@') && email.includes('.'))) newErrors.email = 'Enter a valid email address';
    if (!phone || isNaN(phone) || phone.length !== 10) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!mobile || isNaN(mobile) || mobile.length !== 10) newErrors.mobile = 'Enter a valid 10-digit mobile number';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) return;
  
    const templateParams = {
      firstName,
      middleName,
      lastName,
      fullName,
      dateOfBirth,
      age,
      country,
      state,
      city,
      postCode,
      email,
      phone,
      mobile,
    };
  
    emailjs
      .send('service_xyzad9b', 'template_9ctzjjx', templateParams, 'd_d-12Jhxo7fDjD7_')
      .then(
        () => setsubmitted(true),
        (error) => {
          alert('Email failed to send. Please try again.');
          console.log('FAILED...', error);
        }
      );
  }

  if (submitted) {
    return (
      <div className="success-message" style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ color: 'green', fontSize: '2rem' }}>✅ Registration Successful!</h2>
        <p style={{ fontSize: '1.2rem' }}>Thank you, <strong>{fullName || 'User'}</strong>. Your details have been submitted successfully.</p>
      </div>
    );
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>User Registration</h1>

        <div>
          <label>First Name* : </label>
          <input placeholder='First Name' value={firstName} onChange={handleFirstName} required/>
          <div className='error'>{errors.firstName}</div>
        </div>

        <div>
          <label>Middle Name : </label>
          <input placeholder='Middle Name' value={middleName} onChange={handleMiddleName} />
        </div>

        <div>
          <label>Last Name* : </label>
          <input placeholder='Last Name' value={lastName} onChange={handleLastName} required/>
          <div className="error">{errors.lastName}</div>
        </div>

        <div>
          <label>Full Name* : </label>
          <input placeholder='Full Name' value={fullName} readOnly />
        </div>

        <div>
          <label>Date of Birth* : </label>
          <input type="date" value={dateOfBirth} max={new Date().toISOString().split("T")[0]}
           onChange={handleDateOfBirth} onBlur={() => {
            if (!dateOfBirth) {
              setErrors(prev => ({ ...prev, dateOfBirth: 'Date of Birth is required' }));
            } else {
              setErrors(prev => ({ ...prev, dateOfBirth: '' }));
            }
          }} required/>
          <div className="error">{errors.dateOfBirth}</div>
        </div>

        <div>
          <label>Age* : </label>
          <input placeholder='Age' value={age} readOnly />
        </div>

        <div>
          <label>Country* : </label>
          <select value={country} onChange={handleCountry} required>
            <option value="">Select Country</option>
            {Countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="error">{errors.country}</div>
        </div>

        <div>
          <label>State* : </label>
          <select value={state} onChange={handleState} required>
            <option value="">Select State</option>
            {States.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="error">{errors.state}</div>
        </div>

        <div>
          <label>City* : </label>
          <select value={city} onChange={handleCity} required >
            <option value="">Select City</option>
            {Cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="error">{errors.city}</div>
        </div>

        <div>
          <label>Post Code* : </label>
          <input placeholder='Post Code' value={postCode} onChange={handlePostCode} required/>
          <div className="error">{errors.postCode}</div>
        </div>

        <div>
          <label>Email* : </label>
          <input type="email" placeholder='Email' value={email} onChange={handleEmail} onBlur={() => {
            if (!email || !(email.includes('@') && email.includes('.'))) {
              setErrors(prev => ({ ...prev, email: 'Enter a valid email address' }));
            } else {
              setErrors(prev => ({ ...prev, email: '' }));
            }
          }}
          required/>
          <div className="error">{errors.email}</div>       
        </div>

        <div>
          <label>Phone* : </label>
          <input placeholder='Phone' value={phone} onChange={handlePhone} onBlur={() => {
            if (!phone || isNaN(phone) || phone.length !== 10) {
              setErrors(prev => ({ ...prev, phone: 'Enter a valid 10-digit phone number' }));
            } else {
              setErrors(prev => ({ ...prev, phone: '' }));
          }
        }}required/>
          <div className="error">{errors.phone}</div>
        </div>

        <div>
          <label>Mobile* : </label>
          <input placeholder='Mobile' value={mobile} onChange={handleMobile} required/>
          <div className="error">{errors.mobile}</div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Registration;
