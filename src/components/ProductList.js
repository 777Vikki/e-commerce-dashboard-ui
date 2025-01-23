import React, {useState, useEffect} from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        if(userId) {
            let apiResponse = await fetch('http://localhost:5000/product/' + userId);
            apiResponse = await apiResponse.json();
            if(apiResponse?.result) {
                setProducts(apiResponse.data);
            }
        }
    }
    return (
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
            {
                products.map((product, index) => 
                    <ul key={index}>
                        <li>{index + 1}</li>
                        <li>{product.name}</li>
                        <li>$ {product.price}</li>
                        <li>{product.category}</li>
                    </ul>
                )
            }
        </div>
    )
};

export default ProductList;