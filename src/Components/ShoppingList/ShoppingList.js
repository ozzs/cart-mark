import React, { useEffect } from "react";
import axios from 'axios';
//import { useLocation, useNavigate } from "react-router-dom";

function ShoppingList(props) {
    
    const fetchShoppingList = async() => {
        const response = await axios.get('http://localhost:5000/shoppinglist');
        // setAllProducts(response.data);
        // setOptions(response.data.map(product => ({id: product.ID, value: product.name, label: product.name})))
        // setIsLoading(false);
    }

    useEffect(() => {
        fetchShoppingList();
    }, []); 

    return (
        <div className='block'>
            <h1>Shopping List</h1>

            
        </div>

    )
}

export default ShoppingList