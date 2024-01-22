"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start ">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal lextrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hello There!{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "My name is Patrick",
                1000,
                "I'm the Most Crafty fullstack around here",
                2000,
                "Lolz!! just joking",
                2000,
                "Oh No!! I am an expert in Payment Processing Systems!!!",
                2000,
                "Frontend, Backend, Android and IOS engineering",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              <a href="https://github.com/PatrickEinstein" target="blank">
                Hire Me
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <a
                href="/images/projects/OlalekanPatrickResume.pdf"
                download="OlalekanPatrickResume.pdf"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-2 py-2">
                  Download CV
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="https://i.ibb.co/rd00YGk/me-pat.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
