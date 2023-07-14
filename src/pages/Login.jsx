import { useEffect, useState } from 'react';
import { language, images } from '../utils/constants';
import Input from '../components/input';

const Login = () => {
  const [languageOption, setLanguageOption] = useState('');
  const [currentImage, setcurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLanguage = (e) => {
    setLanguageOption(e.target.value);
  };

  return (
    <section className='w-full min-h-screen grid grid-cols-1 justify-center items-center text-[12px]'>
      <main className='w-full h-full flex flex-col justify-center items-center lg:px-10 py-10'>
        <article className='flex justify-center items-center w-full h-full'>
          <div className='2md:flex justify-center items-center hidden bg-login-hero w-[420px] h-[600px] bg-no-repeat mr-10'>
            <div className='relative w-full h-full mt-[50px]'>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt='home-phones'
                  className={`absolute top-0 left-[158px] transition-opacity duration-[1500ms] ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-[350px] gap-3'>
            <div className='md:border-[1px] md:border-gray-300 w-full px-10 py-5'>
              <form className='flex flex-col gap-2 justify-center items-center'>
                <div className='w-[200px] mb-4'>
                  <img src='/src/assets/instagram.webp' alt='instagram' />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 w-full mb-3'>
                  <Input
                    type='text'
                    label='Teléfono, usuario o correo electrónico'
                  />
                  <Input type='password' label='Contraseña' />

                  <button
                    type='submit'
                    className='bg-sky-500 rounded-md px-2 py-2 mt-4 text-white font-bold w-full hover:bg-sky-600'
                  >
                    Iniciar sesión
                  </button>
                </div>
                <div className='w-full grid grid-cols-3 justify-center items-center mb-3'>
                  <div className='bg-gray-300 h-[1px] w-full'></div>
                  <div className='w-full text-center'>O</div>
                  <div className='bg-gray-300 h-[1px] w-full'></div>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                  <div>
                    <a
                      href='#'
                      className='flex flex-row justify-center items-center gap-2'
                    >
                      <img
                        src='/src/assets/facebooksvg.svg'
                        alt='facebook'
                        className='w-4'
                      />
                      <span className='text-blue-900 font-semibold text-sm'>
                        Iniciar sesión con Facebook
                      </span>
                    </a>
                  </div>
                  <a href='#' className='text-blue-800'>
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </form>
            </div>
            <div className='w-full flex justify-center items-center md:border-[1px] md:border-gray-300 px-10 py-5'>
              <p className='text-sm'>
                ¿No tienes una cuenta?{' '}
                <span className='text-sky-500 font-semibold'>
                  <a href='#'>Regístrate</a>
                </span>
              </p>
            </div>
            <div className='w-full flex flex-col justify-center items-center py-2 gap-4'>
              <div>
                <p className='text-sm'>Descarga la app.</p>
              </div>
              <div className='flex gap-2'>
                <a href='#' className='h-[40px]'>
                  <img
                    src='/src/assets/googleplay.webp'
                    alt='googleplay'
                    className='w-full h-full'
                  />
                </a>
                <a href='#' className='h-[40px]'>
                  <img
                    src='/src/assets/microsoft.webp'
                    alt='microsoft'
                    className='w-full h-full'
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer className='w-full h-full px-10 py-5 flex flex-col justify-center items-center text-gray-500'>
        <div className='flex flex-col justify-center items-center'>
          <ul className='flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-4 '>
            <li>
              <a href='#' target='_blank'>
                Meta
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Información
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Empleo
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Ayuda
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                API
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Privacidad
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Condiciones
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Cuentas destacadas
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Ubicaciones
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Instagram
              </a>
              Lite
            </li>
            <li>
              <a href='#' target='_blank'>
                Threads
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Subir contactos y no usuarios
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                Meta Verified
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-4'>
          <div className='flex flex-row justify-center items-center'>
            <select
              value={languageOption}
              onChange={handleLanguage}
              className='w-auto outline-none cursor-pointer'
            >
              {/* <option value=''>Seleccionar</option> */}
              {language.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>© 2022 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Login;
