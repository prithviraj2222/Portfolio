import { useContext, useRef, useEffect, useState } from "react";
import img1 from "../../images/qrxY8NagVO40NBrdhFEGgFR3PYY.avif";
import { useLocation, useNavigate, Link } from "react-router-dom";
import CursorContext from "../../context/cursor/cursorContext";
import gsap from "gsap";
import ContactContext from "../../context/contact/contactContext";

function Navbar() {
  const nav = useRef();
  const [open, setOpen] = useState(false);
  const { cursor: cursorChange } = useContext(CursorContext);
  const { contactRef } = useContext(ContactContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleContact = () => {
    if (location.pathname === "/") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  useEffect(() => {
    if (cursorChange === "big") {
      gsap.to(nav.current, {
        zIndex: 25,
      });
    } else {
      gsap.to(nav.current, {
        zIndex: 20,
      });
    }
  }, [cursorChange]);

  return (
    <div ref={nav} className="w-screen fixed flex justify-center top-4.5 z-20">
      <div
        className={`bg-white/90 backdrop-blur-xs border border-[#DADADA] dark:border-none dark:bg-[#111111]/90 
  text-[#303030] dark:text-white p-2.5 rounded-4xl transition-all duration-500
  ${open ? "w-[48%]" : "w-[45%]"} lg:w-lg`}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img src={img1} alt="" />
            </div>
            <p
              className={`text-sm font-[paraFont] transition-all duration-500 ${open ? "hidden" : ""} lg:hidden`}
            >
              Available for work <span className="text-green-500">●</span>
            </p>
          </div>
          <div className="hidden lg:flex w-[83%] gap-4 items-center justify-between">
            <div className="flex gap-4 items-center text-md font-[paraFont]">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <p className="cursor-pointer" onClick={handleContact}>Contact</p>
            </div>
            <a href="/Resume.pdf" download  className="bg-[#303030] dark:bg-white text-white dark:text-[#303030] px-7 py-1.5 font-[paraFont] rounded-4xl text-lg">
              Resume
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] text-lg rounded-full flex items-center justify-center pt-0.5"
          >
            {open ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-80 mt-4" : "max-h-0 max-w-0"
          }`}
        >
          <div className="flex flex-col gap-8 font-[paraFont] text-center py-3">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
              <p className="cursor-pointer" onClick={handleContact}>Contact</p>

            <div>
              <a href="/Resume.pdf" download className="bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] px-7 py-1.5 rounded-4xl text-lg cursor-pointer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
