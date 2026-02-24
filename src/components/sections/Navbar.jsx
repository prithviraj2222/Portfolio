import { useContext, useRef, useEffect } from "react";
import img1 from "../../images/qrxY8NagVO40NBrdhFEGgFR3PYY.avif";
import { Link } from "react-router-dom";
import CursorContext from "../../context/cursor/cursorContext";
import gsap from "gsap";

function Navbar() {
  const nav = useRef()
  const { cursor: cursorChange } = useContext(CursorContext);

  useEffect(() => {
    if (cursorChange === "big") {
      gsap.to(nav.current, {
        zIndex: 25
      });
    } else {
      gsap.to(nav.current, {
        zIndex: 20
      });
    }
  }, [cursorChange]);

  return (
    <div ref={nav} className="w-screen fixed flex justify-center top-4.5 z-20">
      <div className="bg-white border border-[#DADADA] dark:border-none dark:bg-[#1a1a1bf4] text-[#303030] dark:text-white w-lg p-2 rounded-4xl flex items-center justify-between">
        <div className="h-10 w-10 rounded-[50%] overflow-hidden">
          <img src={img1} alt="" />
        </div>
        <div className="w-[83%] flex gap-4 items-center justify-between">
          <div className="flex gap-4 items-center text-md font-[paraFont]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <p>Contact</p>
          </div>
          <button className="bg-[#303030] dark:bg-white text-white dark:text-[#303030] px-7 py-1.5 font-[paraFont] rounded-4xl text-lg">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
