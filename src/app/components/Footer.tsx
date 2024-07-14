import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#ffffff] text-[#868686] p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-center text-lg">
            &copy; {new Date().getFullYear()} zareenPortfolio. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
