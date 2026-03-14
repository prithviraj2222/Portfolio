import React, { useContext } from "react";
import CursorContext from "../../context/cursor/cursorContext";
import img1 from "../../images/VRQgkdWsjawSg1qpCm45HfSY1I.avif";

function MoreProjectCard({ project }) {
  const { setCursor } = useContext(CursorContext);

  return (
    <a
      onMouseEnter={() => setCursor("big")}
      onMouseLeave={() => setCursor("default")}
      href={project.projectUrl}
      target="_blank"
      className="relative cursor-pointerq w-full flex flex-col gap-4"
    >
      <div className="absolute inset-0 bg-transparent z-22"></div>
      <img
        src={project.url}
        className="h-60 md:h-80 w-full object-cover rounded-3xl"
      />
      <span className="absolute top-4 left-4 px-4 py-1 bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] rounded-3xl font-[paraFont] text-sm">
        {project.type}
      </span>
      <div className="flex flex-col gap-5">
        <div className="">
          {project.techItems.map((item, i) => (
          <span className="border mr-2 px-3.5 py-1 text-3.5 border-[#5E67E6] dark:border-[#D0FF71] text-[#5E67E6] dark:text-[#D0FF71] font-[paraFont] rounded-3xl">
            {item}
          </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-4xl font-[mainFont] tracking-normal">
          {project.title}
        </h3>
        <p className="text-sm tracking-wide font-[paraFont]">
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default MoreProjectCard;
