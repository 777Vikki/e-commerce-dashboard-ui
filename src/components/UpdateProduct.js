import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetail();
    }, []);

    const getProductDetail = async () => {
        const productId = params.id;
        if(productId) {
            let apiResponse = await fetch('http://localhost:5000/product-detail/' + productId);
            apiResponse = await apiResponse.json();
            if(apiResponse?.result) {
                const productDetail = apiResponse.data[0];
                setName(productDetail.name);
                setPrice(productDetail.price);
                setCategory(productDetail.category);
                setCompany(productDetail.company);
            }
        }
    }

    const onUndateProductDetail = async () => {
        const productId = params.id;
        if(name && price && category && company && productId) {
            let apiResponse = await fetch("http://localhost:5000/product-detail/" + productId, {
                method: 'put',
                body: JSON.stringify({name, price, category, company}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            apiResponse = await apiResponse.json();
            if(apiResponse?.result) {
                alert('Product Updated successfully');
                navigate('/');
            }   
        } else {
        }
    }

    return (
        <div className='product'>
            <h1>Update Product Detail</h1>
            <input type="text" placeholder="Enter Product name" className='input-box' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Product price" className='input-box' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Enter Product category" className='input-box' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Enter Product company" className='input-box' value={company} onChange={(e) => setCompany(e.target.value)} />
            <button className='app-button' onClick={onUndateProductDetail}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;