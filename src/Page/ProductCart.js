import React from 'react';

const ProductCart = ({product}) => {

    const {name, img, desc} = product;
    return (
        <div className="my-4 mx-2">
        <div className="card w-72 h-72 bg-base-100 border-2 border-blue-500 shadow-md flex flex-col justify-center items-center p-4">
            <div>
                <div className="w-32 rounded-full overflow-hidden mt-2">
                    {/* Increase the size of the image container (w-32) */}
                    <img className="w-full h-full object-cover" src={img} alt="Shoes" />
                </div>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-center text-xl font-semibold mt-8">{name}</h2>
                <p className="text-sm mt-8">{desc}</p>
            </div>
        </div>
    </div>
    );
};

export default ProductCart;