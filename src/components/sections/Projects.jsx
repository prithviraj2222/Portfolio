// import React from "react";
// import spotify from "../../images/spotify.jpg";
// import ecopulse from "../../images/ecopulse.jpg";
// import hostel from "../../images/hostel.jpg";
// import ProjectCard from "../projects/ProjectCard";
// import { Link, useLocation } from "react-router-dom";
// import MoreProjectCard from "../projects/MoreProjectCard";

// function Projects() {
//   const location = useLocation();

//   const data = [
//     {
//       id: 1,
//       title: "Spotify Clone",
//       type: "Frontend",
//       description:
//         "Responsive music web app with interactive UI and music controls. Uses local storage for song management.",
//       url: spotify,
//       projectUrl: "https://prithviraj2222.github.io/spotify-clone2/",
//       techItems: ["HTML", "CSS", "JavaScript"],
//     },
//     {
//       id: 2,
//       title: "EcoPulse",
//       type: "Full Stack",
//       description:
//         "Environmental awareness full-stack app featuring a carbon footprint calculator and Eco Buddy/Bully quiz.",
//       url: ecopulse,
//       projectUrl: "https://capable-speculoos-f21228.netlify.app/",
//       techItems: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
//     },
//     {
//       id: 3,
//       title: "Hostel Management System",
//       type: "Full Stack",
//       description:
//         "Digitized hostel operations including student registration, fee tracking, and inventory management with REST APIs.",
//       url: hostel,
//       projectUrl: "https://gurukul-hostel.netlify.app/",
//       techItems: [
//         "React.js",
//         "Tailwind CSS",
//         "Node.js",
//         "Express.js",
//         "MongoDB Atlas",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen w-full max-w-[1200px] flex flex-col justify-center text-white py-20 lg:py-30 px-6 md:px-10">
//       <div className="flex flex-col justify-center gap-6">
//         <h2
//           className={`${location.pathname === "/projects" ? "text-6xl md:text-9xl" : "text-4xl md:text-6xl"} leading-none font-bold font-[mainFont] tracking-tight`}
//         >
//           FEATURED PROJECTS
//         </h2>
//         <p className="text-xl tracking-wide font-[paraFont] mb-12">
//           Some things I've built along the way.
//         </p>
//       </div>
//       <div className="flex flex-col gap-6">
//         {data.map((project, idx) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//         {location.pathname === "/" ? (
//           <div className="flex justify-center mt-4">
//             <Link
//               to="/projects"
//               className="border-1 px-10 pt-1 pb-1.5 border-[#D0FF71] text-[#D0FF71] font-[mainFont] text-2xl font-semibold rounded-3xl"
//             >
//               BROWSE ALL PROJECTS
//             </Link>
//           </div>
//         ) : (
//           <div className="pt-15">
//             <div className="mt-4 flex items-center gap-4">
//               <h2
//                 className={`text-6xl font-bold font-[mainFont] tracking-normal whitespace-nowrap`}
//               >
//                 MORE PROJECTS
//               </h2>
//               <div className="border-t-[1px] w-full"></div>
//             </div>
//             <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
//               <MoreProjectCard />
//               <MoreProjectCard />
//               <MoreProjectCard />
//               <MoreProjectCard />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;

import React, { useRef } from "react";
import spotify from "../../images/spotify.jpg";
import ecopulse from "../../images/ecopulse.jpg";
import hostel from "../../images/hostel.jpg";
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
      title: "Spotify Clone",
      type: "Frontend",
      description:
        "Responsive music web app with interactive UI and music controls. Uses local storage for song management.",
      url: spotify,
      projectUrl: "https://prithviraj2222.github.io/spotify-clone2/",
      techItems: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "EcoPulse",
      type: "Full Stack",
      description:
        "Environmental awareness full-stack app featuring a carbon footprint calculator and Eco Buddy/Bully quiz.",
      url: ecopulse,
      projectUrl: "https://capable-speculoos-f21228.netlify.app/",
      techItems: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    },
    {
      id: 3,
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
            <MoreProjectCard />
            <MoreProjectCard />
            <MoreProjectCard />
            <MoreProjectCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
