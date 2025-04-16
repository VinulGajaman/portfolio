import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 text-white text-center py-4">
      <p>
        &copy; {currentYear} Vinul Gajaman. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
