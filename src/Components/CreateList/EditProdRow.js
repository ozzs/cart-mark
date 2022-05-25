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
    <>
      <div className="product-row-edit" key={index}>
        <div className="product-dets-edit">
          <div className="first-row-edit">
            <div className="output-product-edit"> {editInputs.product} </div>

            {allProducts
              .filter((prod) => prod.name === product.product)
              .map((filteredProd, index) => {
                return (
                  <div className="output-department-edit" key={index}>
                    ({filteredProd.department})
                  </div>
                );
              })}
          </div>

          <div className="amount-edit">
            <div className="amo">
              Amount (
              {allProducts
                .filter((prod) => prod.name === product.product)
                .map((filteredProd, index) => {
                  return (
                    <div className="output-units" key={index}>
                      {filteredProd.units}
                    </div>
                  );
                })}
              ):
            </div>
            <input
              type="text"
              className="input-edit-amount"
              placeholder="Edit amount..."
              name="amount"
              value={editInputs.amount}
              onChange={editProduct}
            />
          </div>

          <div className="comment-edit">
            <div className="com">comment:</div>
            <input
              type="text"
              className="input-edit-comment"
              placeholder="Edit comment..."
              name="comment"
              value={editInputs.comment}
              onChange={editProduct}
            />
          </div>
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
    </>
  );
}

export default EditProdRow;
