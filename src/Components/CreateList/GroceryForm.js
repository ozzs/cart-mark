import React, { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';
import './GroceryForm'
import { useNavigate } from "react-router-dom";
import ReadProdRow from "./ReadProdRow";
import EditProdRow from "./EditProdRow";

let options = [];
let allProducts = [];

function GroceryForm() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/check')
        .then((response => {
            Object.values(response.data).map((value) => (
                allProducts = [...allProducts, value]))
            //console.log("allProducts: " + allProducts[0].units);
            allProducts.map((product) => (
                options = [...options, {value: product.name,
                                        label: product.name}]
            ))
            //console.log("options: ", options);
            setIsLoading(false);
        }));
    }, []);

    let navigate = useNavigate();

    const[inputs, setInputs] = useState({
        product: '',
        amount: '',
        comment: ''
    })

    const[editInputs, setEditInputs] = useState({
        product: '',
        amount: '',
        comment: ''
    })

    const[selectedProduct, setSelectedProduct] = useState(null);

    const[productList, setProductList] = useState([]);

    const[editProdId, setEditProdId] = useState(null);
    
    const addProduct = (inputs) => {

        if(!selectedProduct || !inputs.amount)
            return;
        
        const inputsDetails = {
            id: Math.floor(Math.random() * 10000),
            product: selectedProduct.label,
            amount: inputs.amount,
            comment: inputs.comment
        }

        setProductList([...productList, inputsDetails]);
        console.log("productlist:", ...productList, inputsDetails);
    }

    const editProduct = (e) => {

        const {name, value} = e.target;
        setEditInputs({...editInputs, [name]: value});
        console.log({...editInputs, [name]: value});
    }

    const removeProduct = (id) => {
        const removeArr = [...productList].filter(product => product.id !== id);
        setProductList(removeArr);
    }

    const handleEditClick = (e, product) => {
        e.preventDefault();
        setEditProdId(product.id);

        const prodValues = {
            product: product.product,
            amount: product.amount,
            comment: product.comment
        }

        setEditInputs(prodValues);
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
        setSelectedProduct(null);
        setInputs({product: '', amount: '', comment: ''});
        
        console.log('product=' + selectedProduct, 'amount=' + inputs.amount, 'comment=' + inputs.comment);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const editInputsDetails = {
            id: editProdId,
            product: editInputs.product,
            amount: editInputs.amount,
            comment: editInputs.comment
        }
        
        const newInputs = [...productList];
        const index = productList.findIndex((product) => product.id === editProdId);
        newInputs[index] = editInputsDetails;

        setProductList(newInputs);
        setEditProdId(null);
    }

    const handleShopping = () => {
        // axios.post('http://localhost:5000/', productList)
        // .then(response => {console.log(response)})
        // .catch(error => {console.log(error, error.response)});
        navigate("/shoppinglist", { state: { shopList: productList } });
    }

    if (isLoading) {
        return <h2 className="loading-screen">Loading...</h2>;
    }

    return (
        <>
        <div className="block">
            <h2> Create a new shopping list </h2>
            <div className="explanation"> Add a new item to the shopping list </div>
            <form   className="grocery-form"
                    onSubmit={handleSubmit}>

                <Select className="products"
                        value={selectedProduct}
                        placeholder="Enter item..."
                        onChange={setSelectedProduct}
                        options={options} 
                        name="product"/> <br />

                <div className="amount-elements">
                <input  type="text"
                        className="input-amount"
                        placeholder="Enter amount..."
                        name="amount"
                        value={inputs.amount}
                        onChange={handleChange} /> 

                {selectedProduct ?
                    allProducts.filter(prod => prod.name === selectedProduct.label)
                    .map((filteredProd, index) => {
                        return  <div className="show-units" key={index}> 
                                ({ filteredProd.units }) </div> } ) : 
                                <div className="show-units"> (Units) </div>} 
                </div>

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
                <EditProdRow    product = {product}
                                allProducts = {allProducts}    
                                key = {index}
                                editInputs={editInputs}
                                editProduct={editProduct}
                                handleEditSubmit={handleEditSubmit} 
                                removeProduct = {removeProduct} /> : 
                <ReadProdRow    product = {product}
                                allProducts = {allProducts}
                                key = {index}
                                removeProduct = {removeProduct} 
                                handleEditClick = {handleEditClick} />
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