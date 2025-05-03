import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import LoginButton from '../../components/LoginButton';
import Message from '../../components/Message';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Validações básicas
    if (!formData.firstName || !formData.lastName) {
      return setMessage('Please fill in your name.');
    }

    if (formData.password.length < 6) {
      return setMessage('Password must be at least 6 characters.');
    }

    if (!formData.birthDate) {
      return setMessage('Please select a birth date.');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        birthDate: formData.birthDate,
      });

      setMessage('Registration successful!');
      navigate('/');
    } catch (err) {
      console.error('Error during registration:', err);

      if (err.code === 'auth/email-already-in-use') {
        setMessage('Email is already registered.');
      } else if (err.code === 'auth/invalid-email') {
        setMessage('Invalid email format.');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          type='date'
          name='birthDate'
          value={formData.birthDate}
          onChange={handleChange}
        />

        <LoginButton type='submit'>Register</LoginButton>

        <p>
          Already have an account? <Link to='/'>Sign in here!</Link>
        </p>
      </form>

      {message && <Message text={message} />}
    </div>
  );
}
