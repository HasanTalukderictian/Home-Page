import React from 'react';

const TrustedCart = ({partner}) => {

    return (
        <div>
            <img  className='w-[100px]' src={partner.img} alt="" />
        </div>
    );
};

export default TrustedCart;