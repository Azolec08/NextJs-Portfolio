import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { IconTypes } from "../types";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contacts" },
];

export const testimonials = [
  {
    position: "Volunteer FrontEnd Developer",
    quote:
      "Developed responsive and user-friendly web applications using React.js and Next.js framework, along with HTML, CSS, and JavaScript..",
  },
  {
    position: "Volunteer FrontEnd Developer",
    quote:
      "Collaborated with cross-functional teams to implement new features andenhancements, ensuring high-quality code and seamless user experience.",
  },
  {
    position: "Volunteer FrontEnd Developer",
    quote:
      " Participated in code reviews and contributed to the improvement of coding standards and best practices..",
  },
  {
    position: "Volunteer FrontEnd Developer",
    quote:
      " Actively engaged in problem-solving and troubleshooting to resolve technical issues and optimize performance",
  },
  {
    position: "Volunteer FrontEnd Developer",
    quote:
      " Stayed updated with the latest trends and advancements in React.js and Next.js development, continuously enhancing skills and knowledge",
  },
];

export const projects = [
  {
    id: 1,
    title: "Project BeanScent",
    description: "Ecomerse Company Project Website",
    href: "https://dev-project-beanscent.vercel.app",
    img: "/bean-scent.jpg",
  },
  {
    id: 2,
    title: "Todolist App",
    description: "Todolist Self Project",
    href: "https://todo-app-react-53ad3.web.app",
    img: "/todolist.jpg",
  },
  {
    id: 3,
    title: "Shopping Website",
    description: "Nike static Website Self Project",
    href: "https://nikewebsite-a2e83.firebaseapp.com",
    img: "/nike.jpg",
  },
  {
    id: 4,
    title: "Shopping Website",
    description: "Ecomerse Static Website Self Project",
    href: "https://ukayshopping-de847.firebaseapp.com",
    img: "/ukay.jpg",
  },
  {
    id: 5,
    title: "Anime Music Website",
    description: "Anime Static Website Self Project",
    href: "https://anime-web-2cfe1.firebaseapp.com",
    img: "/anime.jpg",
  },
  {
    id: 6,
    title: "Admin NextJs Website",
    description: "Admin Website Self Project",
    href: "https://next-admin-dun.vercel.app",
    img: "/next-admin.jpg",
  },
];

export const socialMedia: IconTypes[] = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/Azolec08",
  },
  {
    id: 2,
    icon: <FaFacebook />,
    link: "https://web.facebook.com/markangelo.celozaiii",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    link: "https://github.com/Azolec08",
  },
];
