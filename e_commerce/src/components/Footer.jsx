import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm pb-10    
      bg-[#7e8d8d]
        text-black
        pt-[75px]

      "
      >
        <div>
          <h1 className="w-32 text-2xl mb-5 ">NXT BUY</h1>
          <p className="w-full md:w-2/3 text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            laudantium molestias obcaecati repudiandae praesentium eaque
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Links</p>
          <ul className="flex flex-col gap-2 text-gray-800">
            <li>Home</li>
            <li>About us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">CONTACT US</p>
          <ul className="flex flex-col gap-2 text-gray-800">
            <li>+91 1234567890</li>
            <li>NXTBUY@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright &copy; 2024 NXT BUY. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
