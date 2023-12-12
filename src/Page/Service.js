import React from 'react';
import software from '../assests/arrow.png';
import group from '../assests/person.png';
import man from '../assests/man.jpg';

const Service = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 -my-10 px-10'>

        <div className="card w-96 bg-base-100 shadow-md flex flex-col justify-center items-center">
            <div className="avatar">
                <div className="w-24 rounded-full overflow-hidden mt-20">
                    <img className="w-full h-full object-cover" src={software}alt="Shoes" />
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-semibold">Advanced software</h2>
                <p>We have multiple solutions that are
                    intended to assist businesses in
                    streamlining their operations and
                    increasing efficiency</p>

            </div>
        </div>

        {/* Repeat the same structure for the other two cards */}

        <div className="card w-96 bg-base-100 shadow-md flex flex-col justify-center items-center">
            <div className="avatar">
                <div className="w-24 rounded-full overflow-hidden mt-20">
                    <img className="w-full h-full object-cover" src={group} alt="Shoes" />
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-semibold">Expert Developer</h2>
                <p>Our expert software developers know
                    how to make high-tech software
                    solutions that can help businesses
                    streamline their operations</p>

            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-md flex flex-col justify-center items-center">
            <div className="avatar">
                <div className="w-24 rounded-full overflow-hidden  mt-20">
                    <img className="w-full h-full object-cover" src={man} alt="Shoes" />
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-semibold">Quality Solution</h2>
                <p>We provide quality solutions to clients
                    that are designed to meet the specific
                    needs of businesses and are built to
                    high standards</p>

            </div>
        </div>

    </div>
    );
};

export default Service;