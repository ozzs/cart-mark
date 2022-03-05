import React, { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';
import "./GroceryForm.css";
import { useNavigate } from "react-router-dom";
import ReadProdRow from "./ReadProdRow";
import EditProdRow from "./EditProdRow";

let options = [];

function GroceryForm() {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/check')
        .then((response => {
            Object.values(response.data).map((value) => (
                options = [...options, {value: value.name,
                                        label: value.name}]
            ))
            console.log("options: ", options);
            setLoading(false);
        }));
    }, []);

    let navigate = useNavigate();

    const[inputs, setInputs] = useState({
        product: '',
        comment: ''
    })

    const[editInputs, setEditInputs] = useState({
        product: '',
        comment: ''
    })

    const[selectedProduct, setSelectedProduct] = useState(null);

    const[productList, setProductList] = useState([]);

    const[editProdId, setEditProdId] = useState(null);
    
    const addProduct = (inputs) => {

        if(!selectedProduct)
            return;
        
        const inputsDetails = {
            id: Math.floor(Math.random() * 10000),
            product: selectedProduct.label,
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
        setInputs({product: '', comment: ''});
        
        console.log('product=' + selectedProduct, 'comment=' + inputs.comment);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const editInputsDetails = {
            id: editProdId,
            product: editInputs.product,
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
                        name="product"/>
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
                                key = {index}
                                editInputs={editInputs}
                                editProduct={editProduct}
                                handleEditSubmit={handleEditSubmit} 
                                removeProduct = {removeProduct} /> : 
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