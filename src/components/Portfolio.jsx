import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import metsverse from "../assets/Projects/metsverse.png"
import crypto from "../assets/Projects/crypto.png"
import nike from "../assets/Projects/nike.png"
import socialmedia from "../assets/Projects/socialmedia.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: metsverse,
      demo:"https://dashing-creponne-380cb6.netlify.app/",
      code:"https://github.com/kallol0011/Metaverse"
    },
    {
      id: 2,
      src: crypto,
      demo:"https://lighthearted-frangipane-14ada9.netlify.app/",
      code:"https://github.com/kallol0011/Crypto-app"
    },
    {
      id: 3,
      src: socialmedia,
      demo:"https://fastidious-nougat-dcf958.netlify.app/",
      code:"https://github.com/kallol0011/Facebook_UI"
    },
    {
      id: 3,
      src: nike,
      demo:"https://inspiring-beijinho-e0ad7a.netlify.app/",
      code:"https://github.com/kallol0011/Nike_clone"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,demo ,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" className="w-1/2 px-6 m-3.5 p-2 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" className="w-1/2 px-6 m-3.5 p-2 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
