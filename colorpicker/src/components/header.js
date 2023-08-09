import React, {useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


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
    <div className='p-4 flex justify-between'>
        <div className='flex justify-around'>
            <div href='#' className='flex-auto decoration-slate-50 w-40 uppercase hover:underline'>Text Analyser</div>
            <div href='#' className='flex-auto w-14 hover:underline'>About</div>
            <div href='#' className='flex-auto w-20 hover:underline'>Contact Us</div>
        </div>
        <button href='#' className='hover:underline' onClick={handleTheme}>
        {theme === 'dark' ? (
          <FontAwesomeIcon icon={faSun} className='mr-2' />
        ) : (
          <FontAwesomeIcon icon={faMoon} className='mr-2' />
        )}
        </button>
    </div>
  )
}

export default Header