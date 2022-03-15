import React from 'react'
import "./GroceryForm.css";
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

function ReadProdRow( {product, allProducts, removeProduct, index, handleEditClick} ) {
  return (  
    <div className="product-row" key = {index}> 
        <div className="output-product"> {product.product} </div> 

        {allProducts.filter(prod => prod.name === product.product)
          .map((filteredProd, index) => {
            return <div className="output-department" key={index}> 
            { filteredProd.department } 
            </div> } ) }

        {allProducts.filter(prod => prod.name === product.product)
          .map((filteredProd, index) => {
            return <div className="output-units" key={index}> 
            { filteredProd.units } 
            </div> } ) }

        <div className="output-comment"> {product.comment} </div>
        
        <div className="icons">
        <FiEdit className="edit-button" 
                onClick={(e) => handleEditClick(e, product)}/>
        <AiFillDelete   className="delete-button" 
                        onClick={() => removeProduct(product.id)}/>
        </div>
    </div>
  )
}

export default ReadProdRow