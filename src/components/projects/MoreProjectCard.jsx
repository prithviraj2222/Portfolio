import React, { useContext } from "react";
import CursorContext from "../../context/cursor/cursorContext";
import img1 from "../../images/VRQgkdWsjawSg1qpCm45HfSY1I.avif";

function MoreProjectCard() {
  const { setCursor } = useContext(CursorContext);

  return (
    <a
      onMouseEnter={() => setCursor("big")}
      onMouseLeave={() => setCursor("default")}
      href="#"
      target="_blank"
      className="relative cursor-pointerq w-full flex flex-col gap-4"
    >
      <div className="absolute inset-0 bg-transparent z-22"></div>
      <img
        src={img1}
        className="h-60 md:h-80 w-full object-cover rounded-3xl"
      />
      <span className="absolute top-4 left-4 px-4 py-1 bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] rounded-3xl font-[paraFont] text-sm">
        Full Stack
      </span>
      <div className="flex flex-col gap-5">
        <div>
          <button className="border px-3.5 pt-0 pb-0.5 text-3.5 border-[#5E67E6] dark:border-[#D0FF71] text-[#5E67E6] dark:text-[#D0FF71] font-[paraFont] rounded-3xl">
            ok
          </button>
        </div>
        <h3 className="text-2xl md:text-4xl font-[mainFont] tracking-normal">
          JAY SHREE RAM
        </h3>
        <p className="text-sm tracking-wide font-[paraFont]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, atque
          modi esse neque qui id tempore dolor, in consequatur quaerat similique
          libero quae earum dolore rerum explicabo quibusdam est tempora.
        </p>
      </div>
    </a>
  );
}

export default MoreProjectCard;
