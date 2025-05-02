import { useState } from 'react';
import InputField from '../../components/InputField';
import LoginButton from '../../components/LoginButton';
import Message from '../../components/Message';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const users = [
    {
      email: 'eduardo.lino@pucpr.br',
      password: '123456',
    },
  ];

  const handleLogin = () => {
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      setMessage('Login successful!');
    } else {
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
    </div>
  );
}

export default LoginPage;
