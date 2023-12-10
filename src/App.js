
import './App.css';
import Crud from './Components/Crudform/Crud';
// import Data from './Components/Data';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavBar/Nav';

function App() {
  return (
    <>
      <Nav />

      <Routes>
      {/* <Route path='about' element={<Data />} /> */}

        <Route path='crud' element={<Crud />} />
      </Routes>
    </>
  );
}

export default App;
