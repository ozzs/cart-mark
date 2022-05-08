import React from "react";
import "./EditProdRow.css";
import { AiFillDelete } from "react-icons/ai";
import { GiSaveArrow } from "react-icons/gi";

function EditProdRow({
  product,
  allProducts,
  index,
  editInputs,
  editProduct,
  handleEditSubmit,
  removeProduct,
}) {
  return (
    <div className="product-row-edit" key={index}>
      <div className="outputs-edit">
        <div className="output-product"> {editInputs.product} </div>

        {allProducts
          .filter((prod) => prod.name === product.product)
          .map((filteredProd, index) => {
            return (
              <div className="output-department" key={index}>
                {filteredProd.department}
              </div>
            );
          })}

        {allProducts
          .filter((prod) => prod.name === product.product)
          .map((filteredProd, index) => {
            return (
              <div className="output-units" key={index}>
                {filteredProd.units}
              </div>
            );
          })}
      </div>

      <hr />
      <div className="edits">
        <span>amount:</span>
        <input
          type="text"
          className="edit-amount"
          placeholder="Edit amount..."
          name="amount"
          value={editInputs.amount}
          onChange={editProduct}
        />
        <span>comment:</span>
        <input
          type="text"
          className="edit-comment"
          placeholder="Edit comment..."
          name="comment"
          value={editInputs.comment}
          onChange={editProduct}
        />
      </div>
      <div className="icons-edit">
        <GiSaveArrow
          className="edit-button"
          title="save edit"
          onClick={(e) => handleEditSubmit(e)}
        />
        <AiFillDelete
          className="delete-button"
          title="delete"
          onClick={() => removeProduct(product.id)}
        />
      </div>
    </div>
  );
}

export default EditProdRow;
