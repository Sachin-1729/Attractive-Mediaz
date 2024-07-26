import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userImage from "./Images/Ellipse 21.png";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="mt-[47px]">
      <div className="section p-0 m-0 bg-black text-white">
        <div className="container p-20">
          <div className="flex justify-between items-center">
            <div className="px-[20px]">
              <p className="text-3xl font-bold ">
                WHAT OUR <br />
                CUSTOMER SAYS
              </p>
            </div>
            <div className="px-[30px]">
              <p className="text-xs font-bold">FIND OUT MORE</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="review">
            <div className="container flex gap-[10px] p-11 pb-0">
              <div className="collage w-[140px] h-[133px] rounded-md bg-white pr-2 pt-2 text-xs text-black ">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <br />

                <p className="p-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, odio?
                </p>

                <div className="flex items-center">
                  <div className="p-1">
                    <img className="w-[20px] h-[20px]" src={userImage} alt="" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Gillian Medina</p>
                  </div>
                </div>
              </div>

              <div className="collage w-[140px] h-[133px] bg-white pr-2 pt-2 mt-[20px] rounded-md text-xs text-black">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <br />

                <p className="p-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, odio?
                </p>

                <div className="flex items-center">
                  <div className="p-1">
                    <img className="w-[20px] h-[20px]" src={userImage} alt="" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Gillian Medina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container flex gap-[10px] p-11 pt-0 mt-0">
              <div className="collage w-[140px] h-[133px] rounded-md bg-white pr-2 pt-2 text-xs text-black ">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <br />

                <p className="p-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, odio?
                </p>

                <div className="flex items-center">
                  <div className="p-1">
                    <img className="w-[20px] h-[20px]" src={userImage} alt="" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Gillian Medina</p>
                  </div>
                </div>
              </div>

              <div className="collage w-[140px] h-[133px] bg-white pr-2 pt-2 mt-[20px] rounded-md text-xs text-black">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "goldenrod" }}
                  className="ml-2"
                />
                <br />

                <p className="p-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsa, odio?
                </p>

                <div className="flex items-center">
                  <div className="p-1">
                    <img className="w-[20px] h-[20px]" src={userImage} alt="" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Gillian Medina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center background bg-custom-image3  bg-cover bg-center mt-[20px] w-full">
            <div className="pl-[230px]">
              <p className="text-3xl pb-2 font-semibold">Eileen M.Gunther</p>
              <p className="text-xs">
                This book is a treatise on the theory of ethics, very popular
                during the <br />
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                sit amet.." ,<br /> comes from a line in section 1.10.32.
              </p>
              <span>
                <FontAwesomeIcon icon={faPlay} className="ml-2" />
              </span>

              <span className="pl-2 text-xs"> WATCH VIDEO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300px]  bg-white">
        <div className="text-black text-3xl font-bold  flex items-center justify-center pt-[120px]">
            <h2>LET’S DISCUSS YOUR PROJECT</h2>
            
        </div>
        <div className="text-black text-xs text-center flex items-center justify-center pt-[10px]">
            <p className="">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.</p>
             
        </div> 

        <div className="text-black text-xs  flex items-center justify-center pt-[10px]">
            <button  className="border-solid border-2 rounded-xl border-white-500 ... p-2 border-amber-200 " >GET IN TOUCH</button>
             
        </div>  
        
      </div>
    </div>
  );
}

export default About;
