import React, { useRef } from "react";
import ads from "../../images/ads.avif";
import spotify from "../../images/spotify.jpg";
import ecopulse from "../../images/ecopulse.jpg"; 
import psychii from "../../images/psychii.avif";
import hostel from "../../images/hostel.jpg";
import ems from "../../images/ems.avif";
import ProjectCard from "../projects/ProjectCard";
import { Link, useLocation } from "react-router-dom";
import MoreProjectCard from "../projects/MoreProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const location = useLocation();
  const projectsSection = useRef();
  const cards = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cardElements = Array.from(cards.current.children);
        const totalCards = cardElements.length;

        cardElements.forEach((card, idx) => {
          gsap.set(card, {
            position: "sticky",
            top: 80,
            zIndex: idx + 1,
            transformOrigin: "top center",
          });
        });

        cardElements.forEach((card, idx) => {
          if (idx < totalCards - 1) {
            gsap.to(card, {
              scale: 0.8,
              y: 60,
              scrollTrigger: {
                trigger: cardElements[idx + 1],
                start: "top bottom",
                scrub: 1.5,
              },
            });
          }
        });
      });
    },
    { scope: projectsSection },
  );

  const data = [
    {
      id: 1,
      title: "Admin Dashboard System",
      type: "Full Stack",
      description:
        "An Admin Dashboard that allows admin to manage users and view system data from a single panel. It also includes features like filtering, analytics, and report generation.",
      url: ads,
      projectUrl: "https://admindashboardsystem.netlify.app/",
      techItems: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT", "Recharts", "ExcelJS"],
    },
    {
      id: 2,
      title: "Spotify Clone",
      type: "Frontend",
      description:
        "Responsive music web app with interactive UI and music controls. Uses local storage for song management.",
      url: spotify,
      projectUrl: "https://prithviraj2222.github.io/spotify-clone2/",
      techItems: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "EcoPulse",
      type: "Full Stack",
      description:
        "Environmental awareness full-stack app featuring a carbon footprint calculator and Eco Buddy/Bully quiz.",
      url: ecopulse,
      projectUrl: "https://capable-speculoos-f21228.netlify.app/",
      techItems: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    },
    {
      id: 4,
      title: "Hostel Management System",
      type: "Full Stack",
      description:
        "Digitized hostel operations including student registration, fee tracking, and inventory management with REST APIs.",
      url: hostel,
      projectUrl: "https://gurukul-hostel.netlify.app/",
      techItems: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
      ],
    },
  ];

  const otherProjectData = [
    {
      id: 1,
      title: "Psychii",
      type: "Frontend",
      description:
        "Psychii is a React + Vite web app that checks a user's thinking through a 20 question quiz based on their Profession and Relationship Status, and shows whether the mindset is positive or negative.",
      url: psychii,
      projectUrl: "https://psychii.netlify.app/",
      techItems: ["React (Vite)", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Employee Management System",
      type: "Frontend",
      description:
        "Employee Management System is a React-based web application where Admin and Employees can log in with different roles. The Admin assigns tasks to employees, employees can update task status (completed or failed), and the data is managed using Local Storage.",
      url: ems,
      projectUrl: "https://emsystemm.netlify.app/",
      techItems: ["React (Vite)", "Tailwind CSS", "Local Storage"],
    },
  ];

  return (
    <div
      ref={projectsSection}
      className="min-h-screen w-full max-w-[1200px] flex flex-col justify-center text-[#303030] dark:text-white py-20 lg:py-30 px-6 md:px-10"
    >
      <div className="flex flex-col justify-center gap-6">
        <h2
          className={`${
            location.pathname === "/projects"
              ? "text-6xl md:text-9xl"
              : "text-4xl md:text-6xl"
          } leading-none font-bold font-[mainFont] tracking-tight`}
        >
          FEATURED PROJECTS
        </h2>
        <p className="text-xl tracking-wide font-[paraFont] mb-12">
          Some things I've built along the way.
        </p>
      </div>

      <div ref={cards} className="flex flex-col gap-6">
        {data.map((project) => (
          <div key={project.id} className="h-[60vh] lg:h-screen w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {location.pathname === "/" ? (
        <div className="flex justify-center mt-16">
          <Link
            to="/projects"
            className="border-1 px-10 pt-1 pb-1.5 border-[#5E67E6] dark:border-[#D0FF71] text-[#5E67E6] dark:text-[#D0FF71] font-[mainFont] text-2xl font-semibold rounded-3xl"
          >
            BROWSE ALL PROJECTS
          </Link>
        </div>
      ) : (
        <div className="pt-15">
          <div className="mt-4 flex items-center gap-4">
            <h2 className="text-6xl font-bold font-[mainFont] tracking-normal whitespace-nowrap">
              MORE PROJECTS
            </h2>
            <div className="border-t-[1px] w-full"></div>
          </div>
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
            {otherProjectData.map((project) => (
              <MoreProjectCard project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
