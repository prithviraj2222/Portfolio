import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import gsap from "gsap";
import { useContext, useRef, useEffect } from "react";
import CursorContext from "./context/cursor/cursorContext";
import ScrollToTop from "./ScrollToTop";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { cursor: cursorChange } = useContext(CursorContext);
  const prevCursor = useRef(null);

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
      } else if (cursorChange?.type === "expand") {
        const comingFromBelow =
          prevCursor.current !== null && prevCursor.current < cursorChange.id;

        const oldImg = cursor.current.querySelector("img");

        // old image scroll
        if (oldImg) {
          gsap.to(oldImg, {
            y: comingFromBelow ? "-100%" : "100%",
            duration: 0.3,
            ease: "power3.in",
          });
        }

        // create new image
        const newImg = document.createElement("img");
        newImg.src = cursorChange.image;
        newImg.style.cssText =
          "width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0;";
        newImg.style.transform = `translateY(${comingFromBelow ? "100%" : "-100%"})`;
        cursor.current.appendChild(newImg);

        // new image coming
        gsap.to(newImg, {
          y: 0,
          duration: 0.3,
          ease: "power3.out",
          onComplete: () => {
            if (oldImg) oldImg.remove();
          },
        });

        gsap.to(cursor.current, {
          width: 190,
          height: 110,
          borderRadius: 6,
          rotate: 6,
          marginLeft: 20,
          marginTop: -40,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        });

        prevCursor.current = cursorChange.id;
      } else {
        cursor.current.innerHTML = ``;
        gsap.to(cursor.current, {
          width: 16,
          height: 16,
          borderRadius: "50%",
          rotate: 0,
          marginLeft: 18,
          marginTop: 12,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        });
      }
    });
  }, [cursorChange]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      lerp: 0.06,
      wheelMultiplier: 0.9,
      smoothTouch: false,
    });

    window.lenis = lenis;

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

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
            className={`h-4 w-4 z-21 overflow-hidden text-white dark:text-[#303030] bg-[#5E67E6] dark:bg-[#D0FF71] fixed rounded-[50%] opacity-0 flex justify-center items-center pointer-events-none`}
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
