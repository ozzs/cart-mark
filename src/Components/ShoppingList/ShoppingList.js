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

    
    const groupByDeparment = (shoppingList) => {
        const departmentMap = {}

        shoppingList.forEach(item => {
            const department = item.department.toLowerCase()
            if(!departmentMap[department]) {
                departmentMap[department] = []
            }
            departmentMap[department].push(item)
        });
        return departmentMap
    }

    if (isLoading) {
        return <h2 className="loading-screen">Loading...</h2>;
    }

    const departmentMap = groupByDeparment(shoppingList)

    return (
        <>
        <div className='block'>
            <h1>Shopping List</h1>

            {Object.keys(departmentMap).map(department => (
                <div key={department}>
                    <h2>{department}</h2>
                    {departmentMap[department].map(item => (
                        <span key={item.name}>{item.name}</span>
                    ))}
                    </div>
            ))}
        </div>
        </>
    )
}

export default ShoppingList