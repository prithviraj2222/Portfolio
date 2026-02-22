// import React, { useContext } from "react";
// import CursorContext from "../../context/cursor/cursorContext";

// function ProjectCard({ project }) {
//   const { setCursor } = useContext(CursorContext);

//   return (
//     <a
//       onMouseEnter={() => setCursor("big")}
//       onMouseLeave={() => setCursor("default")}
//       className="relative w-full h-[60vh] lg:h-screen rounded-3xl bg-cover bg-center overflow-hidden cursor-pointer"
//       href={project.projectUrl}
//       target="_blank"
//       style={{ backgroundImage: `url(${project.url})` }}
//     >
//       <div className="absolute inset-0 bg-transparent z-22"></div>
//       <div className="absolute inset-0 bg-black/40 z-1"></div>
//       <div className="relative h-full w-full z-2 flex flex-col justify-center items-center gap-4">
//         <div className="px-4 py-1 bg-[#D0FF71] text-[#303030] rounded-3xl font-[paraFont] text-sm mb-1">
//           {project.type}
//         </div>
//         <h2 className="text-4xl md:text-6xl leading-none font-bold font-[mainFont] tracking-normal px-4 text-center">
//           {project.title}
//         </h2>
//         <p className="text-sm md:text-md tracking-wide font-[paraFont] text-center w-[90%] md:w-1/2">
//           {project.description}
//         </p>
//         <div className="flex gap-3 mt-1.5 w-[90%] md:w-1/2 flex-wrap justify-center">
//           {project.techItems.map((item, i) => (
//             <div
//               key={i}
//               className="border-2 px-4 pt-1 pb-1.5 border-[#D0FF71] text-[#D0FF71] font-semibold bg-black/25 rounded-3xl"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </a>
//   );
// }

// export default ProjectCard;




import React, { useContext } from "react";
import CursorContext from "../../context/cursor/cursorContext";

function ProjectCard({ project }) {
  const { setCursor } = useContext(CursorContext);

  return (
    <a
      onMouseEnter={() => setCursor("big")}
      onMouseLeave={() => setCursor("default")}
      className="relative block w-full h-full rounded-3xl bg-cover bg-center overflow-hidden cursor-pointer"
      href={project.projectUrl}
      target="_blank"
      style={{ backgroundImage: `url(${project.url})` }}
    >
      {/* <div className="absolute inset-0 bg-transparent z-22"></div> */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>
      <div className="relative h-full w-full z-2 flex flex-col justify-center items-center gap-4">
        <div className="px-4 py-1 bg-[#D0FF71] text-[#303030] rounded-3xl font-[paraFont] text-sm mb-1">
          {project.type}
        </div>
        <h2 className="text-4xl md:text-6xl leading-none font-bold font-[mainFont] tracking-normal px-4 text-center">
          {project.title}
        </h2>
        <p className="text-sm md:text-md tracking-wide font-[paraFont] text-center w-[90%] md:w-1/2">
          {project.description}
        </p>
        <div className="flex gap-3 mt-1.5 w-[90%] md:w-1/2 flex-wrap justify-center">
          {project.techItems.map((item, i) => (
            <div
              key={i}
              className="border-2 px-4 pt-1 pb-1.5 border-[#D0FF71] text-[#D0FF71] font-semibold bg-black/25 rounded-3xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;