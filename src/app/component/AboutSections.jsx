"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node js</li>
        <li>Express</li>
        <li>React Native</li>
        <li>Next Js</li>
        <li>Mongo DB</li>
        <li>DotNET</li>
        <li>C#</li>
        <li>PosgreSQL</li>
        <li>Entity FrameWork</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Ibada</li>
        <li>UDEMY</li>
        <li>CUTSHORT</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Node js, Graph QL, WebSocket and TypeScript at UDEMY</li>
        <li>Dotnet 8 and Dotnet 5 Web API at UDEMY</li>
        <li>React at CUTSHORT</li>
        <li>HTML and CSS at CUTSHORT</li>
        <li>B.Sc Biochemistry, Universit of Ibadan</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Fullstack Software engineering at ChamsSwitch</li>
        <li>Fullstack Software engineering at Octave Incorporations</li>
        <li>Frontend Engineer at Perszi</li>
        <li>Mobile Engineer at Cycloso_ftwares</li>
      </ul>
    ),
  },
];

const AboutSections = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChage = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <sections className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/projects/Passport.jpeg"
          alt="Passport"
          width={500}
          height={500}
        />
       

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full" id="about">
          <h1 className="text-4xl font-bold text-white mb-4">About ME</h1>
          <p className="text-color lg:text-lg">
            I am the fullstack developer you need, i creade Interactive
            websites, 3D websites , secured Fullstack web applications. I am
            experienced in:
            <br />
            <em>C#,</em>
            <br />
            <em>DOTNET</em>
            <br />
            <em>Entity Framework</em>
            <br />
            <em>Javascript,</em>
            <br />
            <em>TypeScript,</em>
            <br />
            <em>React,</em>
            <br />
            <em>ReactNative,</em>
            <br />
            <em>Material Ui,</em>
            <br />
            <em>React Native Paper,</em>
            <br />
            <em>Node js</em>
            <br />
            <em>Express js,</em>
            <br />
            <em> Mongo DB,</em>
            <br />
            <em> POSGRE SQL,</em>
            Tailwind CSS, styled component, and GIT.
            <br />
            <em> AN EXPERIENCED PAYMENT GATEWAY DEVELOPER</em>
            <br />
            <br />
            <br />I am a Fullstack web developer with 5+ years in building
            scalable web applications. I have also worked with libraries like
            SCSS, jQuery. As a great team player, with the ability to adapt, and
            willingness to learn, I always give my best in ensuring the team set
            goals are achieved. While leading a four-man team in an hackathon
            organised by CodeSandBox and Ingressive4Good, my team and I was able
            to build a DP generator web application that generates DPs' for
            events. Our product/solution ranked top 3 in the hackathon.
          </p>
          <div className="flex flex-row mt-8 justify-start flex-wrap">
            <TabButton
              selectTab={() => handleTabChage("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChage("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChage("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChage("certifications")}
              active={tab === "certifications"}
            >
              Certs
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </sections>
  );
};

export default AboutSections;
