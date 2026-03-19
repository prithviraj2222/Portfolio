import React, { useState, forwardRef } from "react";
import SkillOption from "../Skills/SkillOption";
import { skillsData } from "../../data/skillsData";

const Skills = forwardRef((props, ref) => {
  const [open, setOpen] = useState(null);

  return (
    <div ref={ref} className="min-h-[50vh] lg:min-h-auto w-full max-w-[1200px] px-6 md:px-10 flex items-start py-20 lg:py-0">
      <div className="h-full w-full lg:w-1/2 flex items-center text-[#303030] dark:text-white">
        <div className="h-full w-full flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-6xl leading-none font-bold font-[mainFont] tracking-tight">
            TECH STACK
          </h2>
          <p className="text-xl tracking-wide font-[paraFont] mb-8">
            Technologies and tools I work with.
          </p>
          <div className="">
            {skillsData.map((skill, idx) => (
              <SkillOption
                key={idx}
                skill={skill}
                open={open}
                setOpen={setOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
})

export default Skills;
