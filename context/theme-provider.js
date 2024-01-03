'use client';

import { createContext, useState, useEffect } from 'react';
import { ThemeProvider as DarkThemeProvider } from 'next-themes';

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
      <DarkThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {props.children}
      </DarkThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
