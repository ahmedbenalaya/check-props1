import React from 'react'
import './Prod.css';
//import PropTypes from 'prop-types';


export default function ProductTable(props) {
    return (
            props.product.map((prod)=><h1 key={prod.id}>{prod.category}{prod.price}{prod.name}</h1>),  
            props.product.map((item)=>{
                return( 
                  <tr  className="tab" key={item.id}>
                    <th>category:{item.category}</th>
                    <th>price:{item.price}</th>
                    <th>Name:{item.name}</th>
                  </tr> 
                   )
            }      
    )
}
//ProductTable.propTypes = {product: PropTypes.any.isRequired}
