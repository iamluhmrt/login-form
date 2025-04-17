function InputField({ type, value, onChange, placeholder }) {
  return (
    <input
      className='input'
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputField;
