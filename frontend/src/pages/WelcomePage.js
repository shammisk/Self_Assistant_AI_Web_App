import React from "react";
import { Link } from "react-router-dom";
import About from "../assests/images/a.jpg";
import W1Image from "../assests/images/b.jpg";
import backgroundImage from "../assests/images/c.png";
import W2Image from "../assests/images/cc.png";
import logo from "../assests/images/chatbot.png";

const WelcomePage = () => {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col md:flex-row px-10 md:px-20">
        <div className="flex flex-row justify-start w-full md:w-1/2 pt-4 md:py-4 item-center">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-xl" />
          <div className="font-serif text-xl md:text-2xl text-white font-bold tracking-widest ml-8 py-1">
            AI Self Assistant
          </div>
        </div>
        <div className="flex flex-row justify-end w-full md:w-1/2 py-0 md:py-4 item-center">
          <Link
            to="/register"
            className="text-white px-5 py-2 mx-2 rounded bg-teal-500 hover:bg-teal-300 ring-2">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-white px-5 py-2 mx-2 rounded bg-teal-500 hover:bg-teal-300 ring-2">
            Sign In
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-10 md:px-20 py-4">
        <div className="flex justify-start">
          <div className="w-full sm:w-10/12 lg:w-3/5 flex flex-col md:flex-row min-h-52 bg-cyan-700 bg-opacity-80 rounded-lg">
            <div className="w-full md:w-1/2">
              <img src={About} alt="about" className="h-full w-full border rounded-r-lg rounded-l-lg" />
            </div>
            <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
              <p className="text-white text-md text-justify">
                About
                <br />
                <br />
                "The platform combines a chat interface and dashboard to help individuals entering the IT
                field test their knowledge levels in skills and receive career guidance. Developed with the
                Google Gemini API, it aims to provide personalized advice for navigating a career in IT."
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-full sm:w-10/12 lg:w-3/5 flex flex-col md:flex-row min-h-52 bg-cyan-700 bg-opacity-80 rounded-lg">
            <div className="w-full md:w-1/2">
              <img src={W1Image} alt="w1" className="h-full w-full border rounded-r-lg rounded-l-lg" />
            </div>
            <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
              <p className="text-white text-md text-justify">
                Do you want career guidance?
                <br />
                <br />
                "We provide personalized career guidance and advice based on your interests and skills with AI
                technology. Additionally, we provide recommendations to help you navigate and excel in your
                career path."
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-full sm:w-10/12 lg:w-3/5 flex flex-col md:flex-row min-h-52 bg-cyan-700 bg-opacity-80 rounded-lg">
            <div className="w-full md:w-1/2">
              <img src={W2Image} alt="w1" className="h-full w-full border rounded-r-lg rounded-l-lg" />
            </div>
            <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
              <p className="text-white text-md text-justify">
                Do you want to test your knowledge level in skills?
                <br />
                <br />
                "We provide a facility to check your knowledge level through a chat interface with AI
                technology."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 mt-4">
        <div className="text-gray-400 text-sm font-semibold flex justify-center text-center">
          Copyright © 2024 by Shammi Gamage, All rights reserved.
        </div>
        <div className="text-white text-md flex justify-center">Designed by Shammi</div>
      </div>
    </div>
  );
};

export default WelcomePage;
