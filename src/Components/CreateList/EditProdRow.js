import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GiSaveArrow } from 'react-icons/gi'

function EditProdRow({product, allProducts, index, editInputs, editProduct, handleEditSubmit, removeProduct}) {
  return (
    <div className="product-row" key={index}>
        <div className='output-product'> {editInputs.product} </div>

        {allProducts.filter(prod => prod.name === product.product)
          .map((filteredProd, index) => {
            return <div className="output-department" key={index}> 
            { filteredProd.department } 
            </div> } ) }
        
        <input  type="text"
                className="edit-amount"
                placeholder="Edit amount..."
                name="amount" 
                value={editInputs.amount}
                onChange={editProduct} />

        {allProducts.filter(prod => prod.name === product.product)
          .map((filteredProd, index) => {
            return <div className="output-units" key={index}> 
            { filteredProd.units } 
            </div> } ) }

        <input  type="text"
                className="edit-comment"
                placeholder="Edit comment..."
                name="comment" 
                value={editInputs.comment}
                onChange={editProduct} />
                
        <div className="icons">
        <GiSaveArrow  className="edit-button" 
                      onClick={(e) => handleEditSubmit(e)}/>
        <AiFillDelete className="delete-button" 
                      onClick={() => removeProduct(product.id)}/>
        </div>
    </div>
  )
}

export default EditProdRow