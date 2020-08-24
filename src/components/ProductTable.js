import React from "react";

import PropTypes from 'prop-types';

const ProductTable = ({ price, name, category }) => {
    return (
    <div>
       <table style = {{width : '100%', backgroundColor : "lightgray"}}>
        <tr>
            <th>Name</th>
            <th>Category</th> 
            <th>Price</th>
        </tr>
        <tr>
            <td> {name} </td>
            <td> {category} </td>
            <td> {price} </td>
        </tr>
       </table>
    </div>
    );
    };

    ProductTable.propTypes = {
        price: PropTypes.number,
        name: PropTypes.string,
        category: PropTypes.string
      }

    export default ProductTable;