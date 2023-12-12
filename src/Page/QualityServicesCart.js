import React from 'react';

const QualityServicesCart = ({ item }) => {

    const { name, desc, img } = item;
    return (
        <div className="my-4 mx-2">
        <div className="card w-72 h-72 bg-base-100 border-2 border-blue-500 shadow-md flex flex-col justify-center items-center p-4">
            <div className="avatar">
                <div className="w-20 rounded-full overflow-hidden mt-2">
                    <img className="w-full h-full object-cover" src={img} alt="Shoes" />
                </div>
            </div>
            <div className=" text-center mt-4">
                <h2 className="text-center text-xl font-semibold">{name}</h2>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    </div>
    );
};

export default QualityServicesCart;