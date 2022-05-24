import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import "./AddItem.css";

const departments = [
  { value: "Vegetables", label: "Vegetables" },
  { value: "Fruits", label: "Fruits" },
  { value: "Dairy", label: "Dairy" },
  { value: "Frozen", label: "Frozen" },
  { value: "Meats", label: "Meats" },
  { value: "Deli", label: "Deli" },
  { value: "Canned Food", label: "Canned Food" },
  { value: "Beauty", label: "Beauty" },
  { value: "Cleaning", label: "Cleaning" },
  { value: "Spices", label: "Spices" },
  { value: "Cereals", label: "Cereals" },
  { value: "Drinks", label: "Drinks" },
  { value: "General", label: "General" },
];

const units = [
  { value: "Individual", label: "Individual" },
  { value: "KG", label: "KG" },
  { value: "Gram", label: "Gram" },
  { value: "Pack", label: "Pack" },
];

function AddItem() {
  const [inputs, setInputs] = useState({
    product: "",
    department: "",
    units: "",
  });

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedPackeging, setSelectedPackaging] = useState(null);
  const [inserted, setInserted] = useState(false);
  const [notInserted, setNotInserted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    //console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDepartment || !selectedPackeging || !inputs.product) return;

    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });

    const inputsDetails = {
      product: inputs.product,
      department: selectedDepartment.label,
      units: selectedPackeging.label,
    };

    setSelectedDepartment(null);
    setSelectedPackaging(null);
    setInputs({ product: "", department: "", units: "" });

    axios
      .post("/additem", inputsDetails)
      .then((response) => {
        if (response.data.inserted) {
          setNotInserted(false);
          setInserted(true);
        }
      })
      .catch((error) => {
        console.log(error, error.response);
        setInserted(false);
        setNotInserted(true);
      });
  };

  const alertInserted = () => {
    return (
      <div className="alertInserted">
        <BsCheck2Circle className="success-icon" />
        <div className="alert-text">
          <span className="alert-title"> Success! </span> <br />
          <span className="alert-added"> Item added successfully... </span>{" "}
          <br />
        </div>
        <AiOutlineClose
          className="close-alert-button-success"
          onClick={() => setInserted(false)}
        />
      </div>
    );
  };

  const alertNotInserted = () => {
    return (
      <div className="alertNotInserted">
        <FaExclamationCircle className="fail-icon" />
        <div className="alert-text">
          <span className="alert-title"> Oops! </span> <br />
          Something went wrong... <br />
        </div>
        <AiOutlineClose
          className="close-alert-button-oops"
          onClick={() => setNotInserted(false)}
        />
      </div>
    );
  };

  return (
    <>
      <div className="add-item-block">
        <h2>Add Item</h2>
        <div className="add-item-explanation">
          {" "}
          Add new items to the catalog{" "}
        </div>
        {/* <hr className="divider" noshade="" /> */}
        <form className="addItem-form" onSubmit={handleSubmit}>
          <span className="product-input-title"> Product </span>
          <input
            type="text"
            className="input-product"
            placeholder="Enter a new product..."
            name="product"
            value={inputs.product}
            onChange={handleChange}
            autoComplete="off"
          />{" "}
          <br />
          <span className="department-input-title"> Department </span>
          <Select
            className="departments"
            value={selectedDepartment}
            placeholder="Choose a department..."
            onChange={setSelectedDepartment}
            options={departments}
            name="department"
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: "10px",
              }),
            }}
          />{" "}
          <br />
          <span className="packeging-input-title"> Packeging </span>
          <Select
            className="input-packeging"
            value={selectedPackeging}
            placeholder="Choose a packeging type..."
            onChange={setSelectedPackaging}
            options={units}
            name="packeging"
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: "10px",
              }),
            }}
          />
          <button className="add-item-button"> Add Item </button>
        </form>
      </div>

      {inserted ? alertInserted() : null}
      {notInserted ? alertNotInserted() : null}
    </>
  );
}

export default AddItem;
