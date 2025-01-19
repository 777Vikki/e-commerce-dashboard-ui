import React, {useState} from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState('');
    const [company, setCompany] = useState('');

    const onAddProduct = () => {
        console.log(name, price, product, company);
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product name" className='input-box' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Product price" className='input-box' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Enter Product category" className='input-box' value={product} onChange={(e) => setProduct(e.target.value)} />
            <input type="text" placeholder="Enter Product company" className='input-box' value={company} onChange={(e) => setCompany(e.target.value)} />
            <button className='app-button' onClick={onAddProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;