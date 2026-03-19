import React from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  variant,
  href,
  to,
  type = "button",
  className = "",
}) {
  const variants = {
    primary:
      "bg-[#303030] dark:bg-white text-white dark:text-[#303030] px-6.5 py-1.5 font-[paraFont] rounded-4xl text-lg",

    secondary:
      "bg-[#5E67E6] dark:bg-[#D0FF71] text-white dark:text-[#303030] px-7 py-2 rounded-4xl text-lg",

    outline:
      "border px-10 pt-1 pb-1.5 border-[#5E67E6] dark:border-[#D0FF71] text-[#5E67E6] dark:text-[#D0FF71] font-[mainFont] text-2xl font-semibold rounded-3xl cursor-pointer",
  };

  const finalClass = `${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={finalClass}>
      {children}
    </button>
  );
}

export default Button;