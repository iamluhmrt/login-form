import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className='container'>
      <h1>Register Page</h1>
      <p>
        Already have an account? <Link to='/'>Go to Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
