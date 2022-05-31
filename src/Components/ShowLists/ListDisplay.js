import React from "react";
import "./ListDisplay.css";

function ListDisplay({ list }) {
  console.log("list in ListDisplay:", list);

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

  const departmentMap = groupByDeparment(list);

  return (
    <div className="list-display-block">
      {Object.keys(departmentMap).map((department) => (
        <div className="list-display-department" key={department}>
          <div className="list-display-department-title"> {department} </div>
          {departmentMap[department].map((item) => (
            <ul className="list-display-products-list" key={item.name}>
              <div className="list-display-product-container">
                <li className="list-display-product-details">
                  <div className="list-display-product-name">
                    {" "}
                    {item.name},{" "}
                  </div>
                  <div className="list-display-product-amount">
                    {" "}
                    {item.Amount} {item.units}{" "}
                  </div>
                  <div className="list-display-product-comment">
                    {" "}
                    {item.Comment}{" "}
                  </div>
                </li>
              </div>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ListDisplay;
