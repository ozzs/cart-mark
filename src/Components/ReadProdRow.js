import React from 'react'
import "./GroceryForm.css";
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

function ReadProdRow( {product, removeProduct, index, handleEditClick} ) {
  return (  
    <div className="product-row" key = {index}> 
        <div className="output-product"> {product.product} </div>
        <div className='output-department'> {product.department.label} </div>
        <div className="output-comment"> {product.comment} </div>
        <div className="icons">
        <FiEdit className="edit-button" 
                onClick={(e) => handleEditClick(e, product)}/>
        <AiFillDelete   className="delete-button" 
                        onClick={() => removeProduct(product.product)}/>
        </div>
    </div>
  )
}

export default ReadProdRow