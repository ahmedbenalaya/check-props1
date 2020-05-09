import React from 'react'
import './Prod.css';
import PropTypes from 'prop-types';
const ProductTable =(props)=>{
  return (
            <table>
            <tr>
            <th>category</th> 
            <th>price</th> 
            <th>name</th> 
            </tr>
            {props.product.map((item)=>{
               return( 
               <tr className="tab" key={item.id}>
               <td>{item.category}</td>
               <td>{item.price}</td>
               <td>{item.name}</td>
               </tr> )
               })  
            }
            </table>)
}
ProductTable.propTypes = {product: PropTypes.array.isRequired}

export default ProductTable;