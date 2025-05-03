function InputField({ type, name, value, onChange, placeholder }) {
  return (
    <input
      className='input'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputField;
