import React from 'react';
import background from '../assests/background1.jpg';
import { FaCalendar } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center bg-fixed h-screen mx-auto flex items-center justify-center " style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay with color */}
            <div className="absolute inset-0 bg-blue-700 opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-5 max-w-screen-lg mx-auto ">
                <div className='my-4 mx-4 px-4'>
                    <h2 className='text-white text-4xl md:text-6xl -my-3 font-bold'>
                        Innovate. Create. Elevate <br />
                        Transforming Ideas <br />
                        with <span className='text-[#34eb34]'>Fortune Tech</span>
                    </h2>
                    <p className='text-base md:text-xl my-4'>
                        Empower Your Business with Fortune Tech Limited. Unlock cutting-edge solutions to <br />
                        output competition. Specializing in innovation for growth and efficiency, our skilled <br />
                        developers craft bespoke, high-quality software. Stay at the forefront with our <br />
                        commitment to the latest technologies, ensuring access to the most advanced solutions <br />
                        for your success.
                    </p>

                    <div>
                        <button className="btn bg-[#34eb34] text-white text-base md:text-xl">
                            <FaCalendar className="mr-2"></FaCalendar>Schedule Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;