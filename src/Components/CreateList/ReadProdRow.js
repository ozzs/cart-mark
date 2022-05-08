import React from "react";
import "./ReadProdRow.css";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

function ReadProdRow({
  product,
  allProducts,
  removeProduct,
  index,
  handleEditClick,
}) {
  return (
    <div className="product-row-read" key={index}>
      <div className="output-product"> {product.product} </div>

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
            <div className="output-amount" key={index}>
              {product.amount} {filteredProd.units}
            </div>
          );
        })}

      <div className="output-comment"> {product.comment} </div>

      <div className="icons">
        <FiEdit
          className="edit-button"
          title="edit"
          onClick={(e) => handleEditClick(e, product)}
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

export default ReadProdRow;
