import { useState } from 'react';

const Input = ({ type, label }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showPassword, setSetshowPassword] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.value.length > 0 ? setIsActive(true) : setIsActive(false);
  };

  const togglePassword = () => {
    setSetshowPassword(!showPassword);
  };

  return (
    <div className='w-full h-[38px] border-[1px] border-gray-300 rounded-sm relative'>
      <p
        className={`text-gray-500 absolute left-[8px]  pointer-events-none transition-all duration-200 ${
          isActive ? 'top-[2px] text-[9.5px]' : 'top-[50%] -translate-y-1/2'
        }`}
      >
        {label}
      </p>

      <input
        type={showPassword ? 'text' : type}
        className={`w-full h-full outline-none bg-transparent z-10 py-1 px-2 focus:bg-none ${
          isActive ? 'mt-1' : ''
        }`}
        value={inputValue}
        onChange={handleInputChange}
      />

      {type === 'password' && (
        <div
          className='absolute right-[8px] top-[50%] transform -translate-y-1/2 text-black cursor-pointer font-bold'
          onClick={togglePassword}
        >
          {showPassword ? 'Ocultar' : 'Mostrar'}
        </div>
      )}
    </div>
  );
};

export default Input;
