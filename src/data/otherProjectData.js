import psychii from "../images/psychii.avif";
import ems from "../images/ems.avif";

export const otherProjectData = [
  {
    id: 1,
    title: "Psychii",
    type: "Frontend",
    description:
      "Psychii is a React + Vite web app that checks a user's thinking through a 20 question quiz based on their Profession and Relationship Status, and shows whether the mindset is positive or negative.",
    url: psychii,
    projectUrl: "https://psychii.netlify.app/",
    techItems: ["React (Vite)", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Employee Management System",
    type: "Frontend",
    description:
      "Employee Management System is a React-based web application where Admin and Employees can log in with different roles. The Admin assigns tasks to employees, employees can update task status (completed or failed), and the data is managed using Local Storage.",
    url: ems,
    projectUrl: "https://emsystemm.netlify.app/",
    techItems: ["React (Vite)", "Tailwind CSS", "Local Storage"],
  },
];
