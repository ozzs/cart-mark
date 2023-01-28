import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import shopping_cart from "./shopping_cart.png";
import "./ShoppingList.css";
import LoadingPage from "../LoadingPage/LoadingPage";

const fadeTitle = (i) =>
  `fadeIn 1s ease-out ${1200 + 500 * (i + 1)}ms forwards`;

function ShoppingList(props) {
  const [shoppingList, setShoppingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShoppingList = async () => {
    const response = await axios.get("/shoppinglist");
    setShoppingList(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchShoppingList();
  }, []);

  const groupByDeparment = (shoppingList) => {
    const departmentMap = {};

    shoppingList.forEach((item) => {
      const department = item.department;
      if (!departmentMap[department]) {
        departmentMap[department] = [];
      }
      departmentMap[department].push(item);
    });
    return departmentMap;
  };

  const departmentMap = groupByDeparment(shoppingList);

  const checkProd = (shopList, id, check) => {
    const updatedList = shopList.map((product) => {
      if (product.ID === id && check === true) {
        product.isComplete = true;
      } else if (product.ID === id && check === false) {
        product.isComplete = false;
      }
      return product;
    });
    setShoppingList(updatedList);
  };

  const handleFinish = () => {
    axios
      .post("/finishshopping")
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
    setShoppingList([]);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="title-container">
        <img
          src={shopping_cart}
          alt="shopping_cart"
          className="shopping_cart_left"
        />
        <span className="shopping-list-title"> Shopping List </span>
        <img
          src={shopping_cart}
          alt="shopping_cart"
          className="shopping_cart_right"
        />
      </div>

      {Object.keys(departmentMap).map((department, i) => (
        <div className="department" key={department}>
          <div className="department-title" style={{ animation: fadeTitle(i) }}>
            {" "}
            {department}{" "}
          </div>
          {departmentMap[department].map((item) => (
            <ul className="products-list" key={item.name}>
              <div className="product-container">
                <li
                  className={item.isComplete ? "product-checked" : "product"}
                  onClick={() => checkProd(shoppingList, item.ID, true)}
                  onDoubleClick={() => checkProd(shoppingList, item.ID, false)}
                  style={{ animation: fadeTitle(i) }}
                >
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

      {!shoppingList.length ? (
        <div className="alert-no-list">
          No list to display... <br />
          Go ahead and create one!
        </div>
      ) : (
        <Link to="/" className="finish-shopping">
          <button className="finish-button" onClick={handleFinish}>
            {" "}
            Finish{" "}
          </button>
        </Link>
      )}
    </>
  );
}

export default ShoppingList;
