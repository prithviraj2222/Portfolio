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
      <span className="absolute top-4 left-4 px-4 py-1 bg-[#D0FF71] text-[#303030] rounded-3xl font-[paraFont] text-sm">
        Full Stack
      </span>
      <div className="flex flex-col gap-5">
        <div>
          <button className="border-2 px-4 pt-1 pb-1.5 border-[#D0FF71] text-[#D0FF71] font-semibold bg-black/25 rounded-3xl">
            ok
          </button>
        </div>
        <h3 className="text-2xl md:text-4xl font-[mainFont] tracking-normal text-white">
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
