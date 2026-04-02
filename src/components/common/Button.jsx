import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Button({
  children,
  variant,
  href,
  to,
  type = "button",
  className = "",
}) {
  const btnRef = useRef();
  const fillRef = useRef();

  useEffect(() => {
    const btn = btnRef.current;
    const fill = fillRef.current;

    if (variant === "secondary") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!btn || !fill) return;

      const enter = () => {
        gsap.to(fill, {
          clipPath: "circle(150% at 0% 100%)",
          duration: 0.5,
          ease: "power3.out",
        });

        const isDark = document.documentElement.classList.contains("dark");

        gsap.to(btn, {
          color: isDark ? "#303030" : "#ffffff",
          duration: 0.5,
        });
      };

      const leave = () => {
        gsap.to(fill, {
          clipPath: "circle(0% at 0% 100%)",
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(btn, {
          color: "",
          duration: 0.3,
        });
      };

      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("mouseleave", leave);

      return () => {
        btn.removeEventListener("mouseenter", enter);
        btn.removeEventListener("mouseleave", leave);
      };
    });

    return () => mm.revert();
  }, [variant]);

  const variants = {
    primary:
      "bg-[#303030] dark:bg-white text-white dark:text-[#303030] px-6.5 py-1.5 font-[paraFont] rounded-4xl text-lg relative overflow-hidden",

    secondary:
      "bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] px-7 py-2 rounded-4xl text-lg",

    outline:
      "border px-10 pt-1 pb-1.5 border-[#5E67E6] dark:border-[#D0FF71] text-[#5E67E6] dark:text-[#D0FF71] font-[mainFont] text-2xl font-semibold rounded-3xl cursor-pointer relative overflow-hidden",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      {(variant === "primary" || variant === "outline") && (
        <div
          ref={fillRef}
          className={`absolute -inset-0.5 bg-[#5E67E6] dark:bg-[#D0FF71] ${
            variant === "outline" ? "rounded-3xl" : "rounded-4xl"
          }`}
          style={{ clipPath: "circle(0% at 0% 100%)" }}
        />
      )}
    </>
  );

  const finalClass = `${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link ref={btnRef} to={to} className={finalClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={btnRef} href={href} target="_blank" className={finalClass}>
        {content}
      </a>
    );
  }

  return (
    <button ref={btnRef} type={type} className={finalClass}>
      {content}
    </button>
  );
}

export default Button;