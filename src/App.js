import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
import End from './End';
import Nav from './Nav';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appStyles = {
    background: darkMode ? '#1f2937' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: darkMode ? '#ffffff' : '#000000',
  };

  return (
    <div style={appStyles} className="min-h-screen">
      <Nav />
      <div className="container mx-auto">
        <SearchForm />
        <Buttons />
        <Stories />
        
      </div>
      <div className="fixed bottom-[43rem] right-4">
        <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
      <End />
      
    </div>
  );
}

export default App;
