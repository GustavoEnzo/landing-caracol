import { useEffect, useState } from 'react';
import celulares from './assets/imgs/celulares.svg';
import logo from './assets/imgs/logo.svg';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const description = " Caracol log é um aplicativo inovador de crowdshipping que conecta viajantes com espaço ocioso em suas malas a consumidores que precisam enviar ou receber pequenas encomendas.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const typingTimer = setInterval(() => {
        if (index < description.length) {
          setText((prev) => prev + description.charAt(index));
          index++;
        } else {
          clearInterval(typingTimer);
        }
      }, 30);

      return () => clearInterval(typingTimer);
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-br from-[#03a9f4] to-[#00608d] flex-grow">
        <div className='w-full p-4 h-screen'>
          <img src={logo} alt="" className='w-44 md:p-1 p-7 mx-auto md:mx-0' />
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img 
              src={celulares} 
              alt="" 
              className={`w-full ml-7 md:w-1/2 h-auto order-1 md:order-2 transition-opacity duration-700 ${isVisible ? 'animate-slideIn opacity-100' : 'opacity-0'}`} 
            />
            <div className="text-center md:text-left w-auto md:w-7/12 order-2 md:order-1">
              <h1 className="text-xl font-bold text-[#ffd600] md:text-3xl mb-2">Baixe Nosso App</h1>
              <p className="font-light leading-relaxed text-sm md:text-lg text-white mb-4">{text}</p>
              <a href="public/caracol.apk" download>
                <button className="text-[rgb(233,221,60)] font-semibold border-2 border-whiite rounded-xl px-4 py-2 mb-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[rgb(233,221,60)]">
                  Faça o Download
                </button>
              </a>
            </div>
          </div>
        </div>
        <footer className="  flex flex-col gap-3 p-4 text-center">
        <h1 className="text-xl font-normal text-[#ffff] mb-2">Redes Sociais</h1>
        <div className="flex justify-center ">
          <a href="https://www.instagram.com/caracologs" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios/50/EBEBEB/instagram-new--v1.png" alt="instagram" />
          </a>
        </div>
        <p className="font-light text-white text-xs md:text-sm">© 2024 Caracol Log. Todos os direitos reservados.</p>
      </footer>
      </div>

   

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          body {
            font-family: 'Poppins', sans-serif;
            }
            
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 1s ease forwards;
          }
        `}
      </style>
    </div>
  );
}

export default App;
