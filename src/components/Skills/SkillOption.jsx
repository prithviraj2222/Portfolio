import { useContext } from "react";
import CursorContext from "../../context/cursor/cursorContext";

export default function SkillOption({ skill, open, setOpen }) {
  const isOpen = open === skill.id;
  const { setCursor } = useContext(CursorContext);

  return (
    <>
      <div
        onMouseEnter={() => setCursor({ type: "expand", image: skill.image, id: skill.id })}
        onMouseLeave={() => setCursor("default")}
        key={skill.id}
        className={`border-b py-6 
            ${isOpen ? "border-[#5E67E6] dark:border-[#D0FF71]" : "border-[#DADADA] dark:border-[#5c5c5c]"}`}
      >
        <div
          onClick={() => setOpen(isOpen ? null : skill.id)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3
            className={`text-2xl md:text-4xl font-[mainFont] tracking-normal ${
              isOpen
                ? "text-[#5E67E6] dark:text-[#D0FF71]"
                : "text-[#303030] dark:text-white"
            }`}
          >
            {skill.id}. {skill.title}
          </h3>

          <div
            className={`text-2xl transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>

        {isOpen && skill.items && (
          <ul className="mt-6 space-y-4 text-[#303030] dark:text-white">
            {skill.items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <i className="text-[#5E67E6] dark:text-[#D0FF71] text-lg mt-1 fa-regular fa-circle-check"></i>
                <p className="text-lg tracking-wide font-[paraFont]">{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
