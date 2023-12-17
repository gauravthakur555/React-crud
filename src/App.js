
import './App.css';
import Crud from './Components/Crudform/Crud';
import Data from './Components/Data';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavBar/Nav';
import Toggle from './Components/Toggle/Toggle';
import { createContext, useState } from 'react';
import './App.css'

export const ThemeContext = createContext(null);

function App() {
  const[theme,setTheme]=useState("light");

  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  }
  return (
    <>

      <ThemeContext.Provider value={ {theme,toggleTheme}}>
        <div id={theme} onChange={toggleTheme} checked={theme==="dark"}>
        <Toggle/>
        <Nav />

        <Routes>
          <Route path='about' element={<Data />} />

          <Route path='crud' element={<Crud />} />
        </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
