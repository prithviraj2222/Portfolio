// import React, { useRef } from "react";
// import HeroCard from "../hero/HeroCard";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Hero({ skillsRef, experinceRef }) {
//   const card = useRef();
//   const left = useRef();
//   const right = useRef();
//   const heroSection = useRef();

//   useGSAP(() => {
//     const mm = gsap.matchMedia();
//     const tl = gsap.timeline();

//     mm.add("(min-width: 1024px)", () => {
//       gsap.set(card.current, {
//         xPercent: -50,
//         yPercent: -50,
//         transformPerspective: 1000,
//         transformOrigin: "center center",
//         rotateX: -180,
//         scale: 0,
//       });

//       gsap.set(left.current, {
//         x: 200,
//         opacity: 0,
//         zIndex: 10,
//       });

//       gsap.set(right.current, {
//         x: -200,
//         opacity: 0,
//         zIndex: 10,
//       });

//       tl.to(card.current, {
//         rotateX: 0,
//         scale: 1,
//         duration: 0.5,
//         ease: "power1.out",
//       })

//         .to(left.current, {
//           x: 0,
//           opacity: 1,
//           duration: 0.6,
//           ease: "power2.out",
//           zIndex: 0,
//         })

//         .to(
//           right.current,
//           {
//             x: 0,
//             opacity: 1,
//             duration: 0.6,
//             ease: "power2.out",
//             zIndex: 0,
//           },
//           "<",
//         );
//     });

//     return () => mm.revert();
//   });

//   useGSAP(() => {
//     const mm = gsap.matchMedia();

//     const setupScroll = () => {
//       if (!skillsRef.current || !experinceRef.current) {
//         requestAnimationFrame(setupScroll);
//         return;
//       }

//       mm.add("(min-width: 1024px)", () => {
//         gsap.to(card.current, {
//           x: "25vw",
//           rotateY: 180,
//           rotateZ: 4,
//           immediateRender: false,

//           scrollTrigger: {
//             trigger: heroSection.current,
//             start: "top top",
//             endTrigger: skillsRef.current,
//             end: "center center",
//             scrub: 2,
//             markers: true,
//           },
//         });

//         gsap.fromTo(
//           card.current,

//           {
//             x: "25vw",
//             rotateY: 180,
//             rotateZ: 4,
//           },

//           {
//             rotateY: 360,
//             immediateRender: false,

//             scrollTrigger: {
//               trigger: skillsRef.current,
//               start: "52% center",
//               endTrigger: experinceRef.current,
//               end: "center center",
//               scrub: 2,
//               markers: true,

//               onLeave: () => {
//                 const rect = card.current.getBoundingClientRect();

//                 const centerX = rect.width + 56;
//                 const centerY = rect.top + rect.height / 2;

//                 document.body.appendChild(card.current);

//                 gsap.set(card.current, {
//                   position: "absolute",

//                   right: centerX + window.scrollX,
//                   top: centerY + window.scrollY,

//                   xPercent: -50,
//                   yPercent: -50,
//                 });
//               },

//               onEnterBack: () => {
//                 heroSection.current.appendChild(card.current); // wapas original parent

//                 gsap.set(card.current, {
//                   position: "fixed",
//                   top: "50%",
//                   left: "50%",
//                   xPercent: -50,
//                   yPercent: -50,
//                 });
//               },
//             },
//           },
//         );
//       });
//     };

//     setupScroll();

//     return () => mm.revert();
//   });

//   return (
//     <div
//       ref={heroSection}
//       className="relative min-h-[90%] lg:min-h-screen w-full flex justify-center items-center text-white flex-wrap lg:flex-nowrap gap-4 md:gap-0 lg:gap-0 p-16 lg:p-0"
//     >
//       <div
//         ref={left}
//         className="h-full w-full flex items-center justify-center md:justify-start lg:justify-end pt-8 md:pt-0 lg:pt-0"
//       >
//         <div className="relative flex flex-col justify-center items-center md:items-start lg:items-start">
//           <h3 className="md:absolute lg:absolute -top-10 text-2xl md:text-3xl lg:text-4xl font font-[mainFont] tracking-normal">
//             PRITHVIRAJ
//           </h3>
//           <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none font-bold font-[mainFont] tracking-tighter">
//             WEB
//           </h1>
//         </div>
//       </div>
//       {/* <div
//         ref={card}
//         className="h-full w-[65%] flex justify-center items-center"
//       >
//         <div className="lg:fixed">
//           <HeroCard />
//         </div>
//       </div> */}
//       <div className="relative h-full w-[65%] flex justify-center items-center">
//         <div ref={card} className="lg:fixed lg:top-1/2 lg:left-1/2">
//           <HeroCard />
//         </div>
//       </div>
//       <div
//         ref={right}
//         className="h-full w-full flex items-center justify-center md:justify-end lg:justify-start"
//       >
//         <div className="relative flex flex-col justify-center items-center md:items-end lg:items-end">
//           <h1 className="text-6xl md:text-8xl lg:text-9xl leading-22 md:leading-28 font-bold font-[mainFont] tracking-tight lg:leading-42">
//             DEVELOPER
//           </h1>
//           <p className="md:absolute lg:absolute -bottom-15 text-sm md:text-lg lg:text-lg text-center md:text-end lg:text-end tracking-wide font-[subMainFont]">
//             I'm a US-based digital designer and <br /> Framer developer
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useRef } from "react";
import HeroCard from "../hero/HeroCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero({ skillsRef, experinceRef }) {
  const card = useRef();
  const left = useRef();
  const right = useRef();
  const heroSection = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(card.current, {
        rotateX: -180,
        scale: 0,
        transformPerspective: 1000,
        transformOrigin: "center center",
      });

      gsap.set(left.current, { x: 200, opacity: 0 });
      gsap.set(right.current, { x: -200, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(card.current, {
        rotateX: 0,
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
      })
        .to(left.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(
          right.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<",
        );
    });

    return () => mm.revert();
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();

    const setupScroll = () => {
      if (!skillsRef.current || !experinceRef.current) {
        requestAnimationFrame(setupScroll);
        return;
      }

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: heroSection.current,
          start: "top top",
          endTrigger: skillsRef.current,
          end: "center center",
          scrub: 0.5,
          onUpdate: (self) => {
            gsap.set(card.current, {
              xPercent: -50 + self.progress * 120,
              yPercent: -50,
              rotateY: self.progress * 180,
              rotateZ: self.progress * 4,
            });
          },
        });

        ScrollTrigger.create({
          trigger: skillsRef.current,
          start: "52% center",
          endTrigger: experinceRef.current,
          end: "center center",
          scrub: 0.5,
          onUpdate: (self) => {
            gsap.set(card.current, {
              xPercent: 70,
              yPercent: -50,
              rotateY: 180 + self.progress * 180,
              rotateZ: 4,
            });
          },

          onLeave: () => {
            const cardEl = card.current;
            const rect = cardEl.getBoundingClientRect();

            const top = rect.top + window.scrollY;
            const left = rect.left + window.scrollX;

            document.body.appendChild(cardEl);

            gsap.set(cardEl, {
              position: "absolute",
              top: top,
              left: left,
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotateY: 360,
              rotateZ: 4,
            });
          },

          onEnterBack: () => {
            const cardEl = card.current;

            document.querySelector(".card-fixed-wrapper").appendChild(cardEl);

            gsap.set(cardEl, {
              position: "fixed",
              top: "50%",
              left: "50%",
              xPercent: 70,
              yPercent: -50,
              rotateY: 360,
              rotateZ: 4,
            });
          },
        });
      });
    };

    setupScroll();

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());

      if (!card.current) return;

      const wrapper = document.querySelector(".card-fixed-wrapper");
      if (wrapper && card.current.parentElement !== wrapper) {
        wrapper.appendChild(card.current);
        gsap.set(card.current, { clearProps: "all" });
      }
    };
  });

  return (
    <div
      ref={heroSection}
      className="relative min-h-[90%] lg:min-h-screen w-full flex justify-center items-center text-[#303030] dark:text-white flex-wrap lg:flex-nowrap gap-4 md:gap-0 lg:gap-0 p-16 lg:p-0"
    >
      {/* for animation only */}
      <div className="card-fixed-wrapper hidden lg:block fixed inset-0 pointer-events-none">
        <div
          ref={card}
          className="fixed top-1/2 left-1/2 pointer-events-auto -translate-x-1/2 -translate-y-1/2"
          style={{ transformPerspective: "1000px" }}
        >
          <HeroCard />
        </div>
      </div>

      <div
        ref={left}
        className="h-full w-full flex items-center justify-center md:justify-start lg:justify-end pt-8 md:pt-0 lg:pt-0"
      >
        <div className="relative flex flex-col justify-center items-center md:items-start lg:items-start">
          <h3 className="md:absolute lg:absolute -top-10 text-2xl md:text-3xl lg:text-4xl font-[mainFont] tracking-normal">
            PRITHVIRAJ
          </h3>
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none font-bold font-[mainFont] tracking-tighter">
            WEB
          </h1>
        </div>
      </div>

      {/* for other devices */}
      <div className="relative h-full w-[65%] flex justify-center items-center lg:invisible">
        <HeroCard />
      </div>

      <div
        ref={right}
        className="h-full w-full flex items-center justify-center md:justify-end lg:justify-start"
      >
        <div className="relative flex flex-col justify-center items-center md:items-end lg:items-end">
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-22 md:leading-28 font-bold font-[mainFont] tracking-tight lg:leading-42">
            DEVELOPER
          </h1>
          <p className="md:absolute lg:absolute -bottom-15 text-sm md:text-lg lg:text-lg text-center md:text-end lg:text-end tracking-wide font-[subMainFont]">
            I'm a US-based digital designer and <br /> Framer developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
