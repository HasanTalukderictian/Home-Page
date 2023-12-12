import React, { useEffect, useState } from 'react';
import QualityServicesCart from './QualityServicesCart';

const QualityService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
          
            setServices(data);
        })
    },[])


    return (
        <div className='my-20 ml-10'>
            <h2 className='text-5xl font-bold text-[#1e45e3]'>Quality Services</h2>
            <p className='text-xl font-bold my-3'>Top-notch services we offer</p>
               
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 '>
                   {
                        services.map(item => <QualityServicesCart
                            key={item.id} item={item}>
                             
                        </QualityServicesCart>)
                   }
               </div>
           
        </div>
    );
};

export default QualityService;