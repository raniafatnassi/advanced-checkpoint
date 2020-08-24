import React from 'react';

import ProductTable from './components/ProductTable'

import './App.css';


function App() {
  return (
    <div className="App">
      <ProductTable name = "Jacket" category = "Clothes" price = "120" />
    </div>
  );
}

export default App;
