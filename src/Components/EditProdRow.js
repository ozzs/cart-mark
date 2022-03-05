import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GiSaveArrow } from 'react-icons/gi'

function EditProdRow({product, index, editInputs, editProduct, handleEditSubmit, removeProduct}) {
  return (
    <div className="product-row" key={index}>
        <div className='output-product'>
          {editInputs.product}
        </div>
        <input  type="text"
                className="edit-comment"
                placeholder="Edit comment..."
                name="comment" 
                value={editInputs.comment}
                onChange={editProduct} />
        <div className="icons">
        <GiSaveArrow  className="save-button" 
                      onClick={(e) => handleEditSubmit(e)}/>
        <AiFillDelete className="delete-button" 
                      onClick={() => removeProduct(product.id)}/>
        </div>
    </div>
  )
}

export default EditProdRow