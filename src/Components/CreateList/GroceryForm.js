import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import "./GroceryForm.css";
import ReadProdRow from "./ReadProdRow";
import EditProdRow from "./EditProdRow";
import LoadingPage from "../LoadingPage/LoadingPage";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

function GroceryForm() {
  const [options, setOptions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllProducts = async () => {
    const response = await axios.get("/createlist");
    setAllProducts(response.data);
    setOptions(
      response.data.map((product) => ({
        id: product.ID,
        value: product.name,
        label: product.name,
      }))
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const [inputs, setInputs] = useState({
    product: "",
    amount: "",
    comment: "",
  });

  const [editInputs, setEditInputs] = useState({
    product: "",
    amount: "",
    comment: "",
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productList, setProductList] = useState([]);

  const [editProdId, setEditProdId] = useState(null);

  const addProduct = (inputs) => {
    if (!selectedProduct || !inputs.amount) return;

    const inputsDetails = {
      id: selectedProduct.id,
      product: selectedProduct.label,
      amount: inputs.amount,
      comment: inputs.comment,
    };

    setProductList([inputsDetails, ...productList]);
    console.log("productlist:", ...productList, inputsDetails);
  };

  const editProduct = (e) => {
    const { name, value } = e.target;
    setEditInputs({ ...editInputs, [name]: value });
    console.log({ ...editInputs, [name]: value });
  };

  const removeProduct = (id) => {
    const removeArr = [...productList].filter((product) => product.id !== id);
    setProductList(removeArr);
  };

  const handleEditClick = (e, product) => {
    e.preventDefault();
    setEditProdId(product.id);

    const prodValues = {
      id: product.id,
      product: product.product,
      amount: product.amount,
      comment: product.comment,
    };

    setEditInputs(prodValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    addProduct(inputs);
    setSelectedProduct(null);
    setInputs({ product: "", amount: "", comment: "" });

    console.log(
      "product=" + selectedProduct.label,
      "amount=" + inputs.amount,
      "comment=" + inputs.comment
    );
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const editInputsDetails = {
      id: editProdId,
      product: editInputs.product,
      amount: editInputs.amount,
      comment: editInputs.comment,
    };

    const newInputs = [...productList];
    const index = productList.findIndex((product) => product.id === editProdId);
    newInputs[index] = editInputsDetails;

    setProductList(newInputs);
    setEditProdId(null);
  };

  let navigate = useNavigate();

  const closelist = async () => {
    await axios
      .post("/closelist", productList)
      .then((response) => {
        console.log("Updated or Added?: ", response.data);
        navigate("/shoppinglist");
      })
      .catch((error) => {
        console.log(error, error.response);
      });
  };

  const [openModal, setOpenModal] = useState(false);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="block">
        <h2> Create a new shopping list </h2>
        <div className="explanation">
          {" "}
          Add a new product to the shopping list{" "}
        </div>
        <form className="grocery-form" onSubmit={handleSubmit} autocomplete="off">
          <Select
            className="products"
            value={selectedProduct}
            placeholder="Enter item..."
            onChange={setSelectedProduct}
            options={options}
            name="product"
          />{" "}
          <br />
          <div className="amount-elements">
            <input
              type="text"
              className="input-amount"
              placeholder="Enter amount..."
              name="amount"
              value={inputs.amount}
              onChange={handleChange}
            />

            {selectedProduct ? (
              allProducts
                .filter((prod) => prod.name === selectedProduct.label)
                .map((filteredProd, index) => {
                  return (
                    <div className="show-units" key={index}>
                      ({filteredProd.units}){" "}
                    </div>
                  );
                })
            ) : (
              <div className="show-units"> (Units) </div>
            )}
          </div>
          <input
            type="text"
            className="input-comment"
            placeholder="Enter comment..."
            name="comment"
            value={inputs.comment}
            onChange={handleChange}
          />{" "}
          <br />
          <button className="add-product-button"> Add Product </button>
        </form>
        <div className="notice">
          <span style={{ fontWeight: "bold" }}> NOTICE: </span>
          <span>
            {" "}
            Adding new products without closing the previous shopping list will
            simply add them to the said list.{" "}
          </span>
        </div>
      </div>
      <div className="block">
        <h3>Your shopping list</h3>
        {productList.map((product, index) =>
          editProdId === product.id ? (
            <EditProdRow
              product={product}
              allProducts={allProducts}
              key={index}
              editInputs={editInputs}
              editProduct={editProduct}
              handleEditSubmit={handleEditSubmit}
              removeProduct={removeProduct}
            />
          ) : (
            <ReadProdRow
              product={product}
              allProducts={allProducts}
              key={index}
              removeProduct={removeProduct}
              handleEditClick={handleEditClick}
            />
          )
        )}
      </div>
      <div className="shop-button">
        <button className="openModalBtn" onClick={() => setOpenModal(true)}>
          {" "}
          Close List{" "}
        </button>
      </div>

      {openModal && <Modal closeModal={setOpenModal} closelist={closelist} />}
    </>
  );
}

export default GroceryForm;
