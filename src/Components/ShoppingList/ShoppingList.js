import React, { useEffect, useState } from "react";
import axios from 'axios';

function ShoppingList(props) {
    
    const [shoppingList, setShoppingList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchShoppingList = async() => {
        const response = await axios.get('http://localhost:5000/shoppinglist');
        setShoppingList(response.data);
        //console.log(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchShoppingList();
    }, []);

    const printShoppingList = (shoppingList) => {
        const departments = shoppingList.map(item => item.department);
        console.log(departments);
        return departments.map(item => <div>{item}</div>);
    }

    if (isLoading) {
        return <h2 className="loading-screen">Loading...</h2>;
    }

    return (
        <>
        <div className='block'>
            <h1>Shopping List</h1>

            
        </div>
        
        {printShoppingList(shoppingList)}


        </>
    )
}

export default ShoppingList