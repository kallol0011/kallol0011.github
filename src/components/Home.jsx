import React from "react";
// import profilepic from "../assets/profilepic.png";
import profilepic from "../assets/portfolio/profilepic.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I am 
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
           Kallol Sarkar
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Full-stack developer with experience in development and design.
           Proficient in various programming languages and able to create functional,
            visually appealing websites and applications.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profilepic}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full " style={{width:"81%"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
