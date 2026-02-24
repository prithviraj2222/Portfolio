import React from "react";
import myPhoto from "../../images/qrxY8NagVO40NBrdhFEGgFR3PYY.avif";

function HeroCard() {
  return (
    <div className="relative">
      <div
        className="
        w-[200px] h-[280px]
        md:w-[260px] md:h-[360px]
        lg:w-[340px] lg:h-[470px]
        rounded-3xl overflow-hidden
      "
      >
        <img className="object-cover h-full w-full" src={myPhoto} />
      </div>

      <div
        className="
        absolute flex justify-center items-center
       bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] rounded-full font-semibold font-[paraFont]
        w-15 h-15 text-xl bottom-7 -left-7
        md:w-20 md:h-20 md:text-2xl md:-bottom-8   md:-left-10
        lg:w-30 lg:h-30 lg:text-[40px] lg:-bottom-15 lg:-left-15
      "
      >
        Hi
      </div>
    </div>
  );
}

export default HeroCard;
