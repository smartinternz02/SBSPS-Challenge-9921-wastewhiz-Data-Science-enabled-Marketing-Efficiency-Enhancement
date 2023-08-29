import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Customers from './pages/Customers';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} /> 
        </Route>
        <Route path="/customers">
          <Route index element={<Customers />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;