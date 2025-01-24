import React, {useState} from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    const onAddProduct = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        if(name && price && category && company && userId) {
            let apiResponse = await fetch("http://localhost:5000/product", {
                method: 'post',
                body: JSON.stringify({name, price, category, company, userId}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            apiResponse = await apiResponse.json();
            if(apiResponse?.result) {
                alert('Product added successfully');
                setName('');
                setPrice('');
                setCategory('');
                setCompany('');
            }   
        } else {
        }
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product name" className='input-box' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Product price" className='input-box' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Enter Product category" className='input-box' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Enter Product company" className='input-box' value={company} onChange={(e) => setCompany(e.target.value)} />
            <button className='app-button' onClick={onAddProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;