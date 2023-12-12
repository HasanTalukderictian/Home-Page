import React from 'react';

const TechnolgyCart = ({ items }) => {
    const { img } = items;
    return (
        <div className='w-[60]'>
              <img src={img} alt="" />
        </div>
    );
};

export default TechnolgyCart;