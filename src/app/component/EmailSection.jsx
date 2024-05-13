"use client";
import React, { useState, useCallback } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      mail: [e.target.email.value, "mohammedola1234@gmail.com"],
      subject: e.target.subject.value,
      text: `message from ${e.target.email.value}, ${e.target.message.value}`,
    };
    const response = await fetch("http://159.138.173.19:2022/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    if (response.status === 200) {
      setEmailSubmitted(true);
      setResponse(resData);
      setLoading(false);
    } else {
      setEmailSubmitted(false);
      setResponse(resData);
      setLoading(false);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 text-white"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-30 blur-lg absolute top-3/4-left-4 transform -translate-x-1/2 -translate-y-12"></div>
      <div className="">
        <h5 className="text-xl font-bold text-white ">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new oppurtunities, my inbox is always open,
          wether you have a question or just want to say hi, i'll try my best to
          get back to you
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="git" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="linked" />
          </Link>
        </div>
      </div>
      <div className="mb-6">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CAC2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="mohammedola1234@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CAC2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CAC2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about ..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {!isLoading ? response.message  : <p>Sending</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
