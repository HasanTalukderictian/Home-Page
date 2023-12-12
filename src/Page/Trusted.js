import React, { useEffect, useState } from 'react';
import TrustedCart from './TrustedCart';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Trusted = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('partner.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPartners(data);
            });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    function PrevArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick}><span>&lt;</span></div>;
    }

    function NextArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick}><span>&gt;</span></div>;
    }

    return (
        <div className='my-12 mx-10'>
            <h2 className='text-5xl font-bold text-center text-[#0091e4]'>TRUSTED BY THE MAJOR BRANDS</h2>

            <div className='my-4 mx-auto'>
                <div className='my-10 px-4'>
                    <Slider {...sliderSettings}>
                        {partners.map(partner => (
                            <div key={partner.id}>
                                <TrustedCart partner={partner}></TrustedCart>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Trusted;