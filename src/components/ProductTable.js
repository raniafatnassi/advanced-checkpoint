import React from "react";

import PropTypes from 'prop-types';

const ProductTable = (props) => {
    return (
        <tr>
            <td> {props.name} </td>
            <td> {props.category} </td>
            <td> {props.price} </td>
        </tr>
    );
    };

    ProductTable.propTypes = {
        name: PropTypes.string.isRequired,
        category: PropTypes.oneOf(['Clothes', 'Electronics']).isRequired,
        price: PropTypes.number.isRequired
    }

    export default ProductTable;