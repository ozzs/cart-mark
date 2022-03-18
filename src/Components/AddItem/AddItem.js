import React, { useState } from 'react'
import Select from 'react-select';
import './AddItem.css'

function AddItem() {

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

    const packaging = [
        { value: 'Vegetables', label: 'Vegetables' },
        { value: 'Fruits', label: 'Fruits' },
        { value: 'Dairy', label: 'Dairy' },
        { value: 'Frozen', label: 'Frozen' }
    ];
    
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedPackaging, setSelectedPackaging] = useState(null);
    
    return (
        <div className="block"> 
            <h2>Add Item</h2>
            <form className='addItem-form'>
                <input  type="text"
                        className="input-product"
                        placeholder="Enter a new product..."
                        name="product"
                        //value={inputs.amount}
                        //onChange={handleChange} 
                        /> <br />

                <Select className="departments"
                            value={selectedDepartment}
                            placeholder="Choose a department..."
                            onChange={setSelectedDepartment}
                            options={departments} 
                            name="product"/> <br />
                
                <div className='packaging'>
                    <span className='pack-title'> Packaging: </span>
                    <Select className="input-packaging"
                            value={selectedPackaging}
                            placeholder="Choose a packaging type..."
                            onChange={setSelectedPackaging}
                            options={packaging} 
                            name="product"/>
                </div>
            </form>
        </div>
    )
}

export default AddItem