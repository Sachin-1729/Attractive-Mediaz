import React from "react";
import image7 from "./Images/Image7.png";
import image8 from "./Images/Image8.png";
import image9 from "./Images/Image9.png";
import image10 from "./Images/Image10.png";
import image11 from "./Images/Image11.png";
import image12 from "./Images/Image12.png";
import image13 from "./Images/Image13.png";
import image14 from "./Images/Image14.png";
import image15 from "./Images/Image15.png";
import image16 from "./Images/Image16.png";
import image17 from "./Images/Image17.png";
import image18 from "./Images/Image18.png";
import image19 from "./Images/Image19.png";

function WhatWeCanDo() {
  return (
    <div className="mt-[47px]">
      <div className="section">
        <div className="container text-2xl font-semibold text-white bg-black flex items-center justify-center pt-[80px] pb-[70px]">
          <h1 className="md:text-center">
            We place our graphic and <br /> technological expertise at the{" "}
            <br /> service of brands and the <br />
            cultural world
          </h1>
        </div>
        <div className="bg-black pl-[150px] pr-[150px] pb-[80px]">
          <img src={image7} alt="" />
        </div>
        
        <div className="bg-custom-image2 bg-cover bg-center  w-full">
          <div className="text-4xl font-bold text-black flex items-center justify-center pt-[80px] pb-[70px]">
            <p>OUR BRANDS</p>
          </div>

          <div className="flex flex-col items-center pb-[40px]">
            <div className="flex justify-center gap-4 mb-4 ">
              <img className="cursor-pointer"src={image8} alt="" />
              <img className="cursor-pointer"src={image9} alt="" />
              <img className="cursor-pointer"src={image10} alt="" />
              <img className="cursor-pointer"src={image11} alt="" />
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <img className="cursor-pointer"src={image12} alt="" />
              <img className="cursor-pointer"src={image13} alt="" />
              <img className="cursor-pointer"src={image14} alt="" />
              <img className="cursor-pointer"src={image15} alt="" />
            </div>
            <div className="flex justify-center gap-4">
              <img className="cursor-pointer"src={image16} alt="" />
              <img className="cursor-pointer"src={image17} alt="" />
              <img className="cursor-pointer"src={image18} alt="" />
              <img className="cursor-pointer"src={image19} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeCanDo;
