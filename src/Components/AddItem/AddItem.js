import React, { useState } from 'react'
import Select from 'react-select';
import axios from 'axios';
import './AddItem.css'

function AddItem() {

    const[inputs, setInputs] = useState({
        product: '',
        department: '',
        packeging: ''
    })

    const departments = [
        { value: 'Vegetables', label: 'Vegetables' },
        { value: 'Fruits', label: 'Fruits' },
        { value: 'Dairy', label: 'Dairy' },
        { value: 'Frozen', label: 'Frozen' },
        { value: 'Meats', label: 'Meats' },
        { value: 'Deli', label: 'Deli' },
        { value: 'Canned Food', label: 'Canned Food' },
        { value: 'Beauty', label: 'Beauty' },
        { value: 'Cleaning', label: 'Cleaning' },
        { value: 'Spices', label: 'Spices' },
        { value: 'Cereals', label: 'Cereals' },
        { value: 'Drinks', label: 'Drinks' },
    ];

    const packeging = [
        { value: 'Individual', label: 'Individual' },
        { value: 'KG', label: 'KG' },
        { value: 'Gram', label: 'Gram' },
        { value: 'Pack', label: 'Pack' }
    ];
    
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedPackeging, setSelectedPackaging] = useState(null);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
        console.log(inputs)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})

        const inputsDetails = {
            product: inputs.product,
            department: selectedDepartment.label,
            packeging: selectedPackeging.label
        }

        setSelectedDepartment(null);
        setSelectedPackaging(null);
        setInputs({product: '', department: '', packeging: ''});
        
        console.log('product=' + inputsDetails.product, 'department=' + inputsDetails.department, 
                    'packeging=' + inputsDetails.packeging);

        axios.post('http://localhost:5000/additem', inputsDetails)
        .then(response => {console.log(response)})
        .catch(error => {console.log(error, error.response)});
    }

    // const addItem = (inputs) => {
        
    //     if(!selectedDepartment || !selectedPackeging)
    //         return;
        
    //     const inputsDetails = {
    //         product: inputs.product,
    //         department: selectedDepartment.label,
    //         comment: selectedPackeging.label
    //     }

    //     axios.post('http://localhost:5000/check', inputsDetails)
    //     .then(response => {console.log(response)})
    //     .catch(error => {console.log(error, error.response)});

    //     setProductList([inputsDetails, ...productList]);
    //     console.log("productlist:", ...productList, inputsDetails);
    // }

    return (
        <div className="block"> 
            <h2>Add Item</h2>
            <div className="explanation"> Add a new item to the database </div>
            <form   className='addItem-form' 
                    onSubmit={handleSubmit}>

                <input  type="text"
                        className="input-product"
                        placeholder="Enter a new product..."
                        name="product"
                        value={inputs.product}
                        onChange={handleChange} 
                        /> <br />

                <Select className="departments"
                            value={selectedDepartment}
                            placeholder="Choose a department..."
                            onChange={setSelectedDepartment}
                            options={departments} 
                            name="department"/> <br />
                
                <Select className="input-packeging"
                        value={selectedPackeging}
                        placeholder="Choose a packeging type..."
                        onChange={setSelectedPackaging}
                        options={packeging} 
                        name="packeging"/>
                
                <button className="add-item-button"> Add Item </button>
            </form>
        </div>
    )
}

export default AddItem