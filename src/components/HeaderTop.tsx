import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="hidden lg:flex gap-2">
            {[FaFacebook, FaInstagram, FaSquareXTwitter, IoLogoLinkedin].map((Icon, index) => (
              <div key={index} className="header_top__icon_wrapper">
                <Icon />
              </div>
            ))}
          </div>

          {/* Shipping Information */}
          <div className="text-gray-500 text-[14px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $100
          </div>

          {/* Currency and Language Select */}
          <div className="flex gap-4">
            {/* Currency Select */}
            <select className="text-gray-500 text-[14px] w-[70px]" name="currency" id="currency">
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="YEN ¥">YEN ¥</option>
            </select>

            {/* Language Select */}
            <select className="text-gray-500 text-[14px] w-[80px]" name="language" id="language">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
