
import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function ShoppingList(props) {
    let navigate = useNavigate();
    const { state } = useLocation();

    const handleEditing = () => {
        navigate("/");
    }

    return (
        <div className='block'>
            <h1>Shopping List</h1>
            {state.shopList.map((product, index)=>
                <div className="product-row" key={index}> 
                    <div className="output-product"> {product.product} </div>
                    <div className="output-comment"> {product.comment} </div> 
                </div>)}
            <button onClick={() => {handleEditing()}}> Edit Shop List </button>
        </div>

    )
}

export default ShoppingList