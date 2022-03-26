import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./ShoppingList.css"

function ShoppingList(props) {
    
    const [shoppingList, setShoppingList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchShoppingList = async() => {
        const response = await axios.get('http://localhost:5000/shoppinglist');
        setShoppingList(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchShoppingList();
    }, []);

    
    const groupByDeparment = (shoppingList) => {
        const departmentMap = {}

        shoppingList.forEach(item => {
            const department = item.department;
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

    const checkProd = (shopList, id, check) => {
        const updatedList = shopList.map((product) => {
            if(product.ID === id && check === true) {
                product.isComplete = true;
            }
            else if(product.ID === id && check === false) {
                product.isComplete = false;
            }
            return product;
        });
        setShoppingList(updatedList);
    }

    return (
        <>
        <div className='block'>
            <h1>Shopping List</h1>

            
        </div>
        {Object.keys(departmentMap).map(department => (
                <div className="department" key={department}>
                    <h2 className="department-title"> {department} </h2>
                    {departmentMap[department].map(item => (
                        <ul className="products-list" key={item.name}>
                            <li className={item.isComplete? "product-check" : "product"}
                                onClick={() => checkProd(shoppingList, item.ID, true)}
                                onDoubleClick={() => checkProd(shoppingList, item.ID, false)}> 
                            <span className="product-name"> {item.name} </span>
                            <span className="product-amount"> {item.Amount} </span>
                            <span className="product-units"> {item.units} </span>
                            <span className="product-comment"> {item.Comment} </span>
                            </li>
                        </ul>
                    ))}
                </div>
            ))}
        </>
    )
}

export default ShoppingList