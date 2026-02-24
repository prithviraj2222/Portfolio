import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import gsap from "gsap";
import { useContext, useRef, useEffect } from "react";
import CursorContext from "./context/cursor/cursorContext";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { cursor: cursorChange } = useContext(CursorContext);

  const cursor = useRef();
  const cursorMove = (e) => {
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      gsap.to(cursor.current, {
        x: e.nativeEvent.x,
        y: e.nativeEvent.y,
        duration: 0.4,
        opacity: 1,
      });
    });
  };

  const cursorHide = () => {
    gsap.to(cursor.current, {
      duration: 0.4,
      opacity: 0,
    });
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (cursorChange === "big") {
        cursor.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
        gsap.to(cursor.current, {
          scale: 4,
          marginLeft: 50,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        cursor.current.innerHTML = ``;
        gsap.to(cursor.current, {
          scale: 1,
          marginLeft: 18,
          marginTop: 12,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });
  }, [cursorChange]);

  return (
    <div
      onMouseMove={cursorMove}
      onMouseLeave={cursorHide}
      className="w-full relative bg-white dark:bg-black min-h-screen"
    >
      <div className="relative">
        <svg className="hidden dark:block fixed inset-0 w-full h-full opacity-40 pointer-events-none z-0">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68" // smaller value = bigger grain
              numOctaves="5" // smoother large grain
              stitchTiles="stitch"
              seed="5"
            >
              <animate
                attributeName="seed"
                from="1"
                to="60"
                dur="6s" // slower animation
                repeatCount="indefinite"
              />
            </feTurbulence>
          </filter>

          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <div className="relative z-10">
          <div
            ref={cursor}
            className={`h-4 w-4 z-21 text-white dark:text-[#303030] bg-[#5E67E6] dark:bg-[#D0FF71] fixed rounded-[50%] opacity-0 flex justify-center items-center pointer-events-none`}
          ></div>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
