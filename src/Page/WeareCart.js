import React from 'react';

const WeareCart = ({item}) => {
    const {heading, desc} = item;
    return (
        <div>
             <div className="card w-72 mx-auto h-72 bg-base-100 border-2 border-blue-500 shadow-md flex flex-col justify-center items-center p-4">
            
            <div className="text-center mt-2">
                <h2 className="text-center text-6xl font-bold mt-8">{heading}</h2>
                <p className="text-2xl font-bold mt-8 text-[#0000ff]">{desc}</p>
            </div>
        </div>
        </div>
    );
};

export default WeareCart;