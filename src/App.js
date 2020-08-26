import React from 'react';

import ProductTable from './components/ProductTable'

import './App.css';

let products = [
  { name: "jacket", price: 170, category: "Clothes" },
  { name: "Iphone", price: 1500, category: "Electronics" },
  { name: "Dress", price: 120, category: "Clothes" },
  { name: "T-shirt", price: 55, category: "Clothes" },
  { name: "JBL  ", price: 300, category: "electronics" }
];

const Copy = () => {
  return(
    products.map(el => <ProductTable name = {el.name} category = {el.category} price = {el.price} />)
  );
};

function App() {
  return (
    <div className="App">
      <h1>List of products</h1>
      <table className="list" style={{ width: '100%', backgroundColor: 'lightseagreen'}}>
      <tr> 
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
     </tr>
        <Copy />
      </table>
    </div>
  );
}

export default App;
