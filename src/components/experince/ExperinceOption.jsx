import React from "react";
import { experinceData } from "../../data/experinceData";

function ExperinceOption() {
  return (
    <div className="">
      {experinceData.map((item, idx) => (
        <div className="" key={idx}>
          <h3
            className={`text-2xl md:text-4xl font-[mainFont] font-semibold tracking-normal mb-4`}
          >
            {item.title}
          </h3>
          <h4 className="text-lg md:text-2xl font-[mainFont1] tracking-normal">
            {item.company}
          </h4>
          <p className="text-lmd tracking-wide font-[paraFont] text-sm mb-6">
            <i className="fa-regular fa-calendar-days"></i> {item.date}
          </p>
          <div>
            <ul>
              {item.items.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <i className="text-[#5E67E6] dark:text-[#D0FF71] fa-solid fa-caret-right"></i>
                  <p className="text-lg tracking-wide font-[paraFont]">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperinceOption;
