import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SystemGenerated from './pages/SystemGenerated';
import CustomPassword from './pages/CustomPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/system-generated' element={<SystemGenerated />} />
          <Route path='/custom-password' element={<CustomPassword />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App