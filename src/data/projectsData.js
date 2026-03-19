import ads from "../images/ads.avif";
import spotify from "../images/spotify.jpg";
import ecopulse from "../images/ecopulse.jpg"; 
import hostel from "../images/hostel.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Admin Dashboard System",
    type: "Full Stack",
    description:
      "An Admin Dashboard that allows admin to manage users and view system data from a single panel. It also includes features like filtering, analytics, and report generation.",
    url: ads,
    projectUrl: "https://admindashboardsystem.netlify.app/",
    techItems: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Recharts",
      "ExcelJS",
    ],
  },
  {
    id: 2,
    title: "Spotify Clone",
    type: "Frontend",
    description:
      "Responsive music web app with interactive UI and music controls. Uses local storage for song management.",
    url: spotify,
    projectUrl: "https://prithviraj2222.github.io/spotify-clone2/",
    techItems: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "EcoPulse",
    type: "Full Stack",
    description:
      "Environmental awareness full-stack app featuring a carbon footprint calculator and Eco Buddy/Bully quiz.",
    url: ecopulse,
    projectUrl: "https://capable-speculoos-f21228.netlify.app/",
    techItems: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    id: 4,
    title: "Hostel Management System",
    type: "Full Stack",
    description:
      "Digitized hostel operations including student registration, fee tracking, and inventory management with REST APIs.",
    url: hostel,
    projectUrl: "https://gurukul-hostel.netlify.app/",
    techItems: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
    ],
  },
];
