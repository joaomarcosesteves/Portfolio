import React, {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import usePersistedState from './utils/usePersistedState';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = usePersistedState('theme', 'dark')

  const themeToggler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>

          <Header themeToggler={themeToggler}/>
        <Main>
        <GlobalStyle/>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/contact" element={<ContactMe />} />
            </Routes>
          </BrowserRouter>  
        </Main>
          <Footer/>
        </ThemeProvider>
    </div>
  );
}


const Main = styled.div`    
  padding: 0 10%;
  overflow-x: hidden; 
  overflow-y: hidden; 
`

export default App;
