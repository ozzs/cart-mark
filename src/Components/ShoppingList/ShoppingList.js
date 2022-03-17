
import React from 'react'
//import axios from 'axios';
//import { useLocation, useNavigate } from "react-router-dom";

function ShoppingList(props) {
    // let navigate = useNavigate();
    // const { state } = useLocation();

    // const handleEditing = () => {
    //     axios.post('http://localhost:5000/', state.shopList)
    //     .then(response => {console.log(response)})
    //     .catch(error => {console.log(error, error.response)});
    //     navigate("/");
    // }

    return (
        <div className='block'>
            <h1>Shopping List</h1>

            {/* {state.shopList.map((product, index)=>
                <div className="product-row" key={index}> 
                    <div className="output-product"> {product.product} </div>
                    <div className="output-comment"> {product.comment} </div> 
                </div>)}
            <button onClick={() => {handleEditing()}}> Edit Shop List </button> */}
        </div>

    )
}

export default ShoppingList