import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-blue-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 fade-in">John Doe</h1>
        <p className="text-xl fade-in">Web Developer & Designer</p>
      </div>
    </header>
  );
};

export default Header;