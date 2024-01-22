"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title:
      "Bills API to buy Airtime, Data, ELectricity and Cable Subscriptions",
    description: "Test API platform for bills api",
    image: "https://i.ibb.co/FYH14jp/BILLS.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "UniPay",
    description: `Live CARD PAYMENT API`,
    image: "https://i.ibb.co/GFGSwLp/UniPay.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Payments Merchant",
    description: "Payment Merchants for PelPay and ChmasPay",
    // image: "/images/projects/Merchant.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Payments Admins",
    description: "Admins and SuperAdmins Api for PelPay and ChamsPay",
    image: "https://i.ibb.co/Tt2YYfZ/Admin.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "My 3D potfolio",
    description: "3D potfolio with 3D js",
    image: "https://i.ibb.co/6n1k0GS/3dfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    description: "Data Analytics Dashboard with live data capture",
    image: "https://i.ibb.co/zGCjvvK/PatDash.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Retro Investements",
    description: "A USDT investment webapp",
    image: "https://i.ibb.co/VwTrSzB/retro.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Vote Verse Voiting Platform",
    description: "Vote Verse Voiting Platform",
    image: "https://i.ibb.co/PcXR34c/vote.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Amazing Grace Shopping mall",
    description: "Project 1 description",
    image: "https://i.ibb.co/Y83cDLd/image.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "CRUD MERN stack app",
    description: "Project 2 description",
    image: "https://i.ibb.co/9Nk2QZk/CRUD.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "RetroPay Investement Platform",
    description: "Project 4 description",
    image: "/images/projects/retro.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Dotnet Certificate",
    description: "Dotnet Certificate in udemy",
    image: "https://i.ibb.co/F36Vw1S/ASP.jpg",
    tag: ["Certs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 16,
    title: "React Certificate",
    description: "React Certificate in udemy",
    image: "https://i.ibb.co/JkWMvW6/77085.png",
    tag: ["Certs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 16,
    title: "HTML & CSS Certificate",
    description: "HTML & CSS Certificate in udemy",
    image: "https://i.ibb.co/HzZNhBp/76975.png",
    tag: ["Certs"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSections = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Certs")}
          name="Certs"
          isSelected={tag === "Certs"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.id}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSections;
