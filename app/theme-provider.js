'use client';

import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [userInfo, setUserInfo] = useState({});

  const themeObject = {
    userInfo,
    setUserInfo,
  };

  const persistData = () => {
    return setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
  };

  useEffect(() => {
    persistData();
  }, []);

  return (
    <ThemeContext.Provider value={themeObject}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
