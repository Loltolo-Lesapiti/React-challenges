import './App.css';
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <div className="button-container">
        <button className="rounded-full bg-indigo-500 p-2" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;
