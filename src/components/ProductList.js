import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        if (userId) {
            let apiResponse = await fetch('http://localhost:5000/product/' + userId);
            apiResponse = await apiResponse.json();
            if (apiResponse?.result) {
                setProducts(apiResponse.data);
            }
        }
    }

    const onDeleteProduct = async (product) => {
        const productId = product._id;
        if (productId) {
            let apiResponse = await fetch('http://localhost:5000/product/' + productId, {
                method: 'Delete'
            });
            apiResponse = await apiResponse.json();
            if (apiResponse?.result) {
                getProductList();
            }
        }
    };

    const onSearchHandle = async (event) => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        if (userId) {
            let apiResponse = await fetch(`http://localhost:5000/search/${userId}?key=${event.target.value}`);
            apiResponse = await apiResponse.json();
            if (apiResponse?.result) {
                setProducts(apiResponse.data);
            }
        }
    }

    return (
        <div className="product-list">
            <h3>{products?.length === 0 ? 'No Result Found' : 'Product List'}</h3>
            <input className="search-product-box" onChange={onSearchHandle} type="text" placeholder="Search Product"></input>
            {
                products?.length === 0 ?
                    <></>
                    :
                    <>
                        <ul>
                            <li>S.No.</li>
                            <li>Name</li>
                            <li>Price</li>
                            <li>Category</li>
                            <li>Company</li>
                            <li>Operation</li>
                        </ul>
                        {
                            products.map((product, index) =>
                                <ul key={index}>
                                    <li>{index + 1}</li>
                                    <li>{product.name}</li>
                                    <li>$ {product.price}</li>
                                    <li>{product.category}</li>
                                    <li>{product.company}</li>
                                    <li>
                                        <button onClick={() => onDeleteProduct(product)}>Delete</button>
                                        <Link to={"/update/" + product._id}>Update</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </>
            }
        </div>
    )
};

export default ProductList;