import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const ExclusiveProducts = () => {
    
    const [products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
          
            setProducts(data);
        })
    },[])

    return (
        <div className='my-8 mx-8'>
            <h2 className='text-6xl font-bold text text-[#0000ff]'>Exclusive Products</h2>
            <p className='text-2xl font-bold my-3'>Unleash the Power of Advanced Technology</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2  my-4 mx-4'>
                {products.map(product => <ProductCart
                 key={product.id}
                 product ={product}></ProductCart>)}
            </div>
        </div>
    );
};

export default ExclusiveProducts;