// import React from 'react'

const Header = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center font-semibold font-title text-3xl leading-9">
          Jorge Oré
        </h1>
        <div className="flex justify-center gap-2">
          <address className="font-body leading-tight">
            jore24@autonoma.edu.pe
          </address>
          <span className="font-body leading-tight">•</span>
          <span className="font-body leading-tight">(+51) 917251229</span>
        </div>
      </div>
    </>
  );
};

export default Header;
