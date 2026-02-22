import React, { useRef } from "react";
import myPhoto from "../../images/qrxY8NagVO40NBrdhFEGgFR3PYY.avif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  const card = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(card.current, {
        transformPerspective: 1000,
        transformOrigin: "center center",
        rotateX: -90,
        scale: 0,
      });

      gsap.to(card.current, {
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => mm.revert();
  });
  return (
    <div className="min-h-[50vh] lg:min-h-screen w-full max-w-[1200px] flex flex-col justify-center text-white py-20 lg:py-30">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
        <div className="w-full lg:w-1/2 px-6 md:px-10 pt-2">
          <div className="w-full flex flex-col justify-center gap-10">
            <h2 className="text-6xl md:text-8xl lg:text-9xl leading-none font-bold font-[mainFont] tracking-tight">
              ABOUT ME
            </h2>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-3xl font font-[mainFont] tracking-normal ">
                PRITHVIRAJ
              </h3>
              <p className="text-xl tracking-wide font-[paraFont]">
                I’m a web developer and a Bachelor of Computer Applications
                (BCA) student who enjoys building modern and responsive web
                applications. I love turning ideas into real digital experiences
                using clean and efficient code.
              </p>
              <p className="text-xl tracking-wide font-[paraFont] mb-12">
                I’m always learning new technologies, improving my skills, and
                building projects to grow as a developer and gain real-world
                experience in web development.{" "}
              </p>
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex gap-2">
              <a
                href="https://x.com/sprithviraj974"
                target="_blank"
                className="font-[mainFont1]"
              >
                <i className="text-3xl fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://github.com/prithviraj2222"
                target="_blank"
                className="font-[mainFont1]"
              >
                <i className="text-3xl fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/prithviraj-solanki/"
                target="_blank"
                className="font-[mainFont1]"
              >
                <i className="text-3xl fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-1/2 flex justify-center px-6 md:px-10">
          <div
            ref={card}
            className="h-full w-full max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden"
          >
            <img className="object-cover h-full" src={myPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
