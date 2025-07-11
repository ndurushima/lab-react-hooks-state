import React from 'react';


const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <button onClick={handleClick}>{darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}</button>
  )
}

export default DarkModeToggle
