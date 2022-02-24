import React, { useState } from "react";
import "./GroceryForm.css";
import { useNavigate } from "react-router-dom";
import ReadProdRow from "./ReadProdRow";
import EditProdRow from "./EditProdRow";

function GroceryForm() {
    let navigate = useNavigate();

    const[inputs, setInputs] = useState({
        product: '',
        comment: ''
    })

    const[productList, setProductList] = useState([]);

    const[editProdId, setEditProdId] = useState(null);
    
    const addProduct = (inputs) => {

        if(!inputs.product)
            return;
        
        const inputsDetails = {
            id: Math.floor(Math.random() * 10000),
            product: inputs.product,
            comment: inputs.comment
        }

        setProductList([...productList, inputsDetails]);
        console.log(...productList, inputsDetails);
    }

    const removeProduct = (key) => {
        const removeArr = [...productList].filter(product => product.product !== key);
        setProductList(removeArr);
    }

    const handleEditClick = (e, product) => {
        e.preventDefault();
        setEditProdId(product.id);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
        addProduct(inputs);
        setInputs({product: '', comment: ''});
        
        console.log('product=' + inputs.product, 'comment=' + inputs.comment);
    }

    const handleShopping = () => {
        navigate("/shoppinglist", { state: { shopList: productList } });
    }

    return (
        <>
        <div className="block">
            <h2> Create a new shopping list </h2>
            <div className="explanation"> Add a new item to the shopping list </div>
            <form   className="grocery-form"
                    onSubmit={handleSubmit}>
            <input  type="text" 
                    className="input-product"
                    placeholder="Enter item..." 
                    name="product" 
                    value={inputs.product}
                    onChange={handleChange}/> <br />
            <input  type="text"
                    className="input-comment"
                    placeholder="Enter comment..." 
                    name="comment" 
                    value={inputs.comment}
                    onChange={handleChange}/> <br />
            <button className="add-item-button"> Add Item </button>
            </form>
        </div>
        <div className="block">
            <h3>Your shopping list</h3>
            {productList.map((product, index)=> 
                ( editProdId === product.id ? 
                <EditProdRow key = {index} /> : 
                <ReadProdRow    product = {product}
                                key = {index}
                                removeProduct = {removeProduct} 
                                handleEditClick = {handleEditClick}/>
                )
            )}
        </div>
        <div className="shop-button">
            <button onClick={() => handleShopping()}> Go Shopping! </button>
        </div>
        </>
    );
}

export default GroceryForm;