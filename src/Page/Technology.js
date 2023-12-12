import React, { useEffect, useState } from 'react';
import TechnolgyCart from './TechnolgyCart';

const Technology = () => {

    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        fetch('technolgy.json')
        .then(res => res.json())
        .then(data => {
           console.log(data);
            setTechnology(data);
        })
    },[])

    return (
        <div className='my-10 mx-10'>
            <h2 className='text-5xl text-[#0091e4] font-bold'>Technology We Used</h2>
            <p className='text-xl my-6 font-semibold'>Stay ahead in the competitive landscape with Fortune Tech. Our technical expertise ensures your
                company's success through custom software development. We leverage the latest technology for
                outsourcing, delivering solutions that propel your business forward </p>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-4 my-6 mx-4 p-4'>
                     { technology.map(items => <TechnolgyCart 
                     key={items.id} 
                     items={items}>
                         
                     </TechnolgyCart>)}
                </div>
        </div>
    );
};

export default Technology;