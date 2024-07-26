import React from "react";
import background from "./Images/backgroundimage.png";
import health from "./Images/health.png";
import hotel from "./Images/hotel.png";
import ecommerce from "./Images/ecommerce.png";
import realstate from "./Images/realstate.png";
import sport from "./Images/sport.png";
import { Link, NavLink, Outlet } from "react-router-dom";


function Home() {
  const mystyle = {
    width: "368px" , 
    padding: "23px",
    fontSize: "31px",
    fontWeight: 600,
  };

  const svg ={
    marginTop:"5px",
    width: "429px",
    height: "98px",
    backgroundColor: "black"

  }

  return (

    <>
    
    <div  class="flex justify-between bg-black text-white pt-[150px] pr-2 pl-10">
        
        
      <div style={mystyle} class=" bg-black text-white">
        <h1 >WE OPTMIZE WEBSITE TO GET YOU MORE SALES.</h1>
      </div>

      <div h-139px w-73px>
        <svg
          width="155"
          height="155"
          viewBox="0 0 155 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M77.4871 95.1585C75.4998 95.1585 73.7113 94.5633 71.9227 93.5714C64.3712 89.0087 60.1979 63.2195 46.2871 70.3611C41.319 72.94 29.3955 95.952 26.4146 101.308C24.2286 105.276 15.286 119.162 14.4911 122.535C11.9076 133.446 25.8184 139.199 31.9789 131.065C35.7547 125.907 40.9216 113.806 44.8961 110.83C48.8706 108.053 55.2298 109.045 58.012 111.822C59.8005 113.608 62.7814 119.559 64.3712 122.336C66.1597 125.312 68.7431 130.272 70.7304 132.255C72.5189 133.842 74.9036 134.834 77.4871 134.834C80.0705 134.834 82.4552 133.842 84.2437 132.255C86.231 130.272 88.8144 125.312 90.6029 122.336C92.1927 119.559 95.3723 113.608 96.9622 111.822C99.7443 109.045 106.104 108.053 110.078 110.83C114.053 113.806 119.219 125.907 122.995 131.065C129.156 139.199 143.066 133.446 140.483 122.535C139.688 118.964 130.745 105.276 128.56 101.308C125.579 95.952 113.655 72.94 108.687 70.3611C94.7762 63.2195 90.6029 89.0087 83.2501 93.5714C81.2628 94.7617 79.2756 95.1585 77.4871 95.1585Z"
            fill="#ECA32E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.1851 35.0472C56.2233 44.5694 50.0628 55.2818 65.1659 57.464C72.3201 58.6543 82.4551 58.0591 88.4168 57.6624C105.507 56.2737 98.5518 44.7677 92.1926 35.0472C78.0831 13.0271 72.9162 17.3915 62.1851 35.0472Z"
            fill="white"
          />
          <path
            d="M13.2423 1.25195H1.22754V13.2718M141.662 1.25195H153.746V13.7004M153.746 141.593V153.771H141.673M13.2573 153.771H1.22754V141.593"
            stroke="#6C6C6C"
          />
        </svg>
      </div>

      <div style={mystyle} class=" bg-black text-white">
        <h1 >THAT MAKE A LASTING IMPRESSION.</h1>
      </div>
    </div>

    <div className="bg-black text-white text-center font-bold  ">
        <h1 className="text-9xl leading-loose">WE ARE CREATIVE</h1>
      </div>

      <div className="bg-custom-image4 bg-cover bg-center  w-full h-[450px]">
        
      </div>

      <div className="relative h-[500px] bg-black text-white p-6">
        {/* Top-left heading */}
        <div className="absolute top-0 left-0 m-6 p-10 leading-3">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block">WORLD CLASS</span>
            <span className="block text-white">DIGITAL AGENCY</span>
          </h1>
        </div>

        {/* Center SVG */}
        <div className="flex items-center justify-center h-full">
          <svg
            width="155"
            height="155"
            viewBox="0 0 155 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.4871 95.1585C75.4998 95.1585 73.7113 94.5633 71.9227 93.5714C64.3712 89.0087 60.1979 63.2195 46.2871 70.3611C41.319 72.94 29.3955 95.952 26.4146 101.308C24.2286 105.276 15.286 119.162 14.4911 122.535C11.9076 133.446 25.8184 139.199 31.9789 131.065C35.7547 125.907 40.9216 113.806 44.8961 110.83C48.8706 108.053 55.2298 109.045 58.012 111.822C59.8005 113.608 62.7814 119.559 64.3712 122.336C66.1597 125.312 68.7431 130.272 70.7304 132.255C72.5189 133.842 74.9036 134.834 77.4871 134.834C80.0705 134.834 82.4552 133.842 84.2437 132.255C86.231 130.272 88.8144 125.312 90.6029 122.336C92.1927 119.559 95.3723 113.608 96.9622 111.822C99.7443 109.045 106.104 108.053 110.078 110.83C114.053 113.806 119.219 125.907 122.995 131.065C129.156 139.199 143.066 133.446 140.483 122.535C139.688 118.964 130.745 105.276 128.56 101.308C125.579 95.952 113.655 72.94 108.687 70.3611C94.7762 63.2195 90.6029 89.0087 83.2501 93.5714C81.2628 94.7617 79.2756 95.1585 77.4871 95.1585Z"
              fill="#ECA32E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.1851 35.0472C56.2233 44.5694 50.0628 55.2818 65.1659 57.464C72.3201 58.6543 82.4551 58.0591 88.4168 57.6624C105.507 56.2737 98.5518 44.7677 92.1926 35.0472C78.0831 13.0271 72.9162 17.3915 62.1851 35.0472Z"
              fill="white"
            />
            <path
              d="M13.2423 1.25195H1.22754V13.2718M141.662 1.25195H153.746V13.7004M153.746 141.593V153.771H141.673M13.2573 153.771H1.22754V141.593"
              stroke="#6C6C6C"
            />
          </svg>
        </div>

        {/* Bottom-right paragraph */}
        <div className="absolute bottom-0 right-0 m-6 text-left p-10 w-[318px]">
          <p className="text-lg leading-relaxed">
            We have specialized in creating clean, creative, and functional
            websites that have an aesthetic appeal.
          </p>
        </div>
      </div>

      <div className="bg-white text-black p-[30px]">
        <h3 className="p-4 text-[30px] font-semibold">OUR EXPERTISE INDUSTRIES</h3>

        <div className="flex gap-3">
          <div className="">
            <img className="h-auto" src={realstate} alt="" />
            <p className="text-sm font-semibold">REAL ESTATE</p>
          </div>

          <div className="">
            <img className="h-auto" src={health} alt="" />
            <p className="text-sm font-semibold">HEALTH</p>
          </div>

          <div className="">
            <img className="h-auto" src={ecommerce} alt="" />
            <p className="text-sm font-semibold">ECOMMERCE</p>
          </div>

          <div className="">
            <img className="h-auto" src={sport} alt="" />
            <p className="text-sm font-semibold">SPORTS</p>
          </div>

          <div className="">
            <img className="h-auto" src={hotel} alt="" />
            <p className="text-sm font-semibold">HOTEL</p>
          </div>
        </div>
      </div>

    <div className="bg-custom-image bg-cover bg-center h-[280px] w-full ">

        <div className="text-white align-middlen pt-[30px] pl-[30px] ">
            <p>Our Services</p>
            <h3 className=" text-2xl ... font-bold ">UX STRATEGY <br />UI DESIGN <br /> WEB DEVELOPMENT <br />MOBILE APPS DEVELOPMENT</h3>
        </div>
      
    </div>
    
    </>
      

    
  );
}

export default Home;
