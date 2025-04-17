function LoginButton({ onClick, children }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default LoginButton;
