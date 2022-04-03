import React, { useEffect, useState } from "react";
import axios from 'axios';
import shopping_cart from './shopping_cart.png';
import "./ShoppingList.css"
import LoadingPage from "../LoadingPage/LoadingPage";

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

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
        <div className='title-container'>
            <img    src={shopping_cart} 
                    alt="shopping_cart"
                    className="shopping_cart_left" />
            <span className="shopping-list-title"> Shopping List </span>
            <img    src={shopping_cart} 
                    alt="shopping_cart"
                    className="shopping_cart_right" />
        </div>

        {Object.keys(departmentMap).map(department => (
                <div className="department" key={department}>
                    <div className="department-title"> {department} </div>
                    {departmentMap[department].map(item => (
                        <ul className="products-list" key={item.name}>
                            <div className="product-container">
                                <li className={item.isComplete? "product-checked" : "product"}
                                    onClick={() => checkProd(shoppingList, item.ID, true)}
                                    onDoubleClick={() => checkProd(shoppingList, item.ID, false)}> 
                                    <div className="product-name"> {item.name} </div>
                                    <div className="product-amount"> {item.Amount} </div>
                                    <div className="product-units"> {item.units} </div>
                                    <div className="product-comment"> {item.Comment} </div>
                                </li>
                            </div>
                        </ul>
                    ))}
                </div>
            ))}
        </>
    )
}

export default ShoppingList