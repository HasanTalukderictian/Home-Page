import React from 'react';
import img from '../assests/pic.PNG';

const Experience = () => {
    return (
        <div className='mx-10 my-10 flex flex-col md:flex-row p-4'>
            <div className='md:w-1/2'>
                <div>
                    <h2 className='text-[#0000ff] text-4xl font-bold'>7 Years of Experience in the
                        World of Building
                        <span className='text-[#008000] mx-2'>World Class
                            Business Solutions</span></h2>

                    <p className='text-xl font-bold my-3'>For 7 years, Fortune Tech users have entrusted us
                        to power their diverse business units. Our software
                        addresses every concern seamlessly. As we
                        expand, new clients choose us for our proven
                        trustworthiness. Your success is our legacy, and
                        our commitment to reliability stands unwavering.</p>
                </div>
            </div>

            <div className='md:w-1/2 grid place-items-center'>
                <img className='w-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default Experience;