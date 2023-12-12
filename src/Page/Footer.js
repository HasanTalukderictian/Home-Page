import React from 'react';
import { IoIosPin } from 'react-icons/io';
import { FaInbox, FaPhone, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#0000ff] text-base-content">
      <nav>
        <header className="text-white text-2xl font-semibold">CONTACT US</header>
        <a className="link link-hover text-white ">
          <IoIosPin /> 6th floor, Madina Shopping Mall, <br />
           Bosila City Developers, <br />
           Dhaka 1207
        </a>
        <a className="link link-hover text-white ">
          <FaInbox /> info@caremebd.com
        </a>
        <a className="link link-hover text-white ">
          <FaPhone /> 09678-008899
        </a>
      </nav>
      <nav>
        <header className="text-white text-2xl font-semibold">OUR PRODUCTS</header>
        <a className="link link-hover text-white ">
          <FaArrowRight /> Proton Commerce
        </a>
        <a className="link link-hover text-white ">
          <FaArrowRight /> Proton Inventory Management
        </a>
        <a className="link link-hover text-white ">
          <FaArrowRight /> Proton Mobile Apps
        </a>
        <a className="link link-hover text-white ">
          <FaArrowRight /> Caremebd Commerce
        </a>
      </nav>
      <nav>
        <header className="text-white text-2xl font-semibold">USEFUL LINKS</header>
        <a className="link link-hover text-white ">
          <FaArrowRight /> About us
        </a>
        <a className="link link-hover text-white ">
          <FaArrowRight /> Contact us
        </a>
        <a className="link link-hover text-white ">
          <FaArrowRight /> FAQ
        </a>
        <a className="link link-hover text-white ">
          <FaArrowRight /> Career
        </a>
      </nav>
      <nav>
        <header className="text-white text-2xl font-semibold">Opening Hours</header>
      </nav>
    </footer>
  );
};

export default Footer;