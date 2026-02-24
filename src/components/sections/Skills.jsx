import React, { useState, forwardRef } from "react";
import SkillOption from "../Skills/SkillOption";

const Skills = forwardRef((props, ref) => {
  const [open, setOpen] = useState(null);

  const data = [
    {
      id: 1,
      title: "FRONTEND",
      items: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      id: 2,
      title: "BACKEND",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      id: 3,
      title: "SOFT SKILLS",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Time Management",
        "Debugging",
      ],
    },
    {
      id: 4,
      title: "TOOLS",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

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
          <div className="space-y-6">
            {data.map((skill, idx) => (
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
