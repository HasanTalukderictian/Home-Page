import React, { useEffect, useState } from 'react';
import WeareCart from './WeareCart';

const Weare = () => {
     
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('details.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setExperience(data)
        })
    },[])

    return (
        <div className='my-25 mx-20'>
            <div className='mt-8'>
            <h2 className='text-5xl font-bold text-center text-[#0091e4]'>WE ARE IN <span className='text-[#008000]'>NUMBERS</span></h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-8 mx-4'>
                 { experience.map(item => <WeareCart
                  key={item.id}
                  item={item}></WeareCart>)}
              </div>

            </div>
        </div>
    );
};

export default Weare;