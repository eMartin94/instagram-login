const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='bg-gray-50 border-[1px] border-gray-200 px-2 py-2 rounded-md w-full outline-[1px] outline-gray-200'
    />
  );
};

export default Input;
