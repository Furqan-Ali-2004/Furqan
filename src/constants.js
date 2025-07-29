// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import renderLogo from "./assets/tech_logo/render.png";
import socketLogo from "./assets/tech_logo/socketio.png";
import daisyuiLogo from "./assets/tech_logo/daisyui.png";
import ejsLogo from "./assets/tech_logo/ejs.png";
import hoppscotch from "./assets/tech_logo/hoppscotch.png";

// Experience Section Logo's
import chatLogo from "./assets/company_logo/chat-icon.png";
import wanderlustLogo from "./assets/company_logo/compass-icon.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import chattyImage from "./assets/work_logo/chatty_image.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Ejs", logo: ejsLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "JavaScript", logo: javascriptLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Compass", logo: mongodbLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
      { name: "Socket.io", logo: socketLogo },
      { name: "DaisyUi", logo: daisyuiLogo },
      { name: "Hoppscotch", logo: hoppscotch },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: chatLogo,
    role: "Chatty",
    desc: "Developed a scalable full-stack chat application using React.js, Express.js, MongoDB, Socket.io, and DaisyUI. Worked across the entire stack in a fast-paced, iterative environment—gaining practical experience in real-time messaging, backend debugging, and responsive UI performance optimization.",
    skills: [
      "CSS",
      "JavaScript",
      "Express Js",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Socket.io",
      "Daisy UI",
    ],
  },
  {
    id: 1,
    img: wanderlustLogo,
    role: "Wanderlust",
    desc: "Developed a secure travel gallery web app using Express.js, EJS templates, and MongoDB. Implemented user authentication and authorization, built dynamic routes, and designed scalable database schemas to handle image-based content efficiently",
    skills: ["Node JS", "Express JS", "JavaScript", "EJS", "CSS"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Sept 2022 - July 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "Wanderlust",
    description:
      "This is a web app where users can sign up or log in to create their own travel listings. Each listing includes a title, description, price, country, location, category, and an uploaded image. Proper authentication and authorization are implemented, so only registered users can create listings. Other users can view listings and leave reviews, but can't edit or delete them. You’ll find listings neatly organized by different categories.",
    image: githubdetLogo,
    tags: ["EJS", "CSS", "JavaScript", "Express JS", "Node JS", "Mapbox API"],
    github: "https://github.com/Furqan-Ali-2004/WanderLust",
    webapp: "https://wanderlust-spro.onrender.com",
  },
  {
    id: 1,
    title: "Chatty",
    description:
      "ChatVerse is a full-stack real-time messaging application where users can register, log in, and chat instantly with others. Built using Socket.io, it ensures messages are delivered without delay. User authentication is fully implemented for secure access. The chat interface is crafted with DaisyUI — it’s responsive, sleek, and includes 30 customizable themes, allowing users to personalize their experience to match their vibe. The backend is powered by MongoDB and Express.js, designed for speed and scalability.",
    image: chattyImage,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "Daisy UI",
      "Socket io",
    ],
    github: "https://github.com/Furqan-Ali-2004/FullStack-Chat-App",
    webapp: "https://fullstack-chat-app-3n3c.onrender.com",
  },
];
