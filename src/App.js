import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';

export const CatagoryContext = createContext();


function App() {
  const [count, setCount] = useState('Laptop');


  return (
    <CatagoryContext.Provider value= {[count, setCount]}>
      <Header ></Header>
      <Home ></Home>
      <Shipment></Shipment>


    </CatagoryContext.Provider>
  );
}

export default App;
