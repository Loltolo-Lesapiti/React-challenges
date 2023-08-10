import React, {useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [theme, setTheme]=useState('light');

  useEffect(()=>{
    if(theme==='light'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme])
  const handleTheme=()=>{
    setTheme(theme==='dark'? 'light': 'dark');
  }
  return (
    <div className='p-4 flex justify-between h-14 bg-gradient-to-r from-#cbd1cc-400 to-blue-400 font-sans hover:font-serif font-bold shadow-2xl'>
      <div href='#' className='flex-auto decoration-slate-50 w-40 uppercase '>Text Analyser</div>
        <div className='flex justify-around gap-4'>
            <a href='https://github.com/Loltolo-Lesapiti' target='_blank' rel='noopener noreferrer' className='flex-auto w-14 '><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.linkedin.com/in/petrolesapitiloltolo/' target='_blank' rel='noopener noreferrer' className='flex-auto w-20 '><FontAwesomeIcon icon={faLinkedin} /></a>
            <button href='#' className='hover:underline' onClick={handleTheme}>
        {theme === 'dark' ? (
          <FontAwesomeIcon icon={faMoon} className='mr-2' />
        ) : (
          <FontAwesomeIcon icon={faSun} className='mr-2' />
        )}
        </button>
        </div>
        
    </div>
  )
}

export default Header