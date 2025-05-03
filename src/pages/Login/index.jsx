// src/pages/Login/index.jsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import InputField from '../../components/InputField';
import LoginButton from '../../components/LoginButton';
import Message from '../../components/Message';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setMessage('Incorrect email or password!');
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>

      <InputField
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />

      <InputField
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />

      <LoginButton onClick={handleLogin}>Access</LoginButton>

      <Message text={message} />

      <p>
        Don't have an account? <Link to='/register'>Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
