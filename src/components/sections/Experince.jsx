import React, { forwardRef } from "react";
import ExperinceOption from "../experince/ExperinceOption";

const Experince = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-[50vh] lg:min-h-screen w-full max-w-[1200px] px-6 md:px-10 flex items-center py-20 lg:py-0">
      <div className="h-full w-full lg:w-1/2 flex flex-col justify-center text-white">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-6xl leading-none font-bold font-[mainFont] tracking-tight">
            WORK EXPERIENCE
          </h2>
          <p className="text-xl tracking-wide font-[paraFont] mb-12">
            Where I've applied my skills professionally.
          </p>
        </div>
        <ExperinceOption />
      </div>
    </div>
  );
});

export default Experince;
