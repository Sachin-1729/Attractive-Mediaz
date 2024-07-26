import React from "react";

import image1 from "./Images/Image1.png";
import image2 from "./Images/Image2.png";
import image3 from "./Images/Image3.png";
import image4 from "./Images/Image4.png";
import image5 from "./Images/Image5.png";
import image6 from "./Images/Image6.png";

function CaseStudy() {
  return (
    <div className="mt-[42px]">
      <div className="section pt-[50px] pl-[200px] pr-[200px]">
        <div className="container">
          <div className="text-3xl font-bold">
            <h2>
              WE OPTIMIZE WEBSITE <br />
              TO GET YOU MORE <br />
              SALES
            </h2>
          </div>
          <span className="text-xs font-semibold">LEARN MORE</span>

          <div className="columns-2 gap-[50px]">
            <div className="row1">
              <img src={image1} alt="" />
              <p className="text-xs font-bold p-2">DASHBOARD</p>
              <p className="text-xs p-2 pt-0  font-semibold">Corporate, Landing Page, UI/UX</p>

              <img  className="pt-[60px]" src={image3} alt="" />
              <p className="text-xs p-2 font-bold">Tutoreye</p>
              <p className="text-xs  p-2 pt-0  font-semibold">Corporate, Landing Page, UI/UX</p>

              <img className="pt-[60px]" src={image5} alt="" />
              <p className="text-xs p-2 font-bold">Naters</p>
              <p className="text-xs p-2 pt-0  font-semibold">Corporate, Landing Page, UI/UX</p>
            </div>

            <div className="row2 pt-[10px]">
              <img className="pt-[60px]" src={image2} alt="" />
              <p className="text-xs p-2 font-bold" >Holistic Health Hub LLC</p>
              <p className="text-xs p-2 pt-0  font-semibold" >Corporate, Landing Page, UI/UX</p>

              <img className="pt-[60px]" src={image4} alt="" />
              <p className="text-xs p-2 font-bold" >MOBILE DOG GROOMNG LLC</p>
              <p className="text-xs p-2 pt-0  font-semibold" >Corporate, Landing Page, UI/UX</p>

              <img className="pt-[60px]" src={image6} alt="" />
              <p className="text-xs p-2 font-bold">CHARTER BY THE SEAT</p>
              <p className="text-xs p-2 pt-0 font-semibold">Corporate, Landing Page, UI/UX</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-[300px] mt-9 bg-yellow-500">
        <div className="text-white text-2xl font-bold  flex items-center justify-center pt-[120px]">
            <h2>WANT TO TALK ABOUT A PROJECT</h2>  
             
        </div>  
        <div className="text-white text-xs  flex items-center justify-center pt-[10px]">
            <button  className="border-solid border-2 rounded-xl border-white-500 ... p-2" >GET IN TOUCH</button>
             
        </div>  
        
      </div>

    </div>
  );
}

export default CaseStudy;
